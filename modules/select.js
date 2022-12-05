export class Select{
    constructor() {

        this.selectInputs = document.querySelectorAll('.select__input');
        this.selectInputs.forEach(item => {
            item.addEventListener('click', this.selectToggle)
        })

    }

    selectToggle() {
        if(this.value) {
            this.parentElement.classList.toggle('is-active');
        }
    }
}

