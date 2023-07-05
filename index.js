function calculatorCreate(){
    return{
        display: document.querySelector('.displayCalc'),
        buttons: Array.from(document.querySelectorAll('.button')),
        conta: 0,

        startCalculator(){
            this.clickButons()
        },

        clickButons(){
        this.buttons.forEach((button) =>{
            button.addEventListener('click',() =>{
                if(button.classList.contains('buttonNumber')){
                    this.display.value += button.textContent
                }
                
                if(button.classList.contains('buttonClear')){
                    this.clearDisplay();
                }
                
                if(button.classList.contains('buttonDel')){
                    this.erase();
                }

                //let conta = 0 
                //conta += button.textContent
            })
        })

        },

        clearDisplay(){
            this.display.value = ' '
        },
        erase(){
            this.display.value = this.display.value.slice(0, -1);
        },
        
        realizaConta(){
            
        }
    }
}

const calculator = calculatorCreate();
calculator.startCalculator();