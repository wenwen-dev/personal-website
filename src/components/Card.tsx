import CommentCount from './CommentCount';
import Vote from './Vote';
import styled from 'styled-components';
import { Request } from '../data';

interface Props {
  req: Request;
  handleClick: (request: Request) => void;
}

const Card = ({ req, handleClick }: Props) => {
  return (
    <Wrapper>
      <Vote req={req} handleClick={handleClick} />
      <FeedbackWrapper>
        <Title>{req.title}</Title>
        <Details>{req.description}</Details>
        <Category>{req.category}</Category>
      </FeedbackWrapper>
      <CommentCount commentCount={req.comments ? req.comments.length : 0} />
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
