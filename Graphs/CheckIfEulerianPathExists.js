
/**
 * @param {int32} n
 * @param {list_list_int32} edges
 * @return {bool}
 */
function check_if_eulerian_path_exists(n, edges) {
    let degrees = new Array(n).fill(0);
    
    for(let [s, e] of edges) {
        degrees[s]++;
        degrees[e]++;
    }
    
    let noOfOddDegrees = 0;
    
    for(let degree of degrees) {
        if(degree % 2 != 0){
            noOfOddDegrees++;
        }
    }
    
    return ( noOfOddDegrees == 0 || noOfOddDegrees == 2 ) ? true : false;
}
