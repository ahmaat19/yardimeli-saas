import mongoose from 'mongoose'
import User from '../User'

const vaccinationScheme = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    isActive: { type: Boolean, default: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: User },
  },
  { timestamps: true }
)

const Vaccination =
  mongoose.models.Vaccination ||
  mongoose.model('Vaccination', vaccinationScheme)
export default Vaccination
