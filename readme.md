# To-Do List Application
## Frontend Setup

1. **Initial Setup**
   - Set up npm
   - Use React

### Prerequisites

- Node.js
- npm

### Register & Login 
   https://todomayster.netlify.app/register <br >
   https://todomayster.netlify.app/login

## Error Encountered

### Mixed Content Error

I encountered a mixed content error:
```plain
xhr.js:244 Mixed Content: The page at 'https://todomayster.netlify.app/' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://todo-mayster.us-east-2.elasticbeanstalk.com/api/tasks'. This request has been blocked; the content must be served over HTTPS.
```

### solution
The error occurred because the application was trying to make requests over HTTP from an HTTPS page. To resolve this issue, I created a proxy to handle the communication between HTTPS and HTTP endpoints. This ensures that the content is served over HTTPS, allowing secure communication between the frontend and backend.
```plain
"proxy": "https://todomayster.netlify.app",
```
In the Netlify configuration, I created a _redirects file in the public directory with the following content:
```plain
/api/* http://todo-mayster.us-east-2.elasticbeanstalk.com/api/:splat 200
```