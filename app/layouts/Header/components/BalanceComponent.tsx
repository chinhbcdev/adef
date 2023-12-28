// import { useAccountBalance } from '@suiet/wallet-kit';
// import BigNumber from 'bignumber.js';
// import React from 'react';

// const BalanceComponent = () => {
//   const { loading, balance } = useAccountBalance();
//   return (
//     <div>
//       {' '}
//       {loading ? (
//         <span className='spin'></span>
//       ) : (
//         <span className='text-lg text-[#F9F9F9] '>
//           {balance != undefined &&
//             new BigNumber(balance?.toString())
//               .dividedBy(10 ** 9)
//               ?.toFixed(2)
//               .toString()}
//         </span>
//       )}
//     </div>
//   );
// };

// export default BalanceComponent;
