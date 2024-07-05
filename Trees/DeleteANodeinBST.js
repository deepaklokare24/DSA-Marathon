
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
 * @param {list_int32} values_to_be_deleted
 * @return {BinaryTreeNode_int32}
 */
function delete_from_bst(root, values_to_be_deleted) {
    for(let i=0; i<values_to_be_deleted.length; i++){
        root = deleteNode(root, values_to_be_deleted[i]);
    }
    return root;
}


function deleteNode(root, key){
    console.log('--Key--', key);
    let current = root;
    let previous = null;
    
    // first search for that node in given BST
    
    while(current != null) {
        if(current.value === key) {
            break;
        }
        
        if(key < current.value) {
            previous = current;
            current = current.left;
        }else {
            previous = current;
            current = current.right;
        }
    }
    

    
    if(current == null) {   // means key/node is not found in BST
        return root;
    }
    
    // CASE 1: The node to be deleted is the leaf node
    
    if(current.left == null && current.right == null) {
        console.log('CASE 1- ', current);
        // Edge case - if there is no BST tree!
        if(previous == null) {
            return null;
        }
        
        if(current == previous.left) {
            previous.left = null;
        }else if(current == previous.right) {
            previous.right = null;
        }
        
        return root;
    }
    
    // CASE 3: The node to be deleted has both left and right child
    if(current.left != null && current.right != null){
        console.log('CASE 3- ', current);
        // First you need to find the successor of the current node
        
        let successor = current.right;
        previous = current;
        while(successor.left != null){
            previous = successor;
            successor = successor.left;
        }
        
        // Now swap the values of current node to be deleted with the successor
        current.value = successor.value; 
        
        // Now delete the successor node
        
        if(successor == previous.left) {
            previous.left = successor.right;
        }else if(successor == previous.right) {
            previous.right = successor.right;
        }
        
        return root;
    }
    
    
    // CASE 2: The node to be deleted has single child

    console.log('CASE 2- ', current);
    let child = null;
    if(current.left != null && current.right == null) {
        child = current.left;
    }else if(current.left == null && current.right != null) {
        child = current.right;
    }
    
    // EDGE case, if previous is null then child itslef is the new root
    
    if(previous == null) {
        root = child;
        return root;
    }
    
    if(current == previous.left) {
        previous.left = child;
    }else if(current == previous.right) {
        previous.right = child;
    }
    
    return root;
}
