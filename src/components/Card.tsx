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
  //review flex settings
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0cap.25px;
`;

const Details = styled.p`
  font-size: 16px;
`;

const Category = styled.p`
  background-color: #f2f4ff;
  font-weight: 600;
  font-size: 13px;
  margin-top: 12px;
  padding: 6px 16px;
  border-radius: 10px;
  color: #4661e6;
  text-transform: capitalize;
  display: inline-flex;
`;
export default Card;
