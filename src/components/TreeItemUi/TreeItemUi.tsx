import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeItem from '@material-ui/lab/TreeItem';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddIcon from '@material-ui/icons/Add';
import { indigo } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';

interface INode {
    id: number,
    name: string,
    parentId: number
}

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

export default function TreeItemUi({ id, name, parentId }: INode) {
    const classes = useStyles();

    const addHandler = () => {
        console.log('add')
    }
    const removeHandler = () => {
        console.log('remove')
    }

    return (
        <TreeItem nodeId={id.toString()} label={
            <div className={classes.itemRow}>
                <TextField size='small' value={name} />
                <div>
                    <IconButton className={classes.btnAdd} size='small' onClick={addHandler} >
                        <AddIcon />
                    </IconButton>
                    <IconButton className={classes.btnRemove} size='small' onClick={removeHandler} >
                        <DeleteOutlineIcon />
                    </IconButton>
                </div>
            </div>
        } />
    )
}