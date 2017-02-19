import { StyleSheet, Platform } from 'react-native';

let platformStyles = {}

if (Platform.OS === 'iOS') {
  platformStyles = {
    logo: {
      marginTop: 10
    }
  }
}

const styles = StyleSheet.create(
  Object.assign({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },
    header: {
      backgroundColor: '#292a44',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60
    },
    logo: {
      width: 50,
      height: 20
    },
    body: {
      flex: 8,
      backgroundColor: '#FAFBFC'
    },
    card: {
      margin: 20,
      backgroundColor: '#FFFFFF',
      padding: 20,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#DBE2ED',
      shadowColor: '#000000',
      shadowOpacity: 0.06,
      shadowRadius: 6,
    },
    card__header: {
      fontSize: 24,
      color: '#37393E',
      fontWeight: '600'
    },
    card__state: {
      fontSize: 72
    },
    card__green: {
      color: '#4CAF50'
    },
    card__yellow: {
      color: '#ff9800'
    }
  }, platformStyles)
);

export default styles;
