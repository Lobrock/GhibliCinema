import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const CardSceleton = () => {
  return (
    <Card width='400px' borderRadius={10} overflow="hidden" >
        <Skeleton height='350px' />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default CardSceleton
