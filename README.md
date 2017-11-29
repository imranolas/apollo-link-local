<div align="center">
  <h1>apollo-link-local</h1>
</div>

## Purpose

An Apollo Link to execute queries against a local schema. Useful for SSR query
execution or client side schemas.

## Installation

`npm install apollo-link-local --save`

## Usage

```js
import { LocalLink } from "apollo-link-local";
import { makeExecutableSchema } from "graphql-tools";

/* Generate an executable schema */
const schema = makeExecutableSchema({ typeDefs, resolvers });

const link = new LocalLink({ schema });
```

## Context

The context generated by ApolloLink is handed to the GraphQL context at
execution. If you need context available in a resolver pass it via a Link.

## Why is this useful?

If you're building SSR and have access to the executable schema on the same
server, you may find `LocalLink` makes good sense. It enables you to hydrate SSR
state from without needing to make network calls.

### Client side schemas

GraphQL typically requires mutual agreement to adopt the technology on both the
server and client. However, there may be reasons why it's not practical to host
a GraphQL service, whether organisational, technical, or otherwise.

Consider the case of a GraphQL service backed by an existing RESTful API. With
`LocalLink`, the schema could exist and resolve to RESTful endpoints entirely
client side allowing you to benefit from other Apollo tooling such as caching,
query fragments, and more.