import * as React from 'react'
import { sum } from "com_dylanvann_bazel_test/utils";

export interface SumProps {
  a: number;
  b: number;
}

export function Sum(props: SumProps) {
  return <span>{props.a + props.b}</span>;
}
