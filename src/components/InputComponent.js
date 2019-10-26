import React, { Component } from 'react';
import { Button, Input, Form } from 'reactstrap';
import '../App.css';

class InputComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <Form className="form" inline>
              <label> Enter your goal: </label>
              <Input className = "input" name={this.props.inputName} onChange={this.props.onChange}/>
              <Button className = "button" onClick={this.props.addToGoals}>Add!</Button>
          </Form>
        )
    }
}

export default InputComponent
