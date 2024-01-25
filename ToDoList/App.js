import React from 'react';
import { StyleSheet, View } from 'react-native';
import ToDoList from './components/ToDoList';

export default function App() {
    const initialTasks = ['Task me', 'Task myself', 'Task I'];

    return (
        <View style={styles.container}>
            <ToDoList initialTasks={initialTasks} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
