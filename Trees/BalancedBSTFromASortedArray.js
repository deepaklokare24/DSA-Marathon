
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
 * @param {list_int32} a
 * @return {BinaryTreeNode_int32}
 */
function build_balanced_bst(a) {
    
    function makeTree(arr, s, e) {
        if(s > e) return null;
        
        if(s == e) return new BinaryTreeNode(arr[s]);
        
        let mid = parseInt(s + (e-s) / 2);
        
        let root = new BinaryTreeNode(arr[mid]);
        
        root.left = makeTree(arr, s, mid-1);
        root.right = makeTree(arr, mid+1, e);
        
        return root;
    }
    
    return makeTree(a, 0, a.length-1);
}
