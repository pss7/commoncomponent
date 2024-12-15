import styled from "styled-components";

const buttonStyles = {
  "56px": {
    fontWeight: 600,
  },
  "28px": {
    fontSize: "14px",
  },
};

const OutlinedButton = styled.button`
  margin: 15px 0;
  padding: 0 16px;
  height: ${(props) => props.height || "56px"};
  font-size: ${(props) => buttonStyles[props.height]?.fontSize || "16px"};
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-weight: ${(props) => buttonStyles[props.height]?.fontWeight || "400"};
  color: #181818;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    display: flex;
    align-items: center;
  }

  & > span > img {
    width: ${(props) => (props.smallIcon ? "18px;" : "22px")};
    height: ${(props) => (props.smallIcon ? "17px" : "21px")};
    margin-right: 10px;
  }

  &:hover {
    background-color: #f6f6f6;
  }

  &:disabled {
    border: 0;
    background-color: #ccc;
    color: #fff;
    cursor: auto;
  }
`;

export default OutlinedButton;
