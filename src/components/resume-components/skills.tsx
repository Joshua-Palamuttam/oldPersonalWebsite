import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

interface props {
    skill: string;
    progress: number;
}

class Skills extends Component<props> {
  render() {
    return(
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex'}}>{this.props.skill} <ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.progress} /> </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;