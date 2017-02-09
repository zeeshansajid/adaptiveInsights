let jsonObj = {"id":1,"label":"A","childnodes":[{"id":2,"label":"B","childnodes":[{"id":5,"label":"E"},{"id":6,"label":"F"},{"id":7}]},{"id":3,"label":"C"},{"id":4,"label":"D","childnodes":[{"id":8,"label":"H"},{"id":9,"label":"I"}]}]}


console.log(jsonObj);

function findLabelOfTreeNode(jsonObj, id){
  if(typeof jsonObj === 'undefined' || jsonObj === null )
    throw Error("Source object not defined");

  if(typeof id === 'undefined' || id === null )
    throw Error("Test ID not defined");

  let retVal = findlabel_recursive(jsonObj, id);
  if(retVal)
    console.log(retVal);
}

function findlabel_recursive(jsonObj, id){
  
  if(jsonObj.id === id) {
    if(typeof jsonObj.label !== 'undefined') {
      console.log("LABEL = ", jsonObj.label);    
      return jsonObj.label;
    }
    else {
      console.log("LABEL NOT DEFINED ");    
      return false;
    }
    
  }
  
    if(typeof jsonObj.childnodes !== 'undefined') {
        jsonObj.childnodes.forEach(
            (child) => { findlabel_recursive(child, id); }
      )
    }

    return false;
}

findLabelOfTreeNode(jsonObj, 6);
