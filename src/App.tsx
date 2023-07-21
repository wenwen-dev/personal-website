import './App.css';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import styled from 'styled-components';
import Card from './components/Card';
import { Request } from './data';
import { data } from './data';
import { useState } from 'react';
import DisplayOptionsBar from './components/DisplayOptionsBar';
import { Option } from './components/SortSelector';
import TagsPane from './components/TagsPane';
import EmptyCardGrid from './components/EmptyCardGrid';

function App() {
  const [requests, setRequests] = useState(data.productRequests);
  // const [requests, setRequests] = useState([]);

  const [sortOptions, setSortOptions] = useState([
    {
      id: 1,
      name: 'Most Upvotes',
    },
    {
      id: 2,
      name: 'Least Upvotes',
    },
    {
      id: 3,
      name: 'Most Comments',
    },
    {
      id: 4,
      name: 'Least Comments',
    },
  ]);

  const [currentSort, setCurrentSort] = useState(sortOptions[0]);

  const handleChangeCurrentSort = (sort: Option) => {
    setCurrentSort(sort);
    console.log(currentSort);
    if (sort.id === 1)
      setRequests(requests.sort((a, b) => b.upvotes - a.upvotes));
    else if (sort.id === 2)
      setRequests(requests.sort((a, b) => a.upvotes - b.upvotes));
    else if (sort.id === 3)
      setRequests(
        requests.sort(
          (a, b) =>
            (b.comments ? b.comments.length : 0) -
            (a.comments ? a.comments.length : 0)
        )
      );
    else if (sort.id === 4)
      setRequests(
        requests.sort(
          (a, b) =>
            (a.comments ? a.comments.length : 0) -
            (b.comments ? b.comments.length : 0)
        )
      );
  };

  const handleClick = (request: Request): void => {
    console.log('executing the handleClick function');

    const currentUpvotes =
      requests.find(req => req.id === request.id)?.upvotes || 0;

    let newRequests = requests.map(req =>
      req.id !== request.id ? req : { ...req, upvotes: currentUpvotes + 1 }
    );

    setRequests(newRequests);
  };

  return (
    <Wrapper>
      <LeftWrapper>
        <TagsPane requests={requests} />
      </LeftWrapper>
      <RightWrapper>
        <DisplayOptionsBar
          suggestionCount={
            requests.filter(req => req.status === 'suggestion').length
          }
          sortOptions={sortOptions}
          currentSort={currentSort}
          onChangeCurrentSort={handleChangeCurrentSort}
        />
        <EmptyCardGrid></EmptyCardGrid>
        <CardGrid>
          {requests.map(request => (
            <Card
              key={request.id}
              req={request}
              handleClick={handleClick}
              //Qs: above, why it doesn't require a parameter?
            />
          ))}
        </CardGrid>
        {/* {requests ? (
          <CardGrid>
            {requests.map(request => (
              <Card
                key={request.id}
                req={request}
                handleClick={handleClick}
                //Qs: above, why it doesn't require a parameter?
              />
            ))}
          </CardGrid>
        ) : (
          <EmptyCardGrid></EmptyCardGrid>
        )} */}
        <GlobalStyles />
      </RightWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 30px;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightWrapper = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
`;

const CardGrid = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export default App;
