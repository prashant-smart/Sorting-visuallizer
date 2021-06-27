
let putArticleForBubbleSort=()=>{
  let html_for_Bubble_sort = ` <div class="defination">
  <h2>Bubble Sort</h2>
  <p>
    <b>Bubble Sort</b> is a simple algorithm which is used to sort a given
    set of n elements provided in form of an array with n number of
    elements. Bubble Sort compares all the element one by one and sort
    them based on their values. If the given array has to be sorted in
    ascending order, then bubble sort will start by comparing the first
    element of the array with the second element, if the first element is
    greater than the second element, it will <b>swap</b> both the elements, and
    then move on to compare the second and the third element, and so on.
    <br/>
    If we have total n elements, then we need to repeat this process for
    n-1 times.
  </p>
  </div>
  <div class="timecomplexity">

    <h2 style="    
    margin-left: 6rem;
    position: relative;
    bottom: 3rem;
    ">All Time Complexity </h2>
    <ul id="TimeComplexity">
      <li>Best Time Complexity is O(n^2)</li>
      <li>Average Time Complexity is O(n^2)</li>
      <li>Worst Time Complexity is O(n^2) </li>
    </ul>    

  </div>`;

  if(isArticle)
  {
    article.innerHTML=html_for_Bubble_sort;
    article.style.display="flex";
  }
  else{
    article.style.display="none";
  }
}

function bubbleSort(i, j) {
  isArticle=true;
  if (j == 0 && i == 0) {
    ischange = false;
  }
  update_color(yellow, "rgb(111,99,236,0.5)");
  update_color(green, "green");
  clear(yellow);
  yellow[0] = j;
  yellow[1] = j + 1;
  update_color(yellow, "yellow");
  if (array[j] > array[j + 1]) {
    update_color(red, "rgb(111,99,236,0.5)");
    clear(red);
    red[0] = j;
    red[1] = j + 1;
    update_color(red, "red");
    swap(j, j + 1);
    update(array);
  }
  if (ischange) {
    isArticle=false;
    putArticleForBubbleSort();
    return;
  }
  if (i >= array_size - 1) {
    green.push(j);
    update_color(green, "green");
    isArticle=false;
    putArticleForBubbleSort();
    return;
  }

  if (j >= array_size - i - 1) {
    green.push(j);
    update_color(green, "green");
    j = -1;
    i++;
  }
  let bubbleSort_settimeout = setTimeout(function () {
    putArticleForBubbleSort();
    bubbleSort(i, j + 1);
  }, speed);
}
