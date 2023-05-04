function dropAll(){
    document.getElementById('exDropdownAll').classList.toggle('show');
}
window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName('dropdownall-content');
        var i;
        for(i=0; i<dropdowns.length;i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

function show(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none"){
        document.getElementById(el).style.display = "block";
    } else {
        document.getElementById(el).style.display = "none"
    }
    
};