import React, {ReactNode} from "react";
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
	children?: ReactNode;
	coverMediaUrl?: string;
	coverMediaAlt?: string;
	isCoverMediaVideo?: boolean;
	orientation?: Orientation;
	width?: number;
	height?: number;
}

const Card = ({children, coverMediaUrl, coverMediaAlt, isCoverMediaVideo = false, orientation = Orientation.ROW, width, height}: CardProps) : (JSX.Element | null) => {
	if (orientation == Orientation.ROW || orientation == Orientation.ROW_REVERSE) {
		return(
			<div
				className={`${styles.Card} ${orientation == Orientation.ROW ? styles.row : styles.rowReverse}`}
				style={{width: width, height: height}}
			>
				{coverMediaUrl ? renderCover(coverMediaUrl, coverMediaAlt, isCoverMediaVideo) : null}
				<div className={`${styles.cardInfo} ${coverMediaUrl ? null : styles.noMedia}`}>
					{children}
				</div>
			</div>
		);
	} else if (orientation == Orientation.COLUMN) {
		return(
			<div
				className={`${styles.Card} ${styles.column}`}
				style={{width: width, height: height}}
			>
				<div className={`${styles.cardInfo} ${coverMediaUrl ? null : styles.noMedia}`}>
					{children}
				</div>
				{coverMediaUrl ? renderCover(coverMediaUrl, coverMediaAlt, isCoverMediaVideo) : null}
			</div>
		);
	} else if (orientation == Orientation.COLUMN_REVERSE) {
		return(
			<div
				className={`${styles.Card} ${styles.columnReverse}`}
				style={{width: width, height: height}}
			>
				{coverMediaUrl ? renderCover(coverMediaUrl, coverMediaAlt, isCoverMediaVideo) : null}
				<div className={`${styles.cardInfo} ${coverMediaUrl ? null : styles.noMedia}`}>
					{children}
				</div>
			</div>
		);
	}
	return null;
};

const renderCover = (cover, coverAlt, isCoverVideo) => {
	if (isCoverVideo) {
		return (
			<video className={styles.cardCover} autoPlay muted loop>
				<source src={cover} type="video/mp4"/>
				Your browser does not support the video tag.
			</video>
		);
	} else {
		return <img className={styles.cardCover} src={cover} alt={coverAlt}/>
	}
}

export default Card;