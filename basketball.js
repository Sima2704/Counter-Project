function getElement(selection){
    const element = document.querySelector(selection)
    if(element){
        return element
    }
    throw new Error(`This ${selection} does not exist`)
}

class Counter{
    constructor(element,value){
        this.element = element
        this.value = value
        
        this.incrementBtn = element.querySelector('.increase')
        this.decrementBtn = element.querySelector('.increase2')
        this.increment3Btn = element.querySelector('.increaseplusthree')
        this.resetBtn = document.querySelector('.reset')
        
        this.valueDom = element.querySelector('.score')
        this.valueDom.innerText = this.value
        
        this.increment = this.increment.bind(this)
        this.increment2 = this.increment2.bind(this)
        this.increment3 = this.increment3.bind(this)
        this.reset = this.reset.bind(this)
        
        this.incrementBtn.addEventListener('click', this.increment)
        this.decrementBtn.addEventListener('click', this.increment2)
        this.increment3Btn.addEventListener('click', this.increment3)
        this.resetBtn.addEventListener('click', this.reset)
        
    }
    
    increment(){
        this.value++
        this.valueDom.innerText = this.value
    }
    increment2(){
        this.value+=2
        this.valueDom.innerText = this.value
    }
    increment3(){
        this.value += 3
        this.valueDom.innerText = this.value
    }
    reset(){
        this.value = 0
        this.valueDom.innerText = this.value
    }
}

const team1 = new Counter(getElement('.first-counter'),0)
const team2 = new Counter(getElement('.second-counter'),0)

endBtn = document.querySelector('.end')
endBtn.addEventListener('click', () => {
    endGame()
})

const endGame = () => {
    const newDiv = document.createElement('div')
    const newEl = document.createElement('section')
    newEl.classList.add('.newEl')

    if(team1.value > team2.value){
        newEl.innerHTML=`First team won with the score ${team1.value} to ${team2.value}`
        newDiv.appendChild(newEl)  
        deleteChild()
    }  
    else if(team1.value == team2.value){
        newEl.innerHTML=`It is draw`
        newDiv.appendChild(newEl)
        deleteChild()
    }      
    else{
        newEl.innerHTML=`Second team won with the score ${team2.value} to ${team1.value}`
        newDiv.appendChild(newEl)
        deleteChild()
    }

    function deleteChild(){
        team1.value = 0  
        team2.value = 0 
        team1.valueDom.innerText = 0  
        team2.valueDom.innerText = 0  
    }
    document.body.appendChild(newDiv)
}