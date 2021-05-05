import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeItem from '@material-ui/lab/TreeItem';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddIcon from '@material-ui/icons/Add';

// interface INode {
//     id: number,
//     name: string,
//     parentId: number,
//     children: React.ReactNode
// }

const useStyles = makeStyles({
    itemRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addBtn: {
        color: '#64b5f6'
    },
    removeBtn: {
        color: '#e57373'
    }
});

export default function TreeItemUi({ nodeId, label, parentId, children, labelChangeHandler, addNodeHandler, removeNodeHandler }) {
    const classes = useStyles();

    return (
        <TreeItem
            nodeId={nodeId.toString()}
            onLabelClick={(event) => { event.preventDefault() }}
            label={
                <div className={classes.itemRow}>
                    <TextField size='small' value={label} onChange={(event) => labelChangeHandler({ nodeId, parentId, value: event.target.value })} />
                    <div>
                        <IconButton className={classes.addBtn} size='small' onClick={() => addNodeHandler({ nodeId })} >
                            <AddIcon />
                        </IconButton>
                        {
                            nodeId > 0 &&
                            <IconButton className={classes.removeBtn} size='small' onClick={() => removeNodeHandler({ nodeId, parentId })} >
                                <DeleteOutlineIcon />
                            </IconButton>
                        }
                    </div>
                </div>
            }>
            {children}
        </TreeItem>
    )
}