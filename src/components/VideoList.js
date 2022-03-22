import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";
const VideoList = ({videos, onSelectVideo}) =>{
    const ListVideos = videos.map((video, id)=><VideoItem onSelectVideo={onSelectVideo} key={id} video={video}/>)
    return (
        <Grid container spacing={10}>
{ListVideos}
        </Grid>
        );
}
export default VideoList