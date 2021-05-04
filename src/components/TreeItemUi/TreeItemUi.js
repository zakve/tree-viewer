import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeItem from '@material-ui/lab/TreeItem';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddIcon from '@material-ui/icons/Add';
import { indigo } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';

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
    btnAdd: {
        color: indigo[500],
    },
    btnRemove: {
        color: red[500],
    }
});

export default function TreeItemUi({ nodeId, label, parentId, children, labelChangeHandler }) {
    const classes = useStyles();

    const addHandler = () => {
        console.log('add')
    }
    const removeHandler = () => {
        console.log('remove')
    }

    return (
        <TreeItem
            nodeId={nodeId.toString()}
            onLabelClick={(event) => { event.preventDefault() }}
            label={
                <div className={classes.itemRow}>
                    <TextField size='small' value={label} onChange={(event) => labelChangeHandler({ nodeId, parentId, value: event.target.value })} />
                    <div>
                        <IconButton className={classes.btnAdd} size='small' onClick={addHandler} >
                            <AddIcon />
                        </IconButton>
                        <IconButton className={classes.btnRemove} size='small' onClick={removeHandler} >
                            <DeleteOutlineIcon />
                        </IconButton>
                    </div>
                </div>
            }>
            {children}
        </TreeItem>
    )
}