import React, { memo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLOR } from '@constants';
import { getFontSize , DeviceDimension } from '@utils';



const Header = (props: any) => {
    const { name, style, leftIcon, rightIcon, leftClick, rightClick, isLeft, isRight, isRightText, rightText } = props;

    return (
        <View>
            <View style={[Mystyle.container, { ...style }]}>
                <TouchableOpacity onPress={leftClick} style={Mystyle.leftIcon}>
                    {isLeft && <Icon name={leftIcon} size={30} color={COLOR.gray} />}
                </TouchableOpacity>
                <View style={Mystyle.nameContainer}>
                    <Text style={Mystyle.nameTxt}>{name}</Text>
                </View>
                <TouchableOpacity onPress={rightClick} style={Mystyle.rightIcon} disabled={isRightText}>
                    {isRight && <Icon name={rightIcon} size={30} color={COLOR.gray} />}
                    {isRightText &&
                        <View style={Mystyle.countTotal}>
                            <Text style={Mystyle.rightText}>{rightText}</Text>
                        </View>
                    }
                </TouchableOpacity>
            </View>
            <View style={Mystyle.seprator} />
        </View>
    )

}


const Mystyle = StyleSheet.create({
    container: {
        width: '100%',
        height: DeviceDimension.height/10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        alignContent: 'space-between',
    },
    seprator: {
        height: 1,
        backgroundColor: COLOR.sepratorColor,
        width: '100%'
    },
    countTotal: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 5,
        backgroundColor: COLOR.totalCount
    },
    nameContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    },
    nameTxt: {
        fontSize: getFontSize(20),
        fontWeight: '500'
    },
    leftIcon: {
        alignItems: 'flex-start',
        marginLeft: 20
    },
    rightIcon: {
        alignItems: 'flex-end',
        marginRight: 20
    },
    rightText: {
        color: COLOR.white,
        fontSize: getFontSize(20)
    }
})

Header.defaultProps = {
    name: "Password",
    leftIcon: 'user',
    rightIcon: 'plus',
    isLeft: true,
    isRightText: false,
    isRight: true,
    rightText: 0,
    leftClick: () => { },
    rightClick: () => { },
}

export default memo(Header);
