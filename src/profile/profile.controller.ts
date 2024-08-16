import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {

    constructor(private profileService: ProfileService) {}

    @Post('/update/:id')
    updateProfile(@Param('id') id: string, @Body() profileData: any) {
        return this.profileService.updateProfile(id, profileData);
    }

    @Get('/:id')
    getProfileById(@Param('id') id: string) {
        return this.profileService.getProfileById(id);
    }

    @Get()
    getProfiles(@Param('id') id: string, @Body() profileData: any) {
        if (id && profileData) {
            return this.profileService.updateProfile(id, profileData);
        }
        return this.profileService.getProfiles();
    }
}