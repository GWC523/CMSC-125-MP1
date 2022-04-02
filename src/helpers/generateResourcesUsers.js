import { generateRand } from "./generateRand";

//Generate a randum number of resources or users 
export const generateResourcesUsers = () => {
    const quantity = generateRand(1,30);
    var resourceData = [];

    for(var i = 0; i < quantity - 1; i++) {
      var resource = generateRand(1,30);

      //No duplicate resources or users
      if(resourceData.includes(resource) === false) {
          resourceData.push(resource);
      } else {
        i--;
      }
    }

    return resourceData;
  }