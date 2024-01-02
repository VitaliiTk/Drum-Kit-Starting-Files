const btns = document.querySelectorAll('.drum')
const w = new Audio('./sounds/tom-1.mp3'),
    a = new Audio('./sounds/tom-2.mp3'),
    s = new Audio('./sounds/tom-3.mp3'),
    d = new Audio('./sounds/tom-4.mp3'),
    j = new Audio('./sounds/snare.mp3'),
    k = new Audio('./sounds/crash.mp3'),
    l = new Audio('./sounds/kick-bass.mp3')

// btns.forEach((element, index) => {
//     element.addEventListener('click', event => {
//         alert('Click ' + index)
//     })
// })

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        this.style.color = 'white'
    })
}