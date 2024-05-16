import { NextPage } from 'next';
import ThemeToggle from '../components/ThemeToggle';
import ExampleComponent from '../components/ExampleComponent';

const Home: NextPage = () => {
  return (
    <div>
      <ThemeToggle />
      <ExampleComponent />
    </div>
  );
};

export default Home;
