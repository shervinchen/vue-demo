<template>
  <div class="home">
    <div id="mountNode"></div>
  </div>
</template>

<script>
import G6 from '@antv/g6'

export default {
  name: 'home',
  data () {
    return {
      graphData: {
        nodes: [{
          id: 'node1',
          x: 100,
          y: 200
        }, {
          id: 'node2',
          x: 300,
          y: 200
        }],
        edges: [{
          id: 'edge1',
          target: 'node2',
          source: 'node1'
        }]
      }
    }
  },
  mounted () {
    const layout = new G6.Layouts.CompactBoxTree({
      direction: 'LR'
    })
    const data = {
      roots: [{
        label: 'root',
        children: [{
          label: 'child1',
          children: [
            {
              label: 'child\n1.1'
            }
          ]
        }, {
          label: 'child2'
        }]
      }]
    }
    const tree = new G6.Tree({
      container: 'mountNode',
      width: 500,
      height: 500,
      layout,
      fitView: 'cc'
    })
    tree.read(data)
  }
}
</script>
