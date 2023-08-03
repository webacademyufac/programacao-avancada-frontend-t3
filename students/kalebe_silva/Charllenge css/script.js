let ul = document.querySelector('.my-list');
let form = document.querySelector('.form-insert-urls');
const url = "http://localhost:3000/";

console.log(ul)

async function getAll() {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();
    return data;
}

prepareDataForWriteInLiElement();

async function prepareDataForWriteInLiElement(){
    let apiData = await getAll();
    writeDataInLiElementAndAppendLiInUl(apiData);
}


function writeDataInLiElementAndAppendLiInUl(apiData){
    for(let i = 0; i < apiData.length; i++){
        let li = document.createElement("li");
        li.innerHTML = `${apiData[i].name} - ${apiData[i].url}`;
        li.appendChild(createDeleteButtonForLi(li,apiData[i]));
        ul.appendChild(li);
    };
    
}

function createDeleteButtonForLi(li,apiData){
    let buttonRemove = document.createElement("button");
    buttonRemove.innerText = "X";
    buttonRemove.addEventListener("click", async () => {
        await deleteById(apiData._id);
        li.remove();
        location.reload();
      });
    return buttonRemove;
}



async function insert(data) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  async function updateById(data, id) {
    // Default options are marked with *
    const response = await fetch(url + id, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  async function deleteById(id) {
    // Default options are marked with *
    const response = await fetch(url + id, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }