import React, { useState } from 'react';
import './styles.css';
import { Node } from '../../types/node';

interface NodeProps {
  node: Node;
}

const TreeNode: React.FC<NodeProps> = ({ node }) => {
    const [expanded, setExpanded] = useState(false);
  
    const hasChildren = node.children ;
  
    return (
      <div className="tree-node" >
        <div
          className={`tree-node-label ${hasChildren ? 'clickable' : ''}`}
          onClick={() => hasChildren && setExpanded(!expanded)}
        >
          {hasChildren && (
            <span className="tree-node-toggle">{expanded ? '-' : '+'}</span>
          )}
          {node.name}
        </div>
        {expanded && node.children && (
          <div className="tree-node-children">
            {node.children.map(child => (
              <TreeNode key={child.id} node={child} />
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default TreeNode;
