import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textTop: {
    padding: 10,
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  rowRegister: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
    margin: 20,
  },
  buttonRegister: {
    color: 'blue',
  },
  signup: {
    color: 'blue',
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonLogin: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: '#DEDEDE',
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    color: 'black',
    fontSize: 16,
  },
  buttonForgot: {
    margin: 20,
  },
  forgotText: {
    textAlign: 'right',
    color: 'rgba(51, 102, 255, 1)',
    fontWeight: 'bold',
  },
  alternativeLogin: {
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 10,
    fontSize: 16,
  },
  rowImage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iconBox: {
    borderWidth: 1,
    borderColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconEye: {
    width: 20,
    height: 20,
  },
});