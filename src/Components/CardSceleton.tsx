import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const CardSceleton = () => {
  return (
    <Card width="390px" borderRadius={10} overflow="hidden">
      <Skeleton height="350px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default CardSceleton;
