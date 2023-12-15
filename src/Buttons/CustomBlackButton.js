import { TouchableHighlight, Text, StyleSheet } from "react-native";


const CustomBlackButton = ({ value, Width, textColor, onPress }) => {
    return (
        <TouchableHighlight
            onPress={onPress}
            style={[styles.customblackbtn, Width]}>
            <Text style={[styles.btnTextBlack, textColor]}>{value}</Text>
        </TouchableHighlight>
    );
};


export default CustomBlackButton


const styles = StyleSheet.create({
    customblackbtn: {
        height: 80,
        width: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333333',
    },

    btnTextBlack: {
        color: 'white',
        fontSize: 40,
    },
})