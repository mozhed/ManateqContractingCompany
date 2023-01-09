var loader= document.getElementById("preloader");
 
window.addEventListener("load", function(){
    loader.style.display="none";
})

var sidemen = document.getElementById("sidemenu");
function openmenu(){
    sidemen.style.right ="0";
}
function closemenu(){
    sidemen.style.right ="-200px";
}

let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');
for(let i = 0; i <list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active')
        
        let dataFilter = this.getAttribute('data-filter');
    
        for(let k=0; k<itemBox.length;k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || 
            dataFilter == "all"){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    
    })
}

let spanup = document.querySelector(".up");

window.onscroll = function(){
    if(this.scrollY >= 500){
        spanup.classList.add("show");
    } else{
        spanup.classList.remove("show");
    }
};

spanup.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior : "smooth",
    });
};