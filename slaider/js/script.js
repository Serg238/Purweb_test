let images = document.querySelectorAll('.infinity-slider img'),
left_button = document.querySelector('.left_button'),
right_button = document.querySelector('.right_button'),
button_three = document.querySelector('.button_three'),
button_item = document.querySelectorAll('.button_item'),
current = 0;

slider(current);
function slider(current) {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
    }

    images[current].classList.remove('opacity0');
    
   
    for (let i = 0; i < button_item.length; i++) {
        button_item[i].classList.remove('new_class');
    }

    button_item[current].classList.add('new_class');
}

slider(current);

function left() {
    if(current-1 == -1) current = images.length-1;
    else current--;
    slider(current);
}

left_button.onclick = left;

function right() {
    if(current+1 == images.length) current = 0;
    else current++;
    slider(current);
}

right_button.onclick = right;

function autoSlider(){
    slider(current);
    right();
}

setInterval(autoSlider,2000);

function clearSlider(current) {
    slider(current);
}

button_three.onclick = function(e) {
    for (let i = 0; i < button_item.length +1; i++) {
        if(e.target.classList.contains('button_item') && e.target == button_item[i])
            clearSlider(i);
        
    }
}