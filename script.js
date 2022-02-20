let photo = document.getElementById('photo');
let input1 = document.getElementById('myUrl');
let input2 = document.getElementById('vol');
let par2 = document.getElementById('demo');

let img ;


input1.addEventListener('input', ()=>{
    let img = document.createElement('img');
    photo.appendChild(img);
    img.setAttribute('src', input1.value);
    // photo.innerHTML = '<img src= " ' + input1.value + '" />';

    input2.addEventListener('input', ()=> {
        par2.innerHTML = input2.value;
        img.style.transform = 'rotate(' + input2.value + 'deg)';
    })

})

