import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View, FlatList, Alert } from 'react-native';
import { MyButton, Item } from './main';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { getTodoList, deleteTodoList, updateTodoList, deleteAllTodoList } from '../../actions';

class Todos extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    title: '',
    description: '',
    items: []
  }

  componentDidMount = () => {
    this.props.getTodoList();
  };

  async componentWillReceiveProps(props) {
    if (props.isDeleted) {
      try {
        await AsyncStorage.setItem('toDoList', JSON.stringify(props.items));
      } catch (error) {
        console.warn(error)
      }
    }
  }

  // Delete All TodoList's Items
  deleteAllItem = () => {
    Alert.alert(
      'Warning',
      'Do you really want to delete all todos?',
      [
        {
          text: 'OK', onPress: () => {
            this.props.deleteAllTodoList([])
            // this.setState({ title: '', description: ''});
          }
        },
        { text: 'Cancel', style: 'cancel' }
      ],
      { cancelable: false }
    );
  }

  // //Delete Todo
  deleteItem = async (index) => {
    this.props.deleteTodoList(index);
  }

  renderItem = ({ item, index }) => {
    return (
      <Item data={item} indexOfItem={index} delete={this.deleteItem} />);
  }

  render() {
    return (
      <LinearGradient colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
        <View style={styles.container}>
          <View style={styles.flatListView}>
            <FlatList
              data={this.props.items}
              keyExtractor={(item, index) => item.description + index.toString()}
              renderItem={this.renderItem}
            />
          </View>
          <View style={styles.deleteAllView}>
            <MyButton onClick={this.deleteAllItem} text={'DELETE ALL'}></MyButton>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  deleteAllView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatListView: {
    flex: 1,
  }
});


const mapStateToProps = ({ todoListResponse }) => {
  console.log('globalden Gelen liste objesi TodoListesi : ', todoListResponse);
  return { items: todoListResponse.items, isDeleted: todoListResponse.isDeleted, isUpdated: todoListResponse.isUpdated, isDeleteAll: todoListResponse.isDeleteAll }
};

export default connect(mapStateToProps, { getTodoList, deleteTodoList, updateTodoList, deleteAllTodoList })(Todos);
