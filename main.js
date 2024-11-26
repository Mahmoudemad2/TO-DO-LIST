let container = document.getElementById("container");
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");


//   =================
//     when click on btn
//   =================

btn.addEventListener("click", (eo) => {
  eo.preventDefault();
  const newTask = `<div class="task">
    <i class="fa-solid fa-star"></i>
    <p class="child">${inp.value}</p>
    <div class="end-icons">
      <i class="fa-solid fa-trash-can"></i>
      <i class="fa-solid fa-face-angry"></i>
    </div>
  </div>`;
  container.innerHTML += newTask;
});

//   =================
//     when click on container 
//   =================

container.addEventListener("click", (eo) => {
  if (eo.target.className == "fa-solid fa-trash-can") {

    eo.target.parentElement.parentElement.remove();


  } else if (eo.target.className == "fa-solid fa-face-angry") {

    eo.target.classList.add("dn");

    const heart = `<i class="fa-solid fa-heart"></i>`;

    eo.target.parentElement.parentElement
      .getElementsByClassName("child")[0]
      .classList.add("task-done");

    eo.target.parentElement.innerHTML += heart;

  } else if (eo.target.className == "fa-solid fa-heart") {
    
    eo.target.parentElement.parentElement
      .getElementsByClassName("child")[0]
      .classList.remove("task-done");
    eo.target.classList.add("dn");
    const angry = `<i class="fa-solid fa-face-angry orange"></i>`;
    eo.target.parentElement.innerHTML += angry;
  } else if (eo.target.className == "fa-solid fa-star") {
    container.prepend(eo.target.parentElement);
  }
});
