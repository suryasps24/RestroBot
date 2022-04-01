const { DatabaseOrder, particular } = require("../config/config");
async function webhook(request, response) {
  const intent = request.body.queryResult.intent.displayName;
  console.log(intent, "intent Name"); //----> check intent name
  let jsonResponse = {};
  if (intent === "Default Welcome Intent") {
    jsonResponse = {
      fulfillment_messages: [
        {
          text: {
            text: [`Hi which restaurant you want to know about?\n`], //Displays Message After a greeting on DialogFlow
          },
        },
      ],
    };
  }
  if (intent === "RestaurantName") {
    const parameter = request.body.queryResult.parameters;
    console.log(parameter, "Parameter");
    const specification = request.body.queryResult.parameters.specification;
    const RestoNames = request.body.queryResult.parameters.RestoNames;
    if (specification == "AllDetails") {
      const data1 = await DatabaseOrder(RestoNames);
      var result = `All Details of the ${RestoNames} Restaurant is \n`;
      data1.map((x) => {
        result +=
          "Category -:" +
          " " +
          x.Category +
          " \n " +
          "CostForTwo -:" +
          " " +
          x.CostForTwo +
          " \n " +
          "Locality -:" +
          " " +
          x.Locality +
          " \n " +
          " " +
          "DinningRating -:" +
          " " +
          x.DinningRating +
          " \n " +
          " " +
          "DinningReviewCount -:" +
          " " +
          x.DinningReviewCount +
          " \n " +
          " " +
          "DeliveryRating -:" +
          " " +
          x.DeliveryRating +
          " \n " +
          " " +
          "DeliveryRatingCount -:" +
          " " +
          x.DeliveryRatingCount +
          " \n " +
          " " +
          "Website -:" +
          " " +
          x.Website +
          " \n " +
          " " +
          "Address -:" +
          " " +
          x.Address +
          " \n " +
          " " +
          "MobileNumber -:" +
          " " +
          x.MobileNumber +
          " \n " +
          " " +
          "Latitude -:" +
          " " +
          x.Latitude +
          " \n " +
          " " +
          "Longitude -:" +
          " " +
          x.Longitude +
          "." +
          "\n";
      });
    } else {
      const data = await particular(specification, RestoNames);
      var result = `Following are the asked details of ${RestoNames} Restaurant:-\n`;
      function get(data) {
        data.forEach((x) => {
          for (const value in x) {
            result += "\n" + `${value}: ${x[value]}`; //Appending dynamic value in result
            //console.log(`${value}: ${x[value]}`, "success");
          }
        });
      }
      get(data);
    }
    jsonResponse = {
      fulfillment_messages: [
        {
          text: {
            text: [`${result} \n `], //Displays a message as stored dynamically in result.
          },
        },
      ],
    };
  }
  response.send(jsonResponse);
}
module.exports = webhook
