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

/*
* Asymptotic complexity in terms of total number of nodes in the given tree `n`:
* Time: O(n).
* Auxiliary space: O(1).
* Total space: O(n).
*/
 
/**
 * @param {BinaryTreeNode_int32} root
 * @param {int32} value
 * @return {bool}
 */
function search_node_in_bst(root, value) {
    
    if(root?.value === value) {
        return true;
    }
    
    let curr = root;
    
    while(curr !== null) {
        if(curr?.value === value) {
            return true;
        }else if(value < curr?.value) {
            curr = curr.left;
        }else {
            curr = curr.right;
        }
    }
    return false;
}
