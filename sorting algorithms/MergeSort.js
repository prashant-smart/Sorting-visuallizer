let c=0;
let merge= ( A,  mid,  low,  high)=>
{
    setTimeout(() => {
        
        update(A);
    }, speed*5);
    let i, j, k, B;
    B=[];
    i = low;
    j = mid + 1;
    k = low;

    while (i <= mid && j <= high)
    {
        if (A[i] < A[j])
        {
            B[k] = A[i];
            i++;
            k++;
        }
        else
        {
            B[k] = A[j];
            j++;
            k++;
        }
    }
    while (i <= mid)
    {
        B[k] = A[i];
        k++;
        i++;
    }
    while (j <= high)
    {
        B[k] = A[j];
        k++;
        j++;
    }
    for (let i = low; i <= high; i++)
    {
        A[i] = B[i];
    }
    // console.log(c++);
    update(A);
}

let MergeSort=(arr,l,r)=>{
    if(l<r){
        
        let  mid=Math.floor((l+r)/2)
        MergeSort(arr,l,mid);
        MergeSort(arr,mid+1,r);
        setTimeout(() => {
        merge(arr,mid,l,r);
            }, speed);
            
            
}
}

let A=[1,9,2,2,45,1,6]
// MergeSort(A,0,6);
// // A.sort(function(a, b){return a-b});
// // console.log(A);

