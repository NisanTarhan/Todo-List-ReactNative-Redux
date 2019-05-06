import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View, SafeAreaView, Dimensions, Alert } from 'react-native';
import { MyButton, Title, Description } from './main';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { addTodoList, updateTodoList } from '../../actions';

const { height, width } = Dimensions.get('window');

class AddItem extends Component {

  state = {
    title: '',
    description: '',
    items: []
  }

  componentWillMount = () => {
    if (this.props.update) {
      this.setState({
        title: this.props.item.title,
        description: this.props.item.description
      })
    }
  };

  async componentWillReceiveProps(props) {
    if (props.isCreated || props.isUpdated) {
      try {
        await AsyncStorage.setItem('toDoList', JSON.stringify(props.items));
        Actions.pop()
      } catch (error) {
        console.warn(error)
      }
    }
  }

  addItem = async () => {
    if (this.state.title !== '' && Array.isArray(this.props.items)) {
      toDo = {
        title: this.state.title,
        description: this.state.description,
        index: this.props.index
      }
      if (this.props.update) {
        this.setState({
          title: this.props.item.title,
          description: this.props.item.description
        })
        this.props.updateTodoList(toDo)
      } else {
        this.props.addTodoList(toDo)
      }
      this.setState({ title: '', description: '' });
    } else {
      Alert.alert('Warning', 'You must fill in the blanks.', [{ text: 'OK' }])
    }
  }

  render() {
    let { title, description } = this.state;
    return (
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <SafeAreaView style={styles.container}>
          <Title value={title} onChangeText={(title) => this.setState({ title })} maxLength={34} placeholder='Başlık giriniz' />
          <Description value={description} onChangeText={(description) => this.setState({ description })} placeholder='Açıklama giriniz' maxLength={76} multiline={true} numberOfLines={5} />
          <View style={styles.addButtonView}>
            <MyButton onClick={this.addItem} text={'ADD'}></MyButton>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    height: height,
    width: width,
    justifyContent: 'center'
  },
  addButtonView: {
    height: height * 0.30,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});


const mapStateToProps = ({ todoListResponse }) => {
  console.log('globalden Gelen liste objesi Add List: ', todoListResponse);
  return { items: todoListResponse.items, isCreated: todoListResponse.isCreated, isUpdated: todoListResponse.isUpdated }
};

export default connect(mapStateToProps, { addTodoList, updateTodoList })(AddItem);