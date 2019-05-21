const client = require("socket.io-client");
const mongoose = require("mongoose");
const moment = require("moment");

const ChartDatav2 = require("./models/ChartDatav2");

const db = "mongodb://giant:giant123@ds163044.mlab.com:63044/mock-server";

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() => {
    const socket = client.connect("https://streamer.cryptocompare.com");

    const subscriptions = ["5~CCCAGG~BTC~USD"];

    socket.emit("SubAdd", { subs: subscriptions });

    let coin = {
      rate: 0
    };
    socket.on("m", message => {
      message = message.split("~");

      if ((message[4] === "1") || (message[4] === "2")) {

        coin = {
          // name: message[2],
          rate: message[5]
        };
      }
    });

    setInterval(() => {
      const time = moment().format();
      const newChartDatav2 = new ChartDatav2({
        ...coin,
        time,
        id: time
      });

      new Promise((resolve, reject) => {
        newChartDatav2.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }, 1000);

    setInterval(() => {
      ChartDatav2.find({ time: { $lt: moment().subtract(6, "minute").format() } }, function (err, docs) {
          ChartDatav2.deleteMany(
            { id: { $in: docs.map(doc => doc.id) } },
            (...args) => {
              console.log("args", args);
            }
          );
        }
      );
      // ChartDatav2.deleteMany({ time: { $lt: moment().subtract(10, "seconds").format() } });
    }, 6 * 60 * 1000);
  })
  .catch(err => console.log(err));
