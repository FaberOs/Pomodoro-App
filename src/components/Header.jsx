import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FontColors = ['#1C3236', '#40170F', '#231630'];
const BgColors = ['#B7D4DA', '#F3C4CD', '#C8BEFD'];
const options = [
  {
    name: 'Pomodoro',
    icon: <FontAwesome5 name="stopwatch" size={25} color="#1C3236" />,
  },
  {
    name: 'Short Break',
    icon: <FontAwesome5 name="coffee" size={25} color="#40170F" />,
  },
  {
    name: 'Long Break',
    icon: <FontAwesome5 name="leaf" size={25} color="#231630" />,
  },
];

export default function Header({setTime, currentTime, setCurrentTime}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePress(index) {
    const newTime = index === 0 ? 25 * 60 : index === 1 ? 5 * 60 : 15 * 60;
    setCurrentIndex(index);
    setCurrentTime(index);
    setTime(newTime);
  }

  function handlePrev() {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      handlePress(newIndex);
    }
  }

  function handleNext() {
    if (currentIndex < options.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      handlePress(newIndex);
    }
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePrev}
        disabled={currentIndex === 0}
        style={({pressed}) => [
          styles.navButton,
          {borderColor: currentIndex === 0 ? '#B4C1C7' : '#333333'},
          pressed && {
            backgroundColor: 'black',
            borderBottomWidth: 0,
            transform: [{translateY: 4}],
          },
        ]}>
        <Entypo
          name={'controller-fast-backward'}
          size={25}
          color={currentIndex === 0 ? '#B4C1C7' : '#333333'}
        />
      </Pressable>
      <View
        style={[
          styles.optionContainer,
          {
            borderColor: FontColors[currentTime],
            backgroundColor: BgColors[currentTime],
          },
        ]}>
        {options[currentIndex].icon}
        <Text style={[styles.optionText, {color: FontColors[currentTime]}]}>
          {options[currentIndex].name}
        </Text>
      </View>
      <Pressable
        onPress={handleNext}
        disabled={currentIndex === options.length - 1}
        style={({pressed}) => [
          styles.navButton,
          {
            borderColor:
              currentIndex === options.length - 1 ? '#B4C1C7' : '#333333',
          },
          pressed && {
            backgroundColor: 'black',
            borderBottomWidth: 0,
            transform: [{translateY: 4}],
          },
        ]}>
        <Entypo
          name={'controller-fast-forward'}
          size={25}
          color={currentIndex === options.length - 1 ? '#B4C1C7' : '#333333'}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  navButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderBottomWidth: 7,
  },
  optionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderBottomWidth: 7,
  },
  optionText: {
    fontFamily: 'Bricolage Grotesque SemiBold',
    color: '#000',
    fontSize: 25,
    marginLeft: 10,
  },
});
