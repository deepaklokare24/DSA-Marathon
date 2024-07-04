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
 * @param {int32} value
 * @return {bool}
 */
function search_node_in_bst(root, value) {

    if( root === null) {
        return false;
    }else if(root.value === value) {
        return true;
    }
    
    if(value < root.value) {
        return search_node_in_bst(root.left, value);
    }else {
        return search_node_in_bst(root.right, value);
    }

}