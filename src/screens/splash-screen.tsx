import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {navigate} from '../utils/navigation';

const SplashScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigate('BaymaxScreen')}>
        <Text
          style={{
            color: '#000000',
          }}>
          Go to baymax
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SplashScreen;
