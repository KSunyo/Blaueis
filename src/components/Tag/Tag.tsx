import React from "react";
import classNames from 'classnames/bind';
import { KINDS, TYPES } from "../../values/constants";
//@ts-ignore
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
                    //@ts-ignore
                    compact: type == TYPES.Compact
                },
                {
                    primary: kind == KINDS.Primary,
                    //@ts-ignore
                    secondary: kind == KINDS.Secondary
                })}
        >
            <span>{label}</span>
        </div>
    );
}

Tag.defaultProps = defaultProps;
export default Tag;
