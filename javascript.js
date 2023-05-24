
let wage = document.getElementById('wage')
let substract1 = document.getElementById('substract1')
let substract11 = document.getElementById('substract11')
let substract2 = document.getElementById('substract2')
let alusnum = document.getElementById('alus')
let vinsnum = document.getElementById('vins')
let cigarretesnum = document.getElementById('cigarettes')
let stiprienum = document.getElementById('stiprie')
let substract3num = document.getElementById('substract3')
let substract33num = document.getElementById('substract33')
let stiprie4num = document.getElementById('substract4')
let stiprie44num = document.getElementById('substract44')
let asdf = document.getElementById('asdf')




function firstfunction() {
    wage = document.getElementById('wage').value
    substract1 = document.getElementById('substract1').value
    substract11 = document.getElementById('substract11').value
    substract2 = document.getElementById('substract2').value

    alusnum = document.getElementById('alus').value
    vinsnum = document.getElementById('vins').value
    cigarretesnum = document.getElementById('cigarettes').value
    stiprienum = document.getElementById('stiprie').value

    substract3num = document.getElementById('substract3').value
    substract33num = document.getElementById('substract33').value

    stiprie4num = document.getElementById('substract4').value
    stiprie44num = document.getElementById('substract44').value

    
    multiply = substract1 * substract11 * alusnum
    multiply2 = substract2 * 30
    multiply22 = (multiply2 / 20) * cigarretesnum
    multiply3 = (substract3num * substract33num * 100) / 750
    multiply33 = multiply3 * vinsnum
    multiply4 = (stiprie4num * stiprie44num) / 500
    multiply44 = multiply4 * stiprienum
    


    let output = wage - multiply - multiply22 - multiply33 - multiply44
    output1 = document.getElementById('output1')
    output1.innerHTML = output + (' EUR')
    

 
    percentage = wage / 100
    percentage1 = wage - output
    percentageoutput = percentage1 / percentage
    percent.innerHTML = percentageoutput + (' %')

    yearlyoutputnum = (multiply + multiply22 + multiply33 + multiply44) * 12 + (' EUR')


    yearlyoutput.innerHTML =  yearlyoutputnum

    
}