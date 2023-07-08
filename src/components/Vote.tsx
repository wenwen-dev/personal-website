import styled from 'styled-components';

interface Props {
  voteCount: number;
}

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
`;

const VoteCount = styled.p``;
const Vote = ({ voteCount }: Props) => {
  return (
    <Wrapper>
      <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1 6l4-4 4 4'
          stroke='#4661E6'
          strokeWidth='2'
          fill='none'
          fillRule='evenodd'
        />
      </svg>
      <VoteCount>{voteCount}</VoteCount>
    </Wrapper>
  );
};

export default Vote;
