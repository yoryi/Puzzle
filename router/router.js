import React from 'react';

//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//Vistas
import Board from '../screen/board/index'
import AddTask from '../screen/addTask/index'

//Router
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Board" screenOptions={{headerShow: false}} >
                <Stack.Screen name="Board" component={Board} options={{headerShown: false}} />
                <Stack.Screen name="AddTask" component={AddTask} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}