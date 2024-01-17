import { Request, Response, NextFunction } from 'express';
import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { method, body, url } = request;

    response.on('finish', () => {
      this.logger.log(
        `Method: ${method} Endpoint: ${url} Body: ${body} Timestamp: ${new Date().toUTCString()}`,
      );
    });

    next();
  }
}
