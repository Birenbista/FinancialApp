import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SummaryData from '../Components/SummaryData'

const SummaryStack = createNativeStackNavigator()

const commonHeaderOptions = {
    headerStyle: {
        backgroundColor: '#9381ff',
    },
    headerTintColor: '#fff',
}

export default function Summary({ transactions }) {
    return (
        <SummaryStack.Navigator>
            <SummaryStack.Screen
                name="SummaryData"
                options={{ ...commonHeaderOptions, title: 'Summary' }}
            >
                {() => <SummaryData transactions={transactions} />}
            </SummaryStack.Screen>
        </SummaryStack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
