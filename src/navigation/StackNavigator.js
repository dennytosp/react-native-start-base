import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {common, authen} from './../screens';
import {StatusBar} from 'react-native';

import {StackStep} from './';
const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  let routeName;

  useEffect(() => {
    let isCancelled = false;
    const runAsync = async () => {
      try {
        if (!isCancelled) {
          AsyncStorage.getItem('Onboardingfirst').then(value => {
            if (value == null) {
              AsyncStorage.setItem('Onboardingfirst', 'true');
              setIsFirstLaunch(true);
            } else {
              setIsFirstLaunch(false);
            }
          });
        }
      } catch (e) {
        if (!isCancelled) {
          throw e;
        }
      }
    };

    runAsync();

    return () => {
      isCancelled = true;
    };
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = 'Onboard';
  } else {
    routeName = 'Common';
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Stack.Navigator
        initialRouteName={routeName}
        screenOptions={{headerShown: false}}>
        <>
          <Stack.Screen name="Onboard" component={authen.Onboard} />

          <Stack.Screen name="Common" component={StackStep.TabNavigation} />
          <Stack.Screen name="Home" component={common.Home} />
          <Stack.Screen name="Order" component={common.Order} />
          <Stack.Screen name="MyList" component={common.MyList} />
          <Stack.Screen name="Profile" component={common.Profile} />
        </>
      </Stack.Navigator>
    </>
  );
};
export default MainStackNavigator;
