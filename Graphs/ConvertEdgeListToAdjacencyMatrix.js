
/**
 * @param {int32} n
 * @param {list_list_int32} edges
 * @return {list_list_bool}
 */
function convert_edge_list_to_adjacency_matrix(n, edges) {
    let adjacencyMatrix = Array.from({length: n}, () => Array(n).fill(false));
    
    for(let [u, v] of edges) {
        adjacencyMatrix[u][v] = true;
        adjacencyMatrix[v][u] = true;
    }

    return adjacencyMatrix;
}
