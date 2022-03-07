const Development = require("../schemas/DevelopmentSchema/DevelopmentSchema");
const fileSizeFormatter = require("../utilities/fileSizeFormatter");


const getAllDevelopment = async (req, res, next) => {
    console.log("get request check")
  try {
    const response = await Development.find({});
    res.json(response);
    console.log(response)
  } catch (error) {
    next(error);
  }
  
};

const handleAddNewDevelopment = async (req, res, next) => {
    const file = {
      name: req.file.originalname,
      path: req.file.path,
      type: req.file.mimetype,
      size: fileSizeFormatter(req.file.size, 2), // 0.00
    };
  
    const newDevelopment = {
      ...JSON.parse(req.body.development),
      bannerImg: file,
      isVerified: false,
    };
    try {
  
      const response = await Development.insertMany(newDevelopment);
  
      console.log(newDevelopment)
  } catch (error) {
    next(error);
  }
};

const handleDeleteDevelopment = async (req, res, next) => {
  try {
    const  id  = req.params.id;
    const data={_id: id}
    const response = await Development.deleteOne(data);
    res.json(response);
  } catch (error) {
    next(error);
  }
};


module.exports = {
  getAllDevelopment,
  handleAddNewDevelopment,
  handleDeleteDevelopment
};
