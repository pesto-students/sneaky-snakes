import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Home = () => (
  <Grid>
    <Grid.Row centered columns={2}>
      <Grid.Column textAlign="center">
        <Button as={Link} to="/ded" inverted color="violet">
          Sign Up
        </Button>
      </Grid.Column>
      <Grid.Column textAlign="center">
        <Button as={Link} to="/ded" inverted color="violet">
          Sign In
        </Button>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row centered columns={2}>
      <Grid.Column textAlign="center">
        <Button as={Link} to="/ded" inverted color="violet">
          Play as guest
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Home;
