
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
function postorder(root) {
    let result = [];
    traverse(root, result)
    return result;
}

function traverse(root, result) {
    if(root == null) {
        return;
    }
    
    traverse(root.left, result);
    traverse(root.right, result);
    result.push(root.value);
}