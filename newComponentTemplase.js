import { View, Text, StyleSheet } from "react-native";

function NewComponentTemplate(){
    return <View style={styles.item}>
        <Text></Text>
    </View>
}

export default NewComponentTemplate

const styles = StyleSheet.create({
    item:{
        color:'red'
    }
})