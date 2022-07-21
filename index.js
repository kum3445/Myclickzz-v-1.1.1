var all=document.querySelectorAll("#photos img");
for(var i=0;i<all.length;i++){
    all[i].setAttribute("onclick","enlarge(this,"+Math.floor((i)/3+1)+")");
}

var allrow=document.querySelectorAll("#photos .row");
for(var i=0;i<allrow.length;i++){
    var j=i+1;
    allrow[i].classList.add("row"+j);
}

var allimg=document.querySelectorAll("img")
for(var i=0;i<allimg.length;i++){
    allimg[i].setAttribute("oncontextmenu","return false");
}

function enlarge(image,n){
    var bigimage= document.querySelector("#photos .container-fluid .row"+n.toString());
    var prev=bigimage.innerHTML;
    bigimage.innerHTML="<img src="+image.src+">";
    bigimage.setAttribute("oncontextmenu","return false");
    bigimage.querySelector("img").addEventListener("click", function(){ bigimage.innerHTML=prev});

}
