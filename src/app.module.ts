import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [AuthModule, ConfigModule.forRoot(
    {
      load: [configuration]
    }
  ), MongooseModule.forRoot('mongodb://localhost/flashcards'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*');
  }
}
