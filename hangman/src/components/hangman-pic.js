import React from 'react';
import zero from './hangmanPics/0.jpg';
import one from './hangmanPics/1.jpg';
import two from './hangmanPics/2.jpg';
import three from './hangmanPics/3.jpg';
import four from './hangmanPics/4.jpg';
import five from './hangmanPics/5.jpg';
import six from './hangmanPics/6.jpg';
import seven from './hangmanPics/7.jpg';
import eight from './hangmanPics/8.jpg';
import nine from './hangmanPics/9.jpg';

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
  ];

  return (
    <div id="picture">
      <p>
        <img src={pictureArray[hangmanCounter]} />
      </p>
    </div>
  );
};

export default hangmanPic;
