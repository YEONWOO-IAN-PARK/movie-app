import { useState, useEffect } from "react";

function byFn() {
  console.log("bye :(");
}
function hiFn() {
  console.log("hi :)");
  return byFn;
}

function Hello() {
  useEffect(hiFn, [])
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
export default App;

/*
  useEffect(fn1, arr[])

  리액트에서 useState가 변경될 때마다 해당 컴포넌트를 re-render하게되는데,
  만약 컴포넌트에 API를 호출하는 함수가 있을 경우 re-render될 때 마다
  해당 API call 함수를 매번 호출하게 될 수 있다.
  이러한 경우를 원하지 않을 경우 useEffect를 사용하여 첫번째 인자로 들어가는
  콜백함수의 실행부에 API call 함수를 넣고 사용할 경우 re-render되더라도
  처음 render 한 번만 실행되고 이후에는 실행되지 않는다.

  추가로 두 번째 인자에 해당하는 배열 arr[]은 배열에 들어간 인자의 상태에 
  변화가 있을 때, re-render 시 해당 실행부를 실행시키는 역할이다.
  

*/