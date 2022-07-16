

storeSaved()

function storeSaved() {
    var storeMovie = document.getElementsb(".storedMovie").value;
    localStorage.setItem("storeMovie", JSON.stringify(storeMovie));
    console.log(storeMovie);

    // document.getelementbyTAG(ul)
}