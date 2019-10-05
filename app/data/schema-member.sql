USE msis_project;

CREATE TABLE Member (
    memberId VARCHAR(64) PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(64) NOT NULL,
    lastName VARCHAR(64) NOT NULL,
    radioNumber VARCHAR(64),
    stationNumber VARCHAR(64),
    isActive Boolean,
    address VARCHAR(64),
    email VARCHAR(64),
    gender CHAR(1),
    position VARCHAR(64),
);
