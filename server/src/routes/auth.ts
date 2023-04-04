import { Request, Response } from 'express';
import { dataStore } from '../data/mockDb';

export const authHandler = (req: Request, res: Response, next) => {
    const authorizationHeader = req.headers.authorization; 
  
    if (!authorizationHeader) {
      return res.sendStatus(401);
    }
  
    const authorization = authorizationHeader.split(' ')[1];
    const decodedAuthHeader = Buffer.from(authorization, 'base64').toString();
    const [username, password] = decodedAuthHeader.split(':');
  
    const isValid = 
      username !== undefined 
      && password !== undefined 
      && dataStore.authData[username] === password;
  
    if (!isValid) {
      res.sendStatus(401);
    } else {
      res.locals.username = username;
      next();
    }
  };