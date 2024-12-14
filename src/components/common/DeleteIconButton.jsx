import styled from "styled-components"

const DeleteIconButton = styled.button`

  display: block;
  width: 36px;
  height: 36px;
  border: 1px solid #ccc;
  background: url(images/delete_icon.png)no-repeat center;
  border-radius: 6px;
  transition: all 0.3s;
  
  &:disabled{
     background: #ccc url(images/delete_hover_icon.png)no-repeat center;
     border:0;
     cursor: auto;
  }

  &:not(:disabled):hover {

    background-color: #F6F6F6;
    
  }

`;

export default DeleteIconButton;