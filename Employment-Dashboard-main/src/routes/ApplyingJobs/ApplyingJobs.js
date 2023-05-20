import React from 'react';
import {  Grid } from '@material-ui/core';
import JobCard from './JobCard';
import JobsData  from './data';
import Header from './Header';
import Filter from './Filter';
//import NavbarClient from '../../components/NavbarClient';
const ApplyingJobs = () => {
    return (
        <>       
        <Grid> <Header /> </Grid>
        <Grid> <Filter/> </Grid>
        
        <Grid container justify="center">
        <Grid item xs={10} >
        {JobsData.map(job => <JobCard key={job.id} {...job}/>)}
        </Grid>
        </Grid>

</>


    );
};

export default ApplyingJobs;