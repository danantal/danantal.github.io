import type { NextPage } from 'next';
import Image from 'next/image';
import { styled } from '../stitches.config';
import CoderIllustration from '../public/coding.svg';
import { Card } from '../components/Card';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& * + *': {
    marginTop: 24,
  },
});

const Home: NextPage = () => {
  return (
    <Container>
      <h1>Hi, I am Dan.</h1>
      <div>
        <Image src={CoderIllustration} alt="Coder" />
      </div>
      <Card css={{ maxWidth: 480, textAlign: 'center' }}>
        <h2>Human being. Coder. Consultant.</h2>
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
