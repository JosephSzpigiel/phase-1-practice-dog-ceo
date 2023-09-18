const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

const dogPictureList = document.querySelector("div");
const breedList = document.querySelector('#dog-breeds')
const selectBreeds = document.querySelector('select')


// let numberToIterate = document.querySelector("#numberseven span")
// console.log(numberToIterate);

// const addButton = document.createElement("button")
// addButton.textContent = "+"
// addButton.addEventListener("click",() => numberToIterate.textContent++)

// const numberLine = document.querySelector("#numberseven")
// numberLine.append(addButton)

fetch(imgUrl)
.then((res)=>res.json())
.then((data)=>{
    imageArray = data.message
    for (picture of imageArray){
        const dogImage = document.createElement("img")
        dogImage.setAttribute("src",`${picture}`)
        dogPictureList.append(dogImage)
    }
});

fetch(breedUrl)
.then((res)=>res.json())
.then((data)=>{
    breedObject = data.message
    for (breed in breedObject){
        const breedLi = document.createElement("li")
        breedLi.textContent = `${breed}`
        breedLi.addEventListener("click", (e)=>{
            e.target.style.color = 'red';
        })
        breedList.append(breedLi)
    }
})
.then(
    console.log(selectBreeds)
)
