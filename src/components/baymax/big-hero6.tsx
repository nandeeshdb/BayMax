import {View, Text, StyleSheet, Animated} from 'react-native';
import React, {FC, useEffect, useRef} from 'react';
import {screenHeight, screenWidth} from '../../utils/scaling';
import {bigHero6Data} from '../../utils/data';
import Water from '../optional/water';

const BigHero6: FC<{onPress: (type: string) => void}> = ({onPress}) => {
  const animatedValues = useRef(
    [...Array(6)].map(() => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    Animated.stagger(
      100,
      animatedValues.map((animatedValue, index) =>
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
          delay: index * 200,
        }),
      ),
    ).start();
  }, []);
  return (
    <View style={styles.circle}>
      {bigHero6Data.map((item, index) => {
        const angle = (index / 6) * 2 * Math.PI;
        const y = screenWidth * 0.35 * Math.sin(angle);
        const x = screenWidth * 0.35 * Math.cos(angle);
        const translateX = animatedValues[index].interpolate({
          inputRange: [0, 1],
          outputRange: [0, x],
        });
        const translateY = animatedValues[index].interpolate({
          inputRange: [0, 1],
          outputRange: [0, y],
        });
        return (
          <Animated.View
            key={index}
            style={[
              styles.item,
              {
                transform: [{translateX}, {translateY}],
              },
            ]}>
            {item === 'water' && <Water />}
            {item !== 'water' && <Text>aa</Text>}
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 400,
  },
});

export default BigHero6;
