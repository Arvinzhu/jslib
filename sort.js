var arr = [5,23,89,6,9,34,70,51,20,67,18,23]

function BubbleSort(arr){
  let len = arr.length;
  console.time('BubbleSort')
  for(let i= 0;i<len;i++){
    for(let j = 0 ;j< len- 1-i ;j++){
      if(arr[j] > arr[j+1]){
        [arr[j+1],arr[j]] = [arr[j],arr[j+1]]; 
      }
    }
  }
  console.timeEnd('BubbleSort')
  return arr;
}
// console.log(BubbleSort(arr.slice(0)))
// console.log(arr)
function BubbleSort2(arr){
  let len = arr.length;
  console.time('BubbleSort2')
  let i = len - 1;
  while (i>0) {
    let pos = 0;
    for(let j = 0 ;j< i ;j++){
      if(arr[j] > arr[j+1]){
        pos = j;
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]; 
      }
    }
    i = pos;
  }
  console.timeEnd('BubbleSort2')
  return arr;
}
// console.log(BubbleSort2(arr.slice(0)))
// console.log(arr)

function BubbleSort3(arr){
  let len = arr.length;
  let low = 0;
  let high = len - 1;
  console.time('BubbleSort3')
  let j;
  while(low < high){
    for(j = low; j < high; j++){
      if(arr[j] > arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
    high--;
    for(j = high ;j > low;j--){
      if(arr[j] < arr[j-1]){
        [arr[j-1],arr[j]] = [arr[j],arr[j-1]];
      }
    }
    low ++;
  }
  console.timeEnd('BubbleSort3')
  return arr;
}
// console.log(BubbleSort3(arr.slice(0)))
// console.log(arr)

function SelectSort(arr){
  let len = arr.length;
  console.time('SelectSort')
  for(let i= len -1 ; i >0;i--){
    let idx = i;
    for(let j = i; j > 0;j--){
      if(arr[j] > arr[idx]){
        idx = j;
      } 
    }
    [arr[i],arr[idx]] = [arr[idx],arr[i]];
  }
  console.timeEnd('SelectSort')
  return arr;
} 


function InsertSort(arr){
  let len = arr.length;
  console.time('SelectSort')
  let  pos ;
  for(let i=1;i<len;i++){
    pos = arr[i];
    let j = i-1;
    while(j >=0 && arr[j] > pos){
      arr[j+1] =arr[j]
      j--;
    }
    arr[j+1] = pos
  }
  console.timeEnd('SelectSort')
  return arr;
} 

function InserSort2(arr){
  let len = arr.length;
  console.time('InserSort2')
  let  pos ;
  for(let i=1;i<len;i++){
    pos = arr[i];
    let left = 0,right = i-1;
    while(low <= height){
      let middle = Math.floor((low + height)/2);
      if(pos < arr[middle]){
        right = middle -1
      }else{
        left = middle +1;
      }
    }
    for(let j = i-1;j >= left;j--){
      arr[j+1] = arr[j];
    }
    arr[left] = pos
  }
  console.timeEnd('InserSort2')
  return arr;
}

function ShellSort(arr){
  let i,j,len=arr.length;
  console.time('ShellSort')
  let gap = 1;
  while(gap <= len/5){
    gap = gap*5+1;
  }
  while(gap > 0){
    for(let i = gap; i < len ;i++){
      let temp = arr[i];
      let j = i;
      while( j > gap -1 && arr[j-gap] >= temp){
        arr[j] = arr[j - gap];
        j -=gap;
      }
      arr[j] = temp;
    }
    gap = (gap -1)/5;
  }
  console.timeEnd('ShellSort')
  return arr;
}
// console.log(ShellSort(arr.slice(0)))
// console.log(arr)

function ShellSort2(arr){
  let len = arr.length,temp,gap =1;
  console.time('ShellSort2')
  while(gap < len/5) {          //动态定义间隔序列
      gap =gap*5+1;
      console.log('gap:',gap)
  }
  for (gap; gap > 0; gap = Math.floor(gap/5)) {
      for (var i = gap; i < len; i++) {
          temp = arr[i];
          for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
              arr[j+gap] = arr[j];
          }
          arr[j+gap] = temp;
      }
  }
  console.timeEnd('ShellSort2')
  return arr;
}


// console.log(ShellSort(arr.slice(0)))
// console.log(arr)
//归并排序
function mergeSort(arr){
  var len = arr.length;
  if(len < 2){
    return arr;
  }
  var middle = Math.floor(len/2),
  left = arr.slice(0,middle),
  right = arr.slice(middle)
  return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right){
  let result = []
  while(left.length && right.length){
    if(left[0] <= right[0]){
      result.push(left.shift());
    }else{
      result.push(right.shift())
    }
  }
  while(left.length){
    result.push(left.shift())
  }
  while(right.length > 0){
    result.push(right.shift())
  }
  return result;
}
// console.time('MergeSort')
// console.log(mergeSort(arr.slice(0)))
// console.timeEnd('MergeSort')
//快速排序
//[5,23,89,6,9,34,70,51,20,67,18,23]
//low = 0 ,height = 11
//i =0 ,j = 11 ,idx = 5,pivot = 34
//i =2 ,j = 11 //swap //[5,23,23,6,9,34,70,51,20,67,18,89] 
//i =6,j = 10  //[5,23,23,6,9,34,18,51,20,67,70,89]
//i =7,j = 8 //[5,23,23,6,9,34,18,20,51,67,70,89]
//low = 0,height = 6  //[5,23,23,6,9,20,18,34,51,67,70,89]
//i = 0 , j=6   pivot = 3        [5,23,23,6,9,20,18]
//j=0,i=0


//[5,23,23,6,9,20,18,34,51,67,70,89]
function quickSort(arr){
  function sort1(low,height){
    let pivot = arr[low];//获得基准数
    let i = low;
    let j= height;
    if(i < j){
      while(i < j){
        while(i<j && arr[j] >= pivot){//从右向左取第一个小于基准数的数
          j--;
        }
        arr[i] = arr[j]
        while(i < j && arr[i] <= pivot){
          i++;
        }
        arr[j] = arr[i];
      }
      arr[i] = pivot;
      sort1(low,i-1);
      sort1(i+1,height)
    }
  }
  console.time('quickSort');
  sort1(0,arr.length-1);
  console.timeEnd('quickSort');
  return arr;
}

// quickSort(arr.slice(0))

function quickSort2(arr){
  function sort2(low,height){
     let i = low;
     let j = height;
     let pivot = arr[low];
     if(i < j){
       while(i<j) {
         while(i<j && arr[j] >= pivot){
           j--;
         }
         arr[i] = arr[j];
         while(i< j && arr[i] < pivot){
           i++
         }
         arr[j] = arr[i];
       }
       arr[i] = pivot;
       sort2(low,i-1);
       sort2(i+1,height);
     }
     sort2(0,arr.length)
     return arr;
  }
  return sort2(0 ,arr.height);
}
