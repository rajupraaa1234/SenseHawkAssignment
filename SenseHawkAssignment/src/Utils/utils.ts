import { PixelRatio, Dimensions } from 'react-native';

const tabletThresholdWidth = 600; // Adjust as needed
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

const DeviceDimension = { height: Dimensions.get("window").height, width: Dimensions.get("window").width };

const isTablet = Dimensions.get("window").width >= tabletThresholdWidth ? true : false;

export {
    getFontSize,
    DeviceDimension,
    isTablet
}