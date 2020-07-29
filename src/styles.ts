import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f5f5f5',
  },
  body: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  containerRepository: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#edebeb',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 30,
    alignItems: 'center',
  },
  repository: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
  },
  tech: {
    color: 'gray',
  },
  countLikes: {
    fontSize: 18,
    marginRight: 5,
  },
  lineButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
