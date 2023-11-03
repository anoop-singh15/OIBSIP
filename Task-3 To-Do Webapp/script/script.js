let input = document.getElementById('task');
let output = document.getElementById('table')


input.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        addtask();
    }

});

function addtask() {
    if (input.value == '') {
        alert('Add task');
    }
    else {
        let li = document.createElement('li');
        let span1 = document.createElement('p');
        span1.innerHTML = input.value;
        let span2 = document.createElement('i');
        let span3 = document.createElement('span');
        let edit = document.createElement('button');
        edit.textContent = "EDIT";
        span2.innerText = `${day()} - ${date()}`;

        li.appendChild(span1);
        li.appendChild(span2);
        li.appendChild(span3);
      
        output.appendChild(li);
    }
    input.value = "";
    saveData();

}

output.addEventListener("click", (e) => {

    console.log(e.target);
    if (e.target.tagName == "LI") {
        e.target.classList.toggle('checked');
    }
    else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
    }
    saveData();
}, false);


function saveData() {
    localStorage.setItem("data", output.innerHTML);
}

function showTask() {
    output.innerHTML = localStorage.getItem("data");

}

showTask();
function EmptyList() {
    localStorage.clear();
    showTask();
    saveData();

}


function date() {
    const now = new Date();
    const date = now.toLocaleDateString('no-no');
    return date;
}


function day() {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day_no = new Date();
    const day_string = weekday[day_no.getDay()];
    return day_string;

}

