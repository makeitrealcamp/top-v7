import { model, Schema, Document } from 'mongoose'
import { IUser } from './user.model'

export interface ITask extends Document {
  title: string;
  description: string;
  status: boolean;
  user: IUser['_id']
}

const taskSchema = new Schema({
  title: String,
  description: String,
  status: Boolean,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
})

export default model<ITask>('Task', taskSchema)
