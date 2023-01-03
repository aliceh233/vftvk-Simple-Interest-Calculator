function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {
        var rate = document.getElementById('rate').value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate/100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML=
        'If you deposit ' + '<span id="yellow">' + principal + '</span>' + ',<br/>' +
        'at an interest rate of ' + '<span id="yellow">' + rate + '</span>' + '%.<br/>' +
        'You will receive an amount of ' + '<span id="yellow">' + interest + '</span>' + ',<br/>' +
        'in the year ' + '<span id="yellow">' + year + '</span>';
    }
}
function updateRate() {
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateVal+"%";
    if (rateVal > 10) {
        document.getElementById("rate_val").style.color = "red";
        document.getElementById("notice").innerText = "Large Rate! whooohoo!";
        document.getElementById("notice").style.color = "red";
    } else {
        document.getElementById("rate_val").style.color = "blue";
        document.getElementById("notice").innerText = "Normal Rate!";
        document.getElementById("notice").style.color = "blue";
    }
}
        