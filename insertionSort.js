let a = [1, 2, 3, 4, 0]


function insertionSort(a) {
    for (var i = 1; i < a.length; i++) {
        // console.log(a)
        var j = i - 1;
        var key = a[i]
        while (j >= 0 & a[j] > key) {
            a[j + 1] = a[j];
            console.log("\t\t", a)
            j = j - 1;
        }
        a[j + 1] = key
    }
    return a;
}

console.log(insertionSort(a))


/**
 *
 * Inplace sorting:  Worst case O(n^2)
 * Loop Invariants:
 *      Initialization:
 *              for  i = 1 , the sub array a[...i-1] === a[0] has a single element and hence can be considered as sorted
 *      Maintenance:
 *              The For loop body i.e. the while loop inside the for loop
 *              checks each position on the left side of the key if it fits there and inserts it in correct position
 *                  [ 1, 2, 3, 4, 0 ]
                            [ 1, 2, 3, *, 4 ]
                            [ 1, 2, *, 3, 4 ]
                            [ 1, *, 2, 3, 4 ]
                            [ *, 1, 2, 3, 4 ]
                    [ 0, 1, 2, 3, 4 ]

                if not it remains at the same position
        Termination:
                As the index of outer for loop reaches the length of the array as seen above the subarray a[.....n]
                which is already sorted
 *
 */