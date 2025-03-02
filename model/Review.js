const mongoose = require("mongoose");

// const ReviewSchema = new mongoose.Schema({
//   email: { type: String, required: true },
//   fullName: { type: String, required: true },
//   socialMediaHandle: { type: String },
//   dateOfService: { type: Date, required: true },
//   sessionType: {
//     type: String,
//     enum: ['portraits', 'birthday', 'wedding', 'family', 'other'],
//     required: true
//   },
//   overallSatisfaction: {
//     type: Number,
//     min: 0,
//     max: 5,
//     required: true
//   },
//   photographQuality: {
//     type: String,
//     enum: ['yes', 'no', 'maybe'],
//     required: true
//   },
//   photographerProfessionalism: {
//     type: Number,
//     min: 0,
//     max: 5,
//     required: true
//   },
//   moodCapture: {
//     type: String,
//     enum: ['yes', 'no', 'maybe'],
//     required: true
//   },
//   turnaroundTime: {
//     type: String,
//     enum: ['yes', 'no', 'maybe'],
//     required: true
//   },
//   recommendation: {
//     type: String,
//     enum: ['yes', 'no', 'maybe'],
//     required: true
//   },
//   overallExperience: { type: String },
//   createdAt: { type: Date, default: Date.now }
// });

const ReviewSchema = new mongoose.Schema({
	// email: { type: String, required: true },
	fullName: { type: String, required: true },
	socialMediaHandle: { type: String },
	dateOfService: { type: Date, required: true },
	sessionType: {
		type: String,
		enum: ["portraits", "birthday", "wedding", "family", "other"],
		required: true,
	},
	overallSatisfaction: {
		type: Number,
		min: 0,
		max: 5,
		required: true,
	},
	projectQuality: {
		type: Number,
		min: 0,
		max: 5,
		required: true,
	},
	professionalism: {
		type: Number,
		min: 0,
		max: 5,
		required: true,
	},
	performance: {
		type: Number,
		min: 0,
		max: 5,
		required: true,
	},
	deliveryTimeliness: {
		type: Number,
		min: 0,
		max: 5,
		required: true,
	},
	recommendation: {
		type: String,
		enum: ["yes", "no", "maybe"],
		required: true,
	},
	extraRemarks: { type: String },
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", ReviewSchema);
