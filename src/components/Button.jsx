import React from "react";
// import styled from "styled-components";
// const Buton = styled.button`
//   color: red;
//   font-size: 4rem;
// `;
const Button = (props) => {
  return (
    <button
      onClick={props.click}
      className={`${props.class} px-4 py-14 mainbutton lh-s fw-semibold outfit c-tertiry`}
    >
      {props.text}
    </button>
  );
};

export default Button;
