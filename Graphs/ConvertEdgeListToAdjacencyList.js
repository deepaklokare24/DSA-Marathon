
/**
 * @param {int32} n
 * @param {list_list_int32} edges
 * @return {list_list_int32}
 */
function convert_edge_list_to_adjacency_list(n, edges) {
    let adjacencyList = Array.from({length: n}, () => new Array())
    
    for(const [u, v] of edges) {
        adjacencyList[u].push(v);
        adjacencyList[v].push(u);
    }
    
    adjacencyList = adjacencyList.map(item => item.sort((a, b) => a - b));

    return adjacencyList;
}
