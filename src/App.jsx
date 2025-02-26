import BlogCard from './components/BlogCard/BlogCard';
import Container from './components/Container/Container';
import CryptoHistory from './components/CryptoHistory/CryptoHistory';
import ForbesList from './components/ForbesList/ForbesList';
import Heading from './components/Heading/Heading';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import forbes from './data/forbes.json';
import { useState, useEffect } from 'react';

export const App = () => {
  const [clicks, setClicks] = useState(0);

  // ❌ Ефект записаний з помилкою!
  useEffect(() => {
    console.log('Clicks updated: ', clicks);
  }, [clicks]);
  return (
    <Section>
      <Container>
        <button onClick={() => setClicks(clicks + 1)}>
          You clicked {clicks} times
        </button>

        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard />
        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" />
        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList list={forbes} />
        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory />
      </Container>
    </Section>
  );
};
