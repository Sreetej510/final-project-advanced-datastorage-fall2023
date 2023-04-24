import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";

export default function Orders(props) {
    const { searchUrl } = props
    const [rows, setData] = useState([])
    const columns = [
        {
            id: 'name', headerName: 'Name', width: 100, format: (row) =>
                `${row.first_name || ''} ${row.last_name || ''}`,
        },
        { id: 'order_id', headerName: 'Order ID', width: 70 },
        { id: 'order_date', headerName: 'Date', width: 150, format: (row) => row && new Date(row.order_date).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" }) },
        { id: 'quantity', headerName: 'Quantity', width: 70 },
        { id: 'product_name', headerName: 'Products', width: 100 },
        { id: 'price', headerName: 'Price', width: 50 },
        { id: 'total_price', headerName: 'Order Price', width: 50 }
    ];

    useEffect(() => {
        if (searchUrl == '') {
            return
        }
        axios.get(searchUrl).then(res => {
            setData(res.data);
        })
    }, [searchUrl])

    return (
        <div style={{ width: 'fit-content' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ top: 0, minWidth: column.width }}
                                >
                                    {column.headerName}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.product_name+row.order_id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format
                                                        ? column.format(row)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}