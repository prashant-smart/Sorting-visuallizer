
let putArticleForSlectionSort=()=>{
    let html_for_Selection_sort = ` <div class="container  my-5">
    <h2>Selection Sort</h2>
    <p class="container">
      <b>Selection Sort</b> is a simple sorting algorithm. Initially, the sorted part is empty and then smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right.
      <br/>
      It is a stable algorithm and has Space complexity of 0(1)
      
    </p>
    </div>
    <div class="container d-flex flex-column"
   >
  
      <h2>Selection Sort Complexity </h2>
      <ul class="d-flex flex-column align-items-start">
        <li>Best Time Complexity is O(n^2)</li>
        <li>Average Time Complexity is O(n^2)</li>
        <li>Worst Time Complexity is O(n^2) </li>
        
        
      </ul>    
  
    </div>`;
  
      article.innerHTML=html_for_Selection_sort;
      article.style.display="flex";
   
  }
  
  
  
  
  let Seclection_sort=(Array,comp_Idx,traverse_Idx,lowest_idx)=>{
    if(Array.length>1){   //to insure that array has element more than one element
      
            putArticleForSlectionSort();
            update_color(red,"rgb(111,99,236,0.5)")
            update_color(yellow,"rgb(111,99,236,0.5)")
            yellow[0]=comp_Idx;
            yellow[1]=traverse_Idx;
            if(Array[comp_Idx]>Array[traverse_Idx]&&Array[lowest_idx]>Array[traverse_Idx]){
                lowest_idx=traverse_Idx; //index of lowest element in array
            }
            update_color(yellow, "yellow");
            if(traverse_Idx==Array.length-1){// swaping target element and lowest element
                swap(comp_Idx,lowest_idx);
                red[0]=comp_Idx;
                red[1] =lowest_idx;
                // update_color(yellow,"rgb(111,99,236,0.5)")
                update_color(red, "red");

                green.push(comp_Idx);
                comp_Idx++;
                lowest_idx=comp_Idx;
                if(comp_Idx==Array.length-1){
                    update(Array)
                    update_color(red,"rgb(111,99,236,0.5)")
                    update_color(yellow,"rgb(111,99,236,0.5)")
                    green.push(comp_Idx);
                    update_color(green,"green")
                    return;
                }
            }
            traverse_Idx=(traverse_Idx+1)%Array.length;//inc traverse index and limit it by array size
            if(traverse_Idx<=comp_Idx){ //insure that traverse index must be greater than target element index
                traverse_Idx=comp_Idx+1;
            }
            update(Array); //update array 
            update_color(green,"green");
            let timeOut_slection_sort=setTimeout(()=>{
                Seclection_sort(Array,comp_Idx,traverse_Idx,lowest_idx);
            },speed)
        }
        
    }