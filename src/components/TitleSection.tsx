import styled from 'styled-components';
import img from './../assets/background-header.png';

const TitleSection = () => {
  return (
    <Wrapper>
      {/* <img src='img' alt='' /> */}
      <Headings>
        <Heading>Frontend Mentor</Heading>
        <SubHeading>Feedback Board</SubHeading>
      </Headings>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 24px;
  background-image: url(${img});
`;

const Headings = styled.div``;

const Heading = styled.h1`
  color: hsl(0, 0%, 100%);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.25px;
`;

const SubHeading = styled.h2`
  color: hsl(0, 0%, 100%);
  font-size: 15px;
  font-weight: 500;
`;
export default TitleSection;
