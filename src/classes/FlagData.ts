export default class FlagData {
  id: Number;
  country: string;
  apiKeyWord: string;
  imagePath: string;

  constructor(
    id: Number,
    country: string,
    apiKeyWord: string,
    imagePath: string
  ) {
    this.id = id;
    this.country;
    this.apiKeyWord = apiKeyWord;
    this.imagePath = imagePath;
  }
}
