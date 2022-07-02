export type PexelsResponse = {
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  total_results: number;
};

export type PexelsPhoto = {
  id: number;
  url: string;
  photographer: string;
  alt: string;
  src: SrcImages;
};

export type SrcImages = {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  portrait: string;
  landscape: string;
  tiny: string;
};
