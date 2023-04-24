import React, { useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PredefinedCurd from "./PredefinedCurd";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === '#fff',
    padding: theme.spacing(2),
    fontFamily: 'sans-serif',
    fontWeight: 400,
    color: theme.palette.text.secondary,
    marginBottom: '10px'
}));


export default function CURD() {

    const [data, setData] = useState('DB data')
    const [body, setBody] = useState('')
    const [finalBody, setFinalBody] = useState('')

    const searchApi = (e) => {
        e?.preventDefault()
        if (body == '') {
            return
        }
        axios.post('/api/execute', { curd: body }, {
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => { setData(JSON.stringify(response.data, null, 6)) })
            .catch(error => console.log(error));
        setFinalBody(body)
    }

    const valueChange = (e) => {
        setBody(e.target.value)
    }

    const Predefs = [
        {
            title: "Get Customers Order by number 123-456-7890",
            command: `    SELECT o.order_id, o.order_date, o.total_price, c.last_name, c.first_name,
        od.quantity, p.product_name, p.price
    FROM Orders o
    JOIN Customers c ON o.customer_id = c.customer_id
    JOIN Order_Items od ON o.order_id = od.order_id
    JOIN Products p ON od.product_id = p.product_id
    WHERE c.phone_number = "123-456-7890"`
        }, {
            title: "Add New Customer",
            command: `    INSERT INTO Customers (first_name, last_name, email, phone_number) 
    VALUES ('John', 'Doe', 'johndoe@gmail.com', '555-123-4567')`
        },
        {
            title: "Update Product Price",
            command: `UPDATE Products SET price = 49.99 WHERE product_name = 'Nike Air Max'`
        },
        {
            title: "Delete Customer",
            command: `DELETE FROM Customers WHERE customer_id = 3`
        },
        {
            title: "Get Orders between '2022-04-01' and '2022-04-03'",
            command: `    SELECT * FROM Orders
    WHERE order_date BETWEEN '2022-04-01' AND '2022-04-03'`
        },
        {
            title:"Get total sales by year",
            command:`    SELECT YEAR(order_date) AS year, SUM(total_price) AS total_sales
    FROM Orders
    GROUP BY YEAR(order_date)`
        }
    ]

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Item>
                        <form onSubmit={searchApi}>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                label="CURD command"
                                rows={10}
                                fullWidth
                                value={body}
                                onChange={valueChange}
                            />
                            <Button type='submit' style={{ marginTop: "10px", height: "40px", alignSelf: "center", width: "100%" }} variant="contained">Search</Button>
                        </form>
                    </Item>
                    <br />
                    <h3>Predefined Curds</h3>
                    {Predefs.map(({ title, command }) => (
                        <PredefinedCurd title={title} command={command} setFinalBody={setFinalBody} setData={setData} />
                    ))}
                </Grid>
                <Grid item xs={5}>
                    <Item elevation={3}>
                        <div><h3>
                            CURD call:
                        </h3>
                            <pre style={{ marginLeft: '20px', fontFamily: 'sans-serif' }}>{finalBody}</pre>
                        </div>
                        <hr />
                        <div><h3>
                            Query Response:
                        </h3>
                            <pre style={{ marginLeft: '40px', fontFamily: 'sans-serif' }}>{data}</pre>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};