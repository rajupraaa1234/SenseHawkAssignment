import React, { useState, memo, useEffect } from 'react';
import { chicken } from '@images';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { getAsValue , getFontSize ,DeviceDimension } from '@utils';
import { COLOR } from '@constants';

const FoodRenderItem = (props) => {
    const { data, initialCount, onClick } = props;
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        getInitialSelectedItem();
    }, [])

    const onAddClick = () => {
        setCount(count + 1);
        onClick(count + 1);
    }
    const onRemove = () => {
        setCount(count - 1);
        onClick(count - 1);
    }
    const Initialbutton = () => {
        return (
            <TouchableOpacity style={styles.initialbtn} onPress={onAddClick}>
                <Text style={{ color: COLOR.white }}>Add</Text>
            </TouchableOpacity>
        )
    }
    const getInitialSelectedItem = async () => {
        const userData = await getAsValue('data');
        let olderData = JSON.parse(userData);
        for (let item of olderData) {
            if (`${item.id}` == `${data.item.id}`) {
                setCount(item.count);
                return;
            }
        }
        return 0;
    }
    const renderGroupBtn = () => {
        return (
            <View style={styles.addRemoveBtnGrp}>
                <TouchableOpacity style={styles.initialbtn} onPress={onAddClick}>
                    <Text style={{ color: COLOR.white }}>+</Text>
                </TouchableOpacity>
                <View style={styles.numberOfItem}>
                    <Text style={styles.itemNumberText}>{count}</Text>
                </View>
                <TouchableOpacity style={styles.initialbtn} onPress={onRemove}>
                    <Text style={{ color: COLOR.white }}>--</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            <View style={styles.mainCardView}>
                <View style={styles.cardInner}>
                    <View style={styles.subCardView}>
                        <Image
                            source={chicken}
                            resizeMode="contain"
                            style={styles.imagecontainer}
                        />
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <Text
                            style={styles.restroName}>
                            {data.item.name}
                        </Text>
                        <View
                            style={styles.distance}>
                            <Text
                                style={{
                                    color: COLOR.gray,
                                    fontSize: getFontSize(12),
                                }}>
                                {data.item.description}
                            </Text>
                            <Text
                                style={[styles.restroName, { marginTop: 5 }]}>
                                {`${data.item.price} Rs`}
                            </Text>
                        </View>

                        <View style={styles.addBtngrp}>
                            {count == 0 ? Initialbutton() : renderGroupBtn()}
                        </View>

                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View
                        style={styles.rating}>
                        <Text style={{ color: COLOR.white }}>
                            {data.item.rating}
                        </Text>
                    </View>

                </View>
            </View>
        </View>
    )
};
FoodRenderItem.defaultProps = {
    initialCount: 0,
    onClick: () => { }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    innerContainer: {
        margin: 5,
        marginBottom: 40
    },
    cardInner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagecontainer: {
        borderRadius: 25,
        height: 60,
        width: 60,
    },
    restroName: {
        fontSize: getFontSize(14),
        color: COLOR.black,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    distance: {
        marginTop: 4,
        borderWidth: 0,
        width: '85%',
    },
    rating: {
        height: DeviceDimension.height/30,
        backgroundColor: COLOR.pink,
        borderWidth: 0,
        width: DeviceDimension.height/30,
        marginLeft: -26,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    mainCardView: {
        height: DeviceDimension.height/5,
        alignItems: 'center',
        backgroundColor: COLOR.white,
        borderRadius: 15,
        shadowColor: COLOR.gray,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
    },
    subCardView: {
        height: DeviceDimension.height/15,
        width: DeviceDimension.height/15,
        borderRadius: 25,
        backgroundColor: COLOR.black,
        borderColor: COLOR.gray,
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
    },
    initialbtn: {
        width: 60,
        height: 35,
        backgroundColor: COLOR.inmitialBtnColor,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addBtngrp: {
        width: 120,
        height: 40,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    addRemoveBtnGrp: {
        width: 140,
        borderRadius: 5,
        height: 35,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    numberOfItem: {
        height: 35,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemNumberText: {
        color: COLOR.gray,
        fontSize: getFontSize(15)
    }
});

export default memo(FoodRenderItem);
