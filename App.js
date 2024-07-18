import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Transactions from './Tabs/Transactions'
import Summary from './Tabs/Summary'

export default function App() {
    const Tab = createBottomTabNavigator()

    const [transactions, setTransactions] = useState([
        {
            id: 1,
            name: 'Groceries',
            amount: 50,
            date: '2024-07-01',
            category: 'Food',
            notes: 'Bought vegetables and fruits',
        },
        {
            id: 2,
            name: 'Electricity Bill',
            amount: 75,
            date: '2024-07-02',
            category: 'Utilities',
            notes: 'Monthly electricity bill',
        },
        {
            id: 3,
            name: 'Internet',
            amount: 30,
            date: '2024-07-03',
            category: 'Utilities',
            notes: 'Monthly internet subscription',
        },
        {
            id: 4,
            name: 'Dining Out',
            amount: 45,
            date: '2024-07-04',
            category: 'Food',
            notes: 'Dinner at a restaurant',
        },
        {
            id: 5,
            name: 'Gym Membership',
            amount: 60,
            date: '2024-07-05',
            category: 'Health',
            notes: 'Monthly gym fee',
        },
        {
            id: 6,
            name: 'Movie Night',
            amount: 25,
            date: '2024-07-06',
            category: 'Entertainment',
            notes: 'Watched a movie at the cinema',
        },
        {
            id: 7,
            name: 'Gas',
            amount: 40,
            date: '2024-07-07',
            category: 'Transport',
            notes: 'Filled up the car',
        },
        {
            id: 8,
            name: 'Rent',
            amount: 500,
            date: '2024-07-08',
            category: 'Housing',
            notes: 'Monthly apartment rent',
        },
        {
            id: 9,
            name: 'Coffee',
            amount: 5,
            date: '2024-07-09',
            category: 'Food',
            notes: 'Morning coffee',
        },
        {
            id: 10,
            name: 'Book Purchase',
            amount: 20,
            date: '2024-07-10',
            category: 'Education',
            notes: 'Bought a programming book',
        },
        {
            id: 11,
            name: 'Clothing',
            amount: 100,
            date: '2024-07-11',
            category: 'Shopping',
            notes: 'Bought new clothes',
        },
    ])
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName

                        if (route.name === 'Transactions') {
                            iconName = focused ? 'card' : 'card-outline'
                        } else if (route.name === 'Summary') {
                            iconName = focused
                                ? 'stats-chart'
                                : 'stats-chart-outline'
                        }

                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        )
                    },
                    headerShown: false,
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: '#04080f',
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#9381ff',
                    },
                })}
            >
                <Tab.Screen name="Transactions">
                    {() => <Transactions transactions={transactions} />}
                </Tab.Screen>
                <Tab.Screen name="Summary">
                    {() => <Summary transactions={transactions} />}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
