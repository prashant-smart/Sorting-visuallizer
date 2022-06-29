let numberOfElm_hover=document.getElementById("Number_of_element_hover");
let speed_hover=document.getElementById("speed_hover");
let speed_slider=document.getElementById("speed_slider");
let numberOfElm_slider=document.getElementById("numberOfElements_slider")
let bubbleSort_=document.getElementsByClassName("Bubble")[0];
let isShowSorting=document.getElementById("hover");

let speed=2000-(2000*(speed_slider.value/100));
numberOfElm_slider.oninput=()=>{
    
    numberOfElm_hover.style.left=`${numberOfElm_slider.value}`+"%";
    document.getElementsByClassName("indicator_of_element")[0].innerHTML=`${numberOfElm_slider.value}`;
    array_size=numberOfElm_slider.value;
    array_size++;
    let array1=[];
    let empty1=[];
    for (var i = 0; i < array_size; i++) empty.push(i);
    ischange=true;
   empty=empty1;
    both_func(array_size,array1);
    empty=empty1
    array=array1;
    startAgain();
}
speed_slider.oninput=()=>{
    speed_hover.style.left=`${speed_slider.value}`+"%";
    document.getElementsByClassName("indicator_of_speed")[0].innerHTML=`${speed_slider.value}`+"%";
    speed=2000-(2000*(speed_slider.value/100));


}

