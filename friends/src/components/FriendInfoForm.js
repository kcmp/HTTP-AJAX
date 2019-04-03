import React from 'react'; //
import styled from 'styled-components';

const FriendInputForm = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content:space-around;
width: 100%;
`

 const FriendInfoForm = (props) => {
    return (
        <FriendInputForm className="inputForm">
            <input type="text" placeholder="Enter Friend's Name" name= "name" />
            <br/>
            <input type="text" placeholder="Enter Friend's Age" name= "age" />
            <br/>
            <input type="text" placeholder="Enter Friend's Email" name= "email" />

         </FriendInputForm>
        )
    }

 export default FriendInfoForm;