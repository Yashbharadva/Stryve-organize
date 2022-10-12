const nav = document.querySelector(".navigationBar")
fetch("/src/components/organisms/navbar/navbar.html")
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data
  })