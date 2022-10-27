export class FloatParser {
  public static moneyAsCent(float: number) {
    return float * 100;
  }

  public static floatMoney(integer: number) {
    return integer / 100;
  }
}
