import Calculator from './components/Calculator';
import NumberProvider from './components/NumberProvider';


const App = () => {
  return (
    <NumberProvider>
      <Calculator />
    </NumberProvider>
  );
};

export default App;
