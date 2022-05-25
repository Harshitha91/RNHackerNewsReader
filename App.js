import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { COMMENT_SCREEN, HOME_SCREEN } from './src/constants';
import CommentsScreen from './src/screens/CommentsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    headerShown: true,
                    gestureDirection: 'vertical',
                }}
                initialRouteName={HOME_SCREEN}>
                <Stack.Screen
                    name={HOME_SCREEN}
                    component={HomeScreen}
                    options={{
                        headerShadowVisible: false,
                        title: 'Top Stories',
                        headerStyle: {
                            backgroundColor: 'rgba(255,102,0,1)',
                        },
                    }}
                />
                <Stack.Screen
                    name={COMMENT_SCREEN}
                    component={CommentsScreen}
                    options={{
                        headerShadowVisible: false,
                        title: '',
                        headerStyle: {
                            backgroundColor: 'rgba(255,102,0,1)',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
