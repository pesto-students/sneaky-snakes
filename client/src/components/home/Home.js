import React from 'react';
import { Grid } from 'semantic-ui-react';

const Home = () => (
  <Grid>
    <Grid.Row centered columns={2}>
      <Grid.Column textAlign='center'>
        Sign Up
      </Grid.Column>
      <Grid.Column textAlign='center'>
        Sign in
      </Grid.Column>
    </Grid.Row>
    <Grid.Row textAlign='center' centered columns={2}>
      <Grid.Column textAlign='center'>
        Play as Guest
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Home;
