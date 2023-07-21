import styled from 'styled-components';

const RoadmapSelector = () => {
  const tempList = ['Planned', 'In Progress', 'Live'];

  return (
    <Wrapper>
      <Upper>
        <Title>Roadmap</Title>
        <ViewButton>
          <a href=''>View</a>
        </ViewButton>
      </Upper>
      <Lower>
        {tempList.map(item => (
          <ItemWrapper>
            <li key={item}>{item}</li>0
          </ItemWrapper>
        ))}
      </Lower>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 24px;
`;

const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Lower = styled.ul`
  display: flex;
  flex-direction: column;
  padding-inline-start: 24px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.25px;
`;

const ViewButton = styled.p`
  font-weight: 600;
  font-size: 13px;
  & a {
    color: #4661e6;
  }
  & a:hover {
    color: #8397f8;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default RoadmapSelector;
