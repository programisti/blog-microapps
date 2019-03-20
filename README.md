This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install and run

to run this application you should perform next steps:

### `clone`

1) run git clone command `git clone https://github.com/programisti/blog-microapps.git`
2) run `npm install`
3) run `npm start`


### `project reference`

I have used `semantic-ui-react` for UI kit, `amplify-js` to communicate with AppSync backend.
I have created `Query` component to achieve Apollo Client like sugar syntax when fetching queries. Under the hood `Query` component uses React's render props.
You can use `Query` component anywhere with following syntax:
```
<Query query={listPosts}>
{({ data, loading }) => {
  if (loading) {
    return(<div>loading...</div>)
  }

  return (
    <div>display data here</div>
  )
}}
</Query>
```
