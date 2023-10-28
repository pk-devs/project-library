/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    rating: 4.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    rating: 4.5,
    description:
      'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
    image: './books-images/to-kill-a-mockingbird.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Science Fiction',
    rating: 4.4,
    description:
      'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
    image: './books-images/1984.jpg'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
    image: './books-images/pride-and-prejudice.jpg'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    rating: 4,
    description:
      'Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    rating: 4.6,
    description:
      'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
    image: './books-images/the-hobbit.jpg'
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    rating: 4.7,
    description:
      'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
    image: "./books-images/unknown.jpg"

  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    rating: 4.1,
    description:
      'An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.',
    image: './books-images/moby-dick.jpg'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    rating: 4.55,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/the-lord-of-the-rings.jpg'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977,
    genre: 'Horror',
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    year: 1950,
    genre: 'Fantasy',
    rating: 4.15,
    description:
      'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
    image: './books-images/the-chronicles-of-narnia.jpg'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    genre: 'Mystery',
    rating: 3.8,
    description:
      'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
    genre: 'Science Fiction',
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    genre: 'Mystery',
    rating: 4.1,
    description:
      'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    year: 2006,
    genre: 'Dystopian',
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: './books-images/unknown.jpg'
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    year: 1979,
    genre: 'Science Fiction',
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Giver',
    author: 'Lois Lowry',
    year: 1993,
    genre: 'Dystopian',
    rating: 4.12,
    description:
      'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
    image: './books-images/unknown.jpg'
  }
]

// Some of these references are not needed, why? I can comment out e.g age and it still works in the app. Curious to know why :)

const container = document.getElementById("container")
const filterDropdown = document.getElementById("filterDropdown")
const highestRating = document.getElementById("highestRating")
const lowestRating = document.getElementById("lowestRating")
const age = document.getElementById("age")
const searchInput = document.getElementById("searchInput")
const publishedAfter2100 = document.getElementById("publishedAfter2100")
const clear = document.getElementById("clear")

// Clear all and start from the start 
clear.addEventListener("click", () => {
  
  loadBooks(books)
})

// Load all books at start & create html card

const loadBooks = (books) => {
  container.innerHTML = ""
  
  // Create card that should be inserted
  books.forEach((book) => {
    container.innerHTML += 
    `
    <div class="card"> 
    <h3 class="title"> ${book.title} </h3>
    <img class="card-img" src=${book.image}>
    <p> Written by ${book.author} </p>
    <br>
    <p> <strong>Genre:</strong> ${book.genre} </p>
    <p> <strong>Published:</strong> ${book.year} </p>
    <p> <strong>Rating:</strong> ${book.rating} </p>
    <br>
    <p> ${book.description} </p>
    </div> 
    `
  })
}

// Filter books by genre

const filterBooks = () => {
   const value = filterDropdown.value

   if (value === "all") {
    loadBooks(books)
   } else {
    const filteredList = books.filter((book)=> book.genre === value)
    return loadBooks(filteredList)
   }
}

// Listen to the dropdown in order to display the selection

filterDropdown.addEventListener("change", filterBooks)

// Filter books by rating , How can I use only one button? Same question for age


const sortHighRating = () => {
  const sortRating = books.sort((a,b) => b.rating - a.rating)
  container.innerHTML = ""
  document.getElementById("container").innerHTML = sortRating
  return loadBooks(sortRating)
}

const sortLowRating = () => {
  const sortRating = books.sort((a,b) => a.rating - b.rating)
  container.innerHTML = ""
  document.getElementById("container").innerHTML = sortRating
  return loadBooks(sortRating)
 }


// Filter by age, How can I use only one button? Same question for rating. How can I code so both age and rating filter should be applied on array?

const sortAgeOldest = () => {
  const sortedAge = books.sort((a,b) => a.year - b.year)
  container.innerHTML = ""
  document.getElementById("container").innerHTML = sortedAge
  return loadBooks(sortedAge)
}

const sortAgeNewest = () => {
  const sortedAge = books.sort((a,b) => b.year - a.year)
  container.innerHTML = ""
  document.getElementById("container").innerHTML = sortedAge
  return loadBooks(sortedAge)
}

// Filter by search bar
// listen to what user input in search field in order to filter books
searchInput.addEventListener("input", input => {
  // Catch the search value
  const value = input.target.value.toLowerCase()
  // Filter the books by search value
  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(value))
  return loadBooks(filteredBooks)

})

// Only show books published after 2000

const sortPublishedAfter = () => {
  // make the condition to only include books with key-value pair of year higher than 2000, can't get it to work- help please :)
  const booksPublishedAfter = books.filter(book => book.year >= 2000)
  
  container.innerHTML =""
  document.getElementById("container").innerHTML = booksPublishedAfter
  return loadBooks(booksPublishedAfter)
}

loadBooks(books)