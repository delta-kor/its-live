import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';

@Injectable()
export class ManageGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const gqlExecutionContext = GqlExecutionContext.create(context);
    const request: Request = gqlExecutionContext.getContext().req;
    return request.headers['authorization'] === process.env['MANAGE_TOKEN'];
  }
}
