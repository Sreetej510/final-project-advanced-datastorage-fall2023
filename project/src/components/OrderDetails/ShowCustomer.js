import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";

export default function ShowCustomer() {
    const [rows, setData] = useState([])
    const columns = [
        { id: 'name', headerName: 'Full Name', width: 100, format: (row) => `${row.first_name || ''} ${row.last_name || ''}` },
        { id: 'first_name', headerName: 'First Name', width: 70 },
        { id: 'last_name', headerName: 'Last Name', width: 70 },
        { id: 'email_address', headerName: 'Email', width: 100 },
        { id: 'phone_number', headerName: 'Mobile', width: 100 },
    ];

    useEffect(() => {
        axios.get('/api/customers').then(res => {
            setData(res.data);
        })
    }, [])

    return (
        <div style={{ width: 'fit-content' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                Customer Info Table
                <Table stickyHeader aria-label="Customer Info">
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
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.product_name + row.order_id}>
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