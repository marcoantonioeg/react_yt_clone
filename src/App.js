import React from "react";
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import {SearchBar, VideoDetail, VideoList} from "./components";

 class App extends React.Component{
     state = {
         videos: [],
         selectedVideo: null,
     }
     componentDidMount(){
         this.handleSubmit('node js')
     }
     onSelectVideo = (video)=>{
        this.setState({selectedVideo: video})
     }
     handleSubmit = async (searchTerm) =>{
        const respone = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyB7RVzRTZmjxzqIeSwB6gx-ClWZ3lh1GaU',
                q: searchTerm,
        
            }
        });
        this.setState({
            videos: respone.data.items, 
            selectedVideo: respone.data.items[0]
        });
        console.log(respone.data.items);
     }
     render (){
         const {selectedVideo, videos} = this.state;
         return(
             <Grid justifyContent="center" container spacing={10}>
                 <Grid item xs={12}>
                     <Grid container spacing={10}>
                         <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                         </Grid>
                         <Grid item xs={7}>
                        <VideoDetail video={selectedVideo}/>
                         </Grid>
                         <Grid item xs={5}>
                       <VideoList videos={videos} onSelectVideo={this.onSelectVideo}/>
                         </Grid>
                     </Grid>
                 </Grid>
             </Grid>
         )
     }
 }
 export default App;