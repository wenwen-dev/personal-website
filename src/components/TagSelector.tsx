import styled from 'styled-components';
import Tag from './Tag';

interface Props {
  tags: string[];
}

const TagSelector = ({ tags }: Props) => {
  return (
    <Wrapper>
      {tags.map(tag => (
        <Tag tagName={tag} key={tag} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default TagSelector;
