import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AuthGuard implements CanActivate {
    canActivate(content: ExecutionContext): boolean;
    private decodeToken;
}
