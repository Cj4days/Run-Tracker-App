CREATE TABLE IF NOT EXISTS Run (
    id INT NOT NULL,
    image VARCHAR(250) NOT NULL,
    title VARCHAR(250) NOT NULL,
    started_on timestamp NOT NULL,
    completed_on timestamp NOT NULL,
    miles INT NOT NULL,
    location VARCHAR(10) NOT NULL,
    PRIMARY KEY (id)
);