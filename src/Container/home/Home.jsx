import React, { useState, useEffect } from 'react';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import "./home.css"
import Sidebar from "../sidebar/Sidebar"
import IconButton from '@mui/material/IconButton';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import analmele from "../assets/analmela.jpg";
import anbe from "../assets/anbe.jpg";
import avalum from "../assets/avalum.jpg";
import chellamma from "../assets/chellamma.jpg";
import chumakizhi from "../assets/chumakizhi.jpg";
import dhavani from "../assets/dhavani.jpg";
import malaivara from "../assets/malaivara.jpg";
import merke from "../assets/merke.jpg";
import poneepo from "../assets/pooneepoo.jpg";
import sne from "../assets/snehidane.jpg";
import vtk from "../assets/vtk.jpg";


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
      name: "Annal Maelae",
      path:"/static/analmele.mp3",
      id:1,image: analmele
    },
    {
      name: "Anbe En Anbe",
      path:"/static/anbe.mp3",
      id:2,image: anbe
    },
    {
      name: "Avalum Nannum",
      path:"/static/avalum.mp3",
      id:3,image: avalum
    },
    {
      name: "Chumakizhi",
      path:"/static/chumakizhi.mp3",
      id:4,image: chumakizhi
    },
    {
      name: "Chellamma",
      path:"/static/chellama.mp3",
      id:5,image: chellamma
    },
    {
      name: "DhaavaniPotta",
      path:"/static/dhaavanipota.mp3",
      id:6,image: dhavani
    },
    {
      name: "Malaivara poguthe",
      path:"/static/Malaivarapoguthe.mp3",
      id:7,image: malaivara
    },
    {
      name: "Merke Merke",
      path:"/static/Merke-Merke.mp3",
      id:8,image: merke
    },
    {
      name: "Po Nee Po",
      path:"/static/Poneepo.mp3",
      id:9,image: poneepo
    },
    {
      name: "Snehidane",
      path:"/static/Snehidane.mp3",
      id:10,image: sne
    },
    {
      name: "Mallipoo",
      path:"/static/Mallipoo.mp3",
      id:11,image: vtk
    },
    
  ];
const Home = () => {
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
    <div className='musiccontainer2'>
     
      {songs.map((song) => (
        <div>
        <Card key={song.id} className='cardstyle'sx={{background: 'linear-gradient( #000000, #252527)'}}onClick={() => setCurrentSong(song)}>
          <CardActionArea >
          <CardMedia
                component="img"
                height="160"
                image={song.image}
                alt={song.name}
              />
            
            <CardContent>
              
              <p id='sn1'>{song.name}</p>
              {currentSong && currentSong.id === song.id && (
                <IconButton className="btn2" onClick={togglePlayPause}>
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

export default Home;
