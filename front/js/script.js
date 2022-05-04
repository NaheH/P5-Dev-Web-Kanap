
const fetchAllProducts = async () => {
    try {
      const url = ("http://localhost:3000/api/products");
      const response = await fetch(url);
      const data = await response.json();
  console.log(data);
  
      return data;
    } catch (err) {
      console.log ("Erreur :  + err");
      console.log ("Veuillez démarrer le serveur");
      return null;
    }
  };
  const renderPage = async () => {
    const data = await fetchAllProducts();
    data.forEach(function (sofa) {
        renderHomeProduct(sofa);
        console.log(sofa);
      });
    }