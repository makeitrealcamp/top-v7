import { Request, Response, NextFunction } from 'express'
import User, { IUser } from '../models/user.model'

export async function signUp(req: Request, res: Response, next: NextFunction): Promise<void> {
  const user: IUser = await User.create(req.body)
  res.status(200).json(user)
}
