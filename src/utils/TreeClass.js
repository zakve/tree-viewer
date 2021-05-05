class Tree {
    constructor(id, name, parentId) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
        this.children = []
    }

    addNode(node) {
        //console.log(node)
        this.children = new Tree(node.id, node.name, node.parentId)
    }

    removeNode() {
    }

    treeLength() {
    }

    findNodeById() {
        console.log(this.children)
        //this.children.map((child) => console.log(child))
    }

}

export default Tree