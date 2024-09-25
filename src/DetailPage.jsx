// src/DetailPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Button, Typography, Breadcrumbs, Card, CardContent, Grid, Stepper, Step, StepLabel, IconButton, useMediaQuery, useTheme } from '@mui/material';
import SimpleCard from './SimpleCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';
import GoAir from './Images/GoAir.jpg'
import OYOImg from './Images/OYO.png'


const detailsData = {
    'Go Air': {
        img: GoAir,
        issueSize: '36000 Rupees',
        priceRange: '50-60',
        minInvest: '50000',
        description: 'Go Air is a leading airline in India Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ...',
        lotSize: '150 Shares/lots',
        issueDate: '12 Dec - 15 Dec 22',
        listedData: '15 Dec 22',
        listedPrice: '150',
        listingGains: '10',
        gainPercent: '10.0%'
    },
    'Bajaj Energy': {
        img: GoAir,
        issueSize: '3600 Rupees',
        priceRange: '60-70',
        minInvest: '50000',
        description: 'Bajaj Energy is a major player in renewable energy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ...',
        lotSize: '150 Shares/lots',
        issueDate: '12 Dec - 15 Dec 22',
        listedData: '15 Dec 22',
        listedPrice: '160',
        listingGains: '10',
        gainPercent: '17.0%'
    },
    'OYO': {
        img: OYOImg,
        issueSize: '3600 Rupees',
        priceRange: '80-90',
        minInvest: '50000',
        description: 'OYO is a prominent hotel chain Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ...',
        lotSize: '150 Shares/lots',
        issueDate: '12 Dec - 15 Dec 22',
        listedData: '15 Dec 22',
        listedPrice: '170',
        listingGains: '10',
        gainPercent: '20.0%'
    }
};

const steps = [
    'Bidding Starts',
    'Bidding Ends',
    'Allotment Finalization',
    'Refund Initiation',
    'Demat Transfer',
    'Listing Date',
];

const DetailPage = () => {
    const { name } = useParams();
    const details = detailsData[name];
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleBack = () => {
        window.history.back();
    };

    const handleDownload = () => {
        console.log("Download clicked");
    };

    const handleApply = () => {
        console.log("Apply clicked");
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Breadcrumbs>
                <Link to="/">Home</Link>
                <Typography color="text.primary">{name}</Typography>
            </Breadcrumbs>

            <SimpleCard customStyle={{ marginTop: 20 }}>
            <Box sx={styles.headerContainer}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                        <IconButton onClick={handleBack} color="inherit">
                            {/* Add back icon here if needed */}
                            <ArrowBackIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <img src={details.img} alt="Company Logo" style={styles.logo} />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="div">
                            {name}
                        </Typography>
                    </Grid>
                    <Grid item sx={{ marginLeft: 'auto' }}>
                        <Button variant="contained" color="primary" onClick={handleDownload} style={styles.button}>
                            <DownloadIcon/>
                        </Button>
                        <Button variant="contained" color="secondary" onClick={handleApply}>
                            Apply
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            </SimpleCard>

            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                <Grid item xs={12} style={{ marginBottom: 30 }}>
                    <SimpleCard>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="body1">Issue Size</Typography>
                                <Typography style={{ fontWeight: 'bold' }}>{details.issueSize}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="body1">Price Range</Typography>
                                <Typography style={{ fontWeight: 'bold' }}>{details.priceRange}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="body1">Min Investment</Typography>
                                <Typography style={{ fontWeight: 'bold' }}>{details.minInvest}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="body1">Lot Size</Typography>
                                <Typography style={{ fontWeight: 'bold' }}>{details.lotSize}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>                            
                            <Grid item xs={6} sm={3}>
                                <Typography variant="body1">Issues Date</Typography>
                                <Typography style={{ fontWeight: 'bold' }}>{details.issueDate}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="body1">Listed On</Typography>
                                <Typography style={{ fontWeight: 'bold' }}>{details.listedData}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="body1">Listed Price</Typography>
                                <Typography style={{ fontWeight: 'bold' }}>{details.listedPrice}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="body1">Listing Gains</Typography>
                                <Typography style={{ fontWeight: 'bold' }}>{details.listingGains}</Typography>
                            </Grid>
                        </Grid>
                    </SimpleCard>
                </Grid>

                <Grid item xs={12} style={{marginTop:20,}}>
                    <SimpleCard>
                        <Typography variant="h5" sx={{ marginBottom: 2 }}>Completion Steps</Typography>
                        <Grid container direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <Grid item xs={12}>
                                <Stepper activeStep={5} alternativeLabel={!isSmallScreen} orientation={isSmallScreen ? 'vertical' : 'horizontal'}>
                                    {steps.map((label, index) => (
                                        <Step key={label}>
                                            <StepLabel StepIconProps={{ sx: { color: index < 5 ? 'green' : 'grey' } }}>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Grid>
                        </Grid>
                    </SimpleCard>
                </Grid>

                <Grid item xs={12} style={{ marginTop: 40, marginBottom: 30 }}>
                    <SimpleCard>
                        <Typography variant="h5">About the Company</Typography>
                        <Typography variant="body2" sx={{ marginTop: 1 }}>
                            {details.description}
                        </Typography>
                    </SimpleCard>

                </Grid>
            </Grid>
        </Box>
    );
};

const styles = {
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#fff',
        // boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    leftContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    rightContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        height: '40px',
        marginRight: '10px',
        borderRadius: 40
    },
    button: {
        marginRight: '10px',
    },
};

export default DetailPage;
