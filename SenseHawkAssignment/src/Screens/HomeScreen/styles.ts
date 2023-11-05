import { StyleSheet } from 'react-native';
import { COLOR } from '@constants';
import { getFontSize, DeviceDimension } from '@utils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    innerContainer: {
        margin: 5,
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
        height: 30,
        backgroundColor: COLOR.pink,
        borderWidth: 0,
        width: 30,
        marginLeft: -26,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    mainCardView: {
        height: DeviceDimension.height / 8,
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
        height: DeviceDimension.height / 15,
        width: DeviceDimension.height / 15,
        borderRadius: 25,
        backgroundColor: COLOR.black,
        borderColor: COLOR.gray,
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
