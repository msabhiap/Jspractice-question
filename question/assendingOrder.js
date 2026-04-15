1	function sortArray(arr) {
2	    for (let i = 0; i < arr.length; i++) {
3	        for (let j = i + 1; j < arr.length; j++) {
4	            if (arr[i] > arr[j]) {
5	                // swap the elements
6	                let temp = arr[i];
7	                arr[i] = arr[j];
8	                arr[j] = temp;
9	            }
10	        }
11	    }
12	    return arr;
13	}
14	
15	console.log(sortArray([5, 3, 8, 1]));