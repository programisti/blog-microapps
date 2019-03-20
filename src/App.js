import React from 'react';
import {Container, Segment, Header, Button} from 'semantic-ui-react'
import List from './List'
import { Link } from 'react-router-dom'

const App = () => (
  <Container>
    <Segment.Group>
      <Segment color='teal'>
        <Header attached="top" as='h1' textAlign="center" icon>Simple Blog</Header>
      </Segment>
      <Segment>
        <Button as={Link} to='/new'>Create new post</Button>
      </Segment>
      <Segment>
        <List />
      </Segment>
    </Segment.Group>
  </Container>
)

export default App;
