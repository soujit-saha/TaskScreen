import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Button = props => {
  return (
    <TouchableOpacity
      style={{
        height: Dimensions.get('window').width / 6,
        width: '47%',
        backgroundColor: '#ffffff',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        margin: 5,
      }}>
      <Image
        source={require('../Icon/rocket.png')}
        style={{
          height: Dimensions.get('window').height / 30,
          width: Dimensions.get('window').width / 15,
          tintColor: '#ab0000',
          resizeMode: 'contain',
        }}
      />
      <Text style={{fontSize: 14, color: '#9d9d9d'}}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
