import React from "react";
import classNames from 'classnames/bind';
// @ts-ignore
import styles from "./Stack.module.scss";

type Orientation = typeof ORIENTATIONS[ keyof typeof ORIENTATIONS ]
type StackProps = { orientation: Orientation, spacing: number, children?: React.ReactNode[] } & typeof defaultProps;

export const ORIENTATIONS = {Row: 1, RowReverse: 2, Column: 3, ColumnReverse: 4} as const;
const defaultProps = Object.freeze({ orientation: ORIENTATIONS.Row, spacing: 0});

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
