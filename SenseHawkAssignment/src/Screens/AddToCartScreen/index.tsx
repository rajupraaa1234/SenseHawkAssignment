import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { Header, CustomButton } from '@components';
import { getAsValue, DeviceDimension } from '@utils';
import { useToast } from "react-native-toast-notifications";
import { styles } from './style';
import { STRING } from '@constants';

const AddToCartScreen = (props: any) => {
    const [OrderedData, setOrderedData] = useState([]);
    const [total, setTotal] = useState([]);
    const Toast = useToast();

    useEffect(() => {
        fetchAllAddedFoods();
    }, []);

    const fetchAllAddedFoods = async () => {
        const userData = await getAsValue('data');
        let foodData = JSON.parse(userData);
        let totalPrice: any = 0;
        if (foodData) {
            let checkForValidData = foodData.filter((item) => {
                if (item.count > 0) {
                    totalPrice = totalPrice + item.count * item.price;
                    return item;
                }
            });
            setTotal(totalPrice);
            setOrderedData(checkForValidData);
        }
    }
    const goBack = () => {
        props.navigation.goBack();
    }

    const renderItem = (data: any) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemName}>{data.item.name}</Text>
                <Text style={styles.itemName}>{data.item.count} X</Text>
                <Text style={styles.itemPrice}>Rs.{data.item.price}</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Header isLeft={true} leftIcon={"step-backward"} name={"Cart"} leftClick={goBack} isRight={false} />
            {OrderedData.length > 0 ? <View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={OrderedData}
                        keyExtractor={index => index}
                        renderItem={renderItem}
                    />
                </View>
                <View style={styles.totalContainer}>
                    <Text style={styles.itemPrice}>Total : {total}</Text>
                </View>
                <View style={styles.payBtnCont}>
                    <CustomButton
                        width={DeviceDimension.width - 50}
                        height={45}
                        onClick={() => { Toast.show("Payment Successfully!") }}
                        text={"Pay"}
                    />
                </View>
            </View> : <View style={styles.emptyListInstruction}>
                <Text style={styles.itemPrice}>{STRING.emptyCartInstruction}</Text>
            </View>}
        </View>
    )
}

export default AddToCartScreen;
