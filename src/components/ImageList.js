import './ImageList.css'
import React from 'react'
import ImageCard from './ImageCard'
import Grid from '@material-ui/core/Grid';



const ImageList = (props) => {
    const images = props.images.map((image) => {
       return (
                <Grid item xs={4}>
                    <ImageCard key={image.id} image={image} />
                </Grid>
        )
    });
    return (
        <Grid container spacing={1}>{images}</Grid>
    )
};

export default ImageList;