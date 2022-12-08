const addToDoButton = document.getElementById("addTodo");
const toDoContainer = document.getElementById("toDoContainer");
const toDoContainerlundi = document.getElementById("toDoContainerlundi");
const toDoContainermardi = document.getElementById("toDoContainermardi");
const toDoContainermercredi = document.getElementById("toDoContainermercredi");
const toDoContainerjeudi = document.getElementById("toDoContainerjeudi");
const toDoContainervendredi = document.getElementById("toDoContainervendredi");
const toDoContainersamedi = document.getElementById("toDoContainersamedi");
const toDoContainerdimanche = document.getElementById("toDoContainerdimanche");
const inputField = document.getElementById("inputField");
const select = document.getElementById("select");

addToDoButton.onclick = function () {
  if (inputField.value != "" && select.value === "lundi") {
    const paragraph = document.createElement("p");

    paragraph.innerText = inputField.value;

    paragraph.classList.add("paragraphe_style");

    toDoContainerlundi.appendChild(paragraph);
    toDoContainerlundi.style.opacity = 1;

    inputField.value = "";

    paragraph.addEventListener("click", function () {
      paragraph.classList.add("paragraphe_click");
    });

    paragraph.addEventListener("dblclick", function () {
      if (paragraph.value != "") toDoContainerlundi.removeChild(paragraph);
    });
    paragraph.addEventListener("dblclick", function () {
      if (paragraph.value != 0) toDoContainerlundi.style.opacity = 0;
    });
  } else if (inputField.value != "" && select.value === "mardi") {
    const paragraph = document.createElement("p");
    paragraph.innerText = inputField.value;

    paragraph.classList.add("paragraphe_style");

    toDoContainermardi.appendChild(paragraph);

    inputField.value = "";
    toDoContainermardi.style.opacity = 1;

    paragraph.addEventListener("click", function () {
      paragraph.classList.add("paragraphe_click");
    });

    paragraph.addEventListener("dblclick", function () {
      if (paragraph.value != "") toDoContainermardi.removeChild(paragraph);
    });
    paragraph.addEventListener("dblclick", function () {
      if (paragraph.value != 0) toDoContainermardi.style.opacity = 0;
    });
  } else if (inputField.value != "" && select.value === "mercredi") {
    const paragraph = document.createElement("p");
    paragraph.innerText = inputField.value;

    paragraph.classList.add("paragraphe_style");

    toDoContainermercredi.appendChild(paragraph);

    inputField.value = "";
    toDoContainermercredi.style.opacity = 1;

    paragraph.addEventListener("click", function () {
      paragraph.classList.add("paragraphe_click");
    });

    paragraph.addEventListener("dblclick", function () {
      if (paragraph.value != "") toDoContainermercredi.removeChild(paragraph);
    });
    paragraph.addEventListener("dblclick", function () {
      if (paragraph.value != 0) toDoContainermercredi.style.opacity = 0;
    });
  } else if (inputField.value != "" && select.value === "jeudi") {
    const paragraph = document.createElement("p");
    paragraph.innerText = inputField.value;

    paragraph.classList.add("paragraphe_style");

    toDoContainerjeudi.appendChild(paragraph);

    inputField.value = "";
    toDoContainerjeudi.style.opacity = 1;

    paragraph.addEventListener("click", function () {
      paragraph.classList.add("paragraphe_click");
    });

    paragraph.addEventListener("dblclick", function () {
      if (paragraph.value != "") toDoContainerjeudi.removeChild(paragraph);
    });
    paragraph.addEventListener("dblclick", function () {
      if (paragraph.value != 0) toDoContainerjeudi.style.opacity = 0;
    });
  } else if (inputField.value != "" && select.value === "vendredi") {
    const paragraph = document.createElement("p");
    paragraph.innerText = inputField.value;

    paragraph.classList.add("paragraphe_style");

    toDoContainervendredi.appendChild(paragraph);

    inputField.value = "";
    toDoContainervendredi.style.opacity = 1;

    paragraph.addEventListener("click", function () {
      paragraph.classList.add("paragraphe_click");
    });

    paragraph.addEventListener("dblclick", function () {
      if (paragraph.value != "") toDoContainervendredi.removeChild(paragraph);
    });
    paragraph.addEventListener("dblclick", function () {
      if (paragraph.value != 0) toDoContainervendredi.style.opacity = 0;
    });
  } else if (inputField.value != "" && select.value === "samedi") {
    const paragraph = document.createElement("p");
    paragraph.innerText = inputField.value;

    paragraph.classList.add("paragraphe_style");

    toDoContainersamedi.appendChild(paragraph);

    inputField.value = "";
    toDoContainersamedi.style.opacity = 1;

    paragraph.addEventListener("click", function () {
      paragraph.classList.add("paragraphe_click");
    });

    paragraph.addEventListener("dblclick", function () {
      if (paragraph.value != "") toDoContainersamedi.removeChild(paragraph);
    });
    paragraph.addEventListener("dblclick", function () {
      if (paragraph.value != 0) toDoContainersamedi.style.opacity = 0;
    });
  } else if (inputField.value != "" && select.value === "dimanche") {
    const paragraph = document.createElement("p");
    paragraph.innerText = inputField.value;

    paragraph.classList.add("paragraphe_style");

    toDoContainerdimanche.appendChild(paragraph);

    inputField.value = "";
    toDoContainerdimanche.style.opacity = 1;

    paragraph.addEventListener("click", function () {
      paragraph.classList.add("paragraphe_click");
    });

    paragraph.addEventListener("dblclick", function () {
      if (paragraph.value != "") toDoContainerdimanche.removeChild(paragraph);
    });
    paragraph.addEventListener("dblclick", function () {
      if (paragraph.value != 0) toDoContainerdimanche.style.opacity = 0;
    });
  }
};
