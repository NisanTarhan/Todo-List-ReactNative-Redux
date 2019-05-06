import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const Description = (props) => {
  return (
    <View style={styles.descriptionView}>
      <Text style={styles.descriptionText}>Description</Text>
      <TextInput value={props.value} onChangeText={props.onChangeText} placeholder={props.placeholder} maxLength={props.maxLength} multiline={props.multiline} numberOfLines={props.numberOfLines} style={styles.desTextInput}></TextInput>
    </View>
  );
}

export default Description;

const styles = StyleSheet.create({
  descriptionView: {
    height: height * 0.30,
    alignItems: 'center'
  },
  descriptionText: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 7,
    color: '#ff9f43'
  },
  desTextInput: {
    textAlignVertical: 'top',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    height: height * 0.20,
    width: width * 0.80
  }
});
