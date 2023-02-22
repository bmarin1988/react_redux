import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import MediaCard from "../../components/MediaCard";
import PrimarySearchAppBar from "../../components/PrimarySearchAppBar";
import { getChars } from "../../services/SwapiService";


const InitialBoard = () => {
  const [characters, setChatacters] = useState([]);

  const chars = () => { getChars().then(chars => {
    console.log("Chars :", chars.results);
    setChatacters(chars.results);

  });}


  useEffect( () => { 
    chars();
  },[])

  return(
    <>
      <PrimarySearchAppBar/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          { characters?.map((char, index) => 
            <Grid container item spacing={3} key={index}>
              <Grid item xs={4}>
                <MediaCard charObject={char}/>
              </Grid>   
            </Grid>)} 
        </Grid>
      </Box>
    </>
  )
}

export default InitialBoard;