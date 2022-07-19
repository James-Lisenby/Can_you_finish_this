



storeSaved();

function storeSaved() {
    savedMovies = document.getElementById('savedList').textContent;
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    console.log(savedMovies);
};

// storeSaved()

// function storeSaved() {
//     savedMovies = document.getElementById('savedList');
//     localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
//     console.log(savedMovies);
// }

renderList();

function renderList() {
    var savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    listNode = document.getElementById("savedList");
    for (var i = 0; i < savedMovies.length; i++) {
        liNode = document.createElement("li");
        txtNode = document.createTextNode(savedMovies);
        liNode.appendChild(txtNode);
        listNode.appendChild(liNode);
    }
};


