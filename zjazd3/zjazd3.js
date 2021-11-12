let iffeFunction = (function(){
    let privVar = 0;

    function showValue(){
        if(privVar == null || privVar == undefined){
            return `Zmienna prywatna jest null lub undefined w tym przypadku: ${privVar}`
        }else{
            return `Wartość zmiennej: ${privVar}`
        }
    }

    function setValue(newValue){
        if(newValue){
            privVar = newValue
        }
    }

    function reverseValue(){
        if(Number.isInteger(privVar) == true){
            return "Zmiana wartości: " + (privVar * (-1))
        }else if(typeof privVar == "string"){
            return `Odwrócona wartość: ${privVar.split('').reverse().join('')}`
        }else{
            return "Zmienna jest null lub undefined"
        }
    }

    return{
        showValue,
        setValue,
        reverseValue
    }

})()

console.log(iffeFunction.showValue())
console.log(iffeFunction.reverseValue())
iffeFunction.setValue(undefined)
console.log(iffeFunction.showValue())
console.log(iffeFunction.reverseValue())