function createTitle(title) {
  return (`The ${title}`);
}

function buildMainCharacter (name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}


function saveReview (newReview, emptyArray) {
  if (emptyArray.includes(newReview) === false) {
  emptyArray.push(newReview);
  }
}

function calculatePageCount (title) {
  return title.length * 20
}


function writeBook (title, mainCharacter, genre) {
  return book = {
    title: title,
    mainCharacter: mainCharacter,
    genre: genre,
    pageCount: calculatePageCount(title)
  }
}

function editBook (title) {
  return title.pageCount *= .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}