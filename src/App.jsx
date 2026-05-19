import Rating from './components/Rating';

const App = () => {
  const name = 'Porter';
  return (<div>
    <h1>Hey There, {name}!</h1>
    <Rating />
  </div>
  );
};

export default App;