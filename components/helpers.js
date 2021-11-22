import React from 'react';
import {Text, View, Image} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

export const lastPicture = async () => {
  const lastPicture = await CameraRoll.getPhotos({first: 1});
  return lastPicture.edges[0].node.image.uri;
};

export const takePicture = async camera => {
  const data = await camera.takePictureAsync({quality: 0.5, base64: true});
  CameraRoll.save(data.uri);
};

export const retakePhoto = async () => {
  const lastPicture = await CameraRoll.getPhotos({first: 1});
  CameraRoll.deletePhotos([lastPicture.edges[0].node.image.uri]);
};

export const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Waiting</Text>
  </View>
);
