import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window');

const Title = (props) => {
    return(
        <View style={{ paddingTop: 5, height: height * 0.12, backgroundColor: '#34495e', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, color: '#e74c3c' }}>Title</Text>
          <TextInput value={props.value} onChangeText={props.onChangeText} maxLength={props.maxLength} placeholder={props.placeholder} style={{ backgroundColor: 'white', borderColor: 'black', borderWidth: 1, borderRadius: 5, marginTop: 5, paddingRight: 7, height: 35, width: width * 0.8 }}></TextInput>
        </View>
    );
}

export default Title;