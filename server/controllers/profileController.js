// const Profile = require('../models/Hero/Profile'); // Adjust the path to your Profile model
// const multer = require('multer');
// const path = require('path');

// // Multer configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/profiles'); // Specify the upload directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${req.body.username}-${Date.now()}${path.extname(file.originalname)}`); // Rename the file
//   }
// });

// const upload = multer({ storage: storage }).single('profile');

// // Create a new profile
// const createProfile = async (req, res) => {
//   upload(req, res, async (err) => {
//     if (err) {
//       return res.status(400).json({ error: err.message });
//     }

//     const { username } = req.body;
//     const profile = req.file ? req.file.path : null;

//     try {
//       const newProfile = new Profile({ username, profile });
//       await newProfile.save();
//       res.status(201).json(newProfile);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   });
// };

// // Update profile by username
// const updateProfile = async (req, res) => {
//   upload(req, res, async (err) => {
//     if (err) {
//       return res.status(400).json({ error: err.message });
//     }

//     // const { username } = req.body;
//     const profile = req.file ? req.file.path : null;

//     try {
//       const updatedProfile = await Profile.findOneAndUpdate(
//         // { username },
//         { profile },
//         { new: true }
//       );

//       if (!updatedProfile) {
//         return res.status(404).json({ message: 'Profile not found' });
//       }

//       res.json(updatedProfile);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   });
// };


const Profile = require('../models/Hero/Profile'); // Adjust the path to your Profile model
const multer = require('multer');
const path = require('path');
const createProfile = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { username } = req.body;
    const profile = req.file ? req.file.path : null;

    try {
      const newProfile = new Profile({ username, profile });
      await newProfile.save();
      res.status(201).json(newProfile);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
};

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/profiles'); // Specify the upload directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`); // Rename the file
  }
});

const upload = multer({ storage: storage }).single('profile');

// Create a new profile

// Update profile by username
const updateProfile = async (req, res) => {
  console.log("Updating profile");
  upload(req, res, async (err) => {
    if (err) {
      console.log("Error during file upload:", err);
      return res.status(400).json({ error: err.message });
    }

    const profilePath = req.file ? req.file.path : null;
             console.log("profilepath:",profilePath);
    try {
      const updatedProfile = await Profile.findOneAndUpdate(
        {},
        // { username: req.body.username }, // Make sure to search by username
        { profile: profilePath }, // Update the profile picture path
        { new: true, upsert: true } // Use `upsert` to create a new profile if it doesn't exist
      );

      if (!updatedProfile) {
        return res.status(404).json({ message: 'Profile not found' });
      }

      res.json(updatedProfile);
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(400).json({ error: error.message });
    }
  });
};

// Get profile by username
const getProfileByUsername = async (req, res) => {
  // const { username } = req.params;

  try {
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  createProfile,
  updateProfile,
  getProfileByUsername
};
