import { GraphQLServer } from 'graphql-yoga';

// 5 Scalar Types in GraphQL: String, Boolean, Int (whole numbers), Float (numbers with decimal points), ID (unique identifiers, similar to a string)

// Demo user data
const users = [
  {
    id: '1',
    name: 'Noah',
    email: 'noah@example.com',
  },
  {
    id: '2',
    name: 'Andrew',
    email: 'andrew@example.com',
    age: 27,
  },
  {
    id: '3',
    name: 'Sarah',
    email: 'sarah@example.com',
    age: 17,
  },
];

const posts = [
  {
    id: '10',
    title: 'GraphQL 101',
    body: 'GraphQL is a query language...',
    published: true,
    author: '1',
  },
  {
    id: '11',
    title: 'Twenty',
    body: 'Body Twenty',
    published: true,
    author: '1',
  },
  {
    id: '12',
    title: 'Programming',
    body: 'JavaScript is not a scripting language for Java',
    published: false,
    author: '2',
  },
];

const comments = [
  {
    id: '111',
    text: 'The best taco bowls are made in Trump Tower Grill. ',
    author: '1',
    post: '10',
  },
  {
    id: '222',
    text: 'I love Hispanics! Lorem Ipsum is the single greatest threat. ',
    author: '1',
    post: '10',
  },
  {
    id: '333',
    text:
      'That other text? Sadly, it’s no longer a 10. That other text? Sadly, it’s no longer a 10. ',
    author: '2',
    post: '11',
  },
  {
    id: '444',
    text:
      'An ‘extremely credible source’ has called my office and told me that Lorem Ipsum’s birth certificate is a fraud. ',
    author: '3',
    post: '12',
  },
];

// Custom Types -- an object

// Type definitions (schema)
const typeDefs = `
  type Query {
    users(query: String): [User!]!
    posts(query: String): [Post!]!
    comments(query: String): [Comment!]!
    user: User!
    post: Post!
    comment: Comment!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }
      return users.filter((user) => {
        const arg = args.query.toLowerCase();
        return user.name.toLowerCase().includes(arg);
      });
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }

      return posts.filter((post) => {
        const arg = args.query.toLowerCase();
        const isTitleMatch = post.title.toLowerCase().includes(arg);
        const isBodyMatch = post.body.toLowerCase().includes(arg);
        return isTitleMatch || isBodyMatch;
      });
    },
    comments(parent, args, ctx, info) {
      return comments;
    },
    user() {
      return {
        id: '123456',
        name: 'mike',
        email: 'mike@example.com',
      };
    },
    post() {
      return {
        id: '9876',
        title: 'my first post',
        body: 'post body',
        published: true,
      };
    },
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.post === parent.id;
      });
    },
  },
  Comment: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
    post(parent, args, ctx, info) {
      return posts.find((post) => {
        return post.id === parent.post;
      });
    },
  },
  User: {
    posts(parent, args, ctx, info) {
      return posts.filter((post) => {
        return post.author === parent.id;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.author === parent.id;
      });
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

const opts = {
  port: 4001,
};

server.start(opts, ({ port }) => {
  console.log('The server is up!');
});
