import type { NextPage } from 'next';
import { styled } from '../stitches.config';
import { Card } from '../components/Card';
import { CodingIllustration } from '../components/illustrations';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 24,
});

const Home: NextPage = () => {
  return (
    <Container>
      <h1>Hi, I am Dan 👋</h1>
      <CodingIllustration />
      <Card css={{ maxWidth: 480, textAlign: 'center' }}>
        <h2>Human being. Coder. Amateur Wizard 🧙‍♂️</h2>
        <br />
        <p>
          I portray myself as a web developer, passionate about building slick user interfaces. I
          tend to overstep my duties sometimes, so not your typical consultant. I enjoy interacting
          with other human beings passionate about fresh and dynamic businesses.
        </p>
      </Card>
    </Container>
  );
};

export default Home;
