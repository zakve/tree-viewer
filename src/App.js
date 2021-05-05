import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TreeViewer from './components/TreeView';
import data from './data.json'
//import Tree from "./utils/Tree";

export default function App() {
  // const tree = Tree.createTree(data)
  // let treeData = Tree.addNodesFromArray(tree, null, 'parentId')

  // const labelChangeHandler = ({ nodeId, value }) => {
  //   return treeData = Tree.labelChangeHandler({ data: tree, nodeId, value })
  // }

  return (
    <div className="App">
      <main>
        <Container maxWidth="sm">
          <Typography variant='h3'>Tree Viewer</Typography>
          <TreeViewer
            data={data}
          //labelChangeHandler={labelChangeHandler}
          />
        </Container>
      </main>
    </div>
  );
}
