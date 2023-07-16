import styled from 'styled-components';

interface Props {
  tagName: string;
}

const Tag = ({ tagName }: Props) => {
  return <Wrapper>{tagName}</Wrapper>;
};

const Wrapper = styled.span`
  display: inline-block;
  height: 30px;
  padding: 5px 16px;
  color: #4661e6;
  background-color: #f2f4ff;
  border-radius: 10px;
  font-weight: 600;
  font-size: 13px;
  text-transform: capitalize;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export default Tag;
