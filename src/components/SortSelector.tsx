import styled from 'styled-components';

const SortSelector = () => {
  return (
    <Wrapper>
      <span>Sort by: </span>
      <span>Most Upvotes</span>
      <ArrowUp width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1 6l4-4 4 4'
          stroke='#FFFFFF'
          strokeWidth='2'
          fill='none'
          fillRule='evenodd'
        />
      </ArrowUp>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: #f2f4fe;
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 14px;
`;

const ArrowUp = styled.svg`
  display: inline;
`;

const SortOption = styled.span`
  display: inline;
  font-weight: 700;
`;
export default SortSelector;
