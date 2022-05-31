import React, {useState} from "react";
import styles from "./IconButton.module.scss";
import Icon, {IconType, IconKind} from "../Icon/Icon";

export enum AnimationState {
  DEFAULT = "DEFAULT",
  FORWARD = "FORWARD",
  BACKWARD = "BACKWARD"
}

export interface IconButtonProps {
	icon:IconType
}

const IconButton = ({icon}) => {

	const [animationState, setAnimationState] = useState(AnimationState.DEFAULT);

	if (animationState == AnimationState.DEFAULT) {
			return (
				<button 
					className={styles.iconButton}
					onMouseEnter={() => setAnimationState(AnimationState.FORWARD)}
					onMouseLeave={() => setAnimationState(AnimationState.BACKWARD)}
				>
					<span>
						<Icon type={icon} kind={IconKind.DARK} />
					</span>
				</button>
			);
		} else if (animationState == AnimationState.FORWARD) {
			return (
				<button 
					className={styles.iconButton}
					onMouseEnter={() => setAnimationState(AnimationState.FORWARD)}
					onMouseLeave={() => setAnimationState(AnimationState.BACKWARD)}
				>
					<span className={styles.forwardAnimation}>
						<Icon type={icon} kind={IconKind.LIGHT} />
					</span>
				</button>
			);
		} else if (animationState == AnimationState.BACKWARD) {
			return (
				<button 
					className={styles.iconButton}
					onMouseEnter={() => setAnimationState(AnimationState.FORWARD)}
					onMouseLeave={() => setAnimationState(AnimationState.BACKWARD)}
				>
					<span className={styles.backwardAnimation}>
						<Icon type={icon} kind={IconKind.DARK} />
					</span>
				</button>
			);
		} else {
			return null;
		}

};

export default IconButton;