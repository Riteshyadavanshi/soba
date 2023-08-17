import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseFormatInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Observable<any> {
        return next.handle().pipe(
            map(data => ({
                data,
                statusCode: context.switchToHttp().getResponse().statusCode || 200,
                message: context.switchToHttp().getResponse().statusMessage || '',
            })),
        );
    }
}
