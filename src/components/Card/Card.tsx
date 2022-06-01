import React from "react";
// @ts-ignore
import styles from "./Card.module.scss";

export interface CardProps {
	title: string;
	description: string;
	cover: string;
	link: string;
}

const Card = (props: CardProps) => {
	return(
		<div className={styles.Card}>
			<img className={styles.cardCover} src={props.cover}/>
			<div className={styles.cardInfo}>
				<h1>{props.title}</h1>
			</div>
		</div>
	);
};

export default Card;