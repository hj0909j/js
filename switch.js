// switch (browser) {
//     case 'Edge':
//       alert( "Edge를 사용하고 계시네요!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
//       break;
  
//     default:
//       alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
//   }

// if(browser == 'Edge'){
//     alert('Edge를 사용하고 계시네요!');
// }else if(browser == 'Chrome' || browser =='firefox'){
//     alert('저희 서비스가 지원하는 브라우즈럴 사용하시네요.');
// }else{
//     alert('현재 페이지가 괜찮아 보이기를 바랍니다!')
// }

//////////////////////////////////////////////////////////////
// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

let a = +prompt('a?','');
switch (a){
    case 0:
        alert (0);
        break;
    case 1:
        alert (1);
        break;
    case 2:
    case 3:
        alert ('2,3');
        break;
}