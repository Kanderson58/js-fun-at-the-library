function createTitle(bookTitle) {
  return (`The ${bookTitle}`);
}

function buildMainCharacter (nameChar, ageChar, pronounsChar) {
  return {
    name: nameChar,
    age: ageChar,
    pronouns: pronounsChar
  }
}

function saveReview (newReview, listOfReviews) {
  if (listOfReviews.includes(newReview) === false) {
    listOfReviews.push(newReview);
  }
}

function calculatePageCount (bookTitle) {
  return bookTitle.length * 20;
}


function writeBook (bookTitle, nameChar, bookGenre) {
  return book = {
    title: bookTitle,
    mainCharacter: nameChar,
    genre: bookGenre,
    pageCount: calculatePageCount(bookTitle)
  }
}

function editBook (bookTitle) {
  return bookTitle.pageCount *= .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}