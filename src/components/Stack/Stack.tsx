import React from "react";
import "./Stack.scss";

export enum	Orientation {
	ROW = "row",
	ROW_REVERSE = "row-reverse",
	COLUMN = "column",
	COLUMN_REVERSE = "column-reverse"
}

export interface StackProps {
	orientation: Orientation;
	spacing: number;
	children?: React.ReactNode;
}

const Stack = (props: StackProps) => {

	return (
		<div className={"stack " + orientation} style={gap: spacing}>
			{props.children.map(child => <div className="item">child</div>)}
		</div>
	);
};

export default Stack;