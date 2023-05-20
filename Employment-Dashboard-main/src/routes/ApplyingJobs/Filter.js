import React from 'react';
import { Box, Button, makeStyles, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(()=> ({
    wrapper:{
    display:"flex",
    boxShadow:"0px 1px 5px rgpa(0,0,0,0.1)",
    borderRadius:"5px",
    width:"900px",
    margin:"0 auto",
    marginTop:"-50px",
    backgroundColor:"#eaeaea",
    "& >*":{
        flex:1,
        height:"45px",
        margin:"8px",
    }    
    },
    button:{
        color:"white",
        backgroundColor:"#561081",
        borderRadius:"10px",
    },
}));
const Fillter = (props) => {
    const classes =useStyles()
    return (
        <Box  p={2} mt={-5} className={classes.wrapper}>
            <Select disableUnderline variant='filled' defaultValue="Full time" >
                <MenuItem value="Full time" >Full time</MenuItem>
                <MenuItem value="Part time">Part time</MenuItem>
                <MenuItem value="Contract" >Contract</MenuItem>
            </Select>
            <Select disableUnderline variant='filled' defaultValue="Remote" >
                <MenuItem value="Remote" >Remote</MenuItem>
                <MenuItem value="Office">Office</MenuItem>  
            </Select>
            <Button variant="contained" className={classes.button} disabaleElevation >
                Search
            </Button>
        </Box>
    );
};

export default Fillter;


