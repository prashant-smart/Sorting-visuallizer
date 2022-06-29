let input = document.getElementsByClassName("customArrayInput")[0];

input.addEventListener("input", () => {
  //to stop all settimeout
  const highestId = window.setTimeout(() => {
    for (let i = highestId; i >= 0; i--) {
      window.clearInterval(i);
    }
    article.style.display="none";
    
  }, 0);

  startAgain();
  create_empty();
  update_color(empty, "rgb(111,99,236,0.5)");
  resetColor(red, yellow, green);

  // create a nee array according to input
  let dubArray = [];
  dubArray = input.value.split(",");
  dubArray.map((elm) => {
    elm = parseInt(elm);
  });
  let size = 0;

  if (dubArray.length > 100) dubArray.splice(0, 99);
  array_size = dubArray.length;
  numberOfElm_hover.style.left=`${array_size}`+"%";
  document.getElementsByClassName("indicator_of_element")[0].innerHTML=`${array_size}`;
  numberOfElm_slider.value=array_size;
  array = dubArray;
  update(array);
  
});
