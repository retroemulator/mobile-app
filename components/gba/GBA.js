
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NOOP, KEY_PRESS_MODE } from '../../utils';
import Styles from './styles';
import Config from './config';

export default class GBA extends React.Component {
  constructor(props) {
    super(props);
    this.keyPressed = {};
  }

  handleButtonPress(keyId) {
    this.props.connection.emit('keyPress', {
      consoleId: this.props.consoleId,
      mode: KEY_PRESS_MODE.KeyPress,
      keyId,
    });
  }

  handleButtonPressIn(keyId) {
    if (!this.keyPressed[keyId]) {
      this.keyPressed[keyId] = true;
      this.props.connection.emit('keyPress', {
        consoleId: this.props.consoleId,
        mode: KEY_PRESS_MODE.KeyPressIn,
        keyId,
      });
    }
  }

  handleButtonPressOut(keyId) {
    if (this.keyPressed[keyId]) {
      this.props.connection.emit('keyPress', {
        consoleId: this.props.consoleId,
        mode: KEY_PRESS_MODE.KeyPressOut,
        keyId,
      });
      this.keyPressed[keyId] = false;
    }
  }

  getHiddenPlaceholder() {
    return (
      <Button
        buttonStyle={Styles.buttonStyles.buttonHidden}
        onPress={NOOP}
        disabled
      />
    );
  }

  render() {
    return (
      <View style={Styles.containerStyles.container}>
        <View style={Styles.containerStyles.containerTriggers}>
          <Button
            title={Config.LeftTrigger.text}
            buttonStyle={Styles.buttonStyles.leftTrigger}
            onPressIn={() => this.handleButtonPressIn(Config.LeftTrigger.keyId)}
            onPressOut={() => this.handleButtonPressOut(Config.LeftTrigger.keyId)}
            onPress={NOOP}
          />
          <Button
            title={Config.RightTrigger.text}
            buttonStyle={Styles.buttonStyles.rightTrigger}
            onPressIn={() => this.handleButtonPressIn(Config.RightTrigger.keyId)}
            onPressOut={() => this.handleButtonPressOut(Config.RightTrigger.keyId)}
            onPress={NOOP}
          />
        </View>

        <View style={Styles.containerStyles.containerCenter}>
          <View style={Styles.containerStyles.containerArrowKeys}>
            <View style={{ flexDirection: 'row' }}>
              {this.getHiddenPlaceholder()}
              <Button
                title={Config.UpArrowKey.text}
                buttonStyle={Styles.buttonStyles.upArrowKey}
                onPressIn={() => this.handleButtonPressIn(Config.UpArrowKey.keyId)}
                onPressOut={() => this.handleButtonPressOut(Config.UpArrowKey.keyId)}
                onPress={NOOP}
              />
              {this.getHiddenPlaceholder()}
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button
                title={Config.LeftArrowKey.text}
                buttonStyle={Styles.buttonStyles.leftArrowKey}
                onPressIn={() => this.handleButtonPressIn(Config.LeftArrowKey.keyId)}
                onPressOut={() => this.handleButtonPressOut(Config.LeftArrowKey.keyId)}
                onPress={NOOP}
              />
              <Button
                buttonStyle={Styles.buttonStyles.buttonMiddle}
                onPress={NOOP}
                disabled
                disabledStyle={Styles.buttonStyles.buttonMiddle}
              />
              <Button
                title={Config.RightArrowKey.text}
                buttonStyle={Styles.buttonStyles.rightArrowKey}
                onPressIn={() => this.handleButtonPressIn(Config.RightArrowKey.keyId)}
                onPressOut={() => this.handleButtonPressOut(Config.RightArrowKey.keyId)}
                onPress={NOOP}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              {this.getHiddenPlaceholder()}
              <Button
                title={Config.DownArrowKey.text}
                buttonStyle={Styles.buttonStyles.downArrowKey}
                onPressIn={() => this.handleButtonPressIn(Config.DownArrowKey.keyId)}
                onPressOut={() => this.handleButtonPressOut(Config.DownArrowKey.keyId)}
                onPress={NOOP}
              />
              {this.getHiddenPlaceholder()}
            </View>
          </View>

          <View style={Styles.containerStyles.containerAB}>
            <View style={{ flexDirection: 'row' }}>
              {this.getHiddenPlaceholder()}
              <Button
                title={Config.AButton.text}
                buttonStyle={Styles.buttonStyles.aButton}
                onPressIn={() => this.handleButtonPressIn(Config.AButton.keyId)}
                onPressOut={() => this.handleButtonPressOut(Config.AButton.keyId)}
                onPress={NOOP}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button
                title={Config.BButton.text}
                buttonStyle={Styles.buttonStyles.bButton}
                onPressIn={() => this.handleButtonPressIn(Config.BButton.keyId)}
                onPressOut={() => this.handleButtonPressOut(Config.BButton.keyId)}
                onPress={NOOP}
              />
              {this.getHiddenPlaceholder()}
            </View>
          </View>
        </View>

        <View style={Styles.containerStyles.containerStartSelect}>
          <Button
            title={Config.StartButton.text}
            buttonStyle={Styles.buttonStyles.startButton}
            onPress={() => this.handleButtonPress(Config.StartButton.keyId)}
          />
          <Button
            title={Config.SelectButton.text}
            buttonStyle={Styles.buttonStyles.selectButton}
            onPress={() => this.handleButtonPress(Config.SelectButton.keyId)}
          />
        </View>
      </View>
    );
  }
}
