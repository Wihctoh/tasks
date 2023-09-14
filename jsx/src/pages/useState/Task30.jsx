import React, { useState } from 'react';

const TreeNode = ({ data, isActive, toggleActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const renderButtons = () => {
    if (!isActive) {
      return null;
    }

    return (
      <div>
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </div>
    );
  };

  const renderChildren = () => {
    if (!isOpen || !data.children || data.children.length === 0) {
      return null;
    }

    return (
      <ul>
        {data.children.map((child) => (
          <li key={child.id}>
            <TreeNode data={child} isActive={isActive} toggleActive={toggleActive} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div onClick={() => { toggleOpen(); toggleActive(data.id); }} style={{ cursor: 'pointer' }}>
        {isOpen ? '▼' : '▶'} {data.name}
      </div>
      {renderButtons()}
      {renderChildren()}
    </div>
  );
};

const App = () => {
  const treeData = [
    {
      id: 1,
      name: 'Node 1',
      children: [
        {
          id: 2,
          name: 'Node 1.1',
          children: [
            {
              id: 3,
              name: 'Node 1.1.1',
              children: [],
            },
          ],
        },
        {
          id: 4,
          name: 'Node 1.2',
          children: [],
        },
      ],
    },
    {
      id: 5,
      name: 'Node 2',
      children: [],
    },
  ];

  const [activeNode, setActiveNode] = useState(null);

  const toggleActive = (nodeId) => {
    setActiveNode(activeNode === nodeId ? null : nodeId);
  };

  return (
    <div>
      <h1>Tree View</h1>
      {treeData.map((node) => (
        <TreeNode
          key={node.id}
          data={node}
          isActive={activeNode === node.id}
          toggleActive={toggleActive}
        />
      ))}
    </div>
  );
};

export default App;
