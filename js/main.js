

inp.addEventListener('change', e => {
    var newDiv = document.createElement('div')
    var list = document.createElement('h3')
    var btns = document.createElement('button')
    newBlock.appendChild(newDiv)
    newDiv.appendChild(list);
    newDiv.appendChild(btns);
    newDiv.style.display = 'flex'
    newDiv.style.alignItems = 'center'
    list.innerText = e.target.value;    
    btns.style.height = '30px'
    btns.style.marginRight = "20px"
    btns.style.marginLeft = "auto"
    btns.innerText = "Очистить"
    inp.value=''
    btns.onclick = function() {
        newDiv.removeChild(btns);
        newDiv.removeChild(list)
     };

})


 

btn.addEventListener('click', e => {
        e.preventDefault()
        inp.value='';
})