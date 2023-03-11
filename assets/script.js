let number = document.getElementById('nofication-number')
let markAll = document.getElementById('mark-all')
let newNofications = document.getElementsByClassName('blue-bg')
let redBall = document.getElementsByClassName('red-ball')

// mark all as read
markAll.addEventListener('click', () => {
    for(let i = 0; i < newNofications.length; i++){
        newNofications[i].style.backgroundColor = 'white'
    }
    for(let i = 0; i < redBall.length; i ++){
        redBall[i].style.display = 'none'
    }
    number.innerHTML = 0
})

// calcalke naxva

for(let i = 0; i < newNofications.length; i++){
    newNofications[i].addEventListener('click', () => {
        newNofications[i].style.backgroundColor = 'white'
        redBall[i].style.display = 'none'
        if(number.innerHTML == 0){
            number.innerHTML = 0
        }else{
            number.innerHTML = number.innerHTML - 1
        }
    })
}