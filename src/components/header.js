import React, { Component } from 'react';
import { StyleSheet,Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window');

const Header = () => {
    return(
        <View style={{ height: height * 0.07, borderBottomColor: '#e74c3c', borderBottomWidth: 1, backgroundColor: '#34495e', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: '#e74c3c' }}>TODO LIST</Text>
        </View>
    );
}

export default Header;