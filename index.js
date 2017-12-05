exports.root = function rootApi (req, res) {
  var result =
    {
      "_links" : {
        "self" : {
          "href" : "https://us-central1-hypergoal-186807.cloudfunctions.net/root",
          "templated" : false
        }
      }
    };

  res.status(200).send(JSON.stringify(result));
};
