import React from "react";
import { sum } from "@dylanvann/utils";

export interface SumProps {
  a: number;
  b: number;
}

export function Sum(props: SumProps) {
  return <span>{sum(props.a, props.b)}</span>;
}
