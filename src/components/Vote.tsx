interface Props {
  voteCount: number;
}

const Vote = ({ voteCount }: Props) => {
  return (
    <div>
      <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1 6l4-4 4 4'
          stroke='#4661E6'
          strokeWidth='2'
          fill='none'
          fillRule='evenodd'
        />
      </svg>
      {voteCount}
    </div>
  );
};

export default Vote;
