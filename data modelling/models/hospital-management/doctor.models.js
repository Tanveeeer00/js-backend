import mongoose from "mongoose";

const workInHour = new mongoose.Schema({
  type: Number,
  type: mongoose.Schema.Types.ObjectId,
  ref: "Hospital",
});

const qualification = new mongoose.Schema({
  type: String,
  required: true,
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualifications: [qualification],
    experienceInYears: {
      type: Number,
      default: 0,
    },
    worksInHospitals: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
    worksInHours: [workInHour],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
