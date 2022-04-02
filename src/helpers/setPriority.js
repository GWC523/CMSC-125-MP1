

export const setPriority = (list) => {
    const sortByResource = list.sort((a, b) => (a.resource < b.resource) ? 1 : -1);
    const priorityList = sortByResource.sort((a, b) => (
      a.resource == b.resource && a.user > b.user) ? 1 : -1);

    return priorityList;
    
  }