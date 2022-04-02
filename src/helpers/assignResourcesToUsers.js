import generateRand from "./generateRand.js";

  //Assign resources to users
export const assignResourcesToUsers = (resourceLabels, userLabels)  => {
    var list = {};

    userLabels.map((user) => {
      const quantity = generateRand(1,30);
      var tempResource = resourceLabels.slice();
      
      for(var i = 0; i < quantity - 1; i++) {

        //if all resourceLabels are used by a user
        if(tempResource.length === 0) {
            break; //exit out loop
        }

        var randomDuration = generateRand(1,30);
        const randomIndex = Math.floor(Math.random() * tempResource.length);
        var randomResource = tempResource[randomIndex];


        //If there is an existing list of users using the resource
        if (list[resource]) {
          
        }

        var info = {};
        info.user = user;
        info.resource = randomResource;
        info.duration = randomDuration;
        info.status = "pending";

        list.push(info);
        tempResource.splice(randomIndex, 1);
      }
    
    });

    return list;
    
  }