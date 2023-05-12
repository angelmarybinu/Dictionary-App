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
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        
        
        
        console.log(result);
        
        word.innerHTML=response.word;
        definition.innerHTML=response.definition;



    } catch (error) {
        console.error(error);
    }
    
}

submitbtn.addEventListener("click",(e)=>
{
    e.preventDefault();
    dictionary(searchinput.value)
})