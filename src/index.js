import { AppRegistry } from 'react-native';

// app
import { name as appName } from '../app.json';
import { App } from 'components/App';

export const registerApp = () => {
  AppRegistry.registerComponent(appName, () => App);
};
