import React from 'react';
import Ph from './ph';
import Trubidity from './turbidity';
import WaterLevel from './waterLevel';

export default {
  title: 'dashboard',
};

export const ph = () => <Ph/>;

export const trubidity = () => <Trubidity/>;
export const waterLevel = () => <WaterLevel/>;
