// src/GridTable.js
import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SimpleCard from './SimpleCard';

const data = [
    {
        companyName: 'Go Air',
        issueSize: '36000 Rupees',
        priceRange: '50-60',
        minInvest: '50000',
        date: '4th - 7th Oct 2022'
    },
    {
        companyName: 'Bajaj Energy',
        issueSize: '3600 Rupees',
        priceRange: '60-70',
        minInvest: '50000',
        date: '4th - 7th Oct 2022'
    },
    {
        companyName: 'OYO',
        issueSize: '3600 Rupees',
        priceRange: '80-90',
        minInvest: '50000',
        date: 'To be announced'
    }
];

const GridTable = () => {
    const navigate = useNavigate();

    const handleRowClick = (companyName) => {
        navigate(`/details/${companyName}`);
    };

    return (
        <SimpleCard>
        <Box sx={{ width: '100%' }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="company issue table">
                    <TableHead style={{ backgroundColor: 'lightgrey' }}>
                        <TableRow>
                            <TableCell>Company Name</TableCell>
                            <TableCell align="center">Issue Size</TableCell>
                            <TableCell align="center">Price Range</TableCell>
                            <TableCell align="center">Min Investment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.companyName} onClick={() => handleRowClick(row.companyName)} style={{ cursor: 'pointer' }}>
                                <TableCell component="th" scope="row">
                                    <Typography>
                                        {row.companyName}
                                    </Typography>
                                    <Typography style={{ color: 'grey' }}>
                                        {row.date}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">{row.issueSize}</TableCell>
                                <TableCell align="center">{row.priceRange}</TableCell>
                                <TableCell align="center">
                                    <Typography>
                                        {row.minInvest}
                                    </Typography>

                                    <Typography style={{ color: 'grey' }}>
                                        100 Shares/5 Lots
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
        </SimpleCard>
    );
};

export default GridTable;
