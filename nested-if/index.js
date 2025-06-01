let degree = +prompt("Enter your degree: ");

if (degree >= 0) {
  if (degree <= 50) {
    console.log("ساقط");
  } else {
    if (degree >= 51) {
      if (degree <= 65) {
        console.log("مقبول");
      } else {
        if (degree >= 66) {
          if (degree <= 75) {
            console.log("جيد");
          } else {
            if (degree >= 76) {
              if (degree <= 85) {
                console.log("جيد جدا");
              } else {
                if (degree >= 86) {
                  if (degree <= 100) {
                    console.log("ممتاز");
                  } else {
                    console.log("دخل قيمة عدلة بلاش عبط");
                  }
                }
              }
            }
          }
        }
      }
    }
  }
} else {
  console.log("دخل قيمة عدلة بلاش عبط");
}
