
/*
For your reference:
const TreeNode = class {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
};
*/
/**
 * @param {TreeNode_int32} root
 * @return {list_list_int32}
 */
function level_order(root) {
    let result = [];
    
    if(root == null) return result;
    
    let queue = [];
    queue.push(root);
    
    while(queue.length > 0) {
        let temp = [];
        
        let count = queue.length;
        
        for(let i=0; i<count; i++){
            let current = queue.shift();
            temp.push(current.value);
            
            for(let child of current.children){
                queue.push(child);
            }
        }
        result.push(temp);
    }
    
    return result;
}
