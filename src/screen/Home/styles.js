import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(51, 102, 255, 1)',
  },
  searchBar: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    margin: 25,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Merienda-Bold',
    paddingHorizontal: 10,
    width: '100%',
  },
  sortDateContainer: {
    backgroundColor: '#222B45',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  date: {
    color: 'white',
    fontFamily: 'Merienda-Regular',
    textAlign: 'center',
  },
  event: {
    backgroundColor: '#222B45',
  },
  eventView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventText: {
    fontSize: 16,
    fontFamily: 'Merienda-Bold',
    color: 'black',
  },
  buttonSection: {
    backgroundColor: 'white',
  },
  button: {
    paddingVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  buttonText: {
    fontFamily: 'Merienda-ExtraBold',
    color: 'white',
    fontSize: 16,
  },
});
