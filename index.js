

let inp = document.querySelector("input")
let button = document.querySelector("button")

window.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        let key = "84a3781201a7f9a9bda21e4f05b6c2f0"
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=${key}`)
        .then((res) => res.json())
        .then((data) => {
            let city = document.querySelector(".city")
            let gradus = document.querySelector(".gradus")
            let city_name = data.name
            let temp = Math.floor(data.main.temp)
            gradus.innerHTML = temp + "C"
            city.innerHTML = city_name  
            inp.value = ""
        }).catch((err) => {
            alert("Bunday shahar mavjud emas")
        })
    }else{
        button.onclick = () => {
            let key = "84a3781201a7f9a9bda21e4f05b6c2f0"
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=${key}`)
            .then((res) => res.json())
            .then((data) => {
                let city = document.querySelector(".city")
                let gradus = document.querySelector(".gradus")
                let city_name = data.name
                let temp = Math.floor(data.main.temp)
                gradus.innerHTML = temp + "C"
                city.innerHTML = city_name
                inp.value = ""
            }).catch((err) => {
                alert("Bunday shahar mavjud emas")
            })
        }   
    }
})

