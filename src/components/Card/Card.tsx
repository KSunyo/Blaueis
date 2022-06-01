import React from "react";

const styles = require("./Card.module.scss");

export interface CardProps {
	title: string;
	description: string;
	cover: string;
	coverAlt: string;
	link: string;
}

const Card = (props: CardProps) => {
	return(
		<div className={styles.Card}>
			<img className={styles.cardCover} src={props.cover} alt={props.coverAlt}/>
			<div className={styles.cardInfo}>
				<h1>{props.title}</h1>
			</div>
		</div>
	);
};

export default Card;