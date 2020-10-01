import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

export const AddTodo = () => {
    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.input} />
            <Button style={styles.button} title="Добавить" />
        </View>
    );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
      width: '70%',
      padding: 10,
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: '#999',
      paddingBottom: 3,
  },
  button: {
    backgroundColor: '#333',
  }
});