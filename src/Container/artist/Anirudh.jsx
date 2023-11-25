import React, { useState, useEffect } from 'react';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

import storage from '../../firebase';
import Sidebar from "../sidebar/Sidebar"
import IconButton from '@mui/material/IconButton';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const songs =[
    {
        name:"Arabic Kuthu",
        path: "/anirudh/Arabic-Kuthu---Halamithi-Habibo-MassTamilan.so.mp3",
        image:'',
        id:1

    },
    {
        name:"Dharala Prahbu",
        path: "/anirudh/Dharala-Prabhu-Title-Track-MassTamilan.io.mp3",
        image:'',
        id:2
    },
    {
        name:"Hukum",
        path: "/anirudh/Hukum---Thalaivar-Alappara-MassTamilan.dev.mp3",
        image:'',
        id:3
    },
    {
      name:"Jolly-o-gymm...",
      path: "/anirudh/Jolly-O-Gymkhana-MassTamilan.so.mp3",
      image:'',
      id:4
  },
  {
    name:"Kanave Kanave",
    path: "/anirudh/Kanave-Kanave-MassTamilan.com.mp3",
    image:'',
    id:5
},
{
  name:"Kannazhaga",
  path: "/anirudh/Kannazhaga.mp3",
  image:'',
  id:6
},
{
name:"Kannula Thimiru",
path: "/anirudh/Kannula-Thimiru-MassTamilan.io.mp3",
image:'',
id:7
},
{
name:"Nee Partha",
path: "/anirudh/Nee-Partha.mp3",
image:'',
id:8
},
{
name:"Nenjame",
path: "/anirudh/Nenjame-MassTamilan.fm.mp3",
image:'',
id:9
},
{
name:"Poo-Nee-Poo",
path: "/anirudh/Poo-Nee-Poo.mp3",
image:'',
id:10
},
{
name:"Rathamaarey",
path: "/anirudh/Rathamaarey-MassTamilan.dev.mp3",
image:'',
id:11
},
{
name:"So-Baby",
path: "/anirudh/So-Baby-MassTamilan.fm.mp3",
image:'',
id:12
}
];

const Anirudh = () => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [audio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    // Load the selected song when the component mounts or when currentSong changes
    audio.src = storage.ref(currentSong.path).getDownloadURL().then(url => {
      audio.src = url;
    });
  }, [currentSong, audio]);

  const playSong = () => {
    audio.play();
  };

  const pauseSong = () => {
    audio.pause();
  };
  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  
  return (
    <div>
      <Sidebar/>
    <div className='musiccontainer'>
     
    <div className='singerimg1'> <img src={require('../artist/anirudh.jpg')} alt='' className='img1'/></div>
      {songs.map((song) => (
        <div>
        <Card key={song.id} className='cardstyle1'onClick={() => setCurrentSong(song)}>
          <CardActionArea >
            
            <CardContent>
              
              <p id='sn'>{song.name}</p>
              {currentSong && currentSong.id === song.id && (
                <button className="btn1" onClick={togglePlayPause}>
                  {isPlaying ? <PauseIcon sx={{color:'white',}}/> : <PlayArrowIcon sx={{color:'white'}}/>}
              </button>
                
              )}
            </CardContent>
          </CardActionArea>
        </Card>
        <br/>
        </div>
        
      ))}
    </div>
    </div>
  );
};

export default Anirudh;
