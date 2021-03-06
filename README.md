# Udemy Node Instruction

Nodejs Movie Api 

# Movies

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/movies | `GET` | Empty | List all movies. |
| /api/movies | `POST` | {'title':'foo', 'category':'bar', 'country':'Turkey', year:1990, director:"id", imdb_score: 9.7 } | Create a new movie. |
| /api/movies/:movie_id | `GET` | Empty | Get a movie. |
| /api/movies/:movie_id | `PUT` | {'name':'foo', 'surname':'bar'} | Update a movie with new info. |
| /api/movies/:movie_id | `DELETE` | Empty | Delete a movie. |
| /api/movies/top10 | `GET` | Empty | Get the top 10 movies. |
| /api/movies/between/:start_year/:end_year | `GET` | Empty | Movies between two dates. |

# Directors

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/directors | `GET` | Empty | List all directors. |
| /api/directors | `POST` | { name: 'foo', surname:'bar', bio:'lorem ipsum' } | Create a new director. |
| /api/directors/:director_id | `GET` | Empty | Get a director. |
| /api/directors/:director_id | `PUT` | {'name':'foo', 'surname':'bar', 'bio': 'lorem'} | Update a director with new info. |
| /api/directors/:director_id | `DELETE` | Empty | Delete a director. |
| /api/directors/:director_id/best10movie | `GET` | Empty | The director's top 10 films. |

# Index

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /register | `POST` | { username: 'foo', password:'1234' } | Create a new user. |
| /authenticate | `POST` | { username: 'foo', password:'1234' } | Generate a token. |

## MongoDB Movies Collection Types

MongoDB collection design of movie 

|     id    |  title | imdb_score | category | country |  year  | date |
|-----------|--------|------------|----------|---------|--------|------|
|ObjectId []| String |   Number   |  String  |  String | Number | Date |

## Json Type of Movies Collection Types
 - `{
id : ObjectId [],
"title" : String,
"imdb_score" : Number,
"category" : String,
"country" : String,
"year" : Number,
"date" : Date
}`
## MongoDB Directors Collection Types

MongoDB collection design of director 

|     id    |  name  |   surname  |    bio   |createdAt|
|-----------|--------|------------|----------|---------|
|ObjectId []| String |   Number   |  String  |   Date  | 

## Json type of Director Collection Types
 - `{
id : ObjectId [],
"name" : String,
"surname" : Number,
"bio" : String,
"date" : Date
}`
# Demo

Coming soon with heroku deployment... Stay tuned.. 
