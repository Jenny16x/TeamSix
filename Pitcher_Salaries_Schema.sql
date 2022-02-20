-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Pitching" (
    "playerid" text   NOT NULL,
    "teamid" text   NOT NULL,
    "lgid" text   NOT NULL,
    "W" int   NOT NULL,
    "L" int   NOT NULL,
    "G" int   NOT NULL,
    "GS" int   NOT NULL,
    "ipouts" int   NOT NULL,
    "H" int   NOT NULL,
    "BB" int   NOT NULL,
    "SO" int   NOT NULL,
    "baopp" numeric   NOT NULL,
    "ERA" float4   NOT NULL,
    "BFP" int   NOT NULL,
    "GF" int   NOT NULL,
    CONSTRAINT "pk_Pitching" PRIMARY KEY (
        "playerid"
     )
);

CREATE TABLE "Salaries" (
    "yearid" int   NOT NULL,
    "teamid" text   NOT NULL,
    "playerid" text   NOT NULL,
    "salary" int   NOT NULL,
    CONSTRAINT "pk_Salaries" PRIMARY KEY (
        "playerid"
     )
);

CREATE TABLE "People" (
    "playerid" text   NOT NULL,
    "birthYear" int   NOT NULL,
    "nameFirst" text   NOT NULL,
    "nameLast" text   NOT NULL,
    "weight" int   NOT NULL,
    "height" int   NOT NULL,
    "throws" text   NOT NULL,
    CONSTRAINT "pk_People" PRIMARY KEY (
        "playerid"
     )
);

ALTER TABLE "Pitching" ADD CONSTRAINT "fk_Pitching_playerid" FOREIGN KEY("playerid")
REFERENCES "Salaries" ("playerid");

ALTER TABLE "Salaries" ADD CONSTRAINT "fk_Salaries_playerid" FOREIGN KEY("playerid")
REFERENCES "People" ("playerid");
