function audioPlay(keyName) {
    switch (keyName) {
        case 'w':
            const tom1 = new Audio('./sounds/tom-1.mp3')
            tom1.play()
            buttonAnimation(keyName)
            break
        case 'a':
            const tom2 = new Audio('./sounds/tom-2.mp3')
            tom2.play()
            buttonAnimation(keyName)
            break
        case 's':
            const tom3 = new Audio('./sounds/tom-3.mp3')
            tom3.play()
            buttonAnimation(keyName)
            break
        case 'd':
            const tom4 = new Audio('./sounds/tom-4.mp3')
            tom4.play()
            buttonAnimation(keyName)
            break
        case 'j':
            const snare = new Audio('./sounds/snare.mp3')
            snare.play()
            buttonAnimation(keyName)
            break
        case 'k':
            const crash = new Audio('./sounds/crash.mp3')
            crash.play()
            buttonAnimation(keyName)
            break
        case 'l':
            const kick = new Audio('./sounds/kick-bass.mp3')
            kick.play()
            buttonAnimation(keyName)
            break
        default: console.log(keyName);
    }
}

// button animation
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
    })
}

// Detecting Keyboard press
document.addEventListener('keydown', function (event) {
    const key = event.key
    audioPlay(key)
})
