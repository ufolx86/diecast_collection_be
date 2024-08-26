exports.getCollection = (req, res, next) => {
  // TODO: GET FROM MONGO PROPER COLLECTION FOR RECEIVED USER
  res.status(200).json({
    numberOfItems: '201',
    collection:[
      {
        "brand": "AutoArt",
        "Make": "Aston Martin",
        "Model": "DB11",
        "Color": "Apple Tree Green",
        "SKU": "70269"
      },
      {
        "brand": "AutoArt",
        "Make": "Aston Martin",
        "Model": "Vulcan",
        "Color": "Stratus White W/ Blue Stripes",
        "SKU": "70261"
      },
    ],
  })
}

// status(201) IS THE WAY TO GO FOR SUCCESSFUL POST