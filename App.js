import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import Button from './Component/Button';

const App = props => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
          height: Dimensions.get('window').height / 40,
          width: '95%',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity>
          <Image
            source={require('./Icon/angle-left.png')}
            style={{
              height: Dimensions.get('window').height / 30,
              width: Dimensions.get('window').width / 30,
              tintColor: '#5d5d5d',
              resizeMode: 'cover',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('./Icon/menu.png')}
            style={{
              height: Dimensions.get('window').width / 12,
              width: Dimensions.get('window').width / 14,
              tintColor: 'black',
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: 10}}>
        <View style={{marginVertical: 20}}>
          <Text style={{fontSize: 22, fontWeight: '500', color: 'black'}}>
            Shade Control
          </Text>
          <Text style={{fontSize: 12, color: '#9d9d9d'}}>Living Room</Text>
        </View>

        <Text
          style={{
            fontSize: 14,
            color: '#9d9d9d',
            fontWeight: '800',
            marginVertical: 5,
          }}>
          SCENES
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Button text="All Off" />
        <Button text="Bright" />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Button text="All Off" />
        <Button text="Bright" />
      </View>
      <Text
        style={{
          fontSize: 14,
          color: '#9d9d9d',
          fontWeight: '800',
          marginVertical: 5,
          marginHorizontal: 10,
        }}>
        GROUP CONTROLS
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            height: Dimensions.get('window').width / 6,
            width: '47%',
            backgroundColor: '#ffffff',
            justifyContent: 'space-around',
            alignItems: 'center',

            paddingHorizontal: 20,
            margin: 5,
          }}>
          <Text style={{fontSize: 14, color: '#9d9d9d'}}>More Open</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: Dimensions.get('window').width / 6,
            width: '47%',
            backgroundColor: '#ffffff',
            justifyContent: 'space-around',
            alignItems: 'center',

            paddingHorizontal: 20,
            margin: 5,
          }}>
          <Text style={{fontSize: 14, color: '#9d9d9d'}}>More Open</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 14,
          color: '#9d9d9d',
          fontWeight: '800',
          marginVertical: 5,
          marginHorizontal: 10,
        }}>
        CONTROLS
      </Text>
      <View
        style={{
          height: Dimensions.get('window').width / 6,
          width: '97%',
          backgroundColor: '#ffffff',

          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 20,
          margin: 5,
        }}>
        <Image
          source={require('./Icon/circle.png')}
          style={{
            height: Dimensions.get('window').height / 30,
            width: Dimensions.get('window').width / 15,
            tintColor: '#5d5d5d',
            marginHorizontal: 10,
            resizeMode: 'contain',
          }}
        />
        <View style={{marginHorizontal: 10}}>
          <Text
            style={{
              fontSize: 14,
              color: '#4d4d4d',
              fontWeight: '700',
            }}>
            CONTROLS
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#9d9d9d',
              fontWeight: '400',
            }}>
            OFF
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            height: Dimensions.get('window').width / 6,
            width: '30%',
            backgroundColor: '#ffffff',
            justifyContent: 'space-around',
            alignItems: 'center',

            paddingHorizontal: 20,
            margin: 5,
          }}>
          <Text style={{fontSize: 14, color: '#9d9d9d'}}>Open</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: Dimensions.get('window').width / 6,
            width: '30%',
            backgroundColor: '#ffffff',
            justifyContent: 'space-around',
            alignItems: 'center',

            paddingHorizontal: 20,
            margin: 5,
          }}>
          <Text style={{fontSize: 14, color: '#9d9d9d'}}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: Dimensions.get('window').width / 6,
            width: '30%',
            backgroundColor: '#ffffff',
            justifyContent: 'space-around',
            alignItems: 'center',

            paddingHorizontal: 20,
            margin: 5,
          }}>
          <Text style={{fontSize: 14, color: '#9d9d9d'}}>Close</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            height: Dimensions.get('window').width / 6,
            width: '47%',
            backgroundColor: '#ffffff',
            justifyContent: 'space-around',
            alignItems: 'center',

            paddingHorizontal: 20,
            margin: 5,
          }}>
          <Text style={{fontSize: 14, color: '#9d9d9d'}}>Blackout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: Dimensions.get('window').width / 6,
            width: '47%',
            backgroundColor: '#ffffff',
            justifyContent: 'space-around',
            alignItems: 'center',

            paddingHorizontal: 20,
            margin: 5,
          }}>
          <Text style={{fontSize: 14, color: '#9d9d9d'}}>Flip+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
