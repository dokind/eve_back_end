import { LoggerService } from '@nestjs/common';

export class MyLogger implements LoggerService {
    /**
     * Write a 'log' level log.
     */
    log(message: any, ...optionalParams: any[]) {
        console.log(message);
        console.log(optionalParams);
    }

    /**
     * Write an 'error' level log.
     */
    error(message: any, ...optionalParams: any[]) {
        console.log(message);
        console.log(optionalParams);
    }

    /**
     * Write a 'warn' level log.
     */
    warn(message: any, ...optionalParams: any[]) {
        console.log(message);
        console.log(optionalParams);
    }

    /**
     * Write a 'debug' level log.
     */
    debug?(message: any, ...optionalParams: any[]) {
        console.log(message);
        console.log(optionalParams);
    }

    /**
     * Write a 'verbose' level log.
     */
    verbose?(message: any, ...optionalParams: any[]) {
        console.log(message);
        console.log(optionalParams);
    }
}