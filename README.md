# GraphQL-BFF-with-graphql-yoga

This is the simple Backend-For-Frontend server implementation with graphql-yoga.
It converts [JSONPlaceholder](https://jsonplaceholder.typicode.com/) RESTful API to GraphQL.

# Getting Started

Setup and open GraphQL playground in a browser.

```sh
$ yarn
$ yarn start
$ open http://localhost:4000
```

Run a GraphQL query like following.

```GraphQL
# Get all users
{
  users {
    id
    username
  }
}
```

```GraphQL
# Get a todo with user by id  
{
  todo(id: 1) {
    title
    user {
      id
      name
    }
  }
}
```

# References

* [TypeScript](https://www.typescriptlang.org/index.html)
* [graphql-yoga](https://github.com/graphcool/graphql-yoga)
* [merge-graphql-schemas](https://github.com/okgrow/merge-graphql-schemas)
