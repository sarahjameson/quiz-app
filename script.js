

fetch('https://opentdb.com/api.php?amount=10&category=26')
  .then(response => response.json())
  .then(data => console.log(data));
