import { useState } from 'react';
import styled from 'styled-components';

interface Props {
  sortOptions: Option[];
  currentSort: Option;
  onChangeCurrentSort: (sort: Option) => void;
}

export interface Option {
  id: number;
  name: string;
}

const SortSelector = ({
  sortOptions,
  currentSort,
  onChangeCurrentSort,
}: Props) => {
  const [menuIsExtended, setMenuExtended] = useState(false);

  const handleToggle = () => {
    console.log('toggling');
    setMenuExtended(!menuIsExtended);
  };

  return (
    <Wrapper>
      <span>Sort by: </span>
      <CurrentSort onClick={handleToggle}>{currentSort.name}</CurrentSort>
      {menuIsExtended ? (
        <SortOptions>
          {sortOptions.map(option => (
            <li key={option.id} onClick={() => onChangeCurrentSort(option)}>
              {option.name}
            </li>
          ))}
        </SortOptions>
      ) : (
        <></>
      )}

      <ArrowUp width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1 1l4 4 4-4'
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

const CurrentSort = styled.span`
  font-weight: 700;
  cursor: pointer;
`;

const SortOptions = styled.ul``;
export default SortSelector;
