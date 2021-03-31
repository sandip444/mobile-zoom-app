
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    publisherWrapper: {

    },
    landscape: {
        borderWidth: 1,
        padding: 3,
        backgroundColor: "lightblue",
        width: (Dimensions.get('window').width * 0.45) - 120,
        height: Dimensions.get('window').height - 50,
        margin: 10,
        alignItems: "center"
    },
    portrait: {
        borderWidth: 1,
        padding: 3,
        backgroundColor: "lightblue",
        width: Dimensions.get('window').width - 15,
        height: (Dimensions.get('window').height * 0.4) - 100,
        margin: 10,
        alignItems: "center"
    }
});