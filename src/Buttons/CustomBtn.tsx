import { Dimensions, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

var screenWidth = Dimensions.get("screen").width
var ButtonDimensions = screenWidth/6
var ButtonMargin = ButtonDimensions/6

type CustomBtnProps = {
    Title?:string,
    onPress?: () => void,
    buttonBgColor?:string,
    color?:string,
    Width?:number
}
const CustomBtn = ({Title,onPress,buttonBgColor,color,Width}:CustomBtnProps) => {
    const styles = StyleSheet.create({
        btnStyles: {
            height: ButtonDimensions+10,
            width: Width? Width : ButtonDimensions+10,
            backgroundColor: buttonBgColor,
            alignItems: "center",
            justifyContent: "center",
            margin: ButtonMargin,
            padding:ButtonMargin,
            borderRadius:ButtonDimensions
        },
        btnTextStyles: {
            color: color,
            fontSize: ButtonDimensions/2
        }
    })


    return (
        <TouchableOpacity onPress={onPress} style={styles.btnStyles}>
            <Text style={styles.btnTextStyles}>{Title}</Text>
        </TouchableOpacity>
    )
}
export default CustomBtn