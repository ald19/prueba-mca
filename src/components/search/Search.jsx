import * as React from "react";
import { Box, TextField } from "@mui/material";
import './style.css';

export default function Search(){
    return (
        <Box className="search">
          <TextField label="Búsqueda"/>
        </Box>
    )
}