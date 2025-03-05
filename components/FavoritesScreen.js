import { View, Text, StyleSheet } from "react-native";

function FavoritesScreen(){
    return <View style={styles.item}>
        <Text>The Favorites screen!</Text>
    </View>
}

export default FavoritesScreen

const styles = StyleSheet.create({
    item:{
        color:'red'
    }
})