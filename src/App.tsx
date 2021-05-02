import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TreeViewer from './components/TreeView';
import data from './data.json'

export default function App() {
  return (
    <div className="App">
      <main>
        <Container maxWidth="sm">
          <Typography variant='h3'>Tree Viewer</Typography>
          <TreeViewer data={data} />
        </Container>
      </main>
    </div>
  );
}
