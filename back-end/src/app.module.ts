import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './common/auth/auth.module';
import { CategoryModule } from './category/category.module';
import { MulterModule } from '@nestjs/platform-express';
import { resolve, join } from 'path';
import { EmailModule } from './email/email.module';
import config from './config/keys.config';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';

@Module({
  imports: [
    MongooseModule.forRoot(config.uri),
    MulterModule.register({
      dest: '/uploads',
    }),
    UserModule,
    AuthModule,
    CategoryModule,
    EmailModule,
    MailerModule.forRoot({
      transport: `smtps://${config.EMAIL}:${config.PASSWORD_EMAIL}@smtp.gmail.com`,
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: join(__dirname, '..', 'templates'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [],
  providers: []
})
export class AppModule { }
