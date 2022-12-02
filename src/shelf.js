function shelfBook (bookTitle, shelf) {
  if (shelf.length <= 2) {
    return shelf.unshift(bookTitle)
  }
}

function unshelfBook (bookTitle, shelf) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) { 
      return shelf.splice(i, 1)
    }
  }
}

function listTitles (shelf) {
  var total = ""
    for (i = 0; i < shelf.length; i++) {
     if (i < shelf.length - 1) {
      total += shelf[i].title + ", "
    } else {
      total += shelf[i].title 
  }
}
  return total
}

function searchShelf (shelf, bookTitle) {
  if (listTitles(shelf).includes(bookTitle)) {
    return true
  } else {
    return false
  }
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};