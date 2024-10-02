let form= document.getElementById("form")
let div= document.getElementById('div')
let ptag = document.getElementById('ptag')

form.addEventListener('click',function(e){
    alert("form clicked")
    console.log('Form tag clicked')
})
div.addEventListener('click',function(e){
    alert("div clicked")
    console.log('Div tag clicked')
})
ptag.addEventListener('click',function(e){
    alert("P tag clicked")
    console.log('P tag clicked')
})