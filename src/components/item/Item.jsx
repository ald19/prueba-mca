import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import * as React from "react";
import './style.css';

export default function Item({item}){
    
    return(
        <Card className="card">
            <CardMedia
                component="img"
                image={item.imgUrl}
                alt="item"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.brand}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.model}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.price}€
                </Typography>
            </CardContent>
        </Card>
    )
}