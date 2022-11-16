import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  profile: {
    backgroundColor: 'rgba(51, 102, 255, 1)',
  },
  profileBg: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileName: {
    fontFamily: 'Merienda-ExtraBold',
    fontSize: 20,
    color: 'black',
    paddingVertical: 5,
  },
  profileJob: {
    fontFamily: 'Merienda-Regular',
    fontSize: 12,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  cardText: {
    fontFamily: 'Merienda-ExtraBold',
    fontSize: 16,
    color: 'black',
  },
  atm: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  edit: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  textEdit: {
    fontFamily: 'Merienda-Bold',
    fontSize: 14,
    color: 'black',
    paddingLeft: 10,
    paddingVertical: 10,
  },
  icon: {
    left: 200,
  },
  iconChange: {
    left: 160,
  },
});
