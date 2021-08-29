import React from 'react';
import zero from './hangmanPics/0.png';
import one from './hangmanPics/1.png';
import two from './hangmanPics/2.png';
import three from './hangmanPics/3.png';
import four from './hangmanPics/4.png';
import five from './hangmanPics/5.png';
import six from './hangmanPics/6.png';
import seven from './hangmanPics/7.png';
import eight from './hangmanPics/8.png';
import nine from './hangmanPics/9.png';
import ten from './hangmanPics/10.png';
import { Redirect } from 'react-router-dom';

const hangmanPic = ({ hangmanCounter }) => {
  const pictureArray = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
  ];
  if (hangmanCounter === 10) {
    return <Redirect to="/lose" />;
  }
  return (
    <div id="picture">
      <p>
        <img src={pictureArray[hangmanCounter]} alt="hangman" />
      </p>
    </div>
  );
};

export default hangmanPic;
