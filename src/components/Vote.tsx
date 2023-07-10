import styled from 'styled-components';
import { Request } from './Card';

interface Props {
  req: Request;
  handleClick: (request: Request) => void;
}

const Vote = ({ req, handleClick }: Props) => {
  return (
    <Wrapper
      onClick={() => {
        handleClick(req);
      }}
    >
      <ArrowUp width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1 6l4-4 4 4'
          stroke='#4661E6'
          strokeWidth='2'
          fill='none'
          fillRule='evenodd'
        />
      </ArrowUp>
      <VoteCount>{req.upvotes}</VoteCount>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: hsl(231, 100%, 97%);
  width: 40px;
  height: 53px;
  border-radius: 10px;

  &:hover {
    background-color: #cfd7ff;
  }

  &:active {
    background-color: #4661e6;
    color: #979797;
  }
`;

const ArrowUp = styled.svg``;

const VoteCount = styled.p`
  font-weight: bold;
  font-size: 13px;
  letter-spacing: -0.18px;
`;

export default Vote;
