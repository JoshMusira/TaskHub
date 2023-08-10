DROP PROCEDURE GetUser;

CREATE PROCEDURE GetUser
    @username VARCHAR(200)
AS
BEGIN
    SELECT *
    FROM users
    WHERE username = @username;
END;

CREATE PROCEDURE GetTask
    @userID VARCHAR(200)
AS
BEGIN
    SELECT *
    FROM task
    WHERE userID = @userID;
END;