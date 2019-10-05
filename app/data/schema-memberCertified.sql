USE msis_project;

CREATE TABLE MemberCertified (
    memberId VARCHAR(64),
    certificationId VARCHAR(64),
    certifiedDate DATE NOT NULL,
    expirationDate DATE NOT NULL,
    FOREIGN KEY (memberId) REFERENCES Member(MemberId),
    FOREIGN KEY (certificationId) REFERENCES Certification(certificationId),

);
