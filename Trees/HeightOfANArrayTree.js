
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
 * @return {int32}
 */
function find_height(root) {
    let maxHeight = 0;
    
    function howManyEdges(node) {
        if(node.children && node.children.length == 0) {
            return 0;
        }
        
        let maxEdges = 0;
        
        for(let child of node.children){
            let edges = howManyEdges(child) + 1;
            maxEdges = Math.max(maxEdges, edges);
        }
        
        maxHeight = Math.max(maxHeight, maxEdges);
        
        return maxEdges;
    }
    
    howManyEdges(root);
    return maxHeight;
}
