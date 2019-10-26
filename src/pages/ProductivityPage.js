import React, { Component } from 'react'
import InputComponent from '../components/InputComponent'
import MatrixComponent from '../components/MatrixComponent'
import GoalComponent from '../components/GoalComponent'


class ProductivityPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goals: ["Do homework"]
    }
  }
  handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  addGoal = () => {
    let goalArr = this.state.goals
    goalArr.push(this.state.goal)
    this.setState({
      goals: goalArr
    })
  }

  render() {
    return (
        <>
        <h1 align="center">Productivity App</h1>
        <InputComponent
            addToGoals = {this.addGoal}
            inputName = "goal"
            onChange={this.handleChange}
        />
        <GoalComponent
            goalsComp = {this.state.goals}
            inputName = "goal"
        />
        <MatrixComponent/>
      </>
    )
  }
}

export default ProductivityPage
