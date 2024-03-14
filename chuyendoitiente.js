function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let result;

    if (fromCurrency === "usd" && toCurrency === "vnd"){
        result = amount * 23000 + "đ";
    }else if (fromCurrency === "vnd" && toCurrency === "usd"){
        result = amount / 23000 + "$";
    }else if (fromCurrency === "usd" && toCurrency === "usd"){
        result = amount + "$";
    }else{
        result = amount + "đ";
    }

    document.getElementById('result').innerHTML = "Result: " + result;
}