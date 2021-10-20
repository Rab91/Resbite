/**
 * Resbite App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

// Import react createAppContainer and createStackNavigator to facilitate navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

// Import all the screens for navigation
import OnboardingScreen from './screens/OnboardingScreen';

import RegistrationScreen from './screens/RegistrationScreen';
import ProfileScreen from './screens/ProfileScreen';
import WorkLocation from './screens/WorkLocation';
import LoginScreen from './screens/LoginScreen';
import LoginVerification from './screens/LoginVerification';
import RegistrationVerification from './screens/RegistrationVerification';
import RegDetails from './screens/RegDetails';
import LoginEmail from './screens/LoginEmail';
import AccountRecovery from './screens/AccountRecovery';
import RegistrationEmail from './screens/RegistrationEmail';
import HomeLocation from './screens/HomeLocation';
import RecoveryLink from './screens/RecoveryLink';
import RecoveryVerification from './screens/RecoveryVerification';
import InvitingFriends from './screens/InvitingFriends';
import InvitationContact from './screens/InvitationContact';
import Code from './screens/Code';
import ChoosingResbite from './screens/ChoosingResbite';
import ResbiteName from './screens/ResbiteName';
import { Button } from 'react-native-paper';
import ResbiteDetail from './screens/ResbiteDetail';
import ResbiteMember from './screens/ResbiteMember';
import Schedule from './screens/Schedule';
import ScheduleDay from './screens/ScheduleDay';
import ScheduleDate from './screens/ScheduleDate';
import FindSchedule from './screens/FindSchedule';
import NotificationIcon from './screens/NotificationIcon';
import FavoriteIcon from './screens/FavoriteIcon';
import ResbiteIcon from './screens/ResbiteIcon';
import SaveLocation from './screens/SaveLocation';
import GroupContact from './screens/GroupContact';
import FishingIcon from './screens/FishingIcon';
import Household from './screens/Household';
import HouseIcon from './screens/HouseIcon';
import Place from './screens/Place';
import Filter from './screens/Filter';
import FilterIcon from './screens/FilterIcon';
import SplashScreen from './screens/SplashScreen';
import ResbiteShare from './screens/ResbiteShare';
import MoreResbites from './screens/MoreResbites';
import AddressPlace from './screens/AddressPlace';
import Summary from './screens/Summary';
import SuggestedResbites from './screens/SuggestedResbites';
import FilterMoreIcon from './screens/FilterMoreIcon';
import ResbiteInvitee from './screens/ResbiteInvitee';
import SettingsNotifications from './screens/SettingsNotifications';
import SettingsHelp from './screens/SettingsHelp';
import MyGroup from './screens/MyGroup';
import HouseholdGroup from './screens/HouseholdGroup';
import HouseholdIcon from './screens/HouseholdIcon';
import FishingGroup from './screens/FishingGroup';
import FishingGroupIcon from './screens/FishingGroupIcon';
import MemberContact from './screens/MemberContact';
import Connections from './screens/Connections';
import MyChildren from './screens/MyChildren';
import ChildDetails from './screens/ChildDetails';
import ChildDate from './screens/ChildDate';
import SavedPlaces from './screens/SavedPlaces';
import SavedPlacesIcon from './screens/SavedPlacesIcon';
import RepeatResbite from './screens/RepeatResbite';
import ChatIcon from './screens/ChatIcon';
import ScheduleResbite from './screens/ScheduleResbite';
import CloseIcon from './screens/CloseIcon';
import RepeatMember from './screens/RepeatMember';
import ScheduleIcon from './screens/ScheduleIcon';
import ResbiteNavigation from './screens/ResbiteNavigation';
import HomeScreen from './screens/HomeScreen';
import Home from './screens/Home';
import MyResbite from './screens/MyResbite';
import RepeatContact from './screens/RepeatContact';
import Done from './screens/Done';

// Use Functional components for all the screens in the App.js
const App = createStackNavigator({
    Splash:{
        screen: SplashScreen,
        navigationOptions:{
            headerShown: false,
        },
    },
    Onboarding: {
        screen: OnboardingScreen,
        navigationOptions:{
            headerShown: false,
        },
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions:{
            headerShown: false,
        },
    },
    
    Registration: {
        screen: RegistrationScreen,
        navigationOptions: {
            headerShown: false,
        },
    },
    RegistrationVerification: {
        screen: RegistrationVerification,
    },
    PersonalDetails: {
        screen: RegDetails,
        navigationOptions: {
            headerShown: false,
        },
    },
    RegistrationEmail: {
        screen: RegistrationEmail,
        navigationOptions: {
            headerShown: false,
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions:{
            headerShown: false,
        },
    },
    HomeLocation: {
        screen: HomeLocation,
        navigationOptions: {
            headerShown: false,
        },
    },
    WorkLocation: {
        screen: WorkLocation,
        navigationOptions: {
            headerShown: false,
        },
    },
    Login: {
        screen: LoginScreen,
        navigationOptions:{
            headerTitle: null,
        },
    },
    LoginVerification: {
        screen: LoginVerification,
        navigationOptions: {
            headerTitle: null,
            
        }
    },
    LoginEmail: {
        screen: LoginEmail,
        navigationOptions: {
            
            headerTitle: null
        }
    },
    AccountRecovery: {
        screen: AccountRecovery,
    },
    RecoveryLink: {
        screen: RecoveryLink,
         navigationOptions: {
            headerTitle: 'Account Recovery',
        },
    },
    RecoveryVerification: {
        screen: RecoveryVerification,
        navigationOptions: {
            headerShown: false,
        },
    },
    InvitingFriends: {
        screen: InvitingFriends,
        navigationOptions: {
            headerShown: false,
        },
    },
    InvitationContact: {
        screen: InvitationContact,
        navigationOptions: {
            headerTitle: 'Resbiters in your contact',
        },
    },
    Code: {
        screen:Code,
        navigationOptions: {
            headerShown: false,
        },
    },
    
    ChoosingResbite: {
        screen: ChoosingResbite,
        navigationOptions: {
            headerTitle: ()=> <ResbiteIcon/>,
            headerLeft: null,
            headerRight:()=> <NotificationIcon/>,  
        },
        
    },
    ResbiteName: {
        screen: ResbiteName,
        navigationOptions: {
            headerTitle: 'Fishing Weekend',
            headerRight: ()=> <FavoriteIcon/>,
        },
    },
    ResbiteDetail: {
        screen: ResbiteDetail,
    },
    ResbiteMember:{
        screen: ResbiteMember,
        navigationOptions:{
            headerTitle:'Fishing Buddies',
            headerTitleAlign: 'center',
            headerRight: ()=> <FishingIcon/>,
        },
    },
    Household: {
        screen: Household,
        navigationOptions: {
            headerTitleAlign: 'center',
            headerRight: ()=> <HouseIcon/>,
        },
    },
    ScheduleDate:{
        screen: ScheduleDate,
        navigationOptions: {
            headerTitle: 'Fishing Weekend',
            headerRight: ()=> <CloseIcon/>
        },
    },

    ScheduleDay: {
        screen: ScheduleDay,
         navigationOptions: {
            headerTitle: 'Fishing Weekend'
        },
    },
    Schedule: {
        screen: Schedule,
         navigationOptions: {
            headerTitle: 'Fishing Weekend',
            headerRight: ()=> <ScheduleIcon/>
        },
    },
    SaveLocation: {
        screen: SaveLocation,
    },
    FindSchedule:{
        screen: FindSchedule,
        navigationOptions: {
           headerTitle: 'Fishing Weekend',
            headerRight: ()=> <CloseIcon/>
        },
    },
    GroupContact: {
        screen: GroupContact,
        navigationOptions: {
            headerShown: false,
        },
    },
    FindPlace: {
        screen: Place,
         navigationOptions: {
            headerTitle: 'Fishing Weekend'
        },
    },
    AddressPlace: {
        screen: AddressPlace,
        navigationOptions: {
            headerTitle: 'Fishing Weekend',
            headerRight: ()=> <CloseIcon/>
        },
    },
    
    ResbiteShare: {
        screen: ResbiteShare,
         navigationOptions: {
            headerShown: false,
        },
    },
    ResbiteNavigation: {
        screen: ResbiteNavigation,
        navigationOptions: {
              headerShown: false,
        },
    },
    MoreResbites: {
        screen: MoreResbites,
         navigationOptions: {
            headerTitle: 'Fishing Weekend'
        },
    },
    Summary: {
        screen: Summary,
        navigationOptions: {
            headerTitle: 'Fishing Weekend'
        },
    },
    SuggestedResbites: {
        screen: SuggestedResbites,
         navigationOptions: {
            headerTitle: 'Suggested for you',
            headerRight: <FilterMoreIcon/>
        },
    },
    ResbiteInvitee: {
        screen: ResbiteInvitee,
        navigationOptions: {
            headerTitle: 'Fishing Weekend',
            headerLeft: null,
        },
    },
    SettingsNotifications: {
        screen: SettingsNotifications,
        navigationOptions: {
            headerTitle: 'Notifications'
        },
    },
    SettingsHelp: {
        screen: SettingsHelp,
        navigationOptions: {
            headerTitle: 'Help',
        }
    },
    MyGroup: {
        screen: MyGroup,
        navigationOptions: {
            headerTitle: 'My Groups'
        }
    },
    HouseholdGroup: {
        screen: HouseholdGroup,
        navigationOptions: {
            headerTitle: 'Household',
            headerTitleStyle: { alignSelf: 'center' },
            headerRight: ()=> <HouseholdIcon/>,

        }
    },
    FishingGroup: {
        screen: FishingGroup,
         navigationOptions: {
            headerTitle: 'Fishing Buddies',
            headerTitleStyle: { alignSelf: 'center' },
            headerRight: ()=> <FishingGroupIcon/>,
        }
    },
    MemberContact: {
        screen: MemberContact,
        navigationOptions: {
            headerTitle: 'Your phone contacts'
        }
    },
    Connections: {
        screen: Connections,
         navigationOptions: {
            headerTitle: 'Your connections'
        }
    },
    MyChildren: {
        screen: MyChildren,
        navigationOptions: {
            headerTitle: 'My Children'
        }
    },
    ChildDate: {
        screen: ChildDate,
        navigationOptions: {
            headerTitle: 'Children'
        }
    },
    ChildDetails: {
        screen: ChildDetails,
        navigationOptions: {
            headerTitle: 'Children'
        }
    },
    SavedPlaces: {
        screen: SavedPlaces,
         navigationOptions: {
            headerTitle: 'Saved Places',
            headerTitleStyle: { alignSelf: 'center' },
            headerRight: ()=> <SavedPlacesIcon/>
        }
    },
    RepeatResbite: {
        screen: RepeatResbite,
        navigationOptions: {
            headerTitle: 'Fishing Weekend',
            headerRight: ()=> <ChatIcon/>
        }
    },
    ScheduleResbite: {
        screen: ScheduleResbite,
         navigationOptions: {
            headerTitle: 'Fishing Weekend',
        }
    }, 
    RepeatMember: {
        screen: RepeatMember,
        navigationOptions: {
            headerTitle: 'Fishing Weekend',
        }
    },
    
    Home: {
        screen: Home,
    },
    MyResbite: {
        screen: MyResbite,
    },
    RepeatContact: {
        screen: RepeatContact,
        navigationOptions: {
            headerTitle: 'Fishing Weekend'
        }
    },
    Filter: {
        screen: Filter,
        navigationOptions: {
            headerTitle: 'Filters',
            headerTitleAlign: 'center',
            headerRight: <FilterIcon/>
        }
    },
    Done: {
        screen: Done,
    }
}, {
    initialScreen: 'SplashScreen',
});

export default createAppContainer(App);
