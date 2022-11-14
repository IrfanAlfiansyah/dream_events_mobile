import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textBar: {
    fontSize: 28,
    color: 'black',
    paddingHorizontal: 10,
    fontFamily: 'Merienda-ExtraBold',
  },
  textTop: {
    padding: 10,
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
    fontFamily: 'Merienda-Regular',
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
    fontSize: 14,
    fontFamily: 'Merienda-ExtraBold',
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
    fontFamily: 'Merienda-Regular',
  },
  buttonForgot: {
    margin: 20,
  },
  forgotText: {
    textAlign: 'right',
    color: 'rgba(51, 102, 255, 1)',
    fontFamily: 'Merienda-Bold',
  },
  alternativeLogin: {
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 10,
    fontSize: 14,
    fontFamily: 'Merienda-Bold',
  },
  rowImage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconBox: {
    borderWidth: 1,
    borderColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
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
