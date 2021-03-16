const validateFields = (requiredFields = [], values = {}, res) => {
    if (requiredFields.length <= 0) 
        return
  
    const errors = []
    const message = 'required field'
  
    requiredFields.forEach((field) => {
      if (!values[field]) {
        errors.push({
          name: 'required_field',
          field,
          message,
        })
      }
    })
  
    if (errors.length > 0) {
        return res.status(400).send({message: errors})
    }
  }

module.exports = { validateFields }