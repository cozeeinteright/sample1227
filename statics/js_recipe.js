const userDataList = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Ann'},
  {id: 3, name: 'Ken'}
];

const searchIdInput = document.querySelector('#search-id-input');

const searchResult = document.querySelector('#search-result');

searchIdInput.addEventListener('keyup', (event) => {
  const searchId = Number(event.target.value);
  findUser(searchId);
})

function findUser(searchId) {
  const targetData = userDataList.find((data) => data.id === searchId);

  if (targetData == null ) {
    searchResult.textContent = 'not find';
    return;
  }

  searchResult.textContent = targetData.name;
}