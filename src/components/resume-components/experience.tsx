import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

interface props {
    startYear: string | number;
    endYear: string | number;
    companyName: string;
    jobTitle: string;
    jobDescription: string;
}


class Experience extends Component<props> {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h2 style={{marginTop:'0px'}}>{this.props.companyName}</h2>
          <h4 style={{marginTop:'0px'}}>{this.props.jobTitle}</h4>
          <p>{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;