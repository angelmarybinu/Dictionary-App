//searchinput
//searchbtn

const dictionary = (word) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b0b253ac35msh55edd6240dbcf01p1521e1jsn2d4be0fbb17f',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            wordheading.innerHTML = response.word;
            definition.innerHTML = response.definition;
        })
        .catch(err => console.error(err));
}


searchbtn.addEventListener("click", (e) => {
    e.preventDefault();
    dictionary(searchinput.value)
})