import { PixelRatio, Dimensions ,Platform, ToastAndroid , AlertIOS} from 'react-native';

const tabletThresholdWidth = 600; // Adjust as needed
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

const DeviceDimension = { height: Dimensions.get("window").height, width: Dimensions.get("window").width };

const isTablet = Dimensions.get("window").width >= tabletThresholdWidth ? true : false;

const isValidEmail = (email: string) => {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function notifyMessage(msg: string) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
      AlertIOS.alert(msg);
    }
}

export {
    getFontSize,
    DeviceDimension,
    isTablet,
    isValidEmail
}