import React from "react";
//@ts-ignore
import styles from "./Tag.module.scss";

export enum TagType {
    DEFAULT = "DEFAULT",
    COMPACT = "COMPACT"
}

export enum TagKind {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY"
}

export interface TagProps {
    label: string;
    type?: TagType;
    kind?: TagKind;
}

const Tag = ({label, type = TagType.DEFAULT, kind = TagKind.PRIMARY}: TagProps) => {

    return (
        <div
            className={`${styles.Tag} ${type == TagType.DEFAULT ? styles.default : styles.compact} ${kindToStyle(kind)}`}
        >
            <span>{label}</span>
        </div>
    );
}

const kindToStyle = (kind: TagKind | undefined) => {
    if (kind == TagKind.PRIMARY) {
        return styles.primary;
    } else if (kind == TagKind.SECONDARY) {
        return styles.secondary;
    }
    return "";
}

export default Tag;
