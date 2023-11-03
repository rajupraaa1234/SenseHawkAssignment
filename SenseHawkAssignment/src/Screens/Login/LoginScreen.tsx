import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { Tracker } from '@images';
import TextInput from "react-native-text-input-interactive";
import { CustomButton } from '@components';
import { STRING } from '@constants';
import { DeviceDimension } from '@utils';
import style from './style'

const LoginScreen = (props: any) => {
  const [page, setPage] = useState(0);    // 0 for Login , 1 for Signup
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [PageButton, setPageButton] = useState(false);
  const [submitBtn, setSubmitBtn] = useState(false);
  const [loader, setLoader] = useState(false);

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

  const login = async () => {

  }

  const signUp = async () => {

  }

  const onSubmit = () => {

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