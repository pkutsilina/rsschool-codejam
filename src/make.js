module.exports = function make(...args){
    let saverResult = 0;
    let saverArray = [];

    function processArguments(incomeArguments){
        incomeArguments.forEach((arg)=>{
            if (typeof arg !== "function"){
                saverArray.push(arg);
            }
            else {
                saverResult = applyToDoFunc(arg);
            }
        });
    }

    processArguments(args);

    function applyToDoFunc(toDoFunction){
        return saverArray.reduce(toDoFunction);
    }

    function inner(...nextCallArguments){
        processArguments(nextCallArguments);
        return inner;
    }

    inner.valueOf = function(){
        return saverResult;
    };
    return inner;
};