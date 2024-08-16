import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileService } from './profile/profile.service';
import { ProfileController } from './profile/profile.controller';
import { PostService } from './post/post.service';
import { PostController } from './post/post.controller';

@Module({
  imports: [],
  controllers: [AppController, ProfileController, PostController],
  providers: [AppService, ProfileService, PostService],
})
export class AppModule {}