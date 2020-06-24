var mqtt = require("mqtt");
// var client = mqtt.connect("mqtt://test.mosquitto.org");
var client = mqtt.connect("mqtt://mqtt.eclipse.org");

const Switchbot = require("switchbot");
const switchbot = Switchbot("F4:CD:C6:01:F4:97");

client.on("connect", function () {
  client.subscribe("/home/alex/entrance", function (err) {
    if (err) {
      console.log(
        "Something went wrong to connect to /home/alex/entrance",
        err
      );
      process.exit();
    }
  });
});

client.on("message", function (topic, message) {
  // message is Buffer
  const msg = message.toString();
  console.log(msg);
  if (msg === "abc" || msg === "123") {
    switchbot.press();
  }
});
