import styled from "styled-components";

const Style = styled.div`
  display: grid;
  grid-template-columns: 36px 1fr;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.gray300};
  border-radius: 4px;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input__subscribe {
    border: unset;
  
    :focus {
      box-shadow: unset;
      border: unset;
    }
  }
`;

export default Style;
