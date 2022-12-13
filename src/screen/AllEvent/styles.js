import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  event: {
    backgroundColor: '#222B45',
  },
  eventView: {
    backgroundColor: 'white',
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventText: {
    fontSize: 24,
    fontFamily: 'Merienda-Bold',
    color: 'black',
  },
  content: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    backgroundColor: 'white',
    paddingBottom: 20,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  rowCard: {
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 30,
    left: 25,
  },
  cardTextBold: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Merienda-ExtraBold',
  },
  cardText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Merienda-Bold',
    marginVertical: 10,
  },
  image: {
    height: 350,
    width: '100%',
    borderRadius: 30,
  },
});
