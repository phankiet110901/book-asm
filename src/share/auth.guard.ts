import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(content: ExecutionContext): boolean {
    const request = content.switchToHttp().getRequest();
    const token = request.headers.authorization;
    
    if (!token) {
      return false;
    }
    const check = this.decodeToken(token);
    if (check) return true;
    return false;
  }

  private decodeToken(token: string) {
    let decoded = null;
    console.log(token);
    

    try {
      decoded = jwt.verify(token, process.env.SECRET_KEY);
    } catch {
      throw new UnauthorizedException('Token invalid');
    }

    return decoded;
  }
}
