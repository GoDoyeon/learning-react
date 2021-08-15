import React, { Component } from 'react';

// 클래스형 컴포넌트
export default class EventPracticeClass extends Component {
  state = {
    message: '',
    username: '',
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    alert(this.state.username + ':' + this.state.message);
    this.setState({
      message: '',
    });
  };
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습 - 클래스형 컴포넌트 사용</h1>
        <input
          type='text'
          name='username'
          placeholder='사용자명'
          onChange={this.handleChange}
          value={this.state.username}
        />
        <input
          type='text'
          name='message'
          placeholder='아무거나 입력해 보세요.'
          onChange={this.handleChange}
          value={this.state.message}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
