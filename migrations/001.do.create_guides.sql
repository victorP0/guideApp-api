-- CREATE DATABASE noteful;

CREATE TABLE guides(
    id VARCHAR (100) PRIMARY KEY,
    title TEXT NOT NULL,
    text TEXT NOT NULL,
    author TEXT NOT NULL,
    url TEXT,
    key TEXT
);