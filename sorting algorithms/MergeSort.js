let putArticleForMergeSort=()=>{
    let html_for_Merge_sort = ` <div class="container  my-5">
    <h2>Merge Sort</h2>
    <p class="container">
      <b>Merge Sort</b> is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one
    </p>
    </div>
    <div class="container d-flex flex-column">
  
      <h2>Quick Sort Complexity </h2>
      <ul class="d-flex flex-column align-items-start">
        <li>Best Time Complexity is O(nlogn)</li>
        <li>Average Time Complexity is O(nlogn)</li>
        <li>Worst Time Complexity is O(nlogn) </li>
      </ul>    
  
    </div>`;
  
      article.innerHTML=html_for_Merge_sort;
      article.style.display="flex";
    
  }

const merge=async(arr, l, m, r)=>{
    putArticleForMergeSort();
    let n1 = m - l + 1;
    let n2 = r - m;
    let L = new Array(n1);
    let R = new Array(n2);
    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    let i = 0;
    let j = 0;
    let k = l;
    while (i < n1 && j < n2) {
        yellow[0]=l+i;
        yellow[1]=m + 1 + j;
         update_color(yellow,"yellow");
        await sleep(speed/10);
        
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            green.push(l+i);
            i++;
        }
        else {
            arr[k] = R[j];
            green.push(m + 1 + j);
            j++;
        }
        k++;
        await sleep(speed/10);
        update_color(yellow,"rgb(111,99,236,0.5)");
        update_color(green,"green");
        update(arr);
        
    }
    yellow.pop(),yellow.pop();
    // yellow[0]=l+(n1-1);
    while (i < n1) {
        arr[k] = L[i];
        yellow[1] =l+i;
        green.push(l+i);
         update_color(yellow,"yellow");
        await sleep(speed);
        update_color(yellow,"rgb(111,99,236,0.5)");
        update_color(green,"green");
        yellow.pop();
        update(arr);
        i++;
        k++;
    }
   
    while (j < n2) {
        arr[k] = R[j];
        yellow[1]=m + 1 + j;
        green.push(m + 1 + j);
         update_color(yellow,"yellow");
        await sleep(speed);
        update_color(yellow,"rgb(111,99,236,0.5)");
        update_color(green,"green");
        yellow.pop();
        update(arr);
        j++;
        k++;
    }
    green.push(l+n1),green.push(l+m+n2);
    update_color(green,"green");
    await sleep(speed/10);

    update(arr);
}    



let MergeSort=async(arr,l,r)=>{
    if(l<r){
        let m =l+ parseInt((r-l)/2);
                await MergeSort(arr,l,m)
                update_color(green,"green")
                await sleep(speed/100)
                update(arr);
                await MergeSort(arr,m+1,r)
                update_color(green,"green")
                update(arr);
                await sleep(speed/100)
                await merge(arr,l,m,r)
                update_color(green,"green")
    }
    update(arr);
}



