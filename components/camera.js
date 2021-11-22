import React from 'react';
import {TouchableOpacity, View, Image, SafeAreaView} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {gStyle, image} from '../styles/styles';
import {takePicture, retakePhoto, PendingView, lastPicture} from './helpers';

const Camera = () => {
  const [modeOn, handleMode] = React.useState(RNCamera.Constants.FlashMode.on);
  const [showLastPicture, setShowLastPicture] = React.useState(false);

  const handleFlash = () => {
    handleMode(
      modeOn
        ? RNCamera.Constants.FlashMode.off
        : RNCamera.Constants.FlashMode.on,
    );
  };
  const handleShowPicture = () => {
    setShowLastPicture(true);
    setTimeout(() => setShowLastPicture(false), 3000);
  };

  if (showLastPicture) {
    return <Image style={image.photo} source={{lastPicture}} />;
  }
  return (
    <SafeAreaView style={gStyle.container}>
      <RNCamera
        style={gStyle.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={modeOn}>
        {({camera, status}) => {
          if (status !== 'READY') return <PendingView />;

          return (
            <View style={gStyle.iconPanel}>
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
              <TouchableOpacity
                onPress={(() => takePicture(camera), handleShowPicture)}
                style={gStyle.capture}>
                <Image
                  style={image.container}
                  source={{
                    uri: 'https://git.krews.org/uploads/-/system/project/avatar/192/Circular_Camera-512.png',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={retakePhoto} style={gStyle.capture}>
                <Image
                  style={image.container}
                  source={{
                    uri: 'https://www.freeiconspng.com/uploads/arrow-reload-icon--28.png',
                  }}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </SafeAreaView>
  );
};
export default Camera;
