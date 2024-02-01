import React from 'react';
import Typography from '../Elements/Typography';
import Image from '../Elements/Image';
import Button from '../Elements/Button';
import CardHeader from '../Elements/CardHeader';
import RowContainer from '../Elements/RowContainer';
import Label from '../Elements/Label';
import Container from '../Elements/Container';
import Select from '../Elements/Select';
import ColumnContainer from '../Elements/ColumnContainer';
import CardBody from '../Elements/CardBody';
import Card from '../Elements/Card';
export default function PricingPlan1() {
  return (
    <Card className=" bg-base-100  max-w-[400px]  w-[100%]  flex  flex-col  text-neutral">
      <CardHeader className=" flex  items-center  w-[100%]  justify-between  p-[15px]">
        <Typography
          className=" font-[600]  leading-[normal]"
          variant="h3">
          Refill prepaid account
        </Typography>
        <Button variant="button-with-typo" className=" bg-[None]">
          <Image
            src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyOXB0IiB2aWV3Qm94PSIwIDAgMzI5LjI2OTMzIDMyOSIgd2lkdGg9IjMyOXB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xOTQuODAwNzgxIDE2NC43Njk1MzEgMTI4LjIxMDkzOC0xMjguMjE0ODQzYzguMzQzNzUtOC4zMzk4NDQgOC4zNDM3NS0yMS44MjQyMTkgMC0zMC4xNjQwNjMtOC4zMzk4NDQtOC4zMzk4NDQtMjEuODI0MjE5LTguMzM5ODQ0LTMwLjE2NDA2MyAwbC0xMjguMjE0ODQ0IDEyOC4yMTQ4NDQtMTI4LjIxMDkzNy0xMjguMjE0ODQ0Yy04LjM0Mzc1LTguMzM5ODQ0LTIxLjgyNDIxOS04LjMzOTg0NC0zMC4xNjQwNjMgMC04LjM0Mzc1IDguMzM5ODQ0LTguMzQzNzUgMjEuODI0MjE5IDAgMzAuMTY0MDYzbDEyOC4yMTA5MzggMTI4LjIxNDg0My0xMjguMjEwOTM4IDEyOC4yMTQ4NDRjLTguMzQzNzUgOC4zMzk4NDQtOC4zNDM3NSAyMS44MjQyMTkgMCAzMC4xNjQwNjMgNC4xNTYyNSA0LjE2MDE1NiA5LjYyMTA5NCA2LjI1IDE1LjA4MjAzMiA2LjI1IDUuNDYwOTM3IDAgMTAuOTIxODc1LTIuMDg5ODQ0IDE1LjA4MjAzMS02LjI1bDEyOC4yMTA5MzctMTI4LjIxNDg0NCAxMjguMjE0ODQ0IDEyOC4yMTQ4NDRjNC4xNjAxNTYgNC4xNjAxNTYgOS42MjEwOTQgNi4yNSAxNS4wODIwMzIgNi4yNSA1LjQ2MDkzNyAwIDEwLjkyMTg3NC0yLjA4OTg0NCAxNS4wODIwMzEtNi4yNSA4LjM0Mzc1LTguMzM5ODQ0IDguMzQzNzUtMjEuODI0MjE5IDAtMzAuMTY0MDYzem0wIDAiLz48L3N2Zz4="
            className=" w-[18px]  h-[18px]"
            size="25px"
            radius="4px"></Image>
        </Button>
      </CardHeader>
      <CardBody className=" p-[2.1rem]  flex  flex-col  gap-y-[28px]">
        <RowContainer className=" items-center  justify-between" gap="0px">
          <Typography
            className=" font-[600]  w-[fit-content]"
             variant="subtitle">
            Balance
          </Typography>
          <Typography
            className=" whitespace-no-wrap  w-[fit-content]"
             variant="subtitle">
            $0.50
          </Typography>
        </RowContainer>
        <ColumnContainer className=" items-start gap-[0.3rem]" gap="100px">
          <RowContainer className=" items-center  gap-x-[5px]" gap="3px">
            <Label className=" font-[600]" name="label" htmlFor="country">
              Country
            </Label>
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxjaXJjbGUgcj0iMTIiIGN4PSIxMiIgY3k9IjEyIiBmaWxsPSIjMzYzNjM2IiBzaGFwZT0iY2lyY2xlIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjczLDAsMCwwLjczLDMuMjQsMy4yNCkiPjwvY2lyY2xlPjxnIHRyYW5zZm9ybT0ibWF0cml4KC0wLjcsNC4yODYyNjM3OTcwMTU3MzVlLTE2LC00LjI4NjI2Mzc5NzAxNTczNWUtMTYsLTAuNywyMC40MDAwMDAwMDAwMDAwMDIsMjAuNCkiPjxwYXRoIGQ9Ik0xMiAwQzUuMzczIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDB6bTAgMTkuNjZjLS45MzggMC0xLjU4LS43MjMtMS41OC0xLjY2IDAtLjk2NC42NjktMS42NiAxLjU4LTEuNjYuOTYzIDAgMS41OC42OTYgMS41OCAxLjY2IDAgLjkzOC0uNjE3IDEuNjYtMS41OCAxLjY2em0uNjIyLTYuMzM5Yy0uMjM5LjgxNS0uOTkyLjgyOS0xLjI0MyAwLS4yODktLjk1Ni0xLjMxNi00LjU4NS0xLjMxNi02Ljk0MiAwLTMuMTEgMy44OTEtMy4xMjUgMy44OTEgMC0uMDAxIDIuMzcxLTEuMDgzIDYuMDk0LTEuMzMyIDYuOTQyeiIgc3R5bGU9IiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAzMDEwNCIgb3BhY2l0eT0iMSIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
              size="15px"
              radius="0"
              className="w-[15px]"
              ></Image>
          </RowContainer>
          <Select className=" w-[100%] ">
            <option value={"usa"}>USA</option>
            <option valu={"india"}>India</option>
            <option valu={"uk"}>UK</option>
            <option valu={"australia"}>Australia</option>
          </Select>
        </ColumnContainer>
        <ColumnContainer className=" items-start gap-[0.3rem]" gap="0.2rem">
          <Label
            className=" font-[600]  w-[fit-content]"
            name="label"
            htmlFor="refil_amount">
            Refill amount
          </Label>
          <Select className=" w-[100%] ">
            <option value={5.86}>$ 5.86</option>
            <option value={15.86}>$ 15.86</option>
            <option value={5.76}>$ 5.76</option>
            <option value={5.14}>$ 5.14</option>
          </Select>
        </ColumnContainer>
        <ColumnContainer className=" items-start gap-[0.3rem]" span="12.0" gap="0.3rem">
          <Label
            className=" text-[15px]  font-[600]  w-[fit-content]"
            name="label"
            htmlFor="label">
            Payment method
          </Label>
          <Button
           
            className=" text-neutral  w-[100%]  bg-base-100 border border-rgb(147, 149, 150)">
            Add Payment Method
          </Button>
        </ColumnContainer>
        <Button
          variant="button"
          className=" bg-neutral  w-[100%]  font-[600]  leading-[normal]">
          Refill
        </Button>
      </CardBody>
    </Card>
  );
}
