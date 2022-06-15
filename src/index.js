document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    tasks(e.target.value)
    document.querySelector('form').reset();
  })
});

function tasks() {
  const input = document.getElementById("new-task-description");
  let btn = document.createElement("button")
  let list = document.createElement("li");
  btn.addEventListener('click', removeTask)
  btn.textContent = 'X';
  list.innerHTML = `${input.value} `;
  list.appendChild(btn)
  document.querySelector("#tasks").appendChild(list);
}

function removeTask(e) {
  e.target.parentNode.remove();
}