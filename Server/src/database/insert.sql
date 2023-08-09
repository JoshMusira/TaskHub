-- 
DROP PROCEDURE CreateUser

CREATE PROCEDURE CreateUser
    @userID VARCHAR(200),
    @username VARCHAR(200),
    @password VARCHAR(200)
AS
BEGIN
    INSERT INTO users
        (userID, username, password)
    VALUES
        (@userID, @username,  @password);
END
