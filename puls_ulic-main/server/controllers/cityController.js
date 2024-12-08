const cityRep = require('../api/dao/citiesRepositories');

const getCities = async (req, res) => {
  try {
    const cities = await cityRep.getAllCities();
    res.json(cities); 
  } catch (error) {
    console.error('Ошибка в контроллере (getCities):', error);
    res.status(500).json({ error: 'Ошибка сервера' }); 
  }
};

module.exports = {
  getCities,
};
