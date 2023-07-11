import './App.css';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import styled from 'styled-components';
import Card from './components/Card';
import { Request } from './data';
import { data } from './data';
import { useState } from 'react';
import DisplayOptionsBar from './components/DisplayOptionsBar';

function App() {
  const [requests, setRequests] = useState(data.productRequests);

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
      <DisplayOptionsBar />
      {requests.map(request => (
        <Card
          key={request.id}
          req={request}
          handleClick={handleClick}
          //Qs: above, why it doesn't require a parameter?
        />
      ))}
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px;
  gap: 24px;
  display: flex;
  flex-direction: column;
`;

export default App;
