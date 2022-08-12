import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.mfnqe.azure.mongodb.net/foruchi?retryWrites=true&w=majority`,
    ),
    ProductModule,
    UserModule,
    AuthModule,
    StripeModule,
  ],
})
export class AppModule {}
