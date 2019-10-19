USE msis_project;

CREATE TABLE Certification (
    certificationId INT AUTO_INCREMENT PRIMARY KEY,
    certificationName VARCHAR(64),
    experationPeriod VARCHAR(10),
    certifyingAgency VARCHAR(100)
);

INSERT INTO Patient (certificationId, certificationName, experationPeriod, certifyingAgency) VALUES
("1234567890", "First Aid Responder", "2 years", "American Red Cross"),
("0987654321", "CPR", "3 years", "American Heart Association")
------------------------------------------------------------------------------

use innodb;

INSERT INTO Certification(certificationName, experationPeriod, certifyingAgency) VALUES
("AED", "2 years", "American Red Cross"),
("First Aid", "2 years", "American Red Cross"),
("CPR", "3 years", "American Heart Association"),
("AED", "4 months", "American Red Cross");
