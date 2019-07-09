1. Create a page that contains one input(title), one textarea(body) and 1 button. In addtion, need to use ngModel to do 2 way binding.
2. Create a service to fetch data:

- URL:https://jsonplaceholder.typicode.com/posts
- Use HttpClient.get to get information
- Use HttpClient.post to insert post object that includes title and body.

- POST Example:

```
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
```

3. Testing requirement:

- Need to test the component has elements as follows input(class="title"),textarea(class="body"),button(class="submit").
- Need to test postList that can show the list with 10 items maximum.
- Need to test onSubmit() method works.
