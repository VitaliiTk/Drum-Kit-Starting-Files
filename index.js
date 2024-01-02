function audioPlay(name) {
    switch (name) {
        case 'w':
            const w = new Audio('./sounds/tom-1.mp3')
            w.play()
            break
        case 'a':
            const a = new Audio('./sounds/tom-2.mp3')
            a.play()
            break
        case 's':
            const s = new Audio('./sounds/tom-3.mp3')
            s.play()
            break
        case 'd':
            const d = new Audio('./sounds/tom-4.mp3')
            d.play()
            break
        case 'j':
            const j = new Audio('./sounds/snare.mp3')
            j.play()
            break
        case 'k':
            const k = new Audio('./sounds/crash.mp3')
            k.play()
            break
        case 'l':
            const l = new Audio('./sounds/kick-bass.mp3')
            l.play()
            break
        default: console.log(name);
    }
}

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector(`.${currentKey}`)
    activeButton.classList.add('pressed')
    setTimeout(() => {
        activeButton.classList.remove('pressed')
    }, 100);
}

// Detecting button press
const btns = document.querySelectorAll('.drum')
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('mousedown', function () {
        const buttonText = this.textContent
        audioPlay(buttonText)
        buttonAnimation(buttonText)
    })
}

// Detecting Keyboard press
document.addEventListener('keydown', function (event) {
    const key = event.key
    audioPlay(key)
    buttonAnimation(key)
})
