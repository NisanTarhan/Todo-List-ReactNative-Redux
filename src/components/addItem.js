import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View, SafeAreaView, Dimensions, Alert } from 'react-native';
import { MyButton, Title, Description } from './main';
import { Actions } from 'react-native-router-flux';
import listData from './db'

const { height, width } = Dimensions.get('window');

export default class AddItem extends Component {

  state = {
    title: '',
    description: '',
    items: [],
    updated: false
  }

  componentWillMount = () => {
    this.state.items = listData.data;
    if (this.props.updated) {
      this.setState({
        title: this.props.item.title,
        description: this.props.item.description,
      })
    }
  };

  // Store TodoList to LocalStorage
  saveList = async (items) => {
    try {
      await AsyncStorage.setItem('toDoList', JSON.stringify(items));
      Actions.pop()
      Actions.refresh({ key: Math.random() })
      // Actions.refresh({key: Math.random(), sendData: 'Sending Data' });
    } catch (error) {
      console.warn(error)
    }
  }

  //Add Todo to array
  addItem = async () => {
    if (this.state.title !== '' && this.state.description !== '' && Array.isArray(this.state.items)) {
      if (this.props.updated) {
        this.saveItem(this.props.index);
      } else {
        toDo = {
          title: this.state.title,
          description: this.state.description
        };
        items = [...this.state.items, toDo];
        this.setState({ title: '', description: '', items });
        this.saveList(items);
      }
    } else {
      Alert.alert('Warning', 'You must fill in the blanks.', [{ text: 'OK' }])
    }
  }

  saveItem = async (index) => {
    let array = [...this.state.items];
    array[index] = { title: this.state.title, description: this.state.description };
    this.saveList(array);
    this.setState({ items: array });
  }

  render() {
    let { title, description } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Title value={title} onChangeText={(title) => this.setState({ title })} maxLength={34} placeholder='Başlık giriniz' />
        <Description value={description} onChangeText={(description) => this.setState({ description })} placeholder='Açıklama giriniz' maxLength={76} multiline={true} numberOfLines={5} />
        <View style={styles.addButtonView}>
          <MyButton onClick={this.addItem} text={'ADD'}></MyButton>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: '#5f27cd',
    justifyContent: 'center'
  },
  addButtonView: {
    height: height * 0.30,
    backgroundColor: '#5f27cd',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});
