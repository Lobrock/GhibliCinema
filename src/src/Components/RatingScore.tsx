import { Badge } from '@chakra-ui/react'
import React from 'react'

interface Props {
    score: string;
}

const RatingScore = ({score}: Props) => {
    let color = + score > 80 ? 'green' : + score > 65 ? 'orange' : ' ';
  return (
    <Badge colorScheme={color} fontSize='20px' paddingX={2} borderRadius='4px'>{score}</Badge>
  )
}

export default RatingScore;
