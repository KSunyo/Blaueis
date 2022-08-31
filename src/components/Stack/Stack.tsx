import React from "react";
import classNames from 'classnames/bind';
import { ORIENTATIONS } from "../../values/constants";
// @ts-ignore
import styles from "./Stack.module.scss";

type Orientation = typeof ORIENTATIONS[ keyof typeof ORIENTATIONS ]
const defaultProps = Object.freeze({ orientation: ORIENTATIONS.Row, spacing: 0});
type StackProps = { orientation: Orientation, spacing: number, children?: React.ReactNode[] } & typeof defaultProps;

let cx = classNames.bind(styles);

const Stack = (props: StackProps) => {
	const { orientation, spacing, children } = props;

	return (
		<div
			style={{gap: spacing}}
			className={cx('Stack', {
				row: orientation == ORIENTATIONS.Row,
				// @ts-ignore
				rowReverse: orientation == ORIENTATIONS.RowReverse,
				// @ts-ignore
				column: orientation == ORIENTATIONS.Column,
				// @ts-ignore
				columnReverse: orientation == ORIENTATIONS.ColumnReverse
			})}
		>
			{children}
		</div>
	);
};

Stack.defaultProps = defaultProps;
export default Stack;
