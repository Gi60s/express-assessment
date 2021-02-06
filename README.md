
# Express Server Assignment

For this assignment we have a working expressjs server that serves an `index.html` file as well as several REST API endpoints.

Answer the following questions with a group. Each person in the group should be prepared to explain the answer.

The class will reconvene and we'll walk through the answers together.

## Questions

1. What does `server.js` line 12 do?

    `app.use(express.json())`

2. What does `server.js` line 16 do?

    `app.use(express.static(wwwDirPath))`

3. What does `server.js` line 14 do?

    `app.use('/api', api)`

4. In `server.js`, why is `app.use(express.json())` before `app.use('/api', api)`?

5. In `server.js`, why is `app.use('/api', api)` before `app.use(express.static(wwwDirPath))`?

4. What REST method and URL should be used to check the server health?

5. What REST method and URL should be used to get a list of cars?

5. What REST method and URL should be used to get a list of cities?

5. What REST method and URL should be used to get a list of names?

5. What REST method and URL and body should be used to add a name?

5. What REST method and URL should be used to delete a name?