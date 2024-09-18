import Tts from 'react-native-tts';

export const initializeTtsListener = async () => {
  Tts.getInitStatus().then(
    () => {
      console.log('ALL OKAY');
    },
    err => {
      if (err.code === 'no_engine') {
        console.log('No engine');
        Tts.requestInstallEngine();
      }
    },
  );
  Tts.setIgnoreSilentSwitch('ignore');
  Tts.addEventListener('tts-start', event => {
    console.log(event);
  });
  Tts.addEventListener('tts-progress', event => {
    console.log('TTS Started', event);
  });
//   Tts.addEventListener('tts-progress', event => {
//     console.log('TTS in progress', event);
//   });
  Tts.addEventListener('tts-error', event => {
    console.log('TTS-error', event);
  });
  Tts.addEventListener('tts-cancel', event => {
    console.log('TTS-cancel', event);
  });
};
