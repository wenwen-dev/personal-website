import { useState } from 'react';
import Vote from './Vote';

const Card = () => {
  const [voteCount, setVoteCount] = useState(0);

  return (
    <div>
      <Vote voteCount={voteCount} />
    </div>
  );
};

export default Card;
