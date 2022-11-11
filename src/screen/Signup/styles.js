import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textBar: {
    fontSize: 28,
    color: 'black',
    paddingHorizontal: 10,
    fontFamily: 'Merienda-ExtraBold',
  },
  rowRegister: {
    display: 'flex',
    flexDirection: 'row',
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
    marginTop: 50,
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
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    fontSize: 14,
    fontFamily: 'Merienda-Regular',
  },
});
