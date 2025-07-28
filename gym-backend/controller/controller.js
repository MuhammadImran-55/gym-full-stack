let {customerModel,productModel}=require('../models/customer.js')


let formInsert=async (req, res) => {
  try {
    const { name, email, address, city, state, zip } = req.body;

    // Simple backend validation
    if (!name || !email || !address || !city || !state || !zip) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to MongoDB
    const customer = await customerModel.create({
      name,
      email,
      address,
      city,
      state,
      zip
    });

    res.json({ message: "Registration successful", customer });
  } catch (err) {
    // Duplicate email catch, etc.
    res.status(500).json({ error: err.message });
  }
}

let productInsert=async(req,res)=>{
   const {name,email,quantity}=req.body;

   if(!name || !email || !quantity){
      return res.status(400).json({err:'all fields are required please fill all'});
   }
// Save to MongoDB
    const product = await productModel.create({
      name,
      email,
      quantity
    });

    res.json({ message: "order successful", product });

}

let askAI=async (req, res) => {
  const { question } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
      },
      {
        headers: {
          Authorization: `Bearer YOUR_OPENAI_API_KEY`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI API failed" });
  }
};

module.exports={formInsert,productInsert,askAI}