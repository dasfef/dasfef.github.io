// function viewContents(){
//     var menuContainer = document.getElementById('menu_container');
    
//     var checkBoxes = document.getElementsByClassName('menus');
    
//     // var checkBox = document.getElementById('menu');
//     // console.log("menu's Class name is : ", checkBoxes);
    
//     menuContainer.addEventListener('click', function(){
//         console.log("menuContainer's Element name is : ", menuContainer);
//         console.log("menu's Class name is : ", checkBoxes);
//         console.log('It works!');
//         const isChecked = menuContainer.checked;

//         if(isChecked){
//             for(let checkbox of checkBoxes){
//                 checkbox.checked = true;
//             }
//         } else{
//             for(let checkbox of checkBoxes){
//                 checkbox.checked = false;
//             }
//         }
//     })
// }
document.addEventListener('DOMContentLoaded', function(){
    function viewContents() {
        var menuContainer = document.getElementById('m_container');
        var checkBoxes = document.getElementsByClassName('menus');
    
        // 'Check All' 체크박스에 대한 이벤트 리스너
        menuContainer.addEventListener('click', function() {
            const isChecked = menuContainer.checked;
            console.log(isChecked);
    
            for (let checkbox of checkBoxes) {
                checkbox.checked = isChecked;
            }
        });
    
        // 개별 메뉴 체크박스에 대한 이벤트 리스너
        Array.from(checkBoxes).forEach(function(checkbox) {
            checkbox.addEventListener('click', function() {
                // 모든 체크박스가 체크되었는지 확인
                menuContainer.checked = Array.from(checkBoxes).every(c => c.checked);
            });
        });
    }
    viewContents();

});

// 함수 호출