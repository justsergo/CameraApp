import React from 'react';
import { Text, View } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

export const takePicture = async (camera, setUriPicture) => {
  const data = await camera.takePictureAsync({ quality: 0.5, base64: true });
  setUriPicture(data.uri);
};

export const savePicture = uriPicture => {
  CameraRoll.save(uriPicture);
};

export const retakePhoto = async () => {
  const lastPicture = await CameraRoll.getPhotos({ first: 1 });
  CameraRoll.deletePhotos([lastPicture.edges[0].node.image.uri]);
};

export const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);
