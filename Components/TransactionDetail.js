import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TransactionDetail({ route }) {
    const { transaction } = route.params
    return (
        <View>
            <View style={styles.details}>
                <Text style={styles.detailText}>Name: {transaction.name}</Text>
                <Text style={styles.detailText}>
                    Amount: ${transaction.amount}
                </Text>
                <Text style={styles.detailText}>Date: {transaction.date}</Text>
                <Text style={styles.detailText}>
                    Category: {transaction.category}
                </Text>
                <Text style={styles.detailText}>
                    Notes: {transaction.notes}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    details: {
        width: '99%',
        backgroundColor: '#5749a8',
        margin: 2,
        padding: 5,
        borderRadius: 10,
        marginTop: 8,
    },

    detailText: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white',
    },
})
