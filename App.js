/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { AddItem, Todos } from './src/components/main';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {

  renderRight() {
    return (
      <Icon onPress={() => Actions.addTodo()} name="plus-circle" size={35} style={{ paddingRight: 10, color: '#5f27cd' }} />
    );
  }

  render() {
    return (
      <Router
        navigationBarStyle={styles.navBar}
        titleStyle={styles.titleStyle}>
        <Stack key="root">
          <Scene key="todolist"
            component={Todos}
            title="Todo List"
            renderRightButton={this.renderRight()}
            initial
          />
          <Scene
            key="addTodo"
            component={AddItem}
            title="Add Todo"
          />
        </Stack>
      </Router>
    );
  }
}
const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#ff9f43',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
  },
  titleStyle: {
    color: 'white'
  }
});
