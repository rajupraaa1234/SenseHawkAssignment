import { StyleSheet } from "react-native";
import { DeviceDimension } from '@utils';

export const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 16,
        color: 'black',
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

