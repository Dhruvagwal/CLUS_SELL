import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'

import {Text} from 'styles'
import colors from 'colors'
import Carousel from 'components/Home/carousel'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

const Index = () => {
    return (
        <View>
            <View style={{height:HEIGHT*.05}}/>
            <Carousel/>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({})
