module.exports = function sumOfOther(arr){
    if (arr === undefined || arr.length === 0){
        return [];
    }
    let result = Array(arr.length);
    result.fill(0);
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (i !== j){
                result[i] += arr[j];
            }
        }
    }
    return result;
};