import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TransactionList from '../Components/TransactionList'
import TransactionDetail from '../Components/TransactionDetail'

const TransactionStack = createNativeStackNavigator()

const commonHeaderOptions = {
    headerStyle: {
        backgroundColor: '#9381ff',
    },
    headerTintColor: '#fff',
}

export default function Transactions({ transactions }) {
    return (
        <TransactionStack.Navigator>
            <TransactionStack.Screen
                name="TransactionList"
                options={commonHeaderOptions}
            >
                {() => <TransactionList transactions={transactions} />}
            </TransactionStack.Screen>
            <TransactionStack.Screen
                name="TransactionDetail"
                component={TransactionDetail}
                options={commonHeaderOptions}
            />
        </TransactionStack.Navigator>
    )
}
