// pseudocode compute the sum of all the keys in a tree

function computesum(root) {
    if (root == null) return 0
    leftsum = computesum(root.left)
    rightsum = computesum(root.right)
    return root.key + leftsum + rightsum
}