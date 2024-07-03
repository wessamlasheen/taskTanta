import React from 'react';
import './App.css';
import { data } from './Data/data';
import TreeNode from './components/TreeNode';


const App: React.FC = () => {
  return (
    <div className="App">
      {data.map(node => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};

export default App;
