import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

class Item extends Component {

    render() {
        return (
            <View style={styles.itemView}>

                <TouchableOpacity activeOpacity={0.6} style={{ flex: 9 }} onPress={() => Actions.addTodo({ item: this.props.data, index: this.props.indexOfItem, update: true })}>
                    <View style={styles.itemTextView}>
                        <Text style={styles.itemTitleText}>{this.props.data.title}</Text>
                        <Text style={styles.itemDescriptionText}>{this.props.data.description}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.delete(this.props.indexOfItem)} style={styles.deleteItem}>
                    <Icon name="trash" size={30} style={{ color: '#5f27cd' }} />
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemView: {
        margin: 10,
        padding: 4,
        height: 60,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderColor: '#5f27cd',
        borderWidth: 1,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 16.00,
        elevation: 12,
    },
    itemTextView: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    },
    itemTitleText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 4
    },
    itemDescriptionText: {
        marginRight: 13,
        color: 'black',
        fontSize: 12
    },
    deleteItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Item;