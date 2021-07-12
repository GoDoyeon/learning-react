import Counter from './Counter';
import MyComponent from './MyComponent';
import Say from './Say';

function App() {
  return (
    <>
      <h1>리액트를 다루는 기술 3장</h1>
      <hr />
      <h2>컴포넌트 생성</h2>
      <MyComponent name='React' favoriteNumber={1}>
        리액트
      </MyComponent>
      <hr />
      <h2>클래스형 컴포넌트의 state</h2>
      <Counter />
      <hr />
      <h2>함수형 컴포넌트에서 useState 사용하기</h2>
      <Say />
    </>
  );
}

export default App;
