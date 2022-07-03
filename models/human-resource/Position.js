import mongoose from 'mongoose'
import User from '../User'

const positionScheme = mongoose.Schema(
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

const Position =
  mongoose.models.Position || mongoose.model('Position', positionScheme)
export default Position
