// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const dotenv = require('dotenv');
// // const Contact = require('./models/Contact');
// // const path = require('path');


// // dotenv.config();

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // MongoDB connection
// // mongoose.connect(process.env.MONGO_URI)
// //   .then(() => console.log('MongoDB connected'))
// //   .catch(err => console.log(err));


// // // Serve static files from the client/build folder
// // app.use(express.static(path.join(__dirname, 'dist')));

// // // Test route
// // app.get('*', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// // });

// // // Contact form submission route
// // app.post('/api/contact', async (req, res) => {
// //   try {
// //     const newContact = new Contact(req.body);
// //     await newContact.save();
// //     res.status(200).json({ message: 'Message saved successfully' });
// //   } catch (error) {
// //     res.status(500).json({ error: 'Something went wrong' });
// //   }
// // });

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// // // const express = require('express');
// // // const path = require('path');

// // // const app = express();
// // // const PORT = process.env.PORT || 5000;

// // // // Serve static files from the dist folder
// // // app.use(express.static(path.join(__dirname, 'dist')));

// // // // Catch-all: serve index.html for any route not handled above
// // // app.get('*', (req, res) => {
// // //   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// // // });

// // // app.listen(PORT, () => {
// // //   console.log(`Server is running on port ${PORT}`);
// // // });







// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const Contact = require('./models/Contact');
// const path = require('path');

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // ✅ Contact form submission route (IMPORTANT: must be before wildcard route)
// app.post('/api/contact', async (req, res) => {
//   try {
//     const newContact = new Contact(req.body);
//     await newContact.save();
//     res.status(200).json({ message: 'Message saved successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });

// // ✅ Serve static files from React dist build
// app.use(express.static(path.join(__dirname, 'dist')));

// // ✅ Catch-all to support React Router
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
