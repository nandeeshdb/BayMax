import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Image} from 'react-native';
import {screenHeight, screenWidth} from '../utils/scaling';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../components/global/custom-text';
import LottieView from 'lottie-react-native';
import {Colors, Fonts, lightColors} from '../utils/constants';
import {initializeTtsListener} from '../utils/tts-listener';
import Tts from 'react-native-tts';
import {resetAndNavigate} from '../utils/navigation';

const bottomColors = [...lightColors].reverse();

const SplashScreen = () => {
  const bayMaxAnimataion = useSharedValue(screenHeight * 0.8);
  const messageContainerAnimation = useSharedValue(screenHeight * 0.8);

  const animateImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(bayMaxAnimataion.value, {duration: 1500}),
        },
      ],
    };
  });

  const animateMessageContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(messageContainerAnimation.value, {
            duration: 1500,
          }),
        },
      ],
    };
  });

  const launchAnimation = async () => {
    (messageContainerAnimation.value = screenHeight * 0.02),
      setTimeout(() => {
        bayMaxAnimataion.value = -screenHeight * 0.002;

        Tts.speak('Hello!, I am Baymax your personal health companion');
      }, 1000);

    setTimeout(() => {
      resetAndNavigate('BaymaxScreen');
    }, 6000);
  };

  useEffect(() => {
    launchAnimation();
    initializeTtsListener();
  });
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.imageContainer, animateImageStyle]}>
        <Image
          source={require('../assets/images/launch.png')}
          style={styles.image}
        />
      </Animated.View>

      <Animated.View
        style={[styles.gradientContainer, animateMessageContainerStyle]}>
        <LinearGradient colors={bottomColors} style={styles.gradient}>
          <View style={styles.textContainer}>
            <CustomText fontSize={34} fontFamily={Fonts.Theme}>
              BayMax
            </CustomText>
            <LottieView
              source={require('../assets/animations/sync.json')}
              style={{height: 100, width: 280}}
              autoPlay={true}
              loop
            />
            <CustomText>Synconix</CustomText>
          </View>
        </LinearGradient>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  imageContainer: {
    width: screenWidth - 20,
    height: screenHeight * 0.5,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  gradientContainer: {
    position: 'absolute',
    height: '35%',
    bottom: 0,
    width: '100%',
  },
  gradient: {
    width: '100%',
    height: '100%',
    paddingTop: 30,
  },
  textContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    borderRadius: 20,
    padding: 20,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
