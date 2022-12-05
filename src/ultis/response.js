const successCode = (res, data, message) => {
    res.status(200).json({
      message,
      content: data
    })
  }
  
  const failCode = (res, data, message) => {
    res.status(400).json({
      message,
      content: data
    })
  }
  
  const errorCode = (res, message) => {
    res.status(500).send(message)
  }
  
  const notFoundCode = (res,data,message) =>{
    res.status(404).json({
      message,
      content: data
    })

  }
  
  module.exports = {
    successCode,
    failCode,
    errorCode,
    notFoundCode
    
  }