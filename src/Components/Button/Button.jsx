import styled from 'styled-components';

const CustomButton = styled.button`
  float: left;
  background: ${props => props.color} !important;
  color: #fff;
  padding: 0 15px;
  border: 0;
  font-size: 12px;
  cursor: pointer;
  margin: 5px 5px 0 0;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  font-weight: bold;
`;

export default CustomButton;

// yellow ==>  #aeae63
// green ==> #84c08b
// Blue ==> #739cba
