
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
function reverse_level_order_traversal(root) {
    let result = [];
    
    if(root == null) {
        return result;
    }
    
    let queue = [];
    queue.push(root);
    
    while(queue.length > 0) {
        let temp = [];
        let count = queue.length;
        
        for(let i=0; i<count; i++){
            let current = queue.shift();
            temp.push(current.value);
            
            if(current.left != null) {
                queue.push(current.left);
            }
            
            if(current.right != null) {
                queue.push(current.right);
            }
        }
        result.push(temp);
    }
    
    console.log('result: ', result);
    result.reverse();
    return result;
}
