import { Box, Grid } from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import MediaCard from "../../components/MediaCard";
import PrimarySearchAppBar from "../../components/PrimarySearchAppBar";
import { getChars } from "../../services/SwapiService";
import { CHAR_TYPES } from "../../store/actions/actionChar";
import { charInitialState, charReducer } from "../../store/reducers/charReducer";


const InitialBoard = () => {
  const [state, dispatch] = useReducer(charReducer,charInitialState );
  const [characters, setCharacters] = useState([]);
  const {chars} = state;

  const loadChars = () => { 
    getChars()
    .then(chars => {
      const charsWithId = chars?.results.map((char, index) => {
        char.id = index+1;
        return char;
      })
      console.log("Chars :", charsWithId);
      setCharacters(charsWithId);
      dispatch({type: CHAR_TYPES.LOAD_CHARS, payload: charsWithId});
    })
  ;}

  useEffect( () => { 
    loadChars();
  },[])

  return(
    <>
      <PrimarySearchAppBar/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          { chars?.map((char) => 
            <> { console.log("char :"+ char.id, char) }
              <Grid item xs={4} key={char.id}>
                <MediaCard charObject={char}/>
              </Grid>   
            </>)} 
        </Grid>
      </Box>
    </>
  )
}

export default InitialBoard;