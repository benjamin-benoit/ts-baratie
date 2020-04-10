export default class Kitchen {

  private _multiplier: number;
  private _nbCooks: number;
  private _time: number;
  private _dish: any[];

  constructor(nbCooks: number) {
    this._nbCooks = nbCooks;
    this.introduce();
  }

  introduce(): void {
    console.log(`The kitchen is composed of ${this._nbCooks} cooks`);
  }

  addDish(dish: any): void {
    this._dish.push(dish);
    setTimeout( () => {
      console.log(`${dish} cooked by Kitchen!`)
    }, dish.bakingTime * 1000 * this._multiplier);
  }
}
