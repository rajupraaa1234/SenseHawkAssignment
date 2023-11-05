import { StyleSheet } from "react-native";
import { DeviceDimension , getFontSize } from '@utils';
import { COLOR } from '@constants';

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: COLOR.lightGray,
    },
    itemName: {
        fontSize: getFontSize(16),
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: getFontSize(16),
        color: COLOR.black,
        fontWeight: "600"
    },
    totalContainer: {
        marginTop: 20,
        margin: 10,
        padding: 16
    },
    payBtnCont: {
        margin: 10,
        padding: 16
    },
    emptyListInstruction: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    listContainer: {
        margin: 10,
        height: DeviceDimension.height / 2
    }
});

export default styles;

