import React, { useState, useContext } from 'react';
import gql from "graphql-tag";
import { Segment, Header, Button, Confirm } from 'semantic-ui-react'
import { ClientContext } from './client'
import { listPosts } from './graphql/queries';
import { deletePosts } from './graphql/mutations';
import { Link } from 'react-router-dom'
import Query from './Query'

const List = () => {
  const client = useContext(ClientContext);
  const [dirtyPostId, setDirtyPostId] = useState(0);

  const deletePost = () => {
    return client.mutate({
      mutation: gql(deletePosts),
      variables: { input: { id: dirtyPostId } }
    })
  }
  return(
    <Query query={listPosts}>
    {({ data, loading }) => {
      if (loading) {
        return(<div>loading...</div>)
      }

      return (
        <>
          {data.listPosts.items.map(post => (
            <Segment.Group key={post.id}>
              <Segment color="teal"><Header as='h2'>{post.title}</Header></Segment>
              <Segment padded>{post.text}</Segment>
              <Segment.Group horizontal>
                <Segment>author: {post.author}</Segment>
                <Segment>
                  <Button size="small" color="red" onClick={() => setDirtyPostId(post.id)}>Delete</Button>
                  <Button size="small" color='teal' as={Link} to={'/edit/' + post.id}>Edit</Button>
                  <Confirm open={(dirtyPostId !== 0)} onCancel={() => setDirtyPostId(0)} onConfirm={() =>
                    deletePost().then(resp => window.location = "/")
                  } />
                </Segment>
              </Segment.Group>
            </Segment.Group>
          ))}
        </>
      )
    }}
    </Query>
  )
}

export default List
