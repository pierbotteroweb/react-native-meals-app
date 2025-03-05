import { FlatList, FlatListComponent, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import { useEffect, useLayoutEffect } from "react";

import MealItem from "../components/MealItem";

function MealsOverviewScreen ({route, navigation}) {

    const route2 = useRoute()

    const catId = route.params.categoryId
    const catId2 = route2.params.categoryId

    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        ).title

        navigation.setOptions({
            title: categoryTitle
        })

    },[catId, navigation])

    // const categoryTitle = CATEGORIES.find((category)=>category.id == catId).title;

    // navigation.setOptions({
    //     title: categoryTitle
    // })

    function renderMealItem(itemData){
        const item = itemData.item
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        return <MealItem {...mealItemProps}/>
    }
    

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals} 
                keyExtractor={(item)=>item.id} 
                renderItem={renderMealItem} />
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})