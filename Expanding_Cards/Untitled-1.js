// var x = 100
// function test() {
//   if (false) {
//     var x = 199
//   }
//   console.log(x)
// }

// test()

// let arr = [1, 2, 3]
// arr[arr.length ] = value;
// console.log(arr)

// (function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//   }
//     , 1000);
//   setTimeout(function () {
//     console.log(3);
//   }
//     , 0);
//   console.log(4);
// })();

ip_address = ['128.12.34.0', '31.258.90.11', '0.0.0.0']

const getRegions = (ip_address) => {
  console.log(ip_address)
  ip_address.forEach((ip) => {
    a = ip.split('.')
    console.log(a)
    if (a[0] >= 0 && a[0] <= 127) {
      if (a[1] >= 0 && a[1] <= 255) {
        if (a[2] >= 0 && a[2] <= 255) {
          if (a[3] >= 0 && a[3] <= 255) {
            return (a = 'region 1')
          }
        }
      }
    }
  })
  return a
}

// function getRegions(ip_address) {
//   ip_address.forEach((ip) => {
//   a = ip.split('.')
//   b= []
//   console.log(a[0]);
//   console.log(a[1]);
//   if (a[0] > 0 && a[0] <= 127) {
//     console.log(a);
//     if (a[1] > 0 && a[1] <= 255) {
//       if (a[2] > 0 && a[2] <= 255) {
//         if (a[3] > 0 && a[3] <= 255) {
//           return a = 'region 1'
//         }
//       }
//     }
//   }
//   else if (a[0] >= 128 && a[0] <= 191) {
//     console.log(a);
//     if (a[1] > 0 && a[1] <= 255) {
//       console.log(a);
//       if (a[2] > 0 && a[2] <= 255) {
//         console.log(a);
//         if(a[3] >= 0 && a[3] <= 255) {
//           return a = 'region 2'
//         }
//       }
//     }
//   }
//   else if (a[0] >= 192 && a[0] <= 223) {
//     if(a[1] > 0 && a[1] <= 255) {
//       if(a[2] > 0 && a[2] <= 255) {
//         if(a[3] >= 0 && a[3] <= 255) {
//           return ip_address = 'region 3'
//         }
//       }
//     }

//   }
//   else if (a[0] >= 224 && a[0] <= 239) {
//     if(a[1] > 0 && a[1] <= 255) {
//       if(a[2] > 0 && a[2] <= 255) {
//         if(a[3] > 0 && a[3] <= 255) {
//          return ip_address = 'region 4'
//         }
//       }
//     }

//   }
//   else if (a[0] >= 240 && a[0] <= 255) {
//     if(a[1] > 0 && a[1] <= 255) {
//       if(a[2] > 0 && a[2] <= 255) {
//         if (a[3] > 0 && a[3] <= 255) {
//           return ip_address = 'region 5'
//         }
//       }
//     }
//     else {
//       return a = "invalid ip address"
//     }

//   }
// })

// return a
// }
console.log(getRegions(ip_address))
