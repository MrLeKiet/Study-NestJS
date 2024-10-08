import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {

    constructor (private PostService: PostService) {}
    
    @Get()
    getPosts() {
        return this.PostService.getPosts();
    }
}
