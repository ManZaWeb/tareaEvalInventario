/**
 * Autor Mario Alfonso Nuñez
 * GitHub:
 */

export { inventory }

// Cantidades aleatorias entre 1 y 30
const getRandomQuantity = () => {
    return Math.floor(Math.random() * 30) + 1
  };

  const getRamdomPrice = () => {
    return (Math.random() * (40 - 9) + 9).toFixed(0);
  };

  const getRamdomFormat = () => {
    const format = ['CD', 'Vinilo', 'Cassete']
    const indiceAleatorio = Math.floor(Math.random() * format.length)
    return format[indiceAleatorio]
  }

  

 const inventory = [
    {id: 1, titulo: "Speakerboxxx/The Love Below", cantidad: getRandomQuantity(), precio: getRamdomPrice(), formato: getRamdomFormat()},
    {id: 2, titulo: "The Marshall Mathers LP", cantidad: getRandomQuantity(), precio: getRamdomPrice(), formato: getRamdomFormat()},
    {id: 3, titulo: "The Eminem Show", cantidad: getRandomQuantity(), precio: getRamdomPrice(), formato: getRamdomFormat()},
    {id: 4, titulo: "Life After Death", cantidad: getRandomQuantity(), precio: getRamdomPrice(), formato: getRamdomFormat()},
    {id: 5, titulo: "Please Hammer, Dont Hurt Em", cantidad: getRandomQuantity(), precio: getRamdomPrice(), formato: getRamdomFormat()},
    {id: 6, titulo: "All Eyez On Me", cantidad: getRandomQuantity(), precio: getRamdomPrice(), formato: getRamdomFormat()},
    {id: 7, titulo: "Licensed To Ill", cantidad: getRandomQuantity(), precio: getRamdomPrice(), formato: getRamdomFormat()},
    {id: 8, titulo: "Country Grammar", cantidad: getRandomQuantity(), precio: getRamdomPrice(), formato: getRamdomFormat()},
    {id: 9, titulo: "Get Rich or Die Tryin", cantidad: getRandomQuantity(), precio: getRamdomPrice(), formato: getRamdomFormat()},
    {id: 10, titulo: "THE BLACK ALBUM", cantidad: getRandomQuantity(), precio: getRamdomPrice(), formato: getRamdomFormat()},
    {id: 11, titulo: "ENTER THE WU-TANG", cantidad: getRandomQuantity(), precio: getRamdomPrice(), formato: getRamdomFormat()},
    {id: 12, titulo: "ILLMATIC", cantidad: getRandomQuantity(), precio: getRamdomPrice(), formato: getRamdomFormat()},

 ]