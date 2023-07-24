## _Assginment For Backend Developer Role_

### Commands

- open terminal / cmd

```diff
- git clone https://github.com/kunals12/enverx-be-developer-assignment.git
- cd enverx-be-developer-assignment
- git checkout development
- npm install
```

- Create database on mongodb atlas and get connection string

```diff
- mongodb+srv://<username>:<password>@cluster0.uavlo64.mongodb.net/?retryWrites=true&w=majority
```

- Change username and password filed with your username and password
- Add this given string to `.env` file with name
  `MONGODB`

- To run api use `node index.js` command

### Api Endpoints

- `GET /posts` - Get all blog posts (Mandatory: Apply sorting based on created Date, blog name and filters based on category).
- `GET /posts?sortBy=name` - Get all blog post by name [A to Z order]
- `GET /posts?sortBy=date` - Get all blog post by date [Older are at top]
- `GET /posts/:id` - Get a specific blog post by ID.
- `POST /posts` - Create a new blog post.
- `PUT /posts/:id` - Update an existing blog post.
- `DELETE /posts/:id` - Delete a blog post.
