db.createUser(
  {
      user: "bram",
      pwd: "bram123",
      roles: [
          {
              role: "readWrite",
              db: "simple_web_app"
          }
      ]
  }
);