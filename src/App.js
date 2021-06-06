import './App.css';
import Counter from './Counter'
import CounterHooks from './CounterHooks'

function App() {
  return (
    <>
      Class Component Counter
      <Counter initialCount={0} />

      Function Component Counter
      <CounterHooks initialCount={0} />
    </>
    ) 
}

export default App;
