import React from 'react';
import { CardContainer } from './styles';
import { CardProps } from './types';

const Card = ({ text = ''}: CardProps) => {
  return (
    <CardContainer>{text}</CardContainer>
  )
}

export default Card;