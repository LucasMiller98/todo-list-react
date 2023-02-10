import React, { Component } from 'react'
import { Form } from './Form'

import './Main.css'
import { Tasks } from './Tasks'

export class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1
  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'))

    if(!tasks) return

    this.setState({ tasks })
  }

  componentDidUpdate(prevProps, prevState){
    const { tasks } = this.state

    if(tasks === prevState.tasks) return

    localStorage.setItem('tarefas', JSON.stringify(tasks))
  }

  handleChange = (event) => {

    this.setState({
      newTask: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { tasks, index } = this.state
    let { newTask } = this.state
    newTask = newTask.trim()

    if(tasks.indexOf(newTask) !== -1) {
      return
    }

    if(!newTask) return

    const newtasks = [...tasks]


    if(index === -1) {
      this.setState({
        tasks: [...newtasks, newTask],
        newTask: ''
      })
    }else{
      newtasks[index] = newTask

      this.setState({
        tasks: [...newtasks],
        index: -1
      })
    }

    this.setState({
      newTask: ''
    })
  }

  handleEdit = (event, index) => {

    const { tasks } = this.state

    this.setState({
      index,
      newTask: tasks[index]
    })
  }

  handleDelete = (event, index) => {
    const { tasks } = this.state
    const newTasks = [...tasks]
    newTasks.splice(index, 1)

    this.setState({
      tasks: [...newTasks]
    })
  }

  render() {

    const { newTask, tasks } = this.state

    return (
      <main className='main'>
        <h1>Lista de tarefas</h1>

        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          newTask={newTask}
        />

        <Tasks
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tasks={tasks}
        />
      </main>
    )
  }
}
