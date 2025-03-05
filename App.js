import { StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";


import CategoriesScreens from "./screens/CategoriesScreens";
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './components/FavoritesScreen';

import { ScreenStack } from 'react-native-screens';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=>{
  return <Drawer.Navigator screenOptions={{
      headerStyle: {backgroundColor: '#351401'},
      headerTintColor:'white',
      sceneContainerStyle:{backgroundColor:'#3f2f25'},
      drawerContentStyle:{backgroundColor:'#3f2f25'},
      drawerInactiveTintColor:'white',
      drawerActiveTintColor:'#351401',
      drawerActiveBackgroundColor:'#e4baa1',
      }}>
    <Drawer.Screen 
        name='Categories' 
        component={CategoriesScreens}
        options={{
          title:'All Categories55',
          drawerIcon:({color,size}) => (
            <Ionicons name='list' color={color} size={size}/>
          ),
        }}/>
    <Drawer.Screen 
            name='Favorites' 
            component={FavoritesScreen}
            options={{
              drawerIcon:({color,size}) => (
                <Ionicons name='star' color={color} size={size}/>
              ),
            }}/>
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor:'white',
              contentStyle:{backgroundColor:'#3f2f25'}
              }} 
          >
          <Stack.Screen 
            name="Drawer" 
            component={DrawerNavigator}
            options={{
              headerShown:false
            }}/>
          <Stack.Screen 
            name="Meals Overview" 
            component={MealsOverviewScreen}
          />
          <Stack.Screen 
            name='Meal Detail'
            component={MealDetailsScreen}
            options={{
              title:'About the Meal'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
