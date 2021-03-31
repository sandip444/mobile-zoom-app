
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginVertical: 20,
        },
        subscriber: {
            backgroundColor: '#4D243D',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            margin: 1,
            height: (Dimensions.get('window').width / numColumns)*0.75,
        },
        itemInvisible: {
            backgroundColor: 'transparent',
        },

});