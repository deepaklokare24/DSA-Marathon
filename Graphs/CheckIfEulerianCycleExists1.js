
/**
 * @param {int32} n
 * @param {list_list_int32} edges
 * @return {bool}
 */
function check_if_eulerian_cycle_exists(n, edges) {
    let freqMap = new Map();
    
    for(let edge of edges) {
       
        if(freqMap.has(edge[0])){
            freqMap.set(edge[0], freqMap.get(edge[0])+1);
        }else {
            freqMap.set(edge[0], 1);
        }
    }
    
    for(let edge of edges) {
        if(freqMap.has(edge[1])){
            freqMap.set(edge[1], freqMap.get(edge[1])+1);
        }else {
            freqMap.set(edge[1], 1);
        }
    }
    
    let hasEulerianCycle = true;
    
    for(let value of freqMap.values()) {
        if(value % 2 != 0){
            hasEulerianCycle = false;
            break;
        }
    }
    return hasEulerianCycle;
}
