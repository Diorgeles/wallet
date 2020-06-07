import AsyncStorage from '@react-native-community/async-storage';

class StorageItem {
  constructor(private name: string) {}

  load = async () => await AsyncStorage.getItem(this.name);

  set = async (data: any) => AsyncStorage.setItem(this.name, data);

  remove = async () => AsyncStorage.removeItem(this.name);
}

class StorageObject {
  constructor(private name: string) {}

  load = async () => {
    const response = (await AsyncStorage.getItem(this.name)) as string;
    return JSON.parse(response);
  };

  set = async (data: any) =>
    AsyncStorage.setItem(this.name, JSON.stringify(data));

  remove = async () => AsyncStorage.removeItem(this.name);
}

export default Object.freeze({
  user: new StorageObject('user'),
  userToken: new StorageItem('userToken'),
  isFirstTime: new StorageItem('isFirstTime'),
  theme: new StorageObject('theme'),
});
