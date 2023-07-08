import Vote from './Vote';
import styled from 'styled-components';

interface Props {
  title: string;
  details: string;
  category: string;
  voteCount: number;
}

const Card = ({ title, details, category, voteCount }: Props) => {
  return (
    <Wrapper>
      <Vote voteCount={voteCount} />
      <FeedbackWrapper>
        <Title>{title}</Title>
        <Details>{details}</Details>
        <Category>{category}</Category>
      </FeedbackWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.article``;

const FeedbackWrapper = styled.div``;

const Title = styled.h2``;

const Details = styled.p``;

const Category = styled.p``;
export default Card;
