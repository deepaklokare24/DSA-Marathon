
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
function preorder(root) {
    let result = [];
    traverse(root, result)
    return result;
}

function traverse(root, result) {
    if(root == null) {
        return;
    }
    result.push(root.value);
    traverse(root.left, result);
    traverse(root.right, result);
}
