const input = document.querySelector(".main");
const input1 = document.querySelector(".main1");
const input2 = document.querySelector(".main2");
const add = document.querySelector(".add");
const table = document.querySelector(".table-body");
const img1 = document.querySelector(".img1");

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
img1.style.display = "none";

let countri = 0;
let productAll = [];

function addProduct() {
  // let findItem = Array.from(tr).some(el => el.innerText === input1.value)
  // console.log(findItem);
  if (arr.includes(input1.value) === true) {
    alert("такой продукт уже существует!");
  } else {
    arr.push(input1.value);
    if (
      input.value.trim() === "" ||
      input1.value.trim() === "" ||
      input2.value.trim() === ""
    ) {
      alert("error");
    } else {
      table.innerHTML = ''
      let newProduct = {
        id: productAll.length + 1,
        url: input.value,
        name: input1.value,
        price: input2.value,
      };
      productAll.push(newProduct);
      console.log(productAll);
      // countri++;
      productAll.map((el, idx) => {
        table.innerHTML += `<tr>
        <th scope="row">${idx + 1}</th>
        <td>
        <img class = "img" src="${el.url}" alt="">
        </td>
        <td class="inputvalue">
        ${el.name}
        </td>
        <td>
        ${el.price}$
        </td>
        <td>
        <button type="button" class="btn bl btn-danger">delete</button>
        
          </td>
        </tr>`;
      });
    }
  }

  input.value = "";
  input1.value = "";
  input2.value = "";
}

{
}

add.addEventListener("click", () => {
  img1.style.display = "block";
  setTimeout(() => {
    img1.style.display = "none";
    addProduct();
  }, 1500);
});

///////////////////////////////////////////

function updateIds() {
  const rows = document.querySelectorAll('.table-body tr');
  rows.forEach((row, index) => {
    const idCell = row.querySelector('th');
    idCell.textContent = index + 1;
  });
}

table.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-danger')) {
    const row = event.target.closest('tr');
    row.remove();
    updateIds(); // Пересчет id после удаления строки
  }
});

///////////////////////////////////////////////

// table.addEventListener("click", (e) => {
//   if (e.target.classList.contains("btn-danger")) {
//     e.target.parentNode.parentNode.remove();
//     row.remove();
//   }
// });

input2.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addProduct();
  }
});
