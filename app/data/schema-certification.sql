USE msis_triage;

CREATE TABLE Certification (
    certificationId VARCHAR(64) PRIMARY KEY,
    certificationName VARCHAR(64),
    experationPeriod VARCHAR(10),
    certifyingAgency VARCHAR(100)
);

INSERT INTO Patient (certificationId, certificationName, experationPeriod, certifyingAgency) VALUES
("1234567890", "First Aid Responder", "2 years", "American Red Cross"),
("0987654321", "CPR", "3 years", "American Heart Association")
