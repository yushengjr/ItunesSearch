
## How to start the application
1. Clone or download the repository to your local storage
2. Run `npm install` to install necessary dependencies
3. Run `ng serve --o`, this will compile your angular code and automatically run your application in your browser


#Tab 1 Assignment 1: Search Album

This is a small application that implements a iTunes API search to display album information for a given artist.

#### Original requirements #1

// 1. Create a Search Component for entering an Artist

// 2. On Search, make an api call to iTunes API to fetch the information about the artist
// API URL: https://itunes.apple.com/search?term=${ARTIST_NAME}

// 3. When the Search button is clicked, make a call to the API and display the list of albums, including the album name and album cover inside #albums-container in a grid. Use any CSS technique you are comfortable with (Note: The API will return a list of albums based on the search result. Use your skills to find out what the iTunes API data structure looks like and extract the relevant data from it).

// 4. Style the page to the best of the ability to make the UI look clean and presentable


***
#Tab 2 Assignment 2: Play with http post

#### Original requirements #2
1.	Create a page that contains one input(title), one textarea(body) and 1 button. In addtion,  need to use ngModel to do 2 way binding.
2.	Create a service to fetch data:
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

3.	How to test the Onsubmit method?
=======
>>>>>>> ed8f46b51143d5016460aa6bd9c08e668eacebfb
