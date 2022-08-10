import { Module } from '@nestjs/common';
import * as path from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.mfnqe.azure.mongodb.net/foruchi?retryWrites=true&w=majority`,
    ),
    ProductModule,
  ],
})
export class AppModule {}
