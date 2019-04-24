import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window');

const Description = (props) => {
    return(
        <View style={{ height: height * 0.18, backgroundColor: '#34495e', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, marginBottom: 7, color: '#e74c3c' }}>Description</Text>
          <TextInput value={props.value} onChangeText={props.onChangeText} placeholder={props.placeholder} maxLength={props.maxLength} multiline={props.multiline} numberOfLines={props.numberOfLines} style={{ textAlignVertical: 'top', backgroundColor: 'white', borderColor: 'black', borderWidth: 1, borderRadius: 5, height: 80, width: width * 0.8 }}></TextInput>
        </View>
    );
}

export default Description;