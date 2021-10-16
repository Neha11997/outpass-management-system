import Counter from './app/components/Counter/counter';
import './app/scss/main.scss';

const App = () => {
  const name = 'neha';
  return (
    <Counter name={name} age={10}/>
  );
  
}

export default App
