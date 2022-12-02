function createLibrary (libraryName) {
  var library = {
    name: libraryName,
    shelves: {fantasy: [], 
      fiction: [], 
      nonFiction: []}
  }
  return library
}

function addBook (libraryName, bookTitle) {
  return libraryName.shelves[bookTitle.genre].push(bookTitle)
}

function checkoutBook () {
  
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};