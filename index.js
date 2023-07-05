function calculatorCreate(){
    return{
        display: document.querySelector('.displayCalc'),
        buttons: Array.from(document.querySelectorAll('.button')),

        incia(){
            this.clickButons()
        },

        clickButons(){
        this.buttons.forEach(function(button){
            button.addEventListener('click',function(){
                console.log(button.textContent)
                //this.display.value = button.textContent
            })
        })

        }
    }
}

const calculator = calculatorCreate();
calculator.incia();