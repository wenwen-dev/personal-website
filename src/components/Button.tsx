import styled from 'styled-components';

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return <Wrapper>{text}</Wrapper>;
};

const Wrapper = styled.button`
  background-color: #c75af6;
  border: none;
  padding: 12px 24px;
  font-weight: 700;
  font-size: 14px;
  color: #f2f4fe;
  border-radius: 10px;
`;
export default Button;
