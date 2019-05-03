import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View, FlatList, Alert } from 'react-native';
import { MyButton, Item } from './main';
import { Actions } from 'react-native-router-flux';
import listData from './db';

export default class Todos extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    title: '',
    description: '',
    items: []
  }

  componentWillMount = () => {
    this.loadItems();
  };

  // componentDidMount = () => {
  //   console.log(this.props.sendData)
  // }

  //Read TodoList from LocalStorage
  loadItems = async () => {
    try {
      let toDoList = await AsyncStorage.getItem('toDoList');
      if (toDoList !== null) {
        toDoList = JSON.parse(toDoList);
        this.setState({ items: toDoList })
        listData.data = toDoList;
      }
    } catch (error) {
      console.warn(error);
    }
  }

  //Delete All TodoList's Items
  deleteAllItem = () => {
    Alert.alert(
      'Warning',
      'Do you really want to delete all todos?',
      [
        {
          text: 'OK', onPress: () => {
            AsyncStorage.clear();
            this.setState({ title: '', description: '', items: [] });
            listData.data = [];
          }
        },
        { text: 'Cancel', style: 'cancel' }
      ],
      { cancelable: false }
    );
  }

  // Store TodoList to LocalStorage
  saveList = async (items) => {
    try {
      await AsyncStorage.setItem('toDoList', JSON.stringify(items));
    } catch (error) {
      console.warn(error)
    }
  }

  //Delete Todo
  deleteItem = async (index) => {
    console.log("Delete Item: " + index)
    try {
      let array = [...this.state.items]; // Copy of the array
      array.splice(index, 1);
      this.saveList(array);
      this.setState({ items: array });
      Actions.refresh({ key: Math.random() })
    } catch (error) {
      console.log(error);
    }
  }

  renderItem = ({ item, index }) => {
    return (
      <Item data={item} indexOfItem={index} delete={this.deleteItem} />);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flatListView}>
          <FlatList
            data={this.state.items}
            keyExtractor={(item, index) => item.description + index.toString()}
            renderItem={this.renderItem}
          />
        </View>
        <View style={styles.deleteAllView}>
          <MyButton onClick={this.deleteAllItem} text={'DELETE ALL'}></MyButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f27cd',
    justifyContent: 'center',
  },
  deleteAllView: {
    backgroundColor: '#5f27cd',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatListView: {
    flex: 1,
    backgroundColor: '#5f27cd'
  }
});
