import { StyleSheet } from 'react-native';
import { COLOR } from '@constants';


const style = StyleSheet.create({
  container: {
    flex: 0.7,
    borderTopLeftRadius: 30,
    flexDirection: 'column',
    borderTopRightRadius: 30,
    backgroundColor: COLOR.white,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

  },
  BackgroundStyle: {
    height: '33%',
    width: '100%',
    flex: 1,
    backgroundColor: COLOR.blue,
  },
  loginText: {
    fontSize: 25,
    fontWeight: '500',
    color: COLOR.gray
  },
  loginTextContainer: {
    marginTop: 30,
    marginLeft: 30
  },
  instruction: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  instructionStyle: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 50,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  submitBtnStyle: {
    marginLeft: 30,
    marginRight: 30
  },
  instructionsStyle: {
    marginTop: 20,
    marginLeft: 30
  },
  InstructionTextStyle: {
    textAlign: 'center',
    color: COLOR.gray,
    marginHorizontal: 30
  }
})

export default style;