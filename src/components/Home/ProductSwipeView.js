import React from 'react'
import { StyleSheet, View } from 'react-native'

import color from 'colors'
import {Text} from 'styles'

const ProductSwipeView = () => {
    return (
        <View style={styles.container}>
            <Text>Product</Text>
        </View>
    )
}

export default ProductSwipeView

const styles = StyleSheet.create({
    container:{
        backgroundColor:color.elevatedDark,
        height:250,
        marginRight:10,
        borderRadius:5,
    }
})
