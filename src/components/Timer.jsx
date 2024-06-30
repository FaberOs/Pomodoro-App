import {Text, View, StyleSheet} from 'react-native';

export default function Timer({time, currentTime}) {
  const FontColors = ['#1C3236', '#40170F', '#231630'];

  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');

  return (
    <View style={[styles.container, {borderColor: FontColors[currentTime]}]}>
      <View style={styles.timerContainer}>
        <Text
          style={[
            styles.time,
            {
              color: FontColors[currentTime],
              marginBottom: -100,
              marginTop: -40,
            },
          ]}>
          {minutes}
        </Text>
        <Text
          style={[
            styles.time,
            {color: FontColors[currentTime], marginBottom: -30},
          ]}>
          {seconds}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderBottomWidth: 8,
    paddingHorizontal: 40,
  },
  timerContainer: {
    alignItems: 'center',
    minWidth: 200,
  },
  time: {
    fontFamily: 'Bricolage Grotesque ExtraBold',
    fontSize: 140,
    textAlign: 'center',
  },
});
