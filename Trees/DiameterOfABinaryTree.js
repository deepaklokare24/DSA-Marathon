
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
function binary_tree_diameter(root) {
    let maxDiameter = 0;
    
    function howManyEdges(node) {
        if(node.left == null && node.right == null) {
            return 0;
        }
        
        let leftEdges = 0;
        let rightEdges = 0;
        
        if(node.left != null) {
            leftEdges = howManyEdges(node.left) + 1;
        }
        
        if(node.right != null) {
            rightEdges = howManyEdges(node.right) + 1;
        }
        
        let myDiameter = leftEdges + rightEdges;
        
        if(maxDiameter < myDiameter) {
            maxDiameter = myDiameter;
        }
        
        return Math.max(leftEdges, rightEdges);
    }
    
    howManyEdges(root);
    return maxDiameter;
}
