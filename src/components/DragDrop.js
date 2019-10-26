import React, { Component } from 'react';
//import { Button, Input, Form } from 'reactstrap';
import '../App.css';
// import GoalCard from '../components/GoalCard'
export default class DragDrop extends Component {
  // state = {
  //   tasks: [""]
  // }

render() {
  var tasks = {
	      goalArr: [], // to drag from goal
	      matrixArr: [] // to drop in matri
	    }

		this.props.tasks.forEach ((task) => {
		  tasks[task.type].push(
		    <div key={task.taskName}
		      className="draggable"
		      style = {{backgroundColor: task.bgcolor}}>
		      {task.taskName}
		    </div>
		  );
		});

	    return (
	      <div className="drag-container">
	        <h2 className="head">To Do List Drag & Drop</h2>
		    <div className="inProgress">
	          <span className="group-header">In Progress</span>
	          {tasks.inProgress}
	        </div>
	        <div className="droppable">
	          <span className="group-header">Done</span>
	          {tasks.Done}
	        </div>
	      </div>
	    );
  	}
  }
