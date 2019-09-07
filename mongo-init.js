db.createUser(
    {
        user: "ghibli_api_mongo",
        pwd: "ghibli_api_mongo_password",
        roles: [
            {
                role: "readWrite",
                db: "ghibli_api"
            }
        ]
    }
);
