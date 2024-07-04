
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
 * @return {int32}
 */
function get_maximum_value(root) {
    if(!root) {
        return 0;
    }
    let parent = root;
    let current = root;
    while(current != null) {
        parent = current;
        current = current.right;
    }
    return parent.value;
}