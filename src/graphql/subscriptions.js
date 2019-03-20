// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreatePosts = `subscription OnCreatePosts(
  $id: ID
  $title: String
  $text: String
  $author: String
) {
  onCreatePosts(id: $id, title: $title, text: $text, author: $author) {
    id
    title
    text
    author
  }
}
`;
export const onUpdatePosts = `subscription OnUpdatePosts(
  $id: ID
  $title: String
  $text: String
  $author: String
) {
  onUpdatePosts(id: $id, title: $title, text: $text, author: $author) {
    id
    title
    text
    author
  }
}
`;
export const onDeletePosts = `subscription OnDeletePosts(
  $id: ID
  $title: String
  $text: String
  $author: String
) {
  onDeletePosts(id: $id, title: $title, text: $text, author: $author) {
    id
    title
    text
    author
  }
}
`;
