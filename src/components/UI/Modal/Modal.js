import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Backdrop from '../Backdrop/Backdrop';

//{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
// opacity: this.props.show ? '1' : '0'


class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.show !== this.props.show || nextProps.children !== this.props.children);
    }

    render() {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <View
                    style={[styles.modal, { opacity: this.props.show ? 1 : 0 }]}>
                    {this.props.children}
                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({

    modal: {
        position: "absolute",
        zIndex: 500,
        backgroundColor: "white",
        width: "80%",
        height: "75%",
        padding: 10,
        left: "10%",
        right: "10%",
        top: "5%",
        bottom: "20%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5
    }
});

export default Modal;