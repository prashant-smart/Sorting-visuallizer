
let putArticleForQuickSort=()=>{
    let html_for_Quick_sort = ` <div class="container  my-5">
    <h2>Qucik Sort</h2>
    <p class="container">
      <b>Quick Sort</b> is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.There are many different versions of quickSort that pick pivot in different ways. 
      <br/>
      <ol class="d-flex flex-column align-items-start">
        <li>Always pick first element as pivot.</li>
        <li>Always pick last element as pivot (implemented below).</li>
        <li>Pick a random element as pivot.</li>
        <li>Pick median as pivot.</li>
      </ol>
    </p>
    </div>
    <div class="container d-flex flex-column">
  
      <h2>Quick Sort Complexity </h2>
      <ul class="d-flex flex-column align-items-start">
        <li>Best Time Complexity is O(nlogn)</li>
        <li>Average Time Complexity is O(nlogn)</li>
        <li>Worst Time Complexity is O(n^2) </li>
      </ul>    
  
    </div>`;
  
      article.innerHTML=html_for_Quick_sort;
      article.style.display="flex";
    
  }


let Swap_forQuicksort=async(arr,a,b)=>{
    update_color(red,"rgb(111,99,236,0.5)");
    await update_color(green,"green")
    red[0]=a
    red[1]=b;
    update_color(red,"red");
    await sleep(speed/10);
    
    let temp =arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
    await sleep(speed/10);
    update_color(red,"rgb(111,99,236,0.5)");
    await update_color(green,"green")
    

}


let patrician=async(arr,start,end)=>{
    let  p=start;
    let pvalue=arr[end];
    yellow[0]=end;
    for(let i=start;i<end;i++){
        yellow[1]=i;
        update_color(yellow, "yellow");
        await await update_color(green,"green")
        await sleep(speed);
        if(arr[i]<pvalue){
            await Swap_forQuicksort(arr,i,p);
            p++;
        }
        yellow.pop();
        yellow[0]=i;
        update_color(yellow, "rgb(111,99,236,0.5)");
        await await update_color(green,"green")
        yellow[0]=end;
    }
    yellow.pop();

    await Swap_forQuicksort(arr,p,end);
    update(arr);
    return p;
}
let quickSort=async(arr,s,e)=>{
    putArticleForQuickSort();
    if(s>=e){
        update(arr);
        return;
    }
    
    let p=await patrician(arr,s,e);
    setTimeout( async()=>{

            quickSort(arr,s,p-1)
            green.push(s)
            green.push(p-1)
            await update_color(green,"green")
            green.push(p)
            sleep(speed)
            quickSort(arr,p+1,e)
            green.push(p+1)
            green.push(e)
            await update_color(green,"green")
    },speed/10)
    
}
