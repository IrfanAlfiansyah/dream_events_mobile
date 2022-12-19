import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  profile: {
    backgroundColor: 'rgba(51, 102, 255, 1)',
    paddingTop: 20,
  },
  photoProfile: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  photo: {
    width: 150,
    height: 150,
    borderColor: 'rgba(51, 102, 255, 1)',
    borderWidth: 5,
    borderRadius: 100,
  },
  editImage: {
    top: -40,
    left: 60,
  },
  textEdit: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingBottom: 10,
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
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  inputDate: {
    borderWidth: 1,
    paddingHorizontal: 20,
    height: 40,
    marginVertical: 10,
    marginLeft: 10,
    borderRadius: 10,
    fontFamily: 'Merienda-Bold',
    fontSize: 14,
    color: 'black',
    width: '80%',
  },
  buttonSave: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  save: {
    fontFamily: 'Merienda-ExtraBold',
    fontSize: 16,
    color: 'white',
  },

  wrapper: {
    backgroundColor: '#F5F6F8',
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonModal: {
    width: '100%',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: 5,
    paddingVertical: 15,
  },
  buttonModalOpen: {
    backgroundColor: '#F194FF',
  },
  buttonModalClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Merienda-Bold',
    fontSize: 12,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Merienda-ExtraBold',
    color: 'black',
  },
});
