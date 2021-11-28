import React from 'react';
import { TouchableOpacity, View, Image, SafeAreaView } from 'react-native';
import { gStyle, image } from '../styles/styles';

export default function PictureSave({ save, uriPicture, setShowPicture }) {
  return (
    <SafeAreaView style={gStyle.container}>
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
          }}
        >
          <Image
            style={image.container}
            source={{
              uri: 'https://static.thenounproject.com/png/163771-200.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
