import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableWithoutFeedback, Image } from 'react-native';
import { Header } from '@components';
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
      await clearStorage();
      props.navigation.navigate("LoginScreen")
   }
   const renderItem = (data) => {
      return (
         <View>
            <TouchableWithoutFeedback
               onPress={() => {
                  //this.redirectToChatConverstion(item);
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
      <View>
         <Header isLeft={true} leftIcon={"sign-out"} name={user} leftClick={onLogout} rightIcon={"shopping-cart"}/>
         <View style={styles.innerContainer}>
            <FlatList
               data={restaurantlist}
               keyExtractor={index => index}
               renderItem={renderItem}
            />
         </View>

      </View>
   )
}



export default HomeScreen;