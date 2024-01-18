 
//write your code here
// return the min cost
	function mincost(arr) {
    const minHeap = new MinHeap();

    // Add all ropes to the min heap
    for (let i = 0; i < arr.length; i++) {
        minHeap.push(arr[i]);
    }

    let totalCost = 0;

    // Connect ropes until only one rope remains in the heap
    while (minHeap.size() > 1) {
        const rope1 = minHeap.pop();
        const rope2 = minHeap.pop();

        const currentCost = rope1 + rope2;
        totalCost += currentCost;

        minHeap.push(currentCost);
    }

    return totalCost;
}
  

