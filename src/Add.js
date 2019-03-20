import React, {useContext} from 'react';
import { Formik } from 'formik'
import gql from "graphql-tag";
import { ClientContext } from './client'
import { Segment, Form, Button, Input, TextArea, Message, Container } from 'semantic-ui-react'
import { createPosts } from './graphql/mutations';

const Add = () => {
  const client = useContext(ClientContext);

  const createPost = async (input) => {
    await client.mutate({
      mutation: gql(createPosts),
      variables: input
    });
  }

  return (
    <Container>
      <Segment>
        <Formik
          initialValues={{ title: '', text: '' }}
          validate={validate}
          onSubmit={(
            values,
            { setSubmitting, setErrors }
          ) => {
            createPost({input: {
              title: values.title,
              text: values.text,
              author: "dude"
            }}).then(data => {
              setSubmitting(false);
              // window.location = "/"
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
  console.log(errors)
  return errors;
}

export default Add
