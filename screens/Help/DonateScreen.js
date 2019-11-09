import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { MonoText } from '../../components/common/StyledText';

export default class DonateScreen extends Component {
  static navigationOptions = {
    title: 'Be a part of PencilPen',
  };

  render() {
    return (
      <WebView
        source={{ uri: 'https://pencilpen.org/support-one-girl/' }}
        startInLoadingState={true}
        renderLoading={() => (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <ActivityIndicator style={{ margin: 20 }} />
            <MonoText>Trying to reach PencilPen</MonoText>
          </View>
        )}
        renderError={() => (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <MonoText>Sorry !! We could not reach PencilPen right now !!</MonoText>
          </View>
        )}
      />
    );
  }
}