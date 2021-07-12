import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
  hodu: {
    name: '호두',
    description: '귀여운 말썽꾸러기 강아지',
  },
  bbang: {
    name: '찐빵',
    description: '사랑스러운 호두 엄마',
  },
};
const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
