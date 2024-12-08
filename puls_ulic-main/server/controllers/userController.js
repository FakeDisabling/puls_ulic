const userRep = require('../api/dao/userRepositories');

const getUsers = async (req, res) => {
    try {
      if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
  
      const result = await userRep.getAuthUser(req.body);
      res.status(200).json(result);
    } catch (error) {
      console.error('Ошибка в контроллере (getUsers):', error.message);
      res.status(401).json({ message: error.message }); 
    }
  };
  

module.exports = { getUsers };
