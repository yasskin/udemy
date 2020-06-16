# 3. On To GraphQL

## GraphQL Schemas

- GitHub GraphQL API
  https://developer.github.com/v4/

        "description": "GraphQL is a query language and execution engine tied to any backend service.",
        "homepageUrl": "https://spec.graphql.org"

# Object Types

1. Input Types
   1. integer
   2. float
   3. string
   4. boolean
   5. null
   6. enum
   7. list

graphql is self documenting!

query {
   user(id: '23') {
      users {
         company {
            name
         }
      }
   }
}

