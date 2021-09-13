import React from 'react';
import Image from 'next/image';
import { styled } from '../stitches.config';
import GithubIcon from '../public/github.svg';
import TwitterIcon from '../public/twitter.svg';
import EmailIcon from '../public/email.svg';
import { Link } from '../components/Link';

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 999,
  gap: 48,
});

const Contact = () => {
  return (
    <Container>
      <Link href="https://github.com/danantal">
        <Image src={GithubIcon} width={128} height={128} alt="Github" />
      </Link>
      <Link href="https://twitter.com/DanAntalRO">
        <Image src={TwitterIcon} width={128} height={128} alt="Twitter" />
      </Link>
      <Link href="mailto:hello@danantal.me">
        <Image src={EmailIcon} width={128} height={128} alt="Email" />
      </Link>
    </Container>
  );
};

export default Contact;
