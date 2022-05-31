import React from "react";
import styles from "./Card.module.scss";
//import Stack from "../Stack/Stack";

export interface CardProps {
	title: string;
	description: string;
	cover: string;
	link: string;
}

const Card = (props: CardProps) => {
	return(
		<h1>{props.title}</h1>
	);
};

export default Card;