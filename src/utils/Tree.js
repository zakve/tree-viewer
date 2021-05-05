const createTree = (data) => {
    if (data) {
        const arr = [...data]
        arr.push({ id: 0, name: 'root', parentId: null })
        return arr
    } else {
        return { id: 0, name: 'root', parentId: null }
    }
}

const recursiveChild = (items, id = null, link = 'parentId') =>
    items
        .filter(item => item[link] === id)
        .map(item => {
            return { ...item, children: recursiveChild(items, item.id) }
        })

const addNodesFromArray = (data, id, link) => {
    return recursiveChild(data, id, link)[0]
}

const getMaxId = (data) => {
    return Math.max.apply(Math, data.map(item => item.id))
}

const labelChangeHandler = ({ data, nodeId, value }) => {
    const arr = [...data]
    const foundIndex = arr.findIndex(item => item.id === nodeId);
    arr[foundIndex].name = value
    return arr
}

const TreeService = {
    createTree,
    addNodesFromArray,
    // addNode,
    // removeNode,
    // findNodeById,
    getMaxId,
    labelChangeHandler
}

export default TreeService