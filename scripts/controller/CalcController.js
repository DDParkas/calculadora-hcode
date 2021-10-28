class CalcController {

    constructor(){
        this._locale = 'pt-br'
        this._displayCalcEl = document.querySelector('#display')
        this._dateEl = document.querySelector('#data')
        this._timeEl = document.querySelector('#hora')
        this._currentDate
        this.initialize()
    }
    initialize() {
        this.setDislplayDateTime()
     setInterval(() => {
         this.setDislplayDateTime()
     }, 1000);

    }
    setDislplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale)
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }
    get displayTime(){
        return this._timeEl.innerHTML
    }
    set displayTime(value){
        this._timeEl.innerHTML = value
    }
    get displayDate(){
        return this._dateEl.innerHTML
    }
    set displayDate(value){
        this._dateEl.innerHTML = value
    }
    get displayCalc(){
        return this.displayCalcEl.innerHTML
    }
    set displayCalc(value){
        this.displayCalcEl.innerHTML = value
    }
    get currentDate(){
        return new Date()
    }
    set currentDate(value){
        this._currentDate = value
    }
   

}