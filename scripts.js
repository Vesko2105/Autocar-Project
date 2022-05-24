function activate(element, id) {
    var active = document.getElementById(id);
    active.id = "";
    element.id = id;
}

function filter(category){
    let featuredCars = document.getElementsByClassName("featured-image");
    for(let i = 0; i<featuredCars.length; i++){
        let car = featuredCars[i];
        if(car.classList.contains(category))
            car.classList.add("active-f");
        else
            car.classList.remove("active-f");
    }
}