
/**
* @param {int32} n
* @param {list_list_int32} edges
* @return {bool}
*/

// -------- START --------
/*
* Asymptotic complexity in terms of the number of vertices ( = `n`) and number of edges ( = `e`):
* Time: O(n + e).
* Auxiliary space: O(n).
* Total space: O(n + e).
*/

function check_if_eulerian_cycle_exists(n, edges) {
    const degree = new Array(n).fill(0);
    for (const [u, v] of edges) {
        degree[u]++;
        degree[v]++;
    }

    for (const d of degree) {
        if (d % 2 !== 0) {
            return false;
        }
    }

    return true;
}
