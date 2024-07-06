/*
dfs_solution:
We will be maintaining a two-dimensional list to keep track of the nodes at every level.

Our approach will be:

Initiate a DFS from the root node. All of the nodes in the binary tree will be visited exactly once during the DFS traversal.
We will also track the level of the parameter node of the DFS function call. While moving from a parent to a child node, we will increase the level by 1.
When a DFS for a node will be initiated, we will store the value of that node in the appropriate position of our list. While initiating DFS for the child nodes from the parent node, we will initiate the call for the left child before the right child. It will ensure that we will get the nodes from left to right in our list.
Time Complexity
O(node_count), for dfs.

Auxiliary Space Used
O(node_count).

There will be O(node_count) number of recursive calls on the call stack in the worst case.

Space Complexity
O(node_count).

Space used for input: O(node_count).
Auxiliary space used: O(node_count).
Space used for output: O(node_count).
So, total space complexity: O(node_count). */

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
 * @return {list_list_int32}
 */
function level_order_traversal(root) {
    let ret = [];
    helper(root, ret, 0)
    return ret;
}

function helper(node, ret, level) {

    if(node == null) {
        return ;
    }
    
    if(level >= ret.length) {
        // This node is the first encountered node of its level
        // So allocating memory for storing the nodes of this level.
        // Note that we would not need to insert more than one row because we must have already
        // allocated memory for storing nodes from every level between 0 to (level[node->value] - 1).
        ret.push([]);
    }
    
    ret[level].push(node.value);
    
    helper(node.left, ret, level+1);
    helper(node.right, ret, level+1);
    
}