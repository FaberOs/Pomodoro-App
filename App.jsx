import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Modal, Pressable} from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import Styles from './src/styles/AppStyles';

const BgColors = ['#E1EDEF', '#FBEAED', '#EAE6FE'];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const initialTimes = [25 * 60, 5 * 60, 15 * 60];

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setShowModal(true);
      setTime(initialTimes[currentTime]);
    }

    return () => clearInterval(interval);
  }, [isActive, time, currentTime]);

  function handleStartStop() {
    setIsActive(!isActive);
  }

  const getModalMessage = () => {
    if (currentTime === 0) {
      return '¡Felicidades por tu esfuerzo! Hora de un descanso';
    } else {
      return 'Pausa terminada, ¡hora de volver a concentrarse!';
    }
  };

  return (
    <SafeAreaView
      style={[Styles.container, {backgroundColor: BgColors[currentTime]}]}>
      <View style={Styles.innerContainer}>
        <Header
          setTime={setTime}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
        <Timer time={time} currentTime={currentTime} />
        <Pressable
          onPress={handleStartStop}
          style={({pressed}) => [
            Styles.button,
            pressed && {
              backgroundColor: 'black',
              borderBottomWidth: 0,
              transform: [{translateY: 4}],
            },
          ]}>
          {({pressed}) => {
            return (
              <Text style={[Styles.textButton, pressed && {color: 'white'}]}>
                {isActive ? 'STOP' : 'START'}
              </Text>
            );
          }}
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}>
        <View style={Styles.modalOverlay}>
          <View style={Styles.modalView}>
            <View style={Styles.modalTextContainer}>
              <Text style={Styles.modalText}>{getModalMessage()}</Text>
            </View>
            <View style={Styles.modalDivider} />
            <View style={Styles.modalButtonContainer}>
              <Pressable
                onPress={() => setShowModal(false)}
                style={({pressed}) => [
                  Styles.button,
                  {backgroundColor: '#B7D4DA', borderColor: '#1C3236'},
                  pressed && {
                    backgroundColor: '#1C3236',
                    borderBottomWidth: 0,
                    transform: [{translateY: 4}],
                  },
                ]}>
                {({pressed}) => {
                  return (
                    <Text
                      style={[
                        Styles.textButton,
                        {color: '#1C3236'},
                        pressed && {color: 'white'},
                      ]}>
                      Cerrar
                    </Text>
                  );
                }}
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
