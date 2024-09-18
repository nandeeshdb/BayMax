import {View} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icons name="arrow-down" size={RFValue(20)} color="black" />
    </View>
  );
};

export default App;
