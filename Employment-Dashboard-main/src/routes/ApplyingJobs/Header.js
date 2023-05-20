
import React from 'react';
import { Box, Grid, Typography, makeStyles } from '@material-ui/core';
import { useState } from "react";
import { TextField, InputAdornment } from '@material-ui/core';
import Card from './JobCard'; // Assuming Card component is in a separate file
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles(()=> ({
  search:{
    margin:"0 auto",
    width:"800px",
    backgroundColor:"#e0c6f1",
    borderRadius:"6px",
    color:"#561081",
   // height:"55px"
  },
  h4:{
    color:"#e0c6f1",
  },
  /*card:{
    backgroundColor:"white"
  },*/
}));

const Header = (props) => {
  const classes =useStyles()
  const { cards } = props;

  const [searchInput, setSearchInput] = useState('');
  const [filteredCards, setFilteredCards] = useState(cards);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    filterCards(e.target.value);
  };

  const filterCards = (searchValue) => {
    const filtered = cards.filter((card) =>
      card.description.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCards(filtered);
  };

    return (
      <Box py={10} bgcolor="#561081" color="white" >
        <Grid container justify="center">
          <Grid item xs={10}>
            <Box display="flex" justfyContent="space-between">
              <Typography variant="h4" className={classes.h4} >Open Job Listing</Typography>
            <Grid className={classes.search}>
                    {/* Search bar */}
      <TextField
        value={searchInput}
        onChange={handleSearchInput}
        fullWidth
        placeholder="Search"
        variant="outlined"
        InputProps={{
            startAdornment: (
            <InputAdornment position="start">
                <SearchIcon />
            </InputAdornment>
            ),
        }}
      />
      {/* Card list */}
        {filteredCards && filteredCards.map((card) => (
          <Card className={classes.card}
            key={card.id}
            description={card.description}
            position={card.position}
          />
        ))}
            
            </Grid>
            </Box>
          </Grid>

        </Grid>

      </Box>

        
        );
};

export default Header;
