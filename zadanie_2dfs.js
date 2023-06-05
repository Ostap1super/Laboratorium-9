function dfs(graph, currentNode, visited = new Set()) {
  console.log(currentNode); 
  visited.add(currentNode);

  const neighbors = graph[currentNode];
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

dfs(graph, 'A');