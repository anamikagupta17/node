console.log("Module Js");

function average(arr){
    let sum =0;
    arr.forEach(item => {
        sum +=item
    });
    return sum/arr.length;
}

function sum(arr){
    let sum =0;
    arr.forEach(item => {
        sum +=item
    });
    return sum;
}

// module.exports.name="Anamika"; //moduel.exports is a object which can stores key values as well 
module.exports={
    sum:sum,
    avg:average
}