import Counter from './Counter';
import Average from './Average';
import Info from './Info';
import CounterRd from './CounterRd';
import InfoRd from './InfoRd';
import useInputs from './useInputs';

const App = () => {
  return (
    <>
      <h1>리액트를 다루는 기술 8장. Hooks</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <br />
      <hr />
      <h2>useState 여러번 사용하기, useEffct</h2>
      <Info />
      <br />
      <hr />
      <h2>useReducer</h2>
      <CounterRd />
      <br />
      <hr />
      <h2>useReducer 인풋 상태 관리하기</h2>
      <InfoRd />
      <br />
      <hr />
      <h2>useMemo, useCallback, useRef</h2>
      <Average />
      <br />
      <hr />
      <h2>커스텀 Hooks 만들기</h2>
      <useInputs />
      <br />
    </>
  );
};

export default App;
