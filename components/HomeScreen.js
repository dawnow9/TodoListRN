import * as React from 'react'
import {View, Button, Alert, Text, FlatList} from "react-native"
import _ from 'lodash'
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.data = [];

        for (let i=0; i<Math.random() * 10; i++) {
            let date = new Date()
            this.data.push({
                id: i,
                name: 'Name '+i,
                description: 'Description '+1,
                done: false,
                date: date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
            })
        }
    }

    removeFromList = () => {
        alert('elo')
    }

    createTwoButtonAlert = () =>
        Alert.alert(
            "Task has been finished",
            "Name 0"
        );

    render() {
        return (
            <View>
                <FlatList data={this.data} renderItem={({item}) => <Text style={styles.item} onPress={this.createTwoButtonAlert()}>{item.name+" "+item.date}</Text>} />
            </View>
        )
    }
}

const styles = {
    element: {
        listStyleType: 'none',
        padding: 5,
        margin: 5,
        backgroundColor: 'lightgrey',
        width: 200
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
}

export default App