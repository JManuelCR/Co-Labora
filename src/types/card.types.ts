export default interface Card {
  name: string;
  location: any;
  ratings: number;
  price: number;
  comments: string;
  score: Number;
  onClicked: Function;
  _id: String;
  image: string;
}
