import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

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
    image: 'URL_TO_IMAGE_1'
  },
  {
    name: 'Another Song',
    path: '/yuvan/Adadada-Aarambame.mp3',
    image: 'URL_TO_IMAGE_2'
  },
  // ... add more song objects as needed
];

const AudioPlayer = () => {
  const [activeAudio, setActiveAudio] = useState(null);

  const playAudio = async (path) => {
    try {
      const url = await storage.ref().child(path).getDownloadURL();
      const audioElement = new Audio(url);
      setActiveAudio(audioElement);
      audioElement.play();
      console.log('Audio is playing...');
    } catch (error) {
      console.error('Error playing audio: ', error);
    }
  };

  const handleCardClick = (path) => {
    if (activeAudio) {
      activeAudio.pause();
    }
    playAudio(path);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {songs.map((song, index) => (
          <div key={index} style={{ cursor: 'pointer' }} onClick={() => handleCardClick(song.path)}>
            <img src={song.image} alt="Song Cover" style={{ width: '100px' }} />
            <p>{song.name}</p>
            {activeAudio && activeAudio.src.includes(song.path) ? (
              <audio controls style={{ width: '100%' }}>
                <source src={activeAudio.src} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioPlayer;


