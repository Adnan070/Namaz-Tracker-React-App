const Record = require("../models/record");

exports.getRecord = (req, res) => {
  let uidFind = req.params.uid;
  Record.find({ uid: uidFind }, (err, data) => {
    if (err) {
      res.json({ msj: "Line# 07 , Some Server Error" });
    } else {
      res.json({ data });
    }
  });
};

exports.postRecordOfOneDay = (req, res) => {
  let rec = new Record({
    uid: req.body.uid,
    Date: req.body.Date,
    Namaz: req.body.Namaz,
  });

  //   { $set: { gender: { $switch: {
  //     branches: [
  //         { case: { $eq: [ "$gender", 'male' ] }, then: "female" },
  //         { case: { $eq: [ "$gender", 'female' ] }, then: "male" }
  //     ],
  //     default: ""
  // } } } }

  Record.findOne({ Date: req.body.Date, uid: req.body.uid }).then((data) => {
    console.log(data);
    if (data) {
      Record.findOneAndUpdate(
        {
        //   uid: req.body.uid,
          $and: [
            {
              Date: { $eq: req.body.Date },
              Date: { $exists: true },
            },
            {
              uid: { $eq: req.body.uid },
              uid: { $exists: true },
            },
          ],
        },
        {
          $set: {
            Namaz: req.body.Namaz,
          },
        },
        (err, data) => {
          if (err) {
            res.json({ msg: "Some Server Issue" });
          } else {
            console.log(data);
            res.json({ msg: "Record Updated.." });
          }
        }
      );
    } else {
      rec
        .save()
        .then((data) => {
          res.json({ msg: "Successfully added Record!", data });
        })
        .catch((err) => {
          res
            .status(500)
            .json({ msg: "Oops!, There might some problem with server" });
        });
    }
  });
};

exports.updateOneRecord = (req, res) => {
  let rec = new Record();

  rec.updateOne(
    {
      uid: req.body.uid,
      Date: req.body.Date,
    },
    {
      $set: {
        Date: req.body.upDate,
        Namaz: req.body.Namaz,
      },
    },
    (err, data) => {
      if (err) {
        res.json({ msg: "Oops!Some Server Issue Occur" });
      } else {
        res.json({ msg: "Successfully Updated...", data });
      }
    }
  );
};
