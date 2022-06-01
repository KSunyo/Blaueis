import React from "react";

const styles = require("./Stack.module.scss");

export enum	Orientation {
	ROW = "row",
	ROW_REVERSE = "row-reverse",
	COLUMN = "column",
	COLUMN_REVERSE = "column-reverse"
}

export interface StackProps {
	orientation: Orientation;
	spacing: number;
	children?: React.ReactNode[];
}

const Stack = (props: StackProps) => {
	return (
		<div className={`${styles.Stack} ${orientationToStyle(props.orientation)}`} style={{gap: props.spacing}}>
			{props.children}
		</div>
	);
};

const orientationToStyle = (orientation : Orientation) => {
	if (orientation == Orientation.ROW) {
		return styles.row;
	} else if (orientation == Orientation.ROW_REVERSE) {
		return styles.rowReverse;
	} else if (orientation == Orientation.COLUMN) {
		return styles.column;
	} else if (orientation == Orientation.COLUMN_REVERSE) {
		return styles.columnReverse;
	}
	return null;
}

export default Stack;