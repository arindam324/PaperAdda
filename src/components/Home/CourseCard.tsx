import React from "react";
import { Card, CardHeader, CardBody, Typography } from "../materialTailwind";

const CourseCard = ({ course }: any) => {
  return (
    <Card placeholder={""} className="w-64 m-4">
      <CardHeader placeholder={""} color="purple" className="text-white">
        <Typography placeholder={""} variant="h5">
          {course.title}
        </Typography>
      </CardHeader>
      <CardBody placeholder={""}>
        <Typography placeholder={""} variant="paragraph" color="gray">
          {course.description}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default CourseCard;
