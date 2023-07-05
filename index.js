function calculatorCreate(){
    return{
        display: document.querySelector('.displayCalc'),
        buttons: Array.from(document.querySelectorAll('.button')),

        startCalculator(){
            this.clickButons()
            this.pressBackSpace()
            this.pressEnter()
        },

        clickButons(){
        this.buttons.forEach((button) =>{
            button.addEventListener('click',() =>{
                if(button.classList.contains('buttonNumber') || 
                button.classList.contains('buttonPlus') || 
                button.classList.contains('buttonMinus') || 
                button.classList.contains('buttonDiv') ||
                button.classList.contains('buttonMult') ){
                    this.display.value += button.textContent
                }
                
                if(button.classList.contains('buttonClear')){
                    this.clearDisplay();
                }
                
                if(button.classList.contains('buttonDel')){
                    this.erase();
                }

                if(button.classList.contains('buttonEqual')){
                    this.calculate();
                }
        
            })
        })

        },
        pressBackSpace() {
            this.display.addEventListener('keydown', e => {
              if (e.keyCode === 8) {
                e.preventDefault();
                this.clearDisplay();
              }
            });
          },
      
          pressEnter() {
            this.display.addEventListener('keyup', e => {
              if (e.keyCode === 13) {
                this.realizaConta();
              }
            });
          },
      
        clearDisplay(){
            this.display.value = ' '
        },

        erase(){
            this.display.value = this.display.value.slice(0, -1);
        },

        calculate(){
            let conta = this.display.value;
            console.log(conta)
            try {
                conta = eval(conta);

                if(!conta) {
                alert('Conta inválida');
                return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        }
    }
}

const calculator = calculatorCreate();
calculator.startCalculator();