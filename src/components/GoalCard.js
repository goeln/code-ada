import React, { Component } from 'react';
import { Button, Input, Form } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import '../App.css';

class GoalCard extends Component {
    constructor(props) {
        super(props)
    }


    render() {
      //let goalC = this.props.goal;
        return (
           <div>
               <Card className = "goalCard">
                 <CardBody>
                 <CardText>{this.props.goalC}</CardText>
                 </CardBody>
               </Card>
          </div>
        )
    }
}

export default GoalCard
