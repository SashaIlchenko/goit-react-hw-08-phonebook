import styled from "@emotion/styled";

export const DeleteBtn = styled.button`
color: #fff;
background-color: #008080;
border: none;
border-radius:3px;
padding:6px;
margin-left: 40px;
opacity:0.7;
&:hover {
    opacity:1;
}`

export const Items = styled.ul`
list-style-type: none;
padding: 0;
color:#fff;
display: flex;
flex-direction:column;
gap: 15px;
`

export const Item = styled.li`
display: flex;
padding: 12px;
border-radius: 3px;
font-size: 22px;
justify-content: space-between;
background-color: #20B2AA;`

