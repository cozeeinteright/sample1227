let button = document.getElementById("fetchbutton");

let exerciseForTheReader = {name:"Jonh",age:20};

button.onclick = () => {
  let response = fetch("http://localhost:3000/api/postMessage",{
    method:"POST",
    headers: [
      ["Content-Type", "application/json"]
    ],
    credentials: "include",
    body: JSON.stringify(exerciseForTheReader)
  });
  response.then(result => console.log(result.json))

}