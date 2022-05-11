import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, BackHandler, KeyboardAvoidingView } from 'react-native';

import Navigator from './Navigator';
import globalStyle from './GlobalStyle';
import Service from './GlobalService';
import SideMenu from './components/side-menu';
import Home from './screens/home'

export default function App() {

  // ** NAVIGATOR INITIALIZATION **
  const navigator = new Navigator();
  const navigatorRef = useRef(navigator).current;

  // ** SERVICE INITIALIZATION **
  const service = new Service;
  service.globalVariables = navigatorRef.globalVariables;

  // ** MENU SETUP **
  const [menuState, setMenuState] = useState(false);
  navigator.invokeMenu = setMenuState;
  // ** INSERT MENU CONTENT AS FOLLOWING **
  // const menuContent = <MenuContent navigator={navigatorRef} />

  // ** PAGE MANAGER SETUP **
  const [currentPage, setCurrentPage] = useState(<Home navigator={navigatorRef} />);
  navigator.screenSet = setCurrentPage;

  useEffect(() => {
    const backAction = () => {
      if (!navigator.back()) BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    service.restoreUserData(() => {
      navigator.fix('home');
    })

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={globalStyle.pageFrame}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={globalStyle.content}>
        {currentPage}
      </KeyboardAvoidingView>
      {menuState && <SideMenu active={setMenuState} />}
      <StatusBar style="light" />
    </SafeAreaView >
  );
}
