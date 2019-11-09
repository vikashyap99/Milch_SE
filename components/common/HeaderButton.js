import React from 'react'
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

class HeaderButton extends React.Component {
  render() {
    const { newScreen, iconName } = this.props
    return (
      <TouchableOpacity
        style={{ margin: 10 }}
        onPress={() => this.props.navigation.navigate(newScreen)} >
        <Ionicons
          name={iconName}
          size={30}
          color='#222'
        />
      </TouchableOpacity>
    )
  }
}

export default withNavigation(HeaderButton)
