import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const WrapButton = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  font-size: 1.5rem;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #333333;
  border-radius: 0.5rem;
  color: black;
  cursor: pointer;
`;

class LoadMore extends Component {
  componentDidMount() {
    this.getImages();
  }
  getImages = () => {
    this.props.imageLoad();
    axios
      .get('https://api.unsplash.com/photos/random', {
        params: {
          client_id: '7df2960a6433aa5f9c3db9c2d1dae8b6910ba017025f5d80dde0b7c6bc83fe56',
          count: 30
        }
      })
      .then(res => {
        this.props.imageLoadSuccess(res.data.map(image => image.urls.small));
      })
      .catch(err => {
        this.props.imageLoadFailure();
      });
  };

  render() {
    return (
      <WrapButton>
        <Button onClick={this.getImages}>더 많은 사진 불러오기</Button>
      </WrapButton>
    );
  }
}

export default LoadMore;
