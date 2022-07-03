import mongoose from 'mongoose'
import User from '../User'

const departmentScheme = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },

    // default properties
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
)

const Department =
  mongoose.models.Department || mongoose.model('Department', departmentScheme)
export default Department
