import React from 'react'
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native'
import { PieChart } from 'react-native-chart-kit'

const SummaryData = ({ transactions }) => {
    const totalExpenses = transactions.reduce(
        (total, transaction) => total + transaction.amount,
        0
    )

    const chartData = transactions.map(transaction => ({
        name: transaction.name,
        amount: transaction.amount,
        color: getRandomColor(),
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    }))

    function getRandomColor() {
        return (
            'rgb(' +
            Math.floor(Math.random() * 256) +
            ',' +
            Math.floor(Math.random() * 256) +
            ',' +
            Math.floor(Math.random() * 256) +
            ')'
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Transactions Summary</Text>
            <PieChart
                data={chartData}
                width={Dimensions.get('window').width - 20} // from react-native
                height={270}
                chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                        `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                accessor="amount"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
            />
            <Text style={styles.text}>Total Expenses: ${totalExpenses}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 80,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#9381ff',
    },
})

export default SummaryData
