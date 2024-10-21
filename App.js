import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Math.random().toString(), text: task }]);
      setTask('');
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add Task" onPress={addTask} />
      </View>
      {tasks.length === 0 ? (
        <Text style={{ textAlign: 'center' }}>No tasks available. Add a task!</Text>
      ) : (
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => removeTask(item.id)}>
              <View style={styles.taskItem}>
                <Text>{item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
  taskItem: {
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default App;
