import React, { Component } from 'react';
import { Button, Input, Form, Container, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import '../App.css';

import GoalCard from '../components/GoalCard'

class GoalComponent extends Component {
    constructor(props) {
        super(props)
    }


    render() {

      let goalCards = this.state.goalsComp.map(goal => {
          return (
            <Col sm ="4">
              <GoalCard goalC = {goal}/>
            </Col>
          )
        })
        return (
          <Container fluid>
            <Col>
              {goalCards}
            </Col>
          </Container>
        )
    }
}

export default GoalComponent
