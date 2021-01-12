import React from 'react';
import { Img } from './styles';

import Photosnap from '../../images/photosnap.svg';
import Manage from '../../images/manage.svg';
import Account from '../../images/account.svg';
import MyHome from '../../images/myhome.svg';
import LoopStudios from '../../images/loop-studios.svg';
import FaceIt from '../../images/faceit.svg';
import Shortly from '../../images/shortly.svg';
import Insure from '../../images/insure.svg';
import EyeCam from '../../images/eyecam-co.svg';
import TheAir from '../../images/the-air-filter-company.svg';

const imageType = (company: string) => {
  switch (company) {
    case 'Photosnap':
      return Photosnap;
    case 'Manage':
      return Manage;
    case 'Account':
      return Account;
    case 'MyHome':
      return MyHome;
    case 'Loop Studios':
      return LoopStudios;
    case 'FaceIt':
      return FaceIt;
    case 'Shortly':
      return Shortly;
    case 'Insure':
      return Insure;
    case 'Eyecam Co.':
      return EyeCam;
    case 'The Air Filter Company':
      return TheAir;
    default:
      throw new Error();
  }
};

type Props = {
  company: string;
};

const ImageHelper = ({ company }: Props) => {
  const image = imageType(company);
  return <Img src={image} alt={company} />;
};

export default ImageHelper;
