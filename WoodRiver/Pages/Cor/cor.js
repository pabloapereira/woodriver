(function(){
    alert('Essas são umas das nossas principais cores');
})()

let p = document.getElementsByTagName('p');

function corPreco() {
    for(let i = 0; i < p.length; i++) {
        p[i].style.color = "red";
    }
}