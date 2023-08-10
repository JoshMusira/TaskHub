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


CREATE PROCEDURE NewTask
    @id VARCHAR(200),
    @userID VARCHAR(200),
    @name VARCHAR(50),
    @status VARCHAR(200)
AS
BEGIN
    INSERT INTO task
        (id, userID,name, status)
    VALUES
        (@id, @userID,@name, @status );
END;