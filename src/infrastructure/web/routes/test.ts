import { Request, Response, NextFunction } from 'express';
// Delete an item
export const testItem = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("Hello")
  } catch (error) {
    next(error);
  }
};