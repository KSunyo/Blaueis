import React, { Fragment } from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { ORIENTATIONS } from "../../values/constants";
import Card from "./Card";

describe("Card without cover",  () => {
    test("renders a Card without children", () => {
        render(
            <Card orientation={ORIENTATIONS.Column}/>
        );
    });
    test("renders a Card with children", () => {
        render(
            <Card orientation={ORIENTATIONS.Row}>
                <div style={{display: "flex", flexDirection: "column", gap: "15px", alignItems: "center"}}>
                    <h1 style={{
                        fontSize: "22px",
                        lineHeight: "130%",
                        margin: 0,
                        color: "#2B3233"
                    }}>Interested in working together?</h1>
                </div>
            </Card>
        );
    });
});

describe("Card with image cover",  () => {
    test("renders a Card without children", () => {
        render(
            <Card
                orientation={ORIENTATIONS.RowReverse}
                coverMediaUrl={"https://firebasestorage.googleapis.com/v0/b/freelance-mail.appspot.com/o/casestudycover.png?alt=media&token=051881ca-db3a-42fe-97cd-a813a9754a8c"}
                coverMediaAlt={"An Imac computer displaying a webshop."}
            />
        );
    });
    test("renders a Card with children", () => {
        render(
            <Card
                orientation={ORIENTATIONS.ColumnReverse}
                coverMediaUrl={"https://firebasestorage.googleapis.com/v0/b/freelance-mail.appspot.com/o/casestudycover.png?alt=media&token=051881ca-db3a-42fe-97cd-a813a9754a8c"}
                coverMediaAlt={"An Imac computer displaying a webshop."}
            >
                <Fragment>
                    <h1 style={{
                        fontSize: "22px",
                        lineHeight: "130%",
                        margin: 0,
                        color: "#2B3233"
                    }}>FireHome: a universal multimedia device that meets the post-covid expectations</h1>
                    <p style={{
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "150%",
                        margin: 0
                    }}>During the 21st century, digital devices advanced quicker than ever before. However, in spite of the market being consolidated, expectations have gotten higher than ever.</p>
                </Fragment>
            </Card>
        );
    });
});

describe("Card with video cover",  () => {
    test("renders a Card without children", () => {
        render(
            <Card
                orientation={ORIENTATIONS.RowReverse}
                coverMediaUrl={"https://www.w3schools.com/html/movie.mp4"}
                coverMediaAlt={"A bear in a shallow river."}
                isCoverMediaVideo={true}
            />
        );
    });
    test("renders a Card with children", () => {
        render(
            <Card
                orientation={ORIENTATIONS.ColumnReverse}
                coverMediaUrl={"https://www.w3schools.com/html/movie.mp4"}
                coverMediaAlt={"A bear in a shallow river."}
                isCoverMediaVideo={true}
            >
                <Fragment>
                    <h1 style={{
                        fontSize: "22px",
                        lineHeight: "130%",
                        margin: 0,
                        color: "#2B3233"
                    }}>FireHome: a universal multimedia device that meets the post-covid expectations</h1>
                    <p style={{
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "150%",
                        margin: 0
                    }}>During the 21st century, digital devices advanced quicker than ever before. However, in spite of the market being consolidated, expectations have gotten higher than ever.</p>
                </Fragment>
            </Card>
        );
    });
});
