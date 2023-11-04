import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';
import { Header } from '@components';
import auth from '@react-native-firebase/auth';
import { restro } from '@images';
import { getAsValue, clearStorage, restaurantlist } from '@utils';
import styles from './styles';

const HomeScreen = (props) => {
   const [user, setUser] = useState('');
   useEffect(() => {
      checkUserSession();
   }, [])

   const checkUserSession = async () => {
      const user = await getAsValue("username");
      setUser(`Hey, ${user}`);
   }
   const onLogout = async () => {
      try {
         auth()
            .signOut()
            .then(() => console.log('User signed out!'));
         await clearStorage();
         props.navigation.navigate("LoginScreen")
      } catch (error) {
         console.log(error)
      }
   }

   const onCartClick = () => {
      props.navigation.navigate("AddToCartScreen");
   }

   const renderItem = (data) => {
      return (
         <View>
            <TouchableWithoutFeedback
               onPress={() => {
                  props.navigation.navigate("FoodListScreen", { restroData: data });
               }}>
               <View style={styles.mainCardView}>
                  <View style={styles.cardInner}>
                     <View style={styles.subCardView}>
                        <Image
                           source={restro}
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
                                 color: 'gray',
                                 fontSize: 12,
                              }}>
                              {data.item.distance}
                           </Text>
                        </View>
                     </View>
                  </View>
                  <View
                     style={styles.rating}>
                     <Text style={{ color: 'white' }}>
                        {data.item.rating}
                     </Text>
                  </View>
               </View>
            </TouchableWithoutFeedback>
         </View>
      )
   }
   return (
      <View style={{ flex: 1 }}>
         <Header isLeft={true} leftIcon={"sign-out"} name={user} leftClick={onLogout} rightClick={onCartClick} rightIcon={"shopping-cart"} />
         <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.innerContainer}>
               <FlatList
                  data={restaurantlist}
                  keyExtractor={index => index}
                  renderItem={renderItem}
               />
            </View>
         </ScrollView>
      </View>
   )
}



export default HomeScreen;