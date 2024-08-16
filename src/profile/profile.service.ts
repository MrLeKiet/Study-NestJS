import { Injectable } from '@nestjs/common';
import { Profile } from 'src/models/profile.model';  // Assuming you have a Profile interface

@Injectable()
export class ProfileService {
    private profiles: Profile[] = [
        {
            id: '1',
            name: 'John Doe',
            email: ' ',
            phone: '555-555-5555',
        },
        {
            id: '2',
            name: 'Jane Doe',
            email: ' ',
            phone: '555-555-5555',
        },
        {
            id: '3',
            name: 'John Smith',
            email: ' ',
            phone: '555-555-5555',
        },
    ];

    getProfileById(id: string): Profile {
        return this.profiles.find(profile => profile.id === id);
    }

    getProfiles(id?: string, profileData?: Partial<Profile>): Profile[] {
        if (id && profileData) {
            const profileIndex = this.profiles.findIndex(profile => profile.id === id);
            if (profileIndex > -1) {
                this.profiles[profileIndex] = { ...this.profiles[profileIndex], ...profileData };
            }
        }
        return this.profiles;
    }

    updateProfile(id: string, profileData: Partial<Profile>): Profile {
        const profileIndex = this.profiles.findIndex(profile => profile.id === id);
        if (profileIndex > -1) {
            this.profiles[profileIndex] = { ...this.profiles[profileIndex], ...profileData };
            return this.profiles[profileIndex];
        }
        return null;
    }
}