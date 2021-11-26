import React from 'react';
import {TouchableOpacity, View, Image, SafeAreaView} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {gStyle, image} from '../styles/styles';
import {PendingView, takePicture, retakePhoto, savePicture} from './helpers';

const Camera = () => {
  const [modeOn, handleMode] = React.useState(RNCamera.Constants.FlashMode.on);
  const [showPicture, setShowPicture] = React.useState(false);
  const [uriPicture, setUriPicture] = React.useState(null);

  const handleFlash = () => {
    handleMode(
      modeOn
        ? RNCamera.Constants.FlashMode.off
        : RNCamera.Constants.FlashMode.on,
    );
  };

  const save = () => {
    savePicture(uriPicture);
    setShowPicture(false);
  };

  const makePicture = async camera => {
    await takePicture(camera, setUriPicture);
    setShowPicture(true);
  };

  const retake = async camera => {
    retakePhoto();
    await takePicture(camera, setUriPicture);
    setShowPicture(true);
  };

  return (
    <SafeAreaView style={gStyle.container}>
      {showPicture ? (
        <View style={gStyle.saveBlock}>
          <Image
            style={image.photo}
            source={{
              uri: uriPicture,
            }}
          />
          <View style={gStyle.iconPanel}>
            <TouchableOpacity style={gStyle.capture} onPress={save}>
              <Image
                style={image.container}
                source={{
                  uri: 'https://icon-library.com/images/save-icon-png/save-icon-png-22.jpg',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={gStyle.capture}
              onPress={() => {
                setShowPicture(false);
              }}>
              <Image
                style={image.container}
                source={{
                  uri: 'https://static.thenounproject.com/png/163771-200.png',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <RNCamera
          style={gStyle.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={modeOn}>
          {({camera, status}) => {
            const extendMakePicture = () => makePicture(camera);
            const extendRetake = () => retake(camera);

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
                  onPress={extendMakePicture}
                  style={gStyle.capture}>
                  <Image
                    style={image.container}
                    source={{
                      uri: 'https://git.krews.org/uploads/-/system/project/avatar/192/Circular_Camera-512.png',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={extendRetake} style={gStyle.capture}>
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
      )}
    </SafeAreaView>
  );
};
export default Camera;
