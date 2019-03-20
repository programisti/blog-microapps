import React from 'react';
import gql from "graphql-tag";
import { ClientContext } from './client'

class Query extends React.Component {
  constructor() {
    super()
    this.fetchData = this.fetchData.bind(this)
    this.state = {
      data: [],
      loading: true
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    this.context.query({
      query: gql(this.props.query),
      variables: this.props.variables
    }).then(resp => {
      this.setState({data: resp.data, loading: false})
    });
  }

  render() {
    const { children } = this.props
    const { data, loading } = this.state

    return children({
      data: data,
      loading: loading
    })

  }
}

Query.contextType = ClientContext
export default Query
