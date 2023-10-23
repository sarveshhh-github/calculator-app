import { TouchableHighlight, Text, StyleSheet } from "react-native";

const CustomOrangeButton = ({ value, onPress }) => {
    return (
        <TouchableHighlight onPress={onPress} style={styles.customorangebtn}>
            <Text style={[styles.btnTextOrange]}>{value}</Text>
        </TouchableHighlight>
    );
};


export default CustomOrangeButton

const styles = StyleSheet.create({
    btnTextOrange: {
        color: 'white',
        fontSize: 40,
    },
    customorangebtn: {
        height: 90,
        width: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
    },

})