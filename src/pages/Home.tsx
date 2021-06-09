import React, { useState } from 'react';
import { View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkTheme, setDarkTheme] = useState(false);

  function handleChangeTheme() {
    setDarkTheme(!darkTheme);
  }

  function handleAddTask(newTaskTitle: string) {

    if (newTaskTitle){
      setTasks(oldState => [
        {
          id: new Date().getTime(),
          title: newTaskTitle,
          done: false,

      }, ...oldState])
    }

    //TODO - add new task if it's not empty
  }

  function handleMarkTaskAsDone(id: number) {

    const task = tasks.filter((item) => item.id === id)[0]

    task.done = !task.done

    const newTasks = [...new Set([task, ...tasks])];
    setTasks(newTasks)
    
    //TODO - mark task as done if exists
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(task => task.id !== id) )
    //TODO - remove task from state
  }

  return (
    <View style={darkTheme ? {backgroundColor: "#10101E", flex: 1} : {backgroundColor: "#FFF", flex: 1}}>
      <Header theme={darkTheme} changeTheme={handleChangeTheme}/>

      <TodoInput addTask={handleAddTask} theme={darkTheme} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask}
        theme={darkTheme} 
      />
    </View>
  )
}