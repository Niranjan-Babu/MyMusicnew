import React, { useState, useEffect } from 'react';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import "../index.css"
import '../Container/new.css'
import Sidebar from "../Container/sidebar/Sidebar"
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import storage from '../firebase';

const songs = [
  {
    name: 'Kadhal Aasai',
    path: '/yuvan/Kadhal-Aasai.mp3',
    image: './Container/assets/anbe.jpg'
    ,id: 1,
    
  },
  {
    name: 'Adadada Aarambame',
    path: '/yuvan/Adadada-Aarambame.mp3',
    image: require('../Container/assets/anbe.jpg')
    ,id:2
  },
  {
    name: 'Edhirthu-Nil',
    path: '/yuvan/Edhirthu-Nil.mp3',
    image: 'URL_TO_IMAGE_1',
    id:3
    
  },
  {
    name: 'Jalsa-Pannungada',
    path: '/yuvan/Jalsa-Pannungada.mp3',
    image: '/image/anbe.jpg',
    id:4
  },
  {
    name: 'My Name is Billa',
    path: '/yuvan/My-Name-is-Billa-MassTamilan.fm.mp3',
    image: '/image/anbe.jpg',
    id:5
  },
  {
    name: 'Natpukullae Oru',
    path: '/yuvan/Natpukullae-Oru.mp3',
    image: '/image/anbe.jpg',
    id:6
  },
  {
    name: 'Pogathe Pogathe',
    path: '/yuvan/Pogathey-Pogathe.mp3',
    image: '/image/anbe.jpg',
    id:7
  },
  {
    name: 'Poi Solla',
    path: '/yuvan/Poi-Solla-Intha-Manasukku.mp3',
    image: '/image/anbe.jpg',
    id:8
  },
  {
    name: 'Seval Kodi',
    path: '/yuvan/Seval-Kodi-MassTamilan.fm.mp3',
    image: '/image/anbe.jpg',
    id:9
  },
  
];

const New = () => {
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
     
    <div className='singerimg1'> <img src={require('../Container/yuvan.jpg')} alt=''className='img1' /></div>
      {songs.map((song) => (
        <div>
        <Card key={song.id} className='cardstyle1'onClick={() => setCurrentSong(song)}>
          <CardActionArea >
            
            <CardContent>
              
              <p id='sn'>{song.name}</p>
              {currentSong && currentSong.id === song.id && (
                <button className="btn1" onClick={togglePlayPause}>
                  {isPlaying ? <PauseIcon sx={{color:'white'}} /> : <PlayArrowIcon sx={{color:'white'}}/>}
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

export default New;
