const steps = document.querySelectorAll('.steps')

let ladder = {
    step: 0,
    showStep() {
        alert(this.step + 1)
        steps[this.step].style.background = 'green'
    },
    up() {
        if (this.step <= 5) this.step++
        if (this.step === 5) alert('Ниже некуда, бро')
        steps[this.step].style.background = 'green'
        steps[this.step - 1].style.background = 'red'
    },
    down() {
        if (this.step > 0) this.step--
        steps[this.step].style.background = 'green'
        steps[this.step + 1].style.background = 'red'
        if (this.step === 0) alert('Выше только бог, бро')
    }
}
