import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { MyLogger } from 'config/my_logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,
    // { logger: new MyLogger(), }
  );
  const config = new DocumentBuilder()
    .setTitle('Eve Flash Cards')
    .setDescription('API for Eve Flash Cards')
    .setVersion('1.0')
    .addTag('eve-flash-cards')
    .addBearerAuth(
      {
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
      },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config,);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
