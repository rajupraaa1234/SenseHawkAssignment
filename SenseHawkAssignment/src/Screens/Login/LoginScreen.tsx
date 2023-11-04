import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { Tracker } from '@images';
import TextInput from "react-native-text-input-interactive";
import { CustomButton } from '@components';
import { STRING } from '@constants';
import { DeviceDimension, isValidEmail, setAsValue } from '@utils';
import style from './style'
import { useToast } from "react-native-toast-notifications";
import auth from '@react-native-firebase/auth';

const LoginScreen = (props: any) => {
  const [page, setPage] = useState(0);    // 0 for Login , 1 for Signup
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [PageButton, setPageButton] = useState(false);
  const [submitBtn, setSubmitBtn] = useState(false);
  const [loader, setLoader] = useState(false);
  const Toast = useToast();

  const onStart = () => {
    setLoader(true);
    setPageButton(true);
    setSubmitBtn(true);
  }

  const onEnd = () => {
    setLoader(false);
    setPageButton(false);
    setSubmitBtn(false);
  }

  const showLoader = () => {
    setTimeout(() => {
      onEnd();
    }, 1000);
  }


  const redirectToHomeScreen = async () => {
    await setAsValue("username", username)
    props.navigation.navigate("HomeScreen")
  }

  const onSignUp = async () => {
    try {
      auth()
        .createUserWithEmailAndPassword(username, password)
        .then(() => {
          Toast.show("User account created & signed in!");
          onEnd();
          redirectToHomeScreen();
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Toast.show("That email address is already in use!");
          }
          if (error.code === 'auth/invalid-email') {
            Toast.show("That email address is invalid!");
          }
          onEnd();
          console.error(error);
        });
    } catch (error) {
      console.log(error);
      onEnd();
    }
  }
  const onLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(username, password);
      const user = userCredential.user;
      console.log('User signed in:', user.email);
      Toast.show("user logged in successfully!");
      onEnd();
      redirectToHomeScreen();
    }
    catch (error) {
      if (error.code === 'auth/wrong-password') {
        Toast.show("password incorrect!");
      }
      if (error.code === 'auth/invalid-login') {
        Toast.show("user not found!");
      }
      console.error('Error signing in:', error);
      onEnd();
    }
  }
  const onSubmit = () => {
    if (username.length == 0) {
      Toast.show("please enter email id");
      return;
    }
    if (password.length == 0) {
      Toast.show("please enter password");
      return;
    }
    if (!isValidEmail(username)) {
      Toast.show("email not valid");
    } else if (password.length < 6) {
      Toast.show("Password should be at least 6 characters");
    } else {
      onStart();
      if (page == 0) {
        onLogin();
      } else {
        onSignUp();
      }
    }
  }

  return (
    <ImageBackground source={Tracker} resizeMode="stretch" style={style.BackgroundStyle}>
      <View style={{ flex: 0.3 }} />
      <SafeAreaView style={style.container}>
        <ScrollView>
          <View>
            <View style={style.loginTextContainer}>
              <Text style={style.loginText}>{page == 0 ? STRING.login : STRING.signup}</Text>
            </View>
            <View style={[style.loginTextContainer, { marginRight: 30 }]}>
              <TextInput placeholder="username" textInputStyle={{ width: '100%' }} value={username} onChangeText={(text: string) => { setUserName(text) }} />
            </View>
            <View style={[style.loginTextContainer, { marginRight: 30 }]}>
              <TextInput secureTextEntry={true} placeholder="password" textInputStyle={{ width: '100%' }} value={password} onChangeText={(text: string) => { setPassword(text) }} />
            </View>
            <View style={{ marginTop: 60 }}>
              <CustomButton
                width={DeviceDimension.width - 50}
                height={45}
                onClick={() => { onSubmit() }}
                disabled={submitBtn}
                myStyle={style.submitBtnStyle}
                text={page == 0 ? STRING.login : STRING.signup}
              />
            </View>
            <TouchableOpacity disabled={PageButton} style={style.instructionsStyle} onPress={() => {
              if (page === 0) {
                setPage(1);
              } else {
                setPage(0);
              }
              setUserName('');
              setPassword('');
            }}>
              <Text style={{ color: 'blue' }}>{page == 0 ? STRING.dontHaveAccount : STRING.haveAccount}</Text>
            </TouchableOpacity>
          </View>
          <ActivityIndicator animating={loader} size="large" color="#0000ff" />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>

  )
};
export default LoginScreen;