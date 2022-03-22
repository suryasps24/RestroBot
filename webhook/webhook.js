const {databaseorder, datadetails} = require('../config/config')
async function webhook(request, response) {
    const intent = request.body.queryResult.intent.displayName;
    console.log(intent, "intent Name")//----> check intent name
    let jsonResponse = {};
    if (intent === 'Default Welcome Intent'){  
      jsonResponse = {
        fulfillment_messages: [
          {
            text: {
              text: [`Hi which restaurant you want to know about?\n `],
            },
          },
        ],
      };
     }  
     if (intent === 'RestaurantName'){
      if (request.body.queryResult.parameters.specification== 'Category'){
        const specification = request.body.queryResult.parameters.specification
        const restroname = request.body.queryResult.parameters.restonames
        const data = await datadetails(specification, restroname)
        let details = `Category of the ${restroname} Restaurant  is `
        data.map(x=>{
          details += x.Category
        })
        jsonResponse = {
          fulfillment_messages: [
            {
              text: {
                text: [`${details} \n `],
              },
            },
          ],
        };
      } else if (request.body.queryResult.parameters.specification== 'CostForTwo'){
        const specification = request.body.queryResult.parameters.specification
        const restroname = request.body.queryResult.parameters.restonames
        const data = await datadetails(specification, restroname)
        let details = `CostForTwo of the ${restroname} Restaurant  is `
        data.map(x=>{
          details += x.CostForTwo 
        })
        jsonResponse = {
          fulfillment_messages: [
            {
              text: {
                text: [`${details} \n `],
              },
            },
          ],
        };
      }else if (request.body.queryResult.parameters.specification== 'Locality'){
        const specification = request.body.queryResult.parameters.specification
        const restroname = request.body.queryResult.parameters.restonames
        const data = await datadetails(specification, restroname)
        let details = `Locality of the ${restroname} Restaurant  is `
        data.map(x=>{
          details += x.Locality
        })
        jsonResponse = {
          fulfillment_messages: [
            {
              text: {
                text: [`${details} \n `],
              },
            },
          ],
        };
      }else if (request.body.queryResult.parameters.specification== 'DinningRating'){
        const specification = request.body.queryResult.parameters.specification
        const restroname = request.body.queryResult.parameters.restonames
        const data = await datadetails(specification, restroname)
        let details = `DinningRating of the ${restroname} Restaurant  is `
        data.map(x=>{
          details += x.DinningRating 
        })
        jsonResponse = {
          fulfillment_messages: [
            {
              text: {
                text: [`${details} \n `],
              },
            },
          ],
        };
      }else if (request.body.queryResult.parameters.specification== 'DinningReviewCount'){
        const specification = request.body.queryResult.parameters.specification
        const restroname = request.body.queryResult.parameters.restonames
        const data = await datadetails(specification, restroname)
        let details = `DinningReviewCount of the ${restroname} Restaurant  is `
        data.map(x=>{
          details += x.DinningReviewCount 
        })
        jsonResponse = {
          fulfillment_messages: [
            {
              text: {
                text: [`${details} \n `],
              },
            },
          ],
        };
      }else if (request.body.queryResult.parameters.specification== 'DeliveryRating'){
        const specification = request.body.queryResult.parameters.specification
        const restroname = request.body.queryResult.parameters.restonames
        const data = await datadetails(specification, restroname)
        let details = `DeliveryRating of the ${restroname} Restaurant  is `
        data.map(x=>{
          details += x.DeliveryRating 
        })
        jsonResponse = {
          fulfillment_messages: [
            {
              text: {
                text: [`${details} \n `],
              },
            },
          ],
        };
      }else if (request.body.queryResult.parameters.specification== 'DeliveryRatingCount'){
        const specification = request.body.queryResult.parameters.specification
        const restroname = request.body.queryResult.parameters.restonames
        const data = await datadetails(specification, restroname)
        let details = `DeliveryRatingCount of the ${restroname} Restaurant  is `
        data.map(x=>{
          details += x.DeliveryRatingCount 
        })
        jsonResponse = {
          fulfillment_messages: [
            {
              text: {
                text: [`${details} \n `],
              },
            },
          ],
        };
      } else if (request.body.queryResult.parameters.specification== 'Website'){
        const specification = request.body.queryResult.parameters.specification
        const restroname = request.body.queryResult.parameters.restonames
        const data = await datadetails(specification, restroname)
        let details = `Website of the ${restroname} Restaurant  is `
        data.map(x=>{
          details += x.Website
        })
        jsonResponse = {
          fulfillment_messages: [
            {
              text: {
                text: [`${details} \n `],
              },
            },
          ],
        };
      }else if (request.body.queryResult.parameters.specification== 'Address'){
        const specification = request.body.queryResult.parameters.specification
        const restroname = request.body.queryResult.parameters.restonames
        const data = await datadetails(specification, restroname)
        let details = `Address  of the ${restroname} Restaurant  is `
        data.map(x=>{
          details += x.Address
        })
        jsonResponse = {
          fulfillment_messages: [
            {
              text: {
                text: [`${details} \n `],
              },
            },
          ],
        };
      }else if (request.body.queryResult.parameters.specification== 'MobileNumber'){
        const specification = request.body.queryResult.parameters.specification
        const restroname = request.body.queryResult.parameters.restonames
        const data = await datadetails(specification, restroname)
        let details = `MobileNumber of the ${restroname} Restaurant  is `
        data.map(x=>{
          details += x.MobileNumber
        })
        jsonResponse = {
          fulfillment_messages: [
            {
              text: {
                text: [`${details} \n `],
              },
            },
          ],
        };
      }else if (request.body.queryResult.parameters.specification== 'Latitude'){
        const specification = request.body.queryResult.parameters.specification
        const restroname = request.body.queryResult.parameters.restonames
        const data = await datadetails(specification, restroname)
        let details = `Latitude of the ${restroname} Restaurant  is `
        data.map(x=>{
          details += x.Latitude 
        })
        jsonResponse = {
          fulfillment_messages: [
            {
              text: {
                text: [`${details} \n `],
              },
            },
          ],
        };
      }else if (request.body.queryResult.parameters.specification== 'Longitude'){
        const specification = request.body.queryResult.parameters.specification
        const restroname = request.body.queryResult.parameters.restonames
        const data = await datadetails(specification, restroname)
        let details = `Longitude of the ${restroname} Restaurant  is `
        data.map(x=>{
          details += x.Longitude 
        })
        jsonResponse = {
          fulfillment_messages: [
            {
              text: {
                text: [`${details} \n `],
              },
            },
          ],
        };
      }else if(request.body.queryResult.parameters.specification== 'AllDetails'){
        const restroname = request.body.queryResult.parameters.restonames
        const data1 = await databaseorder(restroname)
        console.log(data1, "data3333")
        let details = `All details of the ${restroname} Restaurant  is `
        data1.map(x=>{
          details += "Restaurants -:"+' ' + x.Restaurants+' \n '+"Category -:"+' '+ x.Category+' \n ' +'CostForTwo -:'+' ' + x.CostForTwo+' \n ' +'Locality -:'+' '+ x.Locality+' \n '+' '+ 'DinningRating -:'+' '+x.DinningRating+' \n '+' '+ 'DinningReviewCount -:'+' '+x.DinningReviewCount+' \n '+' '+ 'DeliveryRating -:'+' '+x.DeliveryRating+' \n '+' '+'DeliveryRatingCount -:'+' '+ x.DeliveryRatingCount+' \n '+' '+ 'Website -:'+' '+x.Website+' \n '+' '+ 'Address -:'+' '+x.Address+' \n '+' '+'MobileNumber -:'+' '+ x.MobileNumber+' \n '+' '+'Latitude -:'+' '+ x.Latitude+' \n '+' '+ 'Longitude -:'+' '+x.Longitude+'.'+'\n'
         })
        jsonResponse = {
          fulfillment_messages: [
            {
              text: {
                text: [`${details} \n `],
              },
            },
          ],
        };
      }
     } 
    response.send(jsonResponse);
}
module.exports = webhook

  