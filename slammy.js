const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke")


const apikey = "10VH3XdtpMk5RomABCmMKQ==KDGBicbYUY77ER2O";

const options = {
    method: "GET", 
    headers: {
        "X-Api-Key": apikey,
    },
};


const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getjoke() {

    try {
        
    jokeEl.innerText = "laugh for me";
    btnEl.disabled = true;
    btnEl.innerText ="loading...";

    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText ="TELL ME A JOKE";

   jokeEl.innerText = data[0].joke
    } catch (error) {
        console.log(error);


    }


}

btnEl.addEventListener("click", getjoke)