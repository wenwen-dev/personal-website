import styled from 'styled-components';
import TitleSection from './TitleSection';
import TagSelector from './TagSelector';
import RoadmapSelector from './RoadmapSelector';

const TagsPane = () => {
  return (
    <Wrapper>
      <TitleSection />
      <TagSelector />
      <RoadmapSelector />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export default TagsPane;
