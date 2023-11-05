import React, { useState, useEffect } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import { Header, FoodRenderItem } from '@components';
import { getAsValue, setAsValue, foodListData } from '@utils';


const FoodListScreen = (props: any) => {
    const receivedData = props.route.params ? props.route.params.restroData : null;
    const id = receivedData.item.id;
    const foodData = foodListData.slice(id * 5 - 5, id * 5);
    const [total, setTotal] = useState(0);
    const goBack = () => {
        props.navigation.goBack();
    }

    useEffect(() => {
        calculateTotal();
    }, [])

    const calculateTotal = async () => {
        try {
            const userData = await getAsValue('data');
            let olderData = JSON.parse(userData);
            let totalPrice = 0;
            olderData.map(item => {
                totalPrice = totalPrice + item.price * item.count;
            });
            setTotal(totalPrice.toFixed(2));
        } catch (error) {
            console.log(error)
        }
    }
    const onAddAndRemove = async (data, count) => {
        try {
            const userData = await getAsValue('data');
            let isAvailable = false;
            if (userData) {
                let olderData = JSON.parse(userData);
                let newData = olderData.map((item) => {
                    if (`${item.id}` == `${data.item.id}`) {
                        if (item.count > count) {
                            item.count--;
                        } else {
                            item.count++;
                        }
                        isAvailable = true;
                    }
                    return item;
                });
                if (!isAvailable) {
                    let newobj = {
                        ...data.item,
                        ["count"]: 1,
                    }
                    let olderData = JSON.parse(userData);
                    olderData.push(newobj);
                    await setAsValue("data", JSON.stringify(olderData));
                } else {
                    await setAsValue("data", JSON.stringify(newData));
                }
            } else {
                let newobj = {
                    ...data.item,
                    ["count"]: 1,
                }
                let updateData = [];
                updateData.push(newobj);
                await setAsValue("data", JSON.stringify(updateData))
            }
            calculateTotal();
        } catch (error) {
            console.log(error)
        }

    }
    const renderItem = (data: any) => {
        return (
            <FoodRenderItem data={data} initialCount={0} onClick={(count) => onAddAndRemove(data, count)} />
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <Header isLeft={true} leftIcon={"step-backward"} name={receivedData.item.name} leftClick={goBack} isRight={false} rightText={total} isRightText={true} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View>
                    <FlatList
                        data={foodData}
                        keyExtractor={index => index}
                        renderItem={renderItem}
                    />

                </View>
            </ScrollView>
        </View>

    )
}

export default FoodListScreen;