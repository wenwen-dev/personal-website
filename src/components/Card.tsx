import CommentCount from './CommentCount';
import Vote from './Vote';
import styled from 'styled-components';

interface Props {
  title: string;
  details: string;
  category: string;
  voteCount: number;
  commentCount: number | undefined;
}

const Card = ({ title, details, category, voteCount, commentCount }: Props) => {
  return (
    <Wrapper>
      <Vote voteCount={voteCount} />
      <FeedbackWrapper>
        <Title>{title}</Title>
        <Details>{details}</Details>
        <Category>{category}</Category>
      </FeedbackWrapper>
      <CommentCount commentCount={commentCount} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  margin-bottom: 20px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 6px;
`;

const FeedbackWrapper = styled.div`
  flex: auto;
`;

const Title = styled.h2``;

const Details = styled.p``;

const Category = styled.p``;
export default Card;
