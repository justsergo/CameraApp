import {StyleSheet} from 'react-native';

export const gStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  capture: {
    paddingLeft: 20,
    paddingRight: 20,
    margin: 20,
  },
  iconPanel: {
    backgroundColor: '#828282cf',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  saveBlock: {
    flex: 1,
    flexDirection: 'column',
  },
});

export const image = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
  },
  photo: {
    flex: 1,
  },
});
