import React from 'react';
import {Text, View} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

export const takePicture = async camera => {
  const data = await camera.takePictureAsync({quality: 0.5, base64: true});
  CameraRoll.save(data.uri);
};

export const retakePhoto = async () => {
  const lastPicture = await CameraRoll.getPhotos({first: 1});
  console.log(JSON.stringify(lastPicture, null, 2));
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
