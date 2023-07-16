import styled from 'styled-components';
import TitleSection from './TitleSection';
import TagSelector from './TagSelector';
import RoadmapSelector from './RoadmapSelector';
import { Request } from '../data';

interface Props {
  requests: Request[];
}

// not using useState - would that lead to not re-render again?

const TagsPane = ({ requests }: Props) => {
  const categories: string[] = ['All', 'UI', 'UX'];
  // where do UI and UX come from?

  requests.forEach(req => {
    if (!categories.includes(req.category)) {
      categories.push(req.category);
    }
  });

  return (
    <Wrapper>
      <TitleSection />
      <TagSelector tags={categories} />
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
