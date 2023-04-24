import React from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function PredefinedCurd(props) {

    const {title,command, setFinalBody ,setData} = props

    const classes = useStyles();

    const search = e => {
        searchApi()
        setFinalBody(command)
    }
    const searchApi = () => {
        axios.post('/api/execute', { curd: command }, {
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => { setData(JSON.stringify(response.data, null, 6)) })
            .catch(error => console.log(error));
    }

    return (
        <div className={classes.root} style={{margin:"10px 0"}}>
            <Accordion elevation={3}>
                <AccordionSummary
                    style={{height:"60px"}}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h5 className={classes.heading}>{title}</h5>
                </AccordionSummary>
                <AccordionDetails style={{display:"flex", flexDirection:"row"}}>
                    <pre style={{width:'84%', overflowX:'scroll'}}>
                        {command}
                    </pre>
                    <Button style={{ marginLeft: "10px", height: "30px", alignSelf: "center", width:"16%" }} variant="contained" onClick={search}>Search</Button>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
