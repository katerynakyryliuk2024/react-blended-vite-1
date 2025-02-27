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
  const [clicks, setClicks] = useState(() => {
    // Зчитуємо значення за ключем
    const savedClicks = window.localStorage.getItem('saved-clicks');

    // Якщо там щось є, повертаємо це
    // значення як початкове значення стану
    if (savedClicks !== null) {
      return savedClicks;
    }

    // У протилежному випадку повертаємо
    // яке-небудь значення за замовчуванням
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-clicks', clicks);
  }, [clicks]);

  return (
    <Section>
      <Container>
        <div>
          <button onClick={() => setClicks(clicks + 1)}>
            You clicked {clicks} times
          </button>
          <button onClick={() => setClicks(0)}>Reset</button>
        </div>
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
