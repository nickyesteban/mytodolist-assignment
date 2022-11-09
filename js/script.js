let addTodoBtn = document.querySelector("#addBtn");
addTodoBtn.addEventListener("click", addTodo);

function addTodo() {
    //get value from input
    let todoList = document.querySelector("#todoList").value;

    //get parent node
    let list = document.querySelector("#list");

    //create child nodes
    let todoItem = document.createElement("div");
    let listInput = document.createElement("input");

    listInput.type = "text";
    listInput.setAttribute("disabled", "");
    listInput.value = todoList;

    //create edit btn
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList = "editBtn";
    editBtn.addEventListener("click", editValue);

    //append child nodes
    list.appendChild(todoItem);
    todoItem.appendChild(listInput);
    todoItem.appendChild(editBtn);



    if (list.childElementCount >= 5) {
        addTodoBtn.disabled = true;
        alert("5 to do list is enough for the day")
    }

    function editValue() {
        listInput.removeAttribute("disabled", "")

        //disabled edit button to avoid multiple save buttons
        editBtn.setAttribute("disabled", "")



        //create save btn
        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Save"
        saveBtn.classList = "saveBtn";
        saveBtn.addEventListener("click", saveValue);



        //append save btn
        todoItem.appendChild(saveBtn);


        function saveValue() {
            let text = " Save changes?"

            if (confirm(text) == true) {

                //enable edit button again
                editBtn.removeAttribute("disabled", "")

                //get new value
                let newValue = listInput.value;
                listInput.defaultValue = newValue;

                //disable input type
                listInput.setAttribute("disabled", "")

                //hide save button
                todoItem.removeChild(saveBtn);

                //add text to alert
                text = "Saved successfully";


            } else {
                text = "Cancelled";

                //enabled edit button agin
                editBtn.removeAttribute("disabled", "");

                //disable input type
                listInput.setAttribute("disabled", "");

                //hide save button//
                //saveBtn.setAttribute("display". "none");
                todoItem.removeChild(saveBtn);

                listInput.value = listInput.defaultValue;

            }
            alert(text);




        }
    }

}
