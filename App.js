import React, {} from 'react'
import { StatusBar, Text, View } from 'react-native'

import Navigation from './src/navigation/index'

import { useFonts } from '@use-expo/font';
import Loading from 'screens/Loading';


const App = () => {
  
  let [fontsLoaded] = useFonts({
      'Lora-Bold': require('./assets/fonts/Lora-Bold.ttf'),
      'Lora-BoldItalic': require('./assets/fonts/Lora-BoldItalic.ttf'),
      'Lora-Italic': require('./assets/fonts/Lora-Italic.ttf'),
      'Lora-Medium': require('./assets/fonts/Lora-Medium.ttf'),
      'Lora-MediumItalic': require('./assets/fonts/Lora-MediumItalic.ttf'),
      'Lora-Regular': require('./assets/fonts/Lora-Regular.ttf'),
      'Lora-SemiBold': require('./assets/fonts/Lora-SemiBold.ttf'),
      'Lora-SemiBoldItalic': require('./assets/fonts/Lora-SemiBoldItalic.ttf'),
  });

  if(!fontsLoaded){
    return <Loading/>
  }
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'}/>
      <Navigation/>
    </>
  )
}

export default App
