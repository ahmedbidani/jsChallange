Here is a piece of an application that parses JSON input and displays books data with reviews.

# Problem statement

Your job is to implement two functions at `src/app/app.js` file. Build the project to run the unit tests and check how your code works with sample data.

 1. Implement `parseBooksData(books, reviews)` that will create an array of `BookWithReview` objects, by parsing passed arrays `books` and `reviews`. You can find a sample data at `app/dataset/books.json` file and at `app/dataset/reviews.json` file. Data from `app/dataset/books.json` will be passed as `books` argument and data from `app/dataset/reviews.json` will be passed as `reviews` argument. Each `BookWithReview` object should contain the `id`, `title` and all reviews matched by `bookId` attribute from `reviews` array.
 
 2. Implement `displayBooks(parentNode, books)` that should append DOM nodes to passed `parentNode` to render information about passed `books` array which contains `BookWithReviews` objects. For sample data located at `app/dataset` following DOM tree should be created under the `parentNode`:

```html
  <ol>
    <li>
      <span>Some book title</span>
      <ul>
        <li>Great book! by John</li>
        <li>Worth reading. by Alice</li>
      </ul>
    </li>
    <li>
      <span>Another book title</span>
      <ul>
        <li>Waste of time :( by Joe</li>
      </ul>
    </li>
    <li>
      <span>Best book title ever</span>
    </li>
  </ol>
```

# Hints

Build the project at any time to check if your code is passing tests. 

Good luck!
