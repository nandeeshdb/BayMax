import React, { FC } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { screenHeight, screenWidth } from '../../utils/scaling';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { BlurView } from '@react-native-community/blur';

const Background: FC<{ blurOpacity: Animated.SharedValue<number> }> = ({ blurOpacity }) => {
  // Create animated style based on opacity value
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: blurOpacity.value, // Access SharedValue for opacity
    };
  });

  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../../assets/images/baymax.png')}
        style={styles.image}
      />
      {/* Use Animated.View with animatedStyle */}
      <Animated.View style={[styles.absolute, animatedStyle]}>
        <BlurView
          style={styles.absolute}
          blurType="ultraThinMaterial"
          blurAmount={2}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
    height: screenHeight * 1.2,
    width: screenWidth,
    zIndex: -1,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    bottom: -screenHeight * 0.2,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    height: '100%',
  },
});

export default Background;
