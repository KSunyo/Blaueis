import React from "react";
import Button, {Kind} from "../Button/Button";
import {IconType} from "../Icon/Icon";
// @ts-ignore
import styles from "./Card.module.scss";

export enum	Orientation {
	ROW = "row",
	ROW_REVERSE = "row-reverse",
	COLUMN = "column",
	COLUMN_REVERSE = "column-reverse"
}

export interface CardProps {
	title: string;
	description: string;
	cover: string;
	coverAlt: string;
	link: string;
	orientation?: Orientation;
	width?: number;
	height?: number;
}

const Card = ({title, description, cover, coverAlt, link,
				  orientation = Orientation.ROW, width, height}: CardProps) : (JSX.Element | null) => {
	if (orientation == Orientation.ROW || orientation == Orientation.ROW_REVERSE) {
		return(
			<div
				className={`${styles.Card} ${orientation == Orientation.ROW ? styles.row : styles.rowReverse}`}
				style={{width: width, height: height}}
			>
				<img className={styles.cardCover} src={cover} alt={coverAlt}/>
				<div className={styles.cardInfo}>
					<h1 className={styles.title}>{title}</h1>
					<p className={styles.description}>{description}</p>
					<Button kind={Kind.PRIMARY} label="Read more" endIcon={IconType.RIGHT_ARROW}/>
				</div>
			</div>
		);
	} else if (orientation == Orientation.COLUMN) {
		return(
			<div
				className={`${styles.Card} ${styles.column}`}
				style={{width: width, height: height}}
			>
				<div className={styles.cardInfo}>
					<h1 className={styles.title}>{title}</h1>
					<p className={styles.description}>{description}</p>
					<Button kind={Kind.PRIMARY} label="Read more" endIcon={IconType.RIGHT_ARROW}/>
				</div>
				<img className={styles.cardCover} src={cover} alt={coverAlt}/>
			</div>
		);
	} else if (orientation == Orientation.COLUMN_REVERSE) {
		return(
			<div
				className={`${styles.Card} ${styles.columnReverse}`}
				style={{width: width, height: height}}
			>
				<img className={styles.cardCover} src={cover} alt={coverAlt}/>
				<div className={styles.cardInfo}>
					<h1 className={styles.title}>{title}</h1>
					<p className={styles.description}>{description}</p>
					<Button kind={Kind.PRIMARY} label="Read more" endIcon={IconType.RIGHT_ARROW}/>
				</div>
			</div>
		);
	}
	return null;
};

export default Card;