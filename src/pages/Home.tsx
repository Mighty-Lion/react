import { css } from '@emotion/css';
import { Navbar } from '../components/Navbar';
import { Container } from '../components/Container/index.styles';

function Home() {
  return (
    <>
      <Container
        className={css`
          padding-top: 40px;
        `}
      >
        <h1>Hello world!</h1>
      </Container>
    </>
  );
}

export default Home;
