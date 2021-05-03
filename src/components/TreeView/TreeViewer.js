import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItemUi from '../TreeItemUi';

// interface IKeys {
//     id: number,
//     name: string,
//     parentId: number,
// }
// interface IData {
//     data: IKeys[]
// }

export default function TreeViewer({ data }) {

    // Check existing root node
    if (!data.find(el => el.parentId === null)) {
        data.push({ id: 0, name: 'root' })
    }
    // TODO: check node object (Typescript)
    // TODO: check if parent exist
    // TODO: changeNodeLabel function
    // TODO: addNode function
    // TODO: removeNode function

    const nest = (items, id = undefined, link = 'parentId') =>
        items
            .filter(item => item[link] === id)
            .map(item => ({ ...item, children: nest(items, item.id) }));

    const renderTree = (nodes) => {
        return (
            <TreeItemUi key={nodes.id} nodeId={nodes.id.toString()} label={nodes.name}>
                {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
            </TreeItemUi>
        )
    }

    return (
        <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpanded={['root']}
            defaultExpandIcon={<ChevronRightIcon />}
        >
            {renderTree(nest(data)[0])}
        </TreeView>
    )
}