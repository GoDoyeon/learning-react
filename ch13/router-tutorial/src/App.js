import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  return (
    <div>
      <h1>리액트를 다루는 기술 13장</h1>
      <hr />
      <h2>Link 컴포넌트 사용하여 경로 이동하기</h2>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
        <li>
          <Link to='/profile/hodu'>호두 프로필</Link>
        </li>
        <li>
          <Link to='/profile/bbang'>찐빵 프로필</Link>
        </li>
        <li>
          <Link to='/profiles'>프로필</Link>
        </li>
        <li>
          <Link to='/history'>history 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path={['/about', '/info']} component={About} />
        <Route path='/profile/:username' component={Profile} />
        <Route path='/profiles' component={Profiles} />
        <Route path='/history' component={HistorySample} />
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링 됨
          render={({ location }) => (
            <div>
              <h2>
                이 페이지는 존재하지 않습니다.
                <p>{location.pathname}</p>
              </h2>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};
export default App;
