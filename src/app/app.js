class BookWithReviews {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.reviews = [];
  }

  addReview(author, content) {
    this.reviews.push({ author, content });
  };
}

/**
 * Group reviews by book id
 * @param {Array} reviews 
 */

const groupReviewByBook = (reviews) => {
  let result = reviews.reduce(function (review, acc) {
    review[acc.bookId] = review[acc.bookId] || []
    review[acc.bookId].push({ author: acc.author, content: acc.content })
    return review
  }, Object.create(null))
  return result
}



/**
 * Parses passed books and reviews arrays to create an array of BookWithReviews object. Each row from books input array
 * should have a corresponding row in resulting array. For example, for following input data:
 *    books = [ { "id" : 101, "title" : "Some book title" } ]
 *    reviews = [ { "bookId" : 101, "author" : "John", "content" : "Great book!" } ];
 * It should return following result:
 *    result = [ { id: 101, title: "Some book title", reviews : [ { author: "John", content: "Great book!" }] } ];
 *
 * @param books[] - an array of input books, see 'src/app/dataset/books.json' for sample data.
 * @param reviews[] - an array of input reviews, see 'src/app/dataset/reviews.json' for sample data.
 * @returns {BookWithReviews[]} - an array of BookWithReviews objects
 */
export function parseBooksData(books = [], reviews = []) {
  const reviewsByBook = groupReviewByBook(reviews)
  const result = books.map(book => {
    const r = reviewsByBook[book.id]
    const newBook = new BookWithReviews(book.id, book.title)
    if (r !== undefined) {
      if (r.length > 1) {
        r.forEach(review => newBook.addReview(review.author, review.content))
      } else {
        newBook.addReview(r[0].author, r[0].content)
      }
    }
    return newBook
  })
  return result
}

/**
 * Displays data from passed `books` array. For example, if books argument would have following value:
 *    books = [ { id: 101, title: "Some book title", reviews : [ { author: "John", content: "Great book!" }] } ];
 * then, following structure should be created under the parentNode:
 * <ol>
 *    <li>
 *      <span>Some book title</span>
 *      <ul>
 *        <li>Great book! by John</li>
 *      </ul>
 *    </li>
 * </ol>
 * @param parentNode - parent node for all books
 * @param books - an array of BookWithReviews objects.
 */
export function displayBooks(parentNode, books = []) {
  if(books.length === 0){
    return []
  }
  const olNode = document.createElement('ol')
  books.forEach(book => {
    const liContainer = document.createElement('li')
    const spanNode = document.createElement('span')
    spanNode.innerText = book.title
    liContainer.appendChild(spanNode)
    const ulNode = document.createElement('ul')
    const reviews = book['reviews']
    if(reviews.length > 0) {
      reviews.forEach(review => {
        const liNode = document.createElement('li')
        liNode.innerText = `${review.content} by ${review.author}`
        ulNode.appendChild(liNode)
      })
      liContainer.appendChild(ulNode)
    }
    olNode.appendChild(liContainer)
  })
  parentNode.appendChild(olNode)
}
