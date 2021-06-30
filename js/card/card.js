const toggle = document.getElementById('toggle');
const item = document.getElementById('toggle-item');
/* 분류 보기 */
toggle.addEventListener("click", function(){
    item.classList.toggle('active');
    if(toggle.getAttribute("src")=="../../images/card/list_up_btn.png"){
        toggle.setAttribute("src", "../../images/card/list_down_btn.png");
    }
    else if(toggle.getAttribute("src")=="../../images/card/list_down_btn.png"){
        toggle.setAttribute("src", "../../images/card/list_up_btn.png");
    }
})
/*  */
function listClick1() {
    document.querySelector("#category").style.backgroundColor = "#006633";
    document.querySelector("#category").style.color = "#fff";
    document.querySelector("#theme").style.backgroundColor = "#f4f4f1";
    document.querySelector("#theme").style.color = "#000";
}
function listClick2() {
    document.querySelector("#category").style.backgroundColor = "#f4f4f1";
    document.querySelector("#category").style.color = "#000";
    document.querySelector("#theme").style.backgroundColor = "#006633";
    document.querySelector("#theme").style.color = "#fff";
}
