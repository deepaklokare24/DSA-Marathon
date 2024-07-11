/*
In order to reduce memory consumption, we can follow the below steps:

Push the root node to the queue.
Process all such nodes which come at the front of the queue and which are on the same level.
After processing all such nodes, the queue would be filled up with nodes from the next level.
Repeat the above process as long as there is a node yet to be visited. Note that in such a solution, we do not need to store the levels of each node in a separate array.
Time Complexity
O(node_count), for bfs.

Auxiliary Space Used
O(node_count).

For storing all the nodes from a level: O(node_count).
For the queue: O(node_count).
So, total auxiliary space complexity: O(node_count).

Space Complexity
O(node_count).

Space used for input: O(node_count).
Auxiliary space used: O(node_count).
Space used for output: O(node_count).
So, total space complexity: O(node_count).
*/

/*
For your reference:
const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};
*/
/**
* @param {BinaryTreeNode_int32} root
* @return {list_int32}
*/

/*
* Asymptotic complexity in terms of total number of nodes in the given tree `n`:
* Time: O(n).
* Auxiliary space: O(n).
* Total space: O(n).
*/

function level_order_traversal(root) {
    let result = [];
    if (root === null) {
        return result;
    }
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let temp = [];

        // The queue currently has all the nodes of a single level.
        let currentLevelNodeCount = queue.length;

        // Processing the nodes from the current level.
        for (let i = 0; i < currentLevelNodeCount; ++i) {
            let current = queue.shift();
            temp.push(current.value);
            if (current.left !== null) {
                queue.push(current.left);
            }
            if (current.right !== null) {
                queue.push(current.right);
            }
        }
        result.push(temp);
    }
    return result;
}