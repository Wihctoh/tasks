import { useState } from "react";

const treeData = [
  {
    id: "0",
    name: "Documents",
    children: [
      {
        id: "0-0",
        name: "Document 1-1",
        children: [
          {
            id: "0-1-1",
            name: "Document-0-1.doc",
          },
          {
            id: "0-1-2",
            name: "Document-0-2.doc",
          },
        ],
      },
    ],
  },
  {
    id: "1",
    name: "Desktop",
    children: [
      {
        id: "1-0",
        name: "document1.doc",
      },
      {
        id: "0-0",
        name: "documennt-2.doc",
      },
    ],
  },
  {
    id: "2",
    name: "Downloads",
    children: [],
  },
];

function Tree({ treeData }) {
  function TreeNode({ obj }) {
    const { children, name } = obj;
    console.log(children);

    const [showChildren, setShowChildren] = useState(false);

    const handleClick = () => {
      setShowChildren(!showChildren);
    };
    return (
      <>
        <div onClick={handleClick}>
          <span>{name}</span>
        </div>
        <ul>{showChildren && <Tree treeData={children} />}</ul>
      </>
    );
  }

  return (
    <ul>
      {treeData.map((node, index) => (
        <TreeNode obj={node} key={index} />
      ))}
    </ul>
  );
}

export default Tree;
