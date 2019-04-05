import React from 'react';
import style from 'styled-components';

 const DeleteBtn = style.div`
    display: flex;
    justify-content: center;
    width: 60px;
    height: 0px;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 10px;
    padding-bottom: 15px;
    margin-bottom: 15px;
`
const DeleteFriendButton = (props) => {
    return (
        <DeleteBtn onClick = {props.handleFriendDeleteBtn} handleFriendFormInput = {props.handleFriendFormInput}>
            Delete X
        </DeleteBtn>
    )
}

 export default DeleteFriendButton;