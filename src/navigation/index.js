import React, {useEffect, useState} from 'react'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import CONSTANT from './navigationConstant.json'
import HomeScreen from 'screens/Home'
import {navigationRef} from './RootNavigation';


import color from 'colors'

const Index = () => {
    const Stack = createStackNavigator()

    const BlackTheme = {
        dark: true,
        colors: {
          background: color.dark,
        },
      };

    return (<NavigationContainer 
                    ref={navigationRef} 
                    theme={BlackTheme}
                >
                <Stack.Navigator headerMode={false} screenOptions={{ animationEnabled: false }} >
                      <Stack.Screen name={CONSTANT.Home} component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default Index

