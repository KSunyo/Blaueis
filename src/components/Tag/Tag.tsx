import React from "react";
import classNames from 'classnames/bind';
import { KINDS, TYPES } from "../../values/constants";
import styles from "./Tag.module.scss";

export type TagType = typeof TYPES[ keyof typeof TYPES ];
type TagKind = typeof KINDS[ keyof typeof KINDS ];
const defaultProps = Object.freeze({ type: TYPES.Default, kind: KINDS.Primary });
type TagProps = { label: string, type?: TagType, kind?: TagKind } & typeof defaultProps;

let cx = classNames.bind(styles);

const Tag = (props: TagProps) => {
    const { label, type, kind } = props;

    return (
        <div
            className={cx('Tag',
                {
                    default: type == TYPES.Default,
                    compact: type == TYPES.Compact,
                    mini: type == TYPES.Mini
                },
                {
                    primary: kind == KINDS.Primary,
                    secondary: kind == KINDS.Secondary
                })}
        >
            <span>{label}</span>
        </div>
    );
}

Tag.defaultProps = defaultProps;
export default Tag;
