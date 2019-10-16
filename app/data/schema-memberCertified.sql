USE msis_project;

CREATE TABLE MemberCertified (
    memberId INT,
    certificationId INT,
    certifiedDate DATE NOT NULL,
    expirationDate DATE NOT NULL,
    FOREIGN KEY (memberId) REFERENCES Member(MemberId),
    FOREIGN KEY (certificationId) REFERENCES Certification(certificationId)
);
