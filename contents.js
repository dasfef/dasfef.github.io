function viewContents{
    var menuBtn = document.getElementById('menu_container');
    console.log("menuBtn's Element name is : ", menuBtn);
    var checkBoxes = document.getElementsByClassName('menus');
    console.log("menu's Class name is : ", checkBoxes);
    // var checkBox = document.getElementById('menu');
    // console.log("menu's Class name is : ", checkBoxes);
    
    menuBtn.addEventListener('click', function(){
        const isChecked = menuBtn.checked;

        if(isChecked){
            for(checkbox of checkBoxes){
                checkbox.checked = true;
            }
        } else{
            for(checkbox of checkBoxes){
                checkbox.checked = false;
            }
        }
    })
}