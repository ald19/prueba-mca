import * as React from "react";
import './style.css';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

export default function Header() {
    return (
        <AppBar position="static" className="navbar">
            <Toolbar>
                <Typography variant="h6" component="div">
                    <Link underline="none" color="inherit" href="/">
                        MCA
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
