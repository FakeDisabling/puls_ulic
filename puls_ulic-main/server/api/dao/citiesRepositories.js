const pool = require('../dbconnector/dbconnector');

const getAllCities = async () => {
  try {
    const result = await pool.query('SELECT * FROM cities');
    return result.rows;
  } catch (error) {
    console.error('Ошибка в репозитории (getAllCities):', error);
    throw error;
  }
};

module.exports = {
  getAllCities,
};
