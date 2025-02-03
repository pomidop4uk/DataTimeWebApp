// Наш контент, где будем отображать время дату и полную дату
let output1 = document.getElementById('output')
// Наше время с которым мы будем работать
let mode = 'time'
// Наши кнопочки
const buttonFull = document.getElementById('full')
const buttonDate = document.getElementById('date')
const buttonTime = document.getElementById('time')

function bindMode(name) {
    return function () {
        mode = name
        update()
    }
}

buttonFull.onclick = bindMode('full')
buttonDate.onclick = bindMode('date')
buttonTime.onclick = bindMode('time')

function update() {
    output1.textContent = format(mode)
}

setInterval(update, 1000);
update()

function format(formatMode) {
    switch(formatMode) {
        case 'time': 
            return new Date().toLocaleTimeString()
        case 'full':
            return new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
        case 'date': 
            return new Date().toLocaleDateString()
        default: 
            return new Date().toLocaleTimeString()
    }
}
