import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  booking: {
    paddingTop: 30,
    backgroundColor: 'rgba(51, 102, 255, 1)',
  },
  myBooking: {
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  rowBooking: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    borderBottomWidth: 2,
    borderColor: 'rgba(193, 197, 208, 0.25)',
  },
  name: {
    fontFamily: 'Merienda-ExtraBold',
    fontSize: 20,
    color: 'black',
  },
  detail: {
    fontFamily: 'Merienda-Bold',
    fontSize: 16,
  },
  detailText: {
    fontFamily: 'Merienda-Bold',
    fontSize: 12,
    color: 'blue',
    marginBottom: 30,
  },
  box: {
    backgroundColor: 'rgba(193, 197, 208, 0.25)',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  heart: {
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 20,
  },
  boxDate: {
    fontFamily: 'Merienda-Bold',
    color: '#FF8900',
    fontSize: 20,
  },
  day: {
    fontFamily: 'Merienda-Bold',
    fontSize: 12,
    color: 'black',
  },
});
