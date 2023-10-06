import React, { useState, useEffect } from 'react';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import "../index.css"
import '../Container/new.css'
import Sidebar from "../Container/sidebar/Sidebar"
import IconButton from '@mui/material/IconButton';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const firebaseConfig = {
    apiKey: "AIzaSyDdfrqD1axCi722Dt66jySe4Vr_Yr6i8PI",
    authDomain: "mymusic-df1c1.firebaseapp.com",
    projectId: "mymusic-df1c1",
    storageBucket: "mymusic-df1c1.appspot.com",
    messagingSenderId: "389789019237",
    appId: "1:389789019237:web:7c00b70d6f8b0f5904aa8c",
    measurementId: "G-98VPCJJG9N"
  };
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

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
        <Card key={song.id} className='cardstyle1'sx={{background: 'linear-gradient( #000000, #252527)'}}onClick={() => setCurrentSong(song)}>
          <CardActionArea >
            
            <CardContent>
              
              <p id='sn'>{song.name}</p>
              {currentSong && currentSong.id === song.id && (
                <IconButton className="btn1" onClick={togglePlayPause}>
                  {isPlaying ? <PauseIcon sx={{color:'white',}}/> : <PlayArrowIcon sx={{color:'white'}}/>}
              </IconButton>
                
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
