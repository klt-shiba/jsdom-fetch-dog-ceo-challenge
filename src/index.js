console.log('%c HI', 'color: firebrick')


window.addEventListener('DOMContentLoaded', (event) => {

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const dogImg = document.getElementById("dog-image-container");
    const elem = document.createElement("img");
    const listContainer = document.getElementById("dog-breeds");
    let list = document.createElement('li');

    fetch(imgUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        // console.log(json);
        let dogs = json.message;
        // console.log(dogs);

        function loadPics(dogs){
            for(var i=0; i < dogs.length; i++) {
                var img = new Image();
                    img.src = dogs[i];
                    img.classList.add("imgbox");
                    dogImg.appendChild(img);
            }
        }
        return loadPics(dogs)
    })
    .catch(function(){
        console.log("Dog imgs not working")
    })
    
    
    fetch(breedUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {

        let dogObj = json.message;
        let dogKeys = Object.keys(dogObj);
        let dogValues = Object.values(dogObj);

        function loadList(dogObj){
            for (let dog in dogObj) {
                let list = document.createElement('li');
                list.classList.add("list-item")
                let listDog = document.createTextNode(`${dog}`);
                list.appendChild(listDog);
                listContainer.appendChild(list);
            }
        }

        return loadList(dogObj)
    })
    .catch(function(){
        console.log("Dog Breeds not working")
    })

    let elements = document.getElementById('dog-breeds');

    elements.addEventListener("click", (e) => {
        if (e.target.className === 'list-item') {
            console.log(e)
            e.target.style.backgroundColor = "yellow";
            console.log(`Removed ${e.target.innerText}`)
        }
    })


});

