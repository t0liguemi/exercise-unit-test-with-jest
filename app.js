let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollars){
    return dollars*156.5/1.07
}
function fromEuroToDollar(euros){
    return euros*1.07
}
function fromYenToPound(yens){
    return yens*0.87/156.5
}

module.exports = { fromDollarToYen,fromEuroToDollar,fromYenToPound };