

const saveLS =(cfpData) => {
    const serializedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serializedArr);
  }
  
   const getLS = () => {
    const retrieveArr = localStorage.getItem("cfp");
    if (retrieveArr !== null) {
      return JSON.parse(retrieveArr);
    } else {
      return [];
    }
  }
  
  const cfpData = getLS();
  export { cfpData, saveLS, getLS };
  