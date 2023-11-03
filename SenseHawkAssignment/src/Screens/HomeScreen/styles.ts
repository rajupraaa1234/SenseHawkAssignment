import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    innerContainer: {
        margin: 5,
        marginBottom: 40
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
        fontSize: 14,
        color: 'black',
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
        backgroundColor: 'pink',
        borderWidth: 0,
        width: 30,
        marginLeft: -26,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    mainCardView: {
        height: 120,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: 'gray',
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
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'black',
        borderColor: 'gray',
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
