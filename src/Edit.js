import React, { useContext } from 'react';
import { withRouter } from "react-router-dom";
import { Formik } from 'formik'
import gql from "graphql-tag";
import { ClientContext } from './client'
import { Container, Segment, TextArea, Form, Button, Input, Message } from 'semantic-ui-react'
import { getPosts } from './graphql/queries';
import { updatePosts } from './graphql/mutations';
import Query from './Query'

const Edit = ({history, match}) => {
  const client = useContext(ClientContext);

  const updatePost = async (input) => {
    await client.mutate({
      mutation: gql(updatePosts),
      variables: input
    });
  }

  return(
    <Container>
      <Segment>
        <Query query={getPosts} variables={{id: match.params.postId}}>
        {({data, loading}) => {
          if (loading) {
            return(<div>loading</div>)
          }

          return(
          <Formik
            initialValues={{ title: data.getPosts.title, text: data.getPosts.text }}
            validate={validate}
            onSubmit={(
              values,
              { setSubmitting, setErrors }
            ) => {
              updatePost({input: {
                title: values.title,
                text: values.text,
                id: data.getPosts.id
              }}).then(data => {
                setSubmitting(false);
                history.push('/')
              });
            }}
            render={({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit} error={errors !== {}}>
                <Form.Field
                  label='title'
                  control={Input}
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  placeholder='new post title'
                />
                {touched.title && errors.title &&
                  <Message
                    error
                    header='Title is not valid'
                    content={errors.title}
                  />
                }
                <Form.Field
                  label="text"
                  control={TextArea}
                  name="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.text}
                  placeholder="blog content"
                />
                {touched.text && errors.text &&
                  <Message
                    error
                    header='Text is not valid'
                    content={errors.text}
                  />
                }
                <Button loading={isSubmitting} type='submit'>Submit</Button>
              </Form>
            )}
          />
        )}}
        </Query>
      </Segment>
    </Container>
  )
}

const validate = (values) => {
  let errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length < 10) {
    errors.title = 'title length should be more than 10 characters';
  }
  if (!values.text) {
    errors.text = 'Required';
  } else if (values.text.length < 100) {
    errors.text = 'text length should be more than 100 characters';
  }
  return errors;
}

export default withRouter(Edit)
