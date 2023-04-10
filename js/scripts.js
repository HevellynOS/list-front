var coll = document.getElementsByClassName("nav_menu_collapsible");
var i;

for (i=0; i<coll.length; i++){
    coll[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var menu_itens = this.nextElementSibling;
        if(menu_itens.style.display === "block"){
            menu_itens.style.display = "none";

        }else{
            menu_itens.style.display = "block";
        }
    })
}
