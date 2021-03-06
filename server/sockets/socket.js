const { io } = require("../server");
//to know when a client is connected to the server
io.on("connection", (client) => {
  console.log("User connected");

  client.emit("sendMessage", {
    user: "Admin",
    message: "Welcome!",
  });

  client.on("disconnect", () => {
    console.log("User disconnected");
  });

  client.on("sendMessage", (data, cb) => {
    console.log(data);
    client.broadcast.emit("sendMessage", data);
    /* data.name
      ? cb({ name: "server", message: "Everithing is OK" })
      : cb({ name: "server", message: "Something is wrong" }); */
  });
});
