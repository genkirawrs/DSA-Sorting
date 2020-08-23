function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
console.log(array);
    return array;
};

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

//Drill 1
/*
let list = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

mergeSort(list);


//3rd call: [ 1, 21, 26, 45 ]
//only 15 calls?
//first two lists: [ 1, 21 ] and [ 26, 45 ]
//[1,  2,  9, 21,26, 28, 29, 45]
*/

//Drill 2
/*
The pivot could be either 14 or 17 b/c the sorting of lower and higher values matches for both of them being the pivot point
*/


//Drill 3

function quickSortFirst(array) {
  if(array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesserArray = [];
  var greaterArray = [];

  for (var i = 1; i < array.length; i++) {
    if ( array[i] > pivot ) {
      greaterArray.push(array[i]);
    } else {
      lesserArray.push(array[i]);
    }
  }
console.log('=======');
console.log(lesserArray);
console.log(pivot);
console.log(greaterArray);
console.log('=======');

  return quickSortFirst(lesserArray).concat(pivot, quickSortFirst(greaterArray));
}


function quickSortLast(array) {
  if(array.length < 2) {
    return array;
  }
  
  var pivot = array[array.length-1];
  var lesserArray = [];
  var greaterArray = [];
  
  for (var i = 1; i < array.length-1; i++) {
    if ( array[i] > pivot ) {
      greaterArray.push(array[i]);
    } else {
      lesserArray.push(array[i]);
    }
  }
console.log('=======');
console.log(lesserArray);
console.log(pivot);
console.log(greaterArray);
console.log(lesserArray.concat(pivot, greaterArray));
console.log('=======');
  return quickSortLast(lesserArray).concat(pivot, quickSortLast(greaterArray));
}

let partitionList = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];

//quickSortLast(partitionList);
//   3,  9, 10, 12, 19,14, 17, 16, 13, 15


//console.log(qSort(partitionList));
//[10,3,9,12,14,13,15,16,17,19]





//Drill 3

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function qSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

let quicksort = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];


//console.log(qSort(quicksort));



//Drill 4

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

function mSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mSort(left);
    right = mSort(right);
    return merge(left, right, array);
};

//console.log(mSort(quicksort));


//Drill 5

const LinkedList = require('./linkedlist')

    let linkedList = new LinkedList('sorting');

    linkedList.insertFirst(14);
    linkedList.insertLast(17);
    linkedList.insertLast(13);
    linkedList.insertLast(15);
    linkedList.insertLast(19);
    linkedList.insertLast(10);
    linkedList.insertLast(3);
    linkedList.insertLast(16);
    linkedList.insertLast(9);
    linkedList.insertLast(12);

    let listVals = [];
    let node = linkedList.head;
    while(node.next != null){
	listVals.push(node.value);
	node = node.next; 
    }

    sortedVals = mSort(listVals);
    let sortedList = new LinkedList('sorted');
    for( let i = 0; i < sortedVals.length; i++){
	sortedList.insertLast(sortedVals[i]);
    }
//console.log(sortedList);



//Drill 6

function bSort(array) { 
  if (array.length === 0) { 
    return array; 
  } 

  // Determine minimum and maximum values 
  var i; 
  var minValue = array[0]; 
  var maxValue = array[0]; 
  for (i = 1; i < array.length; i++) { 
    if (array[i] < minValue) { 
      minValue = array[i]; 
    } else if (array[i] > maxValue) { 
      maxValue = array[i]; 
    } 
  } 

  totalBuckets = 4; 
  var bucketCount = Math.floor((maxValue - minValue) / totalBuckets) + 1; 
  var buckets = new Array(bucketCount); 
  for (i = 0; i < buckets.length; i++) { 
    buckets[i] = []; 
  } 

  for (i = 0; i < array.length; i++) { 
    buckets[Math.floor((array[i] - minValue) / totalBuckets)].push(array[i]); 
  } 

  array.length = 0; 
  for (i = 0; i < buckets.length; i++) { 
    mSort(buckets[i]); 
    for (var j = 0; j < buckets[i].length; j++) { 
      array.push(buckets[i][j]); 
    } 
  } 

  return array; 
} 

//initialization 
let array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

//console.log(bSort(array));


//Drill 7


function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
/*
console.log(shuffle(array));
console.log('=====');
console.log(shuffle(array));
console.log('=====');
console.log(shuffle(array));
console.log('=====');
*/



//Drill 8


function mergeBooks(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
	for(let letter = 0; letter < left[leftIndex].length; letter++){
            if (left[leftIndex][letter] < right[rightIndex][letter]) {
                array[outputIndex++] = left[leftIndex++];
            }else {
                array[outputIndex++] = right[rightIndex++];
	    }
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

function bookSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mSort(left);
    right = mSort(right);
    return merge(left, right, array);
};



let books = ['Moby Dick', 'Alice in Wonderland', 'Babar the Elephant','Maze Runner','Hunger Games', 'Alice'];


console.log(bookSort(books));










