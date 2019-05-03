import React, { Component } from 'react';
import { Text, View, Dimensions} from 'react-native';

const { height, width } = Dimensions.get('window');

const Header = () => {
  return (
    <View style={{ height: height * 0.07, borderBottomColor: '#e74c3c', borderBottomWidth: 1, backgroundColor: '#34495e', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 15, fontWeight: "bold", color: '#e74c3c' }}>TODO LIST</Text>
    </View>
  );
}

export default Header;