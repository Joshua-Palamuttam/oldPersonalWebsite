import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

interface props {
    startYear: number;
    endYear: number;
    schoolName: string;
    schoolDescription: string;
}

class Education extends Component<props> {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;