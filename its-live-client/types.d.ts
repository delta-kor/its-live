enum ArtistType {
  GROUP_FEMALE = 'GROUP_FEMALE',
  GROUP_MALE = 'GROUP_MALE',
  SOLO_FEMALE = 'SOLO_FEMALE',
  SOLO_MALE = 'SOLO_MALE',
}

interface IVideo {
  uuid: string;
  youtube: string;
  title: string;
  description: string;
  date: Date;
  start: number;
  artist: IArtist;
}

interface IArtist {
  uuid: string;
  type: ArtistType;
  name: string;
  color: string;
  videos: IVideo[];
}
