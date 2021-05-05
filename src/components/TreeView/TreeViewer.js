import React, { useState, useEffect } from 'react';
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
    const [dataArr, setDataArr] = useState(undefined)
    const [treeData, setTreeData] = useState(undefined)
    const [maxId, setMaxId] = useState(0)

    // Init and add root element
    useEffect(() => {
        if (data) {
            const arr = [...data]
            // Check existing root node
            if (arr.find(el => !el.parentId)) {
                arr.push({ id: 0, name: 'root', parentId: null })
                setDataArr(arr)
            }
        }
    }, [data])

    useEffect(() => {
        let max = 0
        const nest = (items, id = null, link = 'parentId') =>
            items
                .filter(item => item[link] === id)
                .map(item => {
                    if (item.id > max)
                        max = item.id
                    return { ...item, children: nest(items, item.id) }
                })

        if (dataArr) {
            setTreeData(nest(dataArr)[0])
            setMaxId(max)
        }
    }, [dataArr])

    // TODO: check node object (Typescript)
    // TODO: check unique IDs
    // TODO: check if parent exist

    const labelChangeHandler = ({ nodeId, parentId, value }) => {
        const arr = [...dataArr]
        const foundIndex = arr.findIndex(item => item.id === nodeId);
        arr[foundIndex].name = value
        setDataArr(arr)
    }

    const addNodeHandler = ({ nodeId }) => {
        setDataArr(dataArr => [...dataArr, { id: maxId + 1, name: `Item no. ${maxId + 1}`, parentId: nodeId }])
        setMaxId(maxId + 1)
    }

    const removeNodeHandler = ({ nodeId }) => {
        const filtered = dataArr.filter(node => node.id !== nodeId)
        setDataArr(filtered)
    }

    const labelClickHandler = (event) =>
        event.preventDefault()


    const renderTree = (nodes) => {
        return (
            <TreeItemUi
                key={nodes.id}
                nodeId={nodes.id}
                label={nodes.name}
                parentId={nodes.parentId}
                labelChangeHandler={labelChangeHandler}
                onLabelClick={labelClickHandler}
                addNodeHandler={addNodeHandler}
                removeNodeHandler={removeNodeHandler}
            >
                {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
            </TreeItemUi>
        )
    }

    return (
        <>
            {
                treeData &&
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpanded={['root']}
                    defaultExpandIcon={<ChevronRightIcon />}
                >
                    {renderTree(treeData)}
                </TreeView>
            }
        </>
    )
}