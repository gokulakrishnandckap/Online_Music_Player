const music = [{
    id: 1,
    img: "thee-thalapathy.jpg",
    text: "Bloody_Sweet.mp3",
    Audio: "Bloody_Sweet.mp3"
},
{
    id: 2,
    img: "chilla.jpg",
    text: "chilla.mp3",
    Audio: "Chilla-Chilla.mp3"
},
{
    id: 3,
    img: "thee-thalapathy.jpg",
    text: "thee-thalapathy.mp3",
    Audio: "Thee.mp3"
},
{
    id: 4,
    img: "vaathi.jpg",
    text: "vaa vaathi.mp3",
    Audio: "Vaa.mp3"
},
{
    id: 5,
    img: "anbae.jpg",
    text: "Anbe.mp3",
    Audio: "Anbe.mp3"
},
{
    id: 6,
    img: "asura.jpg",
    text: "Azhagiya-Asura.mp3",
    Audio: "Azhagiya-Asura.mp3"
},
{
    id: 7,
    img: "vaa.jpeg",
    text: "Va-Vannila.mp3",
    Audio: "Va-Vannila.mp3"
},
{
    id: 8,
    img: "unakul.jpg",
    text: "Unakkul-Naane.mp3",
    Audio: "Unakkul-Naane.mp3"
},
{
    id: 9,
    img: "thiru.jpg",
    text: "Thangatha.mp3",
    Audio: "Thangatha.mp3"
},
{
    id: 10,
    img: "anjan.jpg",
    text: "Kadhal-Aasai.mp3",
    Audio: "Kadhal-Aasai.mp3"
}
]
const audio = document.querySelector("audio")
const play = document.querySelector(".fa-play")
const progress = document.querySelector("#progress")
const forward = document.querySelector(".fa-forward-step")
const backward = document.querySelector(".fa-backward-step")
const shuffle = document.querySelector(".fa-arrows-rotate")
const start = document.querySelector(".start")
const finish = document.querySelector(".finish")
const vol = document.querySelector(".fa-volume-up")
const volume = document.querySelector(".volume")
const display = document.querySelector(".display")
const img = document.querySelector(".images")
const sun = document.querySelector(".fa-sun")

const body = document.querySelector("body")
const header = document.querySelector(".header")
const plays = document.querySelector(".plays")
const last = document.querySelector(".last")
// console.log(last);
const recentes = document.querySelector(".recent")
// console.log(recentes);
const h3 = document.querySelector("h3")
const musics = document.querySelector(".fa-music")
const list = document.querySelector(".list")
const lists = document.querySelector(".lists")
const recents = document.querySelector(".recent>ul")
const search = document.querySelector(".search")



last.addEventListener("click", () => {
    recentes.classList.toggle("add")
})


let count = 1

for (let i = 0; i < music.length; i++) {
    const li = document.createElement("li")

    li.innerText = music[i].text
    li.classList.add("active")
    li.setAttribute("id", count++)
    list.append(li)
    plays.addEventListener("click", () => {
        if (list.classList.contains("list")) {
            li.classList.toggle("show")
        }
        li.addEventListener("click", (e) => {
            let arr = []
            arr.push(e.target.innerText)
            if (music[i].id == e.target.id) {
                img.src = music[i].img
                display.innerText = music[i].text
                audio.src = music[i].Audio
                play.className = "fa-solid fa-pause"


                audio.play()
                timeOut()

                for (let k = 0; k < arr.length; k++) {
                    let recentList = document.createElement("li")
                    recentList.setAttribute("id", music[i].id)
                    recentList.classList.add("listrecent")
                    recentList.innerText = arr[k]
                    recents.prepend(recentList)

                    recentList.addEventListener("click", (e) => {
                        if (music[i].id == e.target.id) {
                            img.src = music[i].img
                            display.innerText = music[i].text
                            audio.src = music[i].Audio
                            play.className = "fa-solid fa-pause"

                            audio.play()
                            timeOut()
                        }
                    })
                }
            }
        })
    })
}







const li = document.querySelectorAll("li")


sun.addEventListener("click", () => {
    if (sun.classList.contains("fa-sun")) {
        sun.className = "fa-solid fa-moon"
        body.style.backgroundColor = "white"
        header.style.backgroundColor = "white"
        plays.style.color = "black"
        last.style.color = "black"
        header.style.backgroundColor = "rgb(245, 245, 245)"
        h3.style.color = "black"
        const lis = document.querySelectorAll("li")
        for (let h = 0; h < lis.length; h++) {
            lis[h].style.color = "black"
        }
    }
    else {
        sun.className = "fa-solid fa-sun"

        body.style.backgroundColor = "black"
        header.style.backgroundColor = "black"
        h3.style.color = "white"
        plays.style.color = "white"
        last.style.color = "white"

        const lis = document.querySelectorAll("li")
        for (let h = 0; h < lis.length; h++) {
            lis[h].style.color = "white"
        }


    }


})



window.addEventListener("keyup", (e) => {
    if (e.code == "Space") {
        if (play.className == "fa-solid fa-play") {
            play.className = "fa-solid fa-pause"
            audio.play()
            timeOut()
        }
        else {
            play.className = "fa-solid fa-play"
            audio.pause()
            timeOut()
        }
    }
})



window.addEventListener("DOMContentLoaded", () => {
    img.src = "thee-thalapathy.jpg"
    display.innerText = "Bloody_Sweet.mp3"
    audio.src = "Bloody_Sweet.mp3"

})
audio.onloadeddata = function () {
    progress.max = audio.duration
}

play.addEventListener("click", () => {
    if (play.className == "fa-solid fa-play") {
        play.className = "fa-solid fa-pause"
        audio.play()
        timeOut()
    }
    else {
        play.className = "fa-solid fa-play"
        audio.pause()
        timeOut()
    }


})

setInterval(function () {
    progress.value = audio.currentTime


}, 500)

progress.addEventListener("input", () => {
    audio.currentTime = progress.value
    play.className = "fa-solid fa-pause"

    audio.play()
    timeOut()
})




let res = 0;
forward.addEventListener("click", autoplay)
function autoplay(e) {
    let arrs = []

    arrs.push(display.innerText)


    play.className = "fa-solid fa-pause"

    audio.play()
    timeOut()

    res++


    if (res == music.length) {
        res = 0;
    }
    if (shuffle.classList.contains("fa-shuffle")) {
        let random = Math.floor(Math.random() * music.length)
        img.src = music[random].img
        display.innerText = music[random].text
        audio.src = music[random].Audio
        play.className = "fa-solid fa-pause"
        audio.play()
        let recentLists = document.createElement("li")
        recentLists.innerText = music[random].text
        recentLists.setAttribute("id", music[random].id)
        recentLists.classList.add("listrecent")
        recents.prepend(recentLists)
        recentLists.addEventListener("click", (e) => {
            for (let j = 0; j < music.length; j++) {
                if (e.target.id == music[j].id) {
                    img.src = music[j].img
                    display.innerText = music[j].text
                    audio.src = music[j].Audio
                    play.className = "fa-solid fa-pause"
                    audio.play()
                }


            }
        })

    }
    else {
        img.src = music[res].img

        display.innerText = music[res].text
        audio.src = music[res].Audio
        play.className = "fa-solid fa-pause"
        audio.play()

        let recentLists = document.createElement("li")
        recentLists.innerText = music[res].text
        recentLists.setAttribute("id", music[res].id)
        recentLists.classList.add("listrecent")
        recents.prepend(recentLists)
        recentLists.addEventListener("click", (e) => {
            for (let j = 0; j < music.length; j++) {
                if (e.target.id == music[j].id) {
                    img.src = music[j].img
                    display.innerText = music[j].text
                    audio.src = music[j].Audio
                    play.className = "fa-solid fa-pause"
                    audio.play()
                }


            }
        })

    }
    timeOut()

}

backward.addEventListener("click", () => {
    res--
    console.log(res);
    if (res == -1) {
        res = music.length - 1;
    }
    if (shuffle.classList.contains("fa-shuffle")) {
        let random = Math.floor(Math.random() * music.length)
        img.src = music[random].img
        display.innerText = music[random].text
        audio.src = music[random].Audio
        play.className = "fa-solid fa-pause"
        let recentLists = document.createElement("li")
        recentLists.innerText = music[random].text
        recentLists.setAttribute("id", music[random].id)
        recentLists.classList.add("listrecent")
        recents.prepend(recentLists)
        recentLists.addEventListener("click", (e) => {
            for (let j = 0; j < music.length; j++) {
                if (e.target.id == music[j].id) {
                    img.src = music[j].img
                    display.innerText = music[j].text
                    audio.src = music[j].Audio
                    play.className = "fa-solid fa-pause"
                    audio.play()
                }


            }
        })
        audio.play()
    }
    else {
        audio.src = music[res].Audio
        play.className = "fa-solid fa-pause"

        img.src = music[res].img
        display.innerText = music[res].text
        let recentLists = document.createElement("li")
        recentLists.innerText = music[res].text
        recentLists.setAttribute("id", music[res].id)
        recentLists.classList.add("listrecent")
        recents.prepend(recentLists)
        recentLists.addEventListener("click", (e) => {
            for (let j = 0; j < music.length; j++) {
                if (e.target.id == music[j].id) {
                    img.src = music[j].img
                    display.innerText = music[j].text
                    audio.src = music[j].Audio
                    play.className = "fa-solid fa-pause"
                    audio.play()
                }


            }
        })
        audio.play()
        timeOut()
    }


})


shuffle.addEventListener("click", () => {


    if (shuffle.classList.contains("fa-arrows-rotate")) {
        shuffle.className = "fa-solid fa-shuffle"

    }
    else {
        shuffle.className = "fa-solid fa-arrows-rotate"

    }

})


let intervalId = null
function timeOut() {
    if (!intervalId) intervalId = setInterval(update, 1000)
}

function update() {
    if (!isNaN(audio.duration)) {
        let currentMin = Math.floor(audio.currentTime / 60)

        let currentSec = Math.floor(audio.currentTime - currentMin * 60)

        let durationMin = Math.floor(audio.duration / 60)

        let durationsec = Math.floor(audio.duration - durationMin * 60)

        if (currentMin < 10) {
            currentMin = "0" + currentMin;
        }
        if (currentSec < 10) {
            currentSec = "0" + currentSec;
        }
        if (durationMin < 10) {
            durationMin = "0" + durationMin;
        }
        if (durationsec < 10) {
            durationsec = "0" + durationsec;
        }
        if (progress.max == audio.currentTime) {
            autoplay()
        }
        start.innerText = currentMin + ":" + currentSec;
        finish.innerText = durationMin + ":" + durationsec
    }
}

vol.addEventListener("click", () => {
    if (vol.classList.contains("fa-volume-up")) {
        volume.classList.remove("hide")
        vol.className = "fa-solid fa-volume-xmark"
        audio.volume = 0.0
        volume.value = 0
        displays()
    }
    else {
        audio.volume = 1.0
        volume.value = 100
        vol.className = "fa-solid fa-volume-up"
        displays()

    }
})

volume.addEventListener("input", () => {
    if (volume.value > 50 && volume.value <= 75) {
        audio.volume = 0.7
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value > 25 && volume.value <= 50) {
        audio.volume = 0.5
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value > 15 && volume.value <= 25) {
        audio.volume = 0.3
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value >= 5 && volume.value <= 15) {
        audio.volume = 0.1
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value > 75 && volume.value <= 90) {
        audio.volume = 0.8
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value > 90) {
        audio.volume = 1.0
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value == 0) {
        audio.volume = 0.0
        vol.className = "fa-solid fa-volume-xmark"
    }




})

function displays() {

    setTimeout(() => {
        volume.classList.add("hide")

    }, 7000)


}


search.addEventListener("keyup", (e) => {
    let see = e.target.value.toLowerCase()
    const lis = document.querySelectorAll("li")
    for (let m = 0; m < lis.length; m++) {
        const task = lis[m].innerText
        if (task.toLowerCase().includes(see) === true) {
            lis[m].style.display = "block"
        }
        else {
            lis[m].style.display = "none"
        }
    }
})


