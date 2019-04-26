import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window');

class Item extends Component {

    render() {
        return (
            <View style={{ margin: 10, height: 60, backgroundColor: '#f4f4f4', borderRadius: 8, borderColor: 'black', borderWidth: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                
                <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
                    <Text style={{ color: 'black', fontSize: 14 }}>{this.props.title}</Text>
                    <Text style={{ marginRight: 13, color: 'black', fontSize: 12 }}>{this.props.description}</Text>
                </View>
                
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.props.onClickEdit(this.props.index)}>
                        <Icon name="edit" size={32} style={{ marginRight: 10, paddingTop: 4, alignItems: 'center' }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {this.props.onClickDelete(this.props.index);}}>
                        <Icon name="trash" size={32} style={{ marginRight: 10, alignItems: 'center' }} />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
export default Item;