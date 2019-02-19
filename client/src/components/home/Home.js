import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => (
  <div className="homePageContainer">
    <Grid>
      <Grid.Row centered columns={4}>
        <Grid.Column textAlign="center">
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Button as={Link} to="/ded" inverted color="violet">
            Sign In
          </Button>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Button as={Link} to="/ded" inverted color="violet">
            Sign Up
          </Button>
        </Grid.Column>
        <Grid.Column textAlign="center">
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={1}>
        <Grid.Column textAlign="center">
          <Button as={Link} to="/ded" inverted color="violet">
            Play as guest
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Home;
