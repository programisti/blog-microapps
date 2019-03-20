import React from 'react';
import {Container, Segment} from 'semantic-ui-react'

const Post = ({post}) => {
  return(
    <Container>
      <Segment.Group>
        <Segment color="red">{post.title}</Segment>
        <Segment>{post.text}</Segment>
      </Segment.Group>
    </Container>
  )
}

export default Post;
