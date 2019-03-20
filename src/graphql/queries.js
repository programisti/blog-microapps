// eslint-disable
// this is an auto generated file. This will be overwritten

export const getPosts = `query GetPosts($id: ID!) {
  getPosts(id: $id) {
    id
    title
    text
    author
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: TablePostsFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      text
      author
    }
    nextToken
  }
}
`;
