const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  // toggle 会自动检查：有这个类就删掉，没这个类就加上
  e.target.classList.toggle("done");
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});


// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "I love the world ang everything in it";
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/wife.jpg") {
    myImage.setAttribute("src", "images/dear.jpg");
  } else {
    myImage.setAttribute("src", "images/wife.jpg");
  }
});

let myButton = document.querySelector("button");


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `welcome to this little world, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `welcome to this little world, ${myName}`;
  }
}