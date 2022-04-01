let turn = 'x' ;
let square = [];

// function that switch bitwin x and o 
function play(id){
    var box = document.getElementById(id);
    if(turn ==='x' && box.innerHTML == ''){
        box.innerHTML= 'x' ;
        turn = 'o' ;
    }else if(turn ==='o' && box.innerHTML == '') {
        box.innerHTML= 'o' ;
        turn = 'x' ;
    }
    // check every time if there is a winner
    winner();
}

// if any drew set all the colone on color 
function drew(){
    for (let i = 1; i < 10; i++) {
        square[i] = document.getElementById('colone_' + i);
        square[i].style.background = 'rgb(203, 255, 80)' ;
        clear();
    }   
}


// check all possiblity of winning
function winner(){
    for (let i = 1; i < 10; i++) {
        square[i] = document.getElementById('colone_' + i).innerHTML;
    }

    if(square[1] == square[2] && square[2] == square[3] && square[1] != ''){
        check(1,2,3);
    }else if(square[4] == square[5] && square[5] == square[6] && square[4] != ''){
        check(4,5,6);
    }else if(square[7] == square[8] && square[8] == square[9] && square[7] != ''){
        check(7,8,9);
    }else if(square[1] == square[4] && square[4] == square[7] && square[1] != ''){
        check(1,4,7);
    }else if(square[2] == square[5] && square[5] == square[8] && square[2] != ''){
        check(2,5,8);
    }else if(square[3] == square[6] && square[6] == square[9] && square[3] != ''){
        check(3,6,9);
    }else if(square[1] == square[5] && square[5] == square[9] && square[1] != ''){
        check(1,5,9);
    }else if(square[3] == square[5] && square[5] == square[7] && square[3] != ''){
        check(3,5,7);
    }
    // this else check if any drew
    else if((square[1] && square[2] && square[3] && square[4] && square[5] && square[6] && square[7] && square[8] && square[9]) !== ''){
        drew();
    }
}

// seclar the first value o and x scoors  
var scor_o = 0 ;
var scor_x = 0 ;


// check win if true turn on the light on the 3 colon
function check(box_1,box_2,box_3){
    document.getElementById('colone_' + box_1).style.background = 'rgb(203, 255, 80)' ;
    document.getElementById('colone_' + box_2).style.background = 'rgb(203, 255, 80)' ;
    document.getElementById('colone_' + box_3).style.background = 'rgb(203, 255, 80)' ;

    // check scor of x and y with innerText
    if(document.getElementById('colone_' + box_1).innerText == 'o'){
        scor_o = scor_o + 1 ;
        document.getElementById('Scoor_o').innerText = scor_o ;
    }else if(document.getElementById('colone_' + box_1).innerText === 'x'){
        scor_x = scor_x + 1 ;
        document.getElementById('Scoor_x').innerText = scor_x ;
    }
    clear();
}

// clear all colon value and set background default
function clear() {
    setTimeout(function(){
        for (let i = 1; i < 10; i++) {
        square[i] = document.getElementById('colone_' + i).innerHTML = '';
        square[i] = document.getElementById('colone_' + i).style.background = 'rgb(255, 255, 255)';
        }
    },250)
}

