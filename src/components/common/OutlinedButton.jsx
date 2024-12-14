import styled from "styled-components";

const buttonStyles = {
  "56px": {
    fontWeight: 600,
  },
  "40px": {},
  "36px": {},
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

  & > span {
    position: relative;
    padding-left: ${(props) => {
      if (props.iconUrl) {
        return props.iconWidth < "20px" ? `23px` : "35px";
      }
      return "0";
    }};
  }

  & > span:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: ${(props) => props.iconWidth || "22px"};
    height: ${(props) => props.iconHeight || "21px"};
    background-image: ${(props) =>
      props.iconUrl ? `url(${props.iconUrl})` : "none"};
    background-size: cover;
    background-position: center;
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
