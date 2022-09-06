import React, {Fragment, ReactNode} from "react";
import classNames from 'classnames/bind';
import { ORIENTATIONS } from "../../values/constants";
// @ts-ignore
import styles from "./Card.module.scss";

type Orientation = typeof ORIENTATIONS[keyof typeof ORIENTATIONS];
const defaultProps = Object.freeze({isCoverMediaVideo: false, orientation: ORIENTATIONS.Row, width: 0, height: 0});
type CardProps = {coverMediaUrl?: string, coverMediaAlt?: string, isCoverMediaVideo?: boolean, orientation: Orientation,
	width?: number, height?: number, children?: ReactNode} & typeof defaultProps;

let cx = classNames.bind(styles);

const Card = (props: CardProps) : (JSX.Element | null) => {
	const {coverMediaUrl, coverMediaAlt, isCoverMediaVideo, orientation, width, height, children} = props;

	return(
		<div
			className={cx('Card',
				{
					row: orientation == ORIENTATIONS.Row,
					// @ts-ignore
					rowReverse: orientation == ORIENTATIONS.RowReverse,
					// @ts-ignore
					column: orientation == ORIENTATIONS.Column,
					// @ts-ignore
					columnReverse: orientation == ORIENTATIONS.ColumnReverse
				})}
			style={{width: (width == 0 ? 'auto' : width), height: (height == 0 ? 'auto': height)}}
		>
			{
				// @ts-ignore
				(orientation == ORIENTATIONS.Column ?
					(<Fragment>
						<div className={`${styles.cardInfo} ${coverMediaUrl ? null : styles.noMedia}`}>
							{children}
						</div>
						{coverMediaUrl ? renderCover(isCoverMediaVideo, coverMediaUrl, coverMediaAlt) : null}
					</Fragment>) :
					(<Fragment>
						{coverMediaUrl ? renderCover(isCoverMediaVideo, coverMediaUrl, coverMediaAlt) : null}
						<div className={`${styles.cardInfo} ${coverMediaUrl ? null : styles.noMedia}`}>
							{children}
						</div>
					</Fragment>))
			}
		</div>
	);
};

Card.defaultProps = defaultProps;
export default Card;

const renderCover = (isCoverVideo: boolean, cover?: string, coverAlt?: string) => {
	if (isCoverVideo) {
		return (
			<video className={cx('cardCover')} autoPlay muted loop>
				<source src={cover} type="video/mp4"/>
				Your browser does not support the video tag.
			</video>
		);
	} else {
		return <img className={cx('cardCover')} src={cover} alt={coverAlt}/>
	}
};