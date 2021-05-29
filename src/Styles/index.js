import React, {useState, useEffect} from 'react'
import {Text as RNText, View as RNView, Image} from 'react-native'
import color from 'colors'

const Text = ({children, style, bold=false,regular=false, size=15, adjustsFontSizeToFit=false, numberOfLines=10000, dark=false})=>{
    let font = 'Lora-Regular'
    var colorTheme = color.white
    if (bold) font=('Lora-Bold')
    if(dark) colorTheme = '#000'
    if (regular) font=('Lora-SemiBold')

    return <RNText style={{color:colorTheme,fontSize:size, fontFamily:font, ...style}} numberOfLines={numberOfLines} adjustsFontSizeToFit={adjustsFontSizeToFit}>{children}</RNText>
}

const RowView = ({children, style})=><RNView style={{flexDirection:'row',alignItems:'center',...style}}>{children}</RNView>

export {Text, RowView}