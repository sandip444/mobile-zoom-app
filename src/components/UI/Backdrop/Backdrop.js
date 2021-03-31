import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';

// className={styles.Backdrop}
//             onClick={props.clicked}>

const backdrop = (props) => {
    return (
        props.show ?
            <View
                style={styles.Backdrop}
                onStartShouldSetResponder={props.clicked}
            />
            : null
    );
}

const styles = StyleSheet.create({

    Backdrop: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: "absolute",
        zIndex: 100,
        left: 0,
        top: 0,
        backgroundColor: "grey",
        opacity: 0.5
    }
});


export default backdrop;