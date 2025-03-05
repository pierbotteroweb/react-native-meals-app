import { useLayoutEffect } from "react";

import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

import { MEALS } from '../data/dummy-data'

import MealsDetails from '../components/MealDetails'
import IconButton from '../components/IconButton'
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetailsScreen({route, navigation}){

    const mealId = route.params.mealId

    const selectedMeal = MEALS.find((meal)=>meal.id===mealId)

    function headerButtonPressedHandler(){
        console.log('Hit it!!')
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return (
                            <IconButton 
                                onPress={headerButtonPressedHandler}
                                icon="star"
                                color="white"/>
                        )
            }
        })
    },[navigation,headerButtonPressedHandler])

    return <ScrollView style={styles.rootContainer} >
                <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
                <Text style={styles.title} >{selectedMeal.title}</Text>
                <MealsDetails 
                    duration={selectedMeal.duration} 
                    complexity={selectedMeal.complexity} 
                    affordability={selectedMeal.affordability}
                    textStyle={styles.detailText}
                />
                <View style={styles.listOuterContainer} >
                    <View style={styles.listContainer} >
                        <Subtitle>Ingredients</Subtitle>
                        <List data={selectedMeal.ingredients} />
                        <Subtitle>Steps</Subtitle>
                        <List data={selectedMeal.steps} />
                    </View>
                </View>
           </ScrollView>
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32
    },
    item:{
        color:'red'
    },
    image:{
        width:'100%',
        height:300
    },
    title:{
        fontWeight:'bold',
        fontSize: 24,
        margin:18,
        textAlign:'center',
        color:'white'
    },
    detailText:{
        color:'white'
    },
    listOuterContainer:{
        alignItems:'center'
    },
    listContainer:{
        width:'80%'
    }
})