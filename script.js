const calculatebtn = document.getElementById("calculate")
let result = document.getElementById("result")


calculatebtn.addEventListener('click', function calculation() {
    
    let tipamount = document.getElementById("tipamount").value
    let percentage = document.getElementById("percentage").value
    let formula = (tipamount*(percentage/100))



    result.innerText = ("das sind " + formula + "$ TRINKGELD DU HUND")

    
})