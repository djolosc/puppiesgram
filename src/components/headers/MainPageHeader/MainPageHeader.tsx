import React, { FC } from 'react';

import plusImg from '../../../assets/images/plus.png';

interface MainPageHeaderProps {
  onButtonClick: () => void;
}

const MainPageHeader: FC<MainPageHeaderProps> = ({ onButtonClick }) => {
  return (
    <div className="mainPageHeader__wrapper">
      <p className="header__text">Puppiesgram</p>
      <img
        src={plusImg}
        alt="plus_button"
        className="plus_img"
        onClick={onButtonClick}
      />
    </div>
  );
};

export default MainPageHeader;
