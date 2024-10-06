window.onload = function () {
  const numberElement = document.getElementById('number');
  let currentNumber = 0;
  const duration = 3000; // 3 seconds
  const targetNumber = 10;
  const interval = duration / targetNumber; // Time between each increment

  function incrementNumber() {
    currentNumber++;
    numberElement.textContent = currentNumber + "+";
    if (currentNumber < targetNumber) {
      setTimeout(incrementNumber, interval);
    }
  }

  incrementNumber();

  // Search Bar Functionality
  const searchBar = document.getElementById('search-bar');
  const books = document.querySelectorAll('#gallery .image-container');

  searchBar.addEventListener('keyup', function () {
    let searchQuery = searchBar.value.toLowerCase();

    books.forEach(function (book) {
      let bookTitle = book.querySelector('h3').textContent.toLowerCase();
      let bookAuthor = book.querySelector('p').textContent.toLowerCase();

      if (bookTitle.includes(searchQuery) || bookAuthor.includes(searchQuery)) {
        book.style.display = ''; // Show the book
      } else {
        book.style.display = 'none'; // Hide the book
      }
    });
  });
};

// Existing dropdown menu functionality
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const dropdownMenu = document.getElementById('dropdownMenu');

  menuButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
  });

  document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove('show');
    }
  });

  dropdownMenu.addEventListener('mouseleave', () => {
    dropdownMenu.classList.remove('show');
  });
});

console.log("Let's write JavaScript");

// Fetch and display content asynchronously
async function main() {
  let a = await fetch("http://127.0.0.1:5500/review/");
  let response = await a.text();
  console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
}
