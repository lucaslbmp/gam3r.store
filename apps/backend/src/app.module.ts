import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProdutoModule } from './produto/produto.module';
import { PedidoModule } from './pedido/pedido.module';
import { DbModule } from './db/db.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ProdutoModule,
    PedidoModule,
    DbModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'frontend', '.next'),
      exclude: ['backend/*'],
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
