import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    paddingLeft: 6,
    paddingRight: 6,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  element: {
     marginBottom: 10,
     marginTop: 15
  },
  textAuthor: {
    fontSize: 16,
    textAlign: 'center'
  },
  image: {
    width: 168,
    height: 168,
    borderRadius: 18
  },
  loader: {
    height: 500,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
export default styles;
