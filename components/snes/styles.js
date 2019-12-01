import { StyleSheet } from 'react-native';

const styles = {
    containerStyles: StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#BDBDBD',
            flexDirection: 'column',
        },
        containerCenter: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 40,
            paddingLeft: 100,
            paddingRight: 100,
            paddingBottom: 40,
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
        startButton: {
          backgroundColor: '#000',
          borderRadius: 15,
          width: 75,
          height: 50,
          marginRight: 5,
        },
        selectButton: {
          backgroundColor: '#000',
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
          backgroundColor: '#000',
        },
        aButton: {
          backgroundColor: '#F44336',
          borderRadius: 40,
          width: 80,
          height: 80,
        },
        bButton: {
          backgroundColor: '#FDD835',
          borderRadius: 40,
          width: 80,
          height: 80,
        },
        xButton: {
          backgroundColor: '#0D47A1',
          borderRadius: 40,
          width: 80,
          height: 80,
        },
        yButton: {
          backgroundColor: '#2E7D32',
          borderRadius: 40,
          width: 80,
          height: 80,
        },
        upArrowKey: {
          backgroundColor: '#000',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          width: 80,
          height: 80,
        },
        downArrowKey: {
          backgroundColor: '#000',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          width: 80,
          height: 80,
        },
        leftArrowKey: {
          backgroundColor: '#000',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 0,
          width: 80,
          height: 80,
        },
        rightArrowKey: {
          backgroundColor: '#000',
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
