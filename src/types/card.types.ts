export default interface Card {
  name: string;
  address: string;
  ratings: number;
  price: number;
  comments: string;
  score: Number;
  onClicked: Function;
  _id: String;
  image: string;
}
