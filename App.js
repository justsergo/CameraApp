import React from 'react';
import { SafeAreaView } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { gStyle } from './styles/styles';
import { PendingView, savePicture } from './components/helpers';
import PictureSave from './components/pictureSave';
import Camera from './components/camera';

const App = () => {
  const [modeOn, handleMode] = React.useState(RNCamera.Constants.FlashMode.on);
  const [showPicture, setShowPicture] = React.useState(false);
  const [uriPicture, setUriPicture] = React.useState(null);

  const handleFlash = () => {
    handleMode(modeOn ? RNCamera.Constants.FlashMode.off : RNCamera.Constants.FlashMode.on);
  };

  const save = () => {
    savePicture(uriPicture);
    setShowPicture(false);
  };

  return (
    <SafeAreaView style={gStyle.container}>
      {showPicture ? (
        <PictureSave save={save} uriPicture={uriPicture} setShowPicture={setShowPicture} />
      ) : (
        <RNCamera style={gStyle.preview} type={RNCamera.Constants.Type.back} flashMode={modeOn}>
          {({ camera, status }) => {
            if (status !== 'READY') return <PendingView />;

            return (
              <Camera
                camera={camera}
                handleFlash={handleFlash}
                modeOn={modeOn}
                setUriPicture={setUriPicture}
                setShowPicture={setShowPicture}
              />
            );
          }}
        </RNCamera>
      )}
    </SafeAreaView>
  );
};
export default App;
