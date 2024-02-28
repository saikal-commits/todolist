const input = document.querySelector(".main");
const input1 = document.querySelector(".main1");
const input2 = document.querySelector(".main2");
const add = document.querySelector(".add");
// const list = document.querySelector(".list");
const table = document.querySelector(".table-body");

// <li class="list-group-item w-50">go to home</li>

// add.addEventListener("click", () => {
//   if (input.value.trim() === "") {
//     alert("error");
//   } else {
//     list.innerHTML += `<li class="list-group-item w-50  d-flex align-items-center justify-content-between">
//     ${input.value}
//     <button type="button" class="btn btn-danger">Delete</button>

//     </li>`;
//     input.value = "";
//   }
// });

let arr = [];

let countri = 0;
function addProduct() {}

add.addEventListener("click", () => {
  if (arr.includes(input1.value) === true) {
    alert("такой продукт уже существует!");
  } else {
    countri++;
    arr.push(input1.value);
    if (
      input.value.trim() === "" ||
      input1.value.trim() === "" ||
      input2.value.trim() === ""
    ) {
      alert("error");
    } else {
      table.innerHTML += `<tr>
<th scope="row">${countri}</th>
<td>
<img class = "img" src="${input.value}" alt="">
</td>
<td class="inputvalue">
${input1.value}
</td>
<td>
${input2.value}$
</td>
<td>
<button type="button" class="btn bl btn-danger">delete</button>

  </td>
</tr>`;
    }
  }

  input.value = "";
  input1.value = "";
  input2.value = "";
});

table.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    e.target.parentNode.parentNode.remove();
    row.remove();
  }
});

input1.addEventListener("keydown", (e) => {
  // if (e.key === "Enter") {
  //   addProduct();
  console.log(e);
  // }
});
