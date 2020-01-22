
function getArray(reqLen) {
    return new Promise(async (resolve, reject) => {
        a = [];
        for (var l = reqLen; l > 0; l--) {
            a.push(l)
        }
        resolve(a)
    })
}
const generateArrays = async () => {
    return new Promise(async (resolve, reject) => {
        let a = await getArray(100)
        let b = await getArray(50000)
        resolve([a, b])
    })
}
// c = getArray(100000)



function insertionSort(a) {
    return new Promise(async (resolve, reject) => {
        let iterations = 0;
        for (var i = 1; i < a.length; i++) {
            // console.log(a)
            iterations += 1
            var j = i - 1;
            var key = a[i]
            while (j >= 0 & a[j] > key) {
                iterations += 1
                a[j + 1] = a[j];
                j = j - 1;
            }
            a[j + 1] = key
        }
        // console.log(iterations)
        resolve([a, iterations]);

    })
}
async function flow() {
    let arrays = await generateArrays();
    let a = await insertionSort(arrays[0])
    let b = await insertionSort(arrays[1])

    console.log("Sorting");
    console.log("a:: length:", arrays[0].length, "Computations:", a[1])
    console.log("b:: length:", arrays[1].length, "Computations:", b[1])

}
flow()
// console.log("c: ", insertionSort(c)[1])

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