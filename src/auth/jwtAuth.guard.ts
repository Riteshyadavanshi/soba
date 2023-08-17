import { AuthGuard } from "@nestjs/passport"
import { ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from "@nestjs/core"

@Injectable()
export class jwtAuth extends AuthGuard('jwt') {
  constructor(
    private readonly reflector: Reflector
  ) {
    super()
  }
  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.get('isPublic', context.getHandler())
    if (isPublic) {
      return true
    }
    return super.canActivate(context)
  }
}

export class refreshAuth extends AuthGuard('jwt-refresh'){
  
}