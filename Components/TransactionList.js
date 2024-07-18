import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function TransactionList({ transactions }) {
    const navigation = useNavigation()

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.transactionItem}
            onPress={() =>
                navigation.navigate('TransactionDetail', { transaction: item })
            }
        >
            <Text style={styles.transactionName}>{item.name}</Text>
            <Text style={styles.transactionAmount}>${item.amount}</Text>
            <Text style={styles.transactionDate}>{item.date}</Text>
        </TouchableOpacity>
    )
    return (
        <View>
            <FlatList
                data={transactions}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    transactionItem: {
        padding: 16,
        margin: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '97%',
        backgroundColor: '#5749a8',
        borderRadius: 10,
    },
    transactionName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    transactionAmount: {
        fontSize: 16,
        color: 'white',
    },
    transactionDate: {
        fontSize: 14,
        color: 'white',
    },
})
