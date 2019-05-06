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
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BoxShadow } from 'react-native-shadow';

import reducers from './reducers';

export default class App extends Component {

  renderRight() {
    return (
      <Icon onPress={() => Actions.addTodo()} name="plus-circle" size={35} style={{ paddingRight: 10, color: '#5f27cd' }} />
    );
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));

    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#ff5252',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 16.00,
    elevation: 30,
  },
  titleStyle: {
    color: 'white'
  }
});
