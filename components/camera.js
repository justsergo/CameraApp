import React from 'react';
import { TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { gStyle, image } from '../styles/styles';
import { takePicture, retakePhoto } from './helpers';

export default function Camera({ camera, handleFlash, modeOn, setUriPicture, setShowPicture }) {
  const makePicture = async () => {
    await takePicture(camera, setUriPicture);
    setShowPicture(true);
  };

  const retake = async () => {
    retakePhoto();
    await takePicture(camera, setUriPicture);
    setShowPicture(true);
  };

  return (
    <SafeAreaView style={gStyle.iconPanel}>
      <TouchableOpacity onPress={handleFlash} style={gStyle.capture}>
        <Image
          style={image.container}
          source={{
            uri: modeOn
              ? 'http://simpleicon.com/wp-content/uploads/flash.png'
              : 'https://cdn-icons-png.flaticon.com/128/248/248053.png',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={makePicture} style={gStyle.capture}>
        <Image
          style={image.container}
          source={{
            uri: 'https://git.krews.org/uploads/-/system/project/avatar/192/Circular_Camera-512.png',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={retake} style={gStyle.capture}>
        <Image
          style={image.container}
          source={{
            uri: 'https://www.freeiconspng.com/uploads/arrow-reload-icon--28.png',
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
