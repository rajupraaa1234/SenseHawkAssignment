import React from "react";
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLOR } from '@constants';

const CustomButton = (props: any) => {
    const {
        width,
        height,
        myStyle,
        text,
        onClick,
        disabled
    } = props;
    return (
        <TouchableOpacity disabled={disabled} style={[{ width: width, height: height }, style.container, { ...myStyle }]} onPress={() => { onClick() }}>
            <Text style={style.btnStyle}>{text}</Text>
        </TouchableOpacity>
    );
}

CustomButton.defaultProps = {
    width: 300,
    height: 40,
    text: 'click',
    disabled: false,
    onClick: () => { console.log('click') }
}

const style = StyleSheet.create({
    btnStyle: {
        color: COLOR.black,
        fontSize: 20,
    },
    container: {
        backgroundColor: COLOR.CustomBtnColor,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }

});
export default CustomButton;

