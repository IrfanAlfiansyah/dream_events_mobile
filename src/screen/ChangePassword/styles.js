import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  password: {
    backgroundColor: 'rgba(51, 102, 255, 1)',
    paddingTop: 20,
  },
  changePw: {
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 20,
    height: 40,
    margin: 10,
    borderRadius: 10,
    fontFamily: 'Merienda-Bold',
    fontSize: 14,
    color: 'black',
  },
  label: {
    fontFamily: 'Merienda-ExtraBold',
    fontSize: 14,
    color: 'black',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginBottom: 300,
  },
  save: {
    fontFamily: 'Merienda-ExtraBold',
    fontSize: 16,
    color: 'white',
  },
  iconEye: {
    position: 'absolute',
    right: 10,
    top: 10,
    height: '100%',
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
});
