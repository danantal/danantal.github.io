import React from 'react';
import { styled } from '../stitches.config';
import { Link } from '../components/Link';
import {
  EmailIllustration,
  GithubIllustration,
  TwitterIllustration,
} from '../components/illustrations';

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
      <Link
        href="https://github.com/danantal"
        css={{ flexGrow: 1, minWidth: '$200', maxWidth: '$400' }}
      >
        <GithubIllustration />
      </Link>
      <Link
        href="https://twitter.com/DanAntalRO"
        css={{ flexGrow: 1, minWidth: '$200', maxWidth: '$400' }}
      >
        <TwitterIllustration />
      </Link>
      <Link
        href="mailto:hello@danantal.me"
        css={{ flexGrow: 1, minWidth: '$200', maxWidth: '$400' }}
      >
        <EmailIllustration />
      </Link>
    </Container>
  );
};

export default Contact;
