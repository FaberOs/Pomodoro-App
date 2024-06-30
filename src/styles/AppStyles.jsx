import {StyleSheet, Platform} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'android' && 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    width: '50%',
    borderWidth: 2,
    borderBottomWidth: 7,
  },
  textButton: {
    fontFamily: 'Bricolage Grotesque Bold',
    color: 'black',
    fontSize: 25,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
    borderWidth: 2,
    borderBottomWidth: 7,
  },
  modalText: {
    fontFamily: 'Bricolage Grotesque Regular',
    fontSize: 20,
    margin: 20,
    textAlign: 'center',
    color: 'black',
  },
  modalTextContainer: {
    padding: 10,
  },
  modalDivider: {
    width: '100%',
    height: 3,
    backgroundColor: 'black',
    marginVertical: 0,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    padding: 10,
  },
});

export default Styles;
