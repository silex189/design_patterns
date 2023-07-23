import {ThirdPartyYoutubeLib} from "../interfaces/ThirdPartyYoutubeLib";

/** Remote Service concrete implementation */
class ThirdPartyYoutubeClass implements ThirdPartyYoutubeLib {
    public listVideos(): string {
        return 'Request to Youtube to list videos';
    }

    public getVideoInfo(id: string): string {
        return `Request to Youtube to get video info about ${id}`;
    }

    public downloadVideo(id: string): string {
        return `Request to Youtube to download video ${id}`;
    }
}

export { ThirdPartyYoutubeClass };