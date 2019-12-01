

import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NOOP } from '../../utils';
import Styles from './styles';
import Config from './config';

export default class NES extends React.Component {
  constructor(props) {
    super(props);
  }

  handleButtonClick(keyId) {
    console.log(keyId);
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
        <View style={Styles.containerStyles.containerCenter}>
          <View style={Styles.containerStyles.containerArrowKeys}>
            <View style={{ flexDirection: 'row' }}>
              {this.getHiddenPlaceholder()}
              <Button
                title={Config.UpArrowKey.text}
                buttonStyle={Styles.buttonStyles.upArrowKey}
                onPressIn={() => this.handleButtonClick(Config.UpArrowKey.keyId)}
                onPress={NOOP}
              />
              {this.getHiddenPlaceholder()}
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button
                title={Config.LeftArrowKey.text}
                buttonStyle={Styles.buttonStyles.leftArrowKey}
                onPressIn={() => this.handleButtonClick(Config.LeftArrowKey.keyId)}
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
                onPressIn={() => this.handleButtonClick(Config.RightArrowKey.keyId)}
                onPress={NOOP}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              {this.getHiddenPlaceholder()}
              <Button
                title={Config.DownArrowKey.text}
                buttonStyle={Styles.buttonStyles.downArrowKey}
                onPressIn={() => this.handleButtonClick(Config.DownArrowKey.keyId)}
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
                onPressIn={() => this.handleButtonClick(Config.AButton.keyId)}
                onPress={NOOP}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button
                title={Config.BButton.text}
                buttonStyle={Styles.buttonStyles.bButton}
                onPressIn={() => this.handleButtonClick(Config.BButton.keyId)}
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
            onPressIn={() => this.handleButtonClick(Config.StartButton.keyId)}
            onPress={NOOP}
          />
          <Button
            title={Config.SelectButton.text}
            buttonStyle={Styles.buttonStyles.selectButton}
            onPressIn={() => this.handleButtonClick(Config.SelectButton.keyId)}
            onPress={NOOP}
          />
        </View>
      </View>
    );
  }
}
