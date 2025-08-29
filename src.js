const phones = {
    "Apple": ["iPhone 19 pro max", "iPhone 14 nhi loo", "iPhone 13 lana ha to loo", "iPhone pro Ammar"],
    "Samsung": ["Galaxy S25", "Galaxy S28 Ultra", "Galaxy A3", "Galax"],
    "Xiaomi": ["Redmi Note 12", "Mi 12", "Poco X5", "Lite"],
    "OnePlus": ["OnePlus 11", "OnePlus 10 Pro", "OnePlus2"],
    "Google": ["Pixel 666", "Pixel 3003", "Pixel nothing bla phone"]
};

const brand = document.getElementById("brand");
const model = document.getElementById("model");
const search= document.getElementById("searchBtn");
const display = document.getElementById("result");

// for(let i in phones){ // i understand `i` is just a container to store phones object data and ``in`` is just keyword of js to find data if or not
//     console.log('hihihi\n' + i + '\n' + phones[i])
// }
// so let give `i` var name to `brandname`

for(let brandname in phones){
    let option = document.createElement('option')
    option.textContent = brandname
    brand.appendChild(option);
    var name = brandname
}

brand.addEventListener('change', function(){
    let selected = brand.value
    let other = phones[selected]
    let getmodel = other
    // console.log('hello\n' + selected + '\n' + getmodel)
    for(let mdel in getmodel){
        let elementmodel= document.createElement('option')
        elementmodel.textContent = getmodel[mdel]
        model.appendChild(elementmodel)
    }
})

search.addEventListener('click', () => {
    let modelval = model.value
    let selected = brand.value
    display.textContent= `your model is ${modelval} your phone brand is ${selected}`
})