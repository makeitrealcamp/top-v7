import { model, Schema, Document } from 'mongoose'

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
}, {
  timestamps: true,
});

// userSchema.pre<IUser>('save', function ():

export default model<IUser>('User', userSchema)
