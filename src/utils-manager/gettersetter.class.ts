export abstract class GetterSetter<T> {
  private _value: T;

  constructor(initialValue?: T) {
    this._value = initialValue as any;
  }

  public get value() { return this._value; }
  public set value(value: T) { this._value = value; }
}