function tog() {
    var subtitleElement = document.querySelector(".subtitle");
    var currentVisibility = subtitleElement.style.visibility;
    
    subtitleElement.style.visibility = (currentVisibility === "visible") ? "hidden" : "visible";
    
}
function tog1() {
    var subtitleElement = document.querySelector(".subtitles");
    var currentVisibility = subtitleElement.style.visibility;
    subtitleElement.style.visibility = (currentVisibility === "visible") ? "hidden" : "visible";
    
}
function tog2() {
    var subtitleElement = document.querySelector(".menu1");
    var currentVisibility = subtitleElement.style.visibility;
    subtitleElement.style.visibility = (currentVisibility === "visible") ? "hidden" : "visible";
    
}
function oi() {
     document.querySelector(".menu").style. opacity= "0";
     document.querySelector(".menu1").style. opacity= "1";
}
function oi1() {
    document.querySelector(".menu1").style. opacity= "0";
    
    document.querySelector(".menu").style. opacity= "1";

}

 
let button=document.querySelector(".menu"),
    links=document.querySelector(".navbar");

    button.addEventListener("click",() =>{
        links.classList.add("display");
    })

    let button9=document.querySelector(".menu1"),
    links9=document.querySelector(".navbar");

    button9.addEventListener("click",() =>{
        links9.classList.remove("display");
    })

    let button1=document.querySelector(".n_v"),
    links1=document.querySelector(".up");

    button1.addEventListener("click",() =>{
        links1.classList.toggle("unknown");
    })
    let button2=document.querySelector("#n_v"),
    links2=document.querySelector(".k1");

    button2.addEventListener("click",() =>{
        links2.classList.toggle("unknown1");
    })

    let button3=document.querySelector("#n_ve"),
    links3=document.querySelector(".up1");

    button3.addEventListener("click",() =>{
        links3.classList.toggle("oppp");
    })

    let utton4=document.querySelector("#n_ve"),
    inks4=document.querySelector(".er1");

    utton4.addEventListener("click",() =>{
        inks4.classList.toggle("wop44");
    })


   