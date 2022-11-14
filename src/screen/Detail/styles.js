import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  detailCard: {
    padding: 25,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  eventDetailTitle: {
    fontSize: 16,
    fontFamily: 'Merienda-ExtraBold',
    color: 'black',
    marginBottom: 10,
  },
  eventDetail: {
    fontSize: 14,
    fontFamily: 'Merienda-Regular',
    color: 'black',
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    fontFamily: 'Merienda-ExtraBold',
    color: 'black',
    marginBottom: 10,
  },
  image: {
    height: 150,
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buy: {
    fontSize: 16,
    fontFamily: 'Merienda-ExtraBold',
    color: 'white',
  },
});
