import React from "react";
//@ts-ignore
import styles from "./Tag.module.scss";

export enum TagType {
    DEFAULT = "DEFAULT",
    COMPACT = "COMPACT"
}

export interface TagProps {
    label: string;
    type?: TagType;
}

const Tag = ({label, type = TagType.DEFAULT}: TagProps) => {

    return (
        <div className={`${styles.Tag} ${type == TagType.DEFAULT ? styles.default : styles.compact}`}>
            <span>{label}</span>
        </div>
    );
}

export default Tag;
