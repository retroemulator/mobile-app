import { StyleSheet } from 'react-native';

const styles = {
    containerStyles: StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#7E57C2',
            flexDirection: 'column',
        },
        containerTriggers: {
            flex: 1,
            flexDirection: 'row',
            top: 20,
            justifyContent: 'space-between',
            paddingLeft: 75,
            paddingRight: 75,
        },
        containerCenter: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 20,
            paddingLeft: 100,
            paddingRight: 100,
        },
        containerAB: {
            flexDirection: 'column'
        },
        containerStartSelect: {
            flex: 1,
            flexDirection: 'row',
            paddingLeft: 75,
            paddingRight: 75,
            justifyContent: 'center'
        },
    }),
    buttonStyles: StyleSheet.create({
        leftTrigger: {
          backgroundColor: '#BDBDBD',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          width: 150,
          height: 50,
        },
        rightTrigger: {
          backgroundColor: '#BDBDBD',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          width: 150,
          height: 50,
        },
        startButton: {
          backgroundColor: '#BDBDBD',
          borderRadius: 15,
          width: 75,
          height: 50,
          marginRight: 5,
        },
        selectButton: {
          backgroundColor: '#BDBDBD',
          borderRadius: 15,
          width: 75,
          height: 50,
          marginLeft: 5,
        },
        buttonHidden: {
          borderRadius: 0,
          width: 80,
          height: 80,
          opacity: 0,
        },
        buttonMiddle: {
          borderRadius: 0,
          width: 80,
          height: 80,
          backgroundColor: '#BDBDBD',
        },
        aButton: {
          backgroundColor: '#BDBDBD',
          borderRadius: 40,
          width: 80,
          height: 80,
        },
        bButton: {
          backgroundColor: '#BDBDBD',
          borderRadius: 40,
          width: 80,
          height: 80,
        },
        upArrowKey: {
          backgroundColor: '#BDBDBD',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          width: 80,
          height: 80,
        },
        downArrowKey: {
          backgroundColor: '#BDBDBD',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          width: 80,
          height: 80,
        },
        leftArrowKey: {
          backgroundColor: '#BDBDBD',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 0,
          width: 80,
          height: 80,
        },
        rightArrowKey: {
          backgroundColor: '#BDBDBD',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 15,
          width: 80,
          height: 80,
        },
    }),
};

export default styles;
