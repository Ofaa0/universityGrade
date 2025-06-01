let degree = +prompt("your degree: ");

switch (true) {
  case (degree >= 0 && degree <= 50):
    console.log("ساقط");
    break;
  case (degree >= 51 && degree <= 65):
    console.log("مقبول");
    break;
  case (degree >= 66 && degree <= 75):
    console.log("جيد");
    break;
  case (degree >= 76 && degree <= 85):
    console.log("جيد جدا");
    break;
  case (degree >= 86 && degree <= 100):
    console.log("ممتاز");
    break;
  default:
    console.log("بطل عبط دخل قيمة عدلة");
    break;
}
