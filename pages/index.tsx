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
      <Card css={{ maxWidth: '$800', textAlign: 'center' }}>
        <p>
          I portray myself as a web developer, passionate about building slick user interfaces. I
          tend to get involed with different areas of software development though, providing full
          end-to-end solutions. I enjoy interacting with other human beings passionate about coding
          and dynamic businesses.
        </p>
        <p>I like to make magic happen with code 🧙‍♂️</p>
      </Card>
    </Container>
  );
};

export default Home;
