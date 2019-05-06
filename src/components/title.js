import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const Title = (props) => {
  return (
    <View style={styles.titleView}>
      <Text style={styles.titleText}>Title</Text>
      <TextInput value={props.value} onChangeText={props.onChangeText} maxLength={props.maxLength} placeholder={props.placeholder} style={styles.titleTextInput}></TextInput>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  titleView: {
    paddingTop: 5,
    height: height * 0.15,
    alignItems: 'center'
  },
  titleText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ff9f43'
  },
  titleTextInput: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    paddingRight: 7,
    height: 50,
    width: width * 0.8
  }
});