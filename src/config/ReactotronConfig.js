import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NativeModules } from 'react-native';

const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host })
    .useReactNative()
    .connect();

  tron.clear();

  console.log = tron.log;
  console.error = tron.error;
  console.warn = tron.warn;
}
