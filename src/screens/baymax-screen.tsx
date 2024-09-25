import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import  { useSharedValue, withTiming } from 'react-native-reanimated';
import { Colors } from '../utils/constants';
import Background from '../components/baymax/background';
import Loading from '../components/baymax/loading';
import BigHero6 from '../components/baymax/big-hero6';

const BaymaxScreen = () => {
  const[showInstruction,setShowInstruction] = useState(false)
  const[showLoader,setShowLoader] = useState(true)
  const[showMessage,setShowMessage] = useState('')
  const[showPedometer,setShowPedometer] = useState(false)
  const blurOpacity = useSharedValue(0); 

  useEffect(() => {
    blurOpacity.value = withTiming(10, { duration: 2500 }); 
  }, [blurOpacity]);

  return (
    <View style={styles.backGroundContainer}>
      {
        showLoader && (
          <View style={styles.loader}>
            <Loading />
          </View>
        )
      }
      {
        !showInstruction && (
          <BigHero6 onPress={()=>{}}/>
        )
      }
      <Background blurOpacity={blurOpacity} />
    </View>
  );
};

const styles = StyleSheet.create({
  backGroundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  loader:{
    position:'absolute'
  }
});

export default BaymaxScreen;
