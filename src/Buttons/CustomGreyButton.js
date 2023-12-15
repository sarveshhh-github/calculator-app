import { TouchableHighlight, Text, StyleSheet } from "react-native";

const CustomGreyButton = ({ value, onPress }) => {
    return (
        <TouchableHighlight onPress={onPress} style={styles.customgreybtn}>
            <Text style={[styles.btnTextgrey]}>{value}</Text>
        </TouchableHighlight>
    );
};

export default CustomGreyButton


const styles = StyleSheet.create({
    customgreybtn: {
        height: 80,
        width: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    btnTextgrey: {
        color: 'black',
        fontSize: 40,
    },

})
