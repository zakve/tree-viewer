import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItemUi from '../TreeItemUi';

interface IKeys {
    id: number,
    name: string,
    parentId: number,
}
interface IData {
    data: IKeys[]
}

export default function TreeViewer({ data }: IData) {
    return (
        <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
        >
            {
                data.map((item: IKeys) => (
                    <TreeItemUi
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        parentId={item.parentId}
                    />))
            }

        </TreeView>
    )
}