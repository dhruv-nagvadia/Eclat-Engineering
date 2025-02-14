import { StyleSheet, Text, TextInput, View, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';

const TodoList = () => {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState([]);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  function submit() {
    if (text.trim() !== '') {
      setDisplayText((prevState) => [...prevState, text]);
      setText('');
    }
  }

  function dellete(deleteitem) {
    const newtasks = displayText.filter((item) => item !== deleteitem);
    setDisplayText(newtasks);
  }

  function handleUpdate(item) {
    setCurrentItem(item);
    setText(item); 
    setIsUpdateModalVisible(true); 
  }

  function updateTask() {
    const updatedTasks = displayText.map((item) =>{
      if (item === currentItem) {
        return text; 
      }
      return item;
  });
    setDisplayText(updatedTasks);
    setIsUpdateModalVisible(false); 
    setText(''); 
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>To Do List</Text>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Enter your task"
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#000000', height: 45, width: 80 }]}
          onPress={() => submit()}
        >
          <Text style={{ color: '#ffff00' }}>Add Task</Text>
        </TouchableOpacity>
        {displayText.map((item, index) => (
          <View key={index} style={styles.taskContainer}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#fd3749' }]}
              onPress={() => dellete(item)}
            >
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#1afb32',margin:4}]}
              onPress={() => handleUpdate(item)}
            >
              <Text style={styles.text}>Update</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <Modal
        visible={isUpdateModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsUpdateModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Update Task</Text>
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
              placeholder="Update your task"
            />
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#e2e744', width: '100%',borderRadius:10,borderWidth:1 }]}
              onPress={() => updateTask()}
            >
              <Text style={styles.text}>Update Task</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#ff5c5c', width: '100%',borderRadius:10,borderWidth:1  }]}
              onPress={() => setIsUpdateModalVisible(false)}
            >
              <Text style={styles.text}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#e2e744',
    flex: 1,
    height: 850,
    borderRadius: 30,
    margin: 30,
    padding: 10,
    elevation: 20,
    shadowColor: '#ec1908',
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 60,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    padding: 10,
    margin: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 20,
    shadowColor: '#1308f7',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  text: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    height: 'auto',
    width: '80%',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 8,
    borderRadius: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 18,
    marginVertical: 5,
    color: '#06fef3',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    width: '80%',
    height:"auto",
    padding: 20,
    backgroundColor: '#78fffb',
    borderRadius: 10,
    elevation: 20,
    shadowColor: '#000',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
