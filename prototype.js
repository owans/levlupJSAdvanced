const myCalculator = function (){}
myCalculator.prototype.addition = function (a, b){
    if(a == b){
        return a + b; 
    }else if(a - b){
        return a -= b;
    }else if (a * b){
        return a *= b;
    }else if(a > b){
        return a /= b;
    }else{
        throw error;
    }
}

const calculatorInstance = new myCalculator();

console.log(calculatorInstance.addition(2,2));