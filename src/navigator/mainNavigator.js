import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile60275Navigator from '../features/UserProfile60275/navigator';
import Maps60256Navigator from '../features/Maps60256/navigator';
import Settings60234Navigator from '../features/Settings60234/navigator';
import Settings60219Navigator from '../features/Settings60219/navigator';
import NotificationList60218Navigator from '../features/NotificationList60218/navigator';
import Maps60217Navigator from '../features/Maps60217/navigator';
import UserProfile60167Navigator from '../features/UserProfile60167/navigator';
import Maps60148Navigator from '../features/Maps60148/navigator';
import Settings60126Navigator from '../features/Settings60126/navigator';
import Settings60111Navigator from '../features/Settings60111/navigator';
import NotificationList60110Navigator from '../features/NotificationList60110/navigator';
import Maps60109Navigator from '../features/Maps60109/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile60275: { screen: UserProfile60275Navigator },
Maps60256: { screen: Maps60256Navigator },
Settings60234: { screen: Settings60234Navigator },
Settings60219: { screen: Settings60219Navigator },
NotificationList60218: { screen: NotificationList60218Navigator },
Maps60217: { screen: Maps60217Navigator },
UserProfile60167: { screen: UserProfile60167Navigator },
Maps60148: { screen: Maps60148Navigator },
Settings60126: { screen: Settings60126Navigator },
Settings60111: { screen: Settings60111Navigator },
NotificationList60110: { screen: NotificationList60110Navigator },
Maps60109: { screen: Maps60109Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
