
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
 * @param {list_int32} values
 * @return {BinaryTreeNode_int32}
 */
function build_a_bst(values) {
    
    let root = null;
        
    if(!values.length) {
        return root;
    }
    
    for(let i=0; i<values.length; i++){
        root = insertIntoBST(root, values[i]);
    }
    
    return root;
}


function insertIntoBST(root, value){
    if(root == null) {
        return new BinaryTreeNode(value);
    }
    
    let parent = root;
    let current = root;
        
    while(current !== null) {
        parent = current;
        if(value < current.value) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    
    if(value < parent.value) {
        parent.left = new BinaryTreeNode(value); 
    } else {
        parent.right = new BinaryTreeNode(value); 
    }
    
    return root;
}
