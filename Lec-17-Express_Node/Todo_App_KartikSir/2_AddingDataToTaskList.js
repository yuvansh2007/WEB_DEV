let input = document.querySelector("input");
let button = document.querySelector("button");
// Task list ko select karo
let taskList = document.querySelector("ul");

button.addEventListener("click", (ev) => {
  // aage piche ke extra spaces remove karega trim function
  let inputData = input.value.trim();
  input.value = "";
  if (inputData) {
    // Now we need to create a li item with the following buttons
    let li = document.createElement('li')

    // Add Input data to the li item
    li.innerText = inputData

    // Create ⬆, ⬇, ❌ , Update

    // let buttonsData = ["⬆", "⬇", "❌", "Update"]; or 
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    let btn3 = document.createElement('button');
    let btn4 = document.createElement('button');

    btn1.innerText = "⬆";
    btn2.innerText = "⬇";
    btn3.innerText = "❌";
    btn4.innerText = "Update";

    btn1.classList.add('increase-priority');
    btn2.classList.add('decrese-priority');
    btn3.classList.add('delete-task');
    btn4.classList.add('update-task');

    // Append all buttons as children of li
    li.appendChild(btn1);
    li.appendChild(btn2);
    li.appendChild(btn3);
    li.appendChild(btn4);

    // Append li to ul
    taskList.appendChild(li);
  }
});
