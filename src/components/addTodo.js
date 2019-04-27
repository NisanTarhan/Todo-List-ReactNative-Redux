import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { MyButton, Title, Description } from './src/components/main';
import { Actions } from 'react-native-router-flux';
const { height, width } = Dimensions.get('window');

const AddTodo = (props) => {
    return (
        <Title value={title} onChangeText={(title) => this.setState({ title })} maxLength={34} placeholder='Başlık giriniz' />
        <Description value={description} onChangeText={(description) => this.setState({ description })} placeholder='Açıklama giriniz' maxLength={76} multiline={true} numberOfLines={5} />
        <View style={{ height: height * 0.17, backgroundColor: '#34495e', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <MyButton onClick={this.addItem} text={'ADD'}></MyButton>
            <MyButton onClick={this.deleteAllItem} text={'DELETE ALL'}></MyButton>
        </View>
    );
}

export default AddTodo;