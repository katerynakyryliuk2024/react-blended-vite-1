import BlogCard from './components/BlogCard/BlogCard';
import Container from './components/Container/Container';
import CryptoHistory from './components/CryptoHistory/CryptoHistory';
import ForbesList from './components/ForbesList/ForbesList';
import Heading from './components/Heading/Heading';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import forbes from './data/forbes.json';
import { useState } from 'react';

const CustomButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};

export const App = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    clicks = clicks + 1;
  };
  return (
    <Section>
      <Container>
        <>
          <CustomButton message="Playing music!">Play some music</CustomButton>
          <CustomButton message="Uploading your data!">
            Upload data
          </CustomButton>
        </>

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
