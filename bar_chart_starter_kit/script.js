const list = document.querySelector("ul");

const li = document.createElement("li");
li.style.setProperty("--height", "30");
list.appendChild(li);

// const columnArray = []

// setInterval(generateColumns, 1000)

// function generateColumns() {
//     columnArray.push(Math.round(Math.random))
// }

{
  function getRandomNumber() {
    return Math.floor(Math.random() * 101);
  }

  const value = getRandomNumber();
  li.style.setProperty("--height", value);

  function addBar(value) {
    const li = document.createElement("li");
    li.style.setProperty("--height", value);
    list.appendChild(li);
  }

  const data = [];

  setInterval(() => {
    const value = Math.floor(Math.random() * 101);

    data.push(value);
    addBar(value);

    if (data.length > 20) {
      data.shift();
      list.removeChild(list.firstElementChild);
    }
  }, 300);

  list.firstElementChild;
}
