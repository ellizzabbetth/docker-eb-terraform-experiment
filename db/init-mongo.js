print("Started adding the users.");
db.createUser(
  {
    user: "lukemwila",
    pwd: "doesitreallymatterwhatthisis",
    roles: [
      {
        role: "readWrite",
        db: "multicontainer-database"
      }
    ]
  }
)

print("End adding the user roles.");