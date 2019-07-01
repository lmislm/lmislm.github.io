/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","743f8ee2640ae78bb3743b69eb151b5f"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","455c988c66270fce6e0296222215e91b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","acadb4af8dcfcc5841759527e2c401bc"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","3552598f985ca629d23004abe63aef71"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","2257f052d080955dbe73936d64e287bd"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","dbcbcfd137e48009029d1aa5c0cf74a4"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","a1958b3be8ae5fefbb9f4177aa9f3078"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","fd1fe54506232384deba3dc31bdb7aad"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","88039b9760fcf69f443e86ac3934c434"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","8739ee6c5d9ffd6ab3d1d59d697da655"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","fdc78228f612fb975530234d52a11101"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","b7fca25f5a2a06dd8e7c99d015c17a10"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","82e2468340f786d88068659b64fd3562"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","bb042ab058728d44a1ab83a260743581"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","611f00ad70250099f2272d9e2cdc605c"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","b02b505ae735cbec026e0e6336abe513"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","595725fcd53ce3e654985b3fe73c442c"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","c114452438a3bf23f8e737e19cee8db6"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","de30b0bf1eba6ba50299c9b8143e5a96"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","ce2639f0b7c0455eb8664d9c80d2b387"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","d4c8ee70299e20aabe326935b767bb52"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","fd46e949ee5fca3e918f95d33d925225"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","994ceb4addb271b233b1a5028b8c182d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","54ee41dfc29ebb5ad4fd6ebbba10ba13"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","64ffa29ea9590a42943d13b5d2519dbf"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","e6f6ed62c3afc1c94e882b03b25c2ac1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","31a60aa03b03bef740887235cbb63449"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","8697e7b911b46e6eb3ce82ef7d7e8a61"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","4a11aebfaa6332aa97b9ca1321e32ffd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","8d3999f0bed0ff84a985712e9984fd4b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","ae3dc5389e769c015c54991ad09123e9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","dc1f21da9941729d58ff6801e7e650c9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","77b85da91b3ad6fd3f0ee793f621c401"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","03915049675f6169168c065942b919c2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","15fe3ba978f7d64d7ddd62e1cca2c705"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","3084fca537c032ef95011c2afbec6888"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","874e6c73c5df47a4e6eb5b8974212b8f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","88616b5f5badde4dd11ef951ede64045"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","ca2a363e022a9cf93ed10f69cfdac383"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","afcfb764b87593d0e0c8735a12b2e1c6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","b068b0776bf404b1b0a95fdf4caaae3a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","4768aa4b66b3c0d2ca1f0bf255eb7fff"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","114de1ca5e3f6f2797db6fa702517638"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","2c455252336d03f69b404c0c865703ba"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","3d83f0af83b67372abdee020eb7b41fb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","8051092239d98697ac19ce4baa77188e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","fa22d9faa654fbd175084276419f857a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","6da4ca45b8116144f210d30eded1fe46"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","0c72861ef19e6ac75cbe0ad946d329b2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","067e36b8a1c40cf2475a50b01c459790"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","9d3de859e2b1621e8e8b67b85f12ad1d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","b7379f16d4ef636ae5fb0a45b5e1e25b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","acd3a6d70505906e17564fb347d67eb7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","64884b828ab3e674a50a85bc3b6d5529"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","5ed46a0d985675d10cf400df180037c3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","807e477d07b82527fe0f63d5bbc68022"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","12c28bb8b02b81a919ca5b1dbbf4ba08"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","71178e18b83cf9f18c3e52962642591a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","f429125651cdf77150da908f9986b8ab"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","b6fde94d2d1544571ab0a5777842065e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","dedbf3e8c9ec914e810527c14787599a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","a6f3c498d8924ac5e4e1a2cb585c5ae1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","4464c1652cb71809105c063a83824262"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","6b88c552b46f996b16d3e03d5f53e638"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","4bac3b628865ad392f6e7fa7010e423e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","420df09677efad707a29a4dbf2d0e61f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","06447f6173b1ddeb7fcf7e3ace2b7fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","253660c921c9bd9a58918fe1c4a34bbd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","3cc5d60467a4b22863268e15b9b573eb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","567308e7fa544da370ad350b5937e585"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","e3b5d80e13dde277448ff831aa48a68b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","5a72982e8030da4ddb1ade649e160759"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/24/2019-06-24/index.html","f6c2d657db8a84923c99808c6a390976"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/25/2019-06-25/index.html","280bdf52a021c2948d0c247645cd2f27"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/26/2019-06-26/index.html","e9409db0b2f60bbc63075db1a8a81358"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/27/2019-06-27/index.html","9e6f9738b79fa303e610b1cce570616a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/28/2019-06-28/index.html","9835f27cfea2852539bf4092df46da03"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/29/2019-06-29/index.html","8144e34c715fa0b09b19e6c75badd520"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/30/2019-06-30/index.html","8c0c232452612478251f6edb98e2ca47"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/01/2019-07-01/index.html","0e0113f381b7adbd8e19e027ed168798"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","d7c2fa75a2c9107afd0e2e6c029bfa52"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","13fe99746efe3b13e480ae7a1823a63f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","6e490e21e139b84778d819e23de3f5d0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","3705dc501c1a5a441ab4d1fa12053695"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","5652e3533c26fb52c2fa18860c18546d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","9fbd5bca7b27fe9d4d643b5014bbc149"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","4dd0281a87c69a2455a773dca195d5a1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","8fdbf053b9f2eae64c7a7f18093915bc"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","461009a17329098ff6c297fdfbf87541"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","0f9ae06c76c31ca940820b40af6ac778"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","cb2c0251947810baaf9d08942a0b53a8"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","bff9d5dd17232b2a855f069fc894e9f5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","05085c43eafcaef5ee9716164ad313c9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","37862da941a6ddaf515d83e9ff457fa9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","37891039d1cd2a50dcc8712e2729156b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","4fe9dbf33d6c6dfc5099bb8cea030e86"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","97e05b2ce234b2c8995aa7f3b01365c9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","e32ece0f50ad97c5123a4478517b4b71"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","81d148349de51fc78bb669c6c4da4fe2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","595d29755b9aa79d0fc4f8b49c5389d1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","943581338ca01c72ff4628315e6be00c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","898f678884347a13301392d8f6283936"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/3/index.html","e0efe49be13681db8983b2ba0a3c2716"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/07/index.html","4a563a37098c396ee33b9e346456f9e5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","562a629475d5b7f0847eb0f04d28271d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","891d60a87ef061b10880e4374048247b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","0716d626511bc50a2bcdab65ce8c4dc5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","6db195240a6c2b27def7ef5639bab760"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","cd1bade5d2c97309ce716104d9f3a0be"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/6/index.html","ad3236ef97f94315a6bd9bf14d683b58"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","457ae9e3926d04938f053b42444ff384"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","760f940f8356723a58707fbe5c7004a3"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","4b9960bc4db351023a270c6a045adf02"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","c0b2eead193296f4838b2f7bb822890b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","0a72da029faa6ecc71e320fbc6dad60e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","de4a933f07ba0bb63e798d99293f6c3a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","608251807abd01dea55280667a226d1a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","ee1e2a6b6e23ac91ee711c6434ce0e9f"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","7ff096f352b07b01d05695b1fcdeec94"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","ce0f5c3d74b022be02f5746269e3b7ef"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","93e550e6f9aadfc7f9b2730b6999355f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","aa7da04d9906c177e2978990c3b718e0"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","9905260a7c1dd9ada5cbe01a03461277"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","9e0c39f36d929b143dfefbe0ff7324b9"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","e35c4b04322751df98c0cc1bd8b90ea1"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","4e105370ffd92653b5afd59dcf5e54f2"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","c044465c44a2e6a04396b4284a52bf6c"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/3/index.html","beabf5c2e01a7bab18972aa7dc5ae900"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","e3c239237e60e3d7f102e626c90bf6d0"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","de874173dd99b827d70e9dbe4850caad"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","d9ae361da5d029ebc363513158010d9e"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","484f923d79a4694dc24890941e96f7de"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","a430ffc88df7e87528345c8e1bbbf575"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","c58f6c130d32ac8aa4122c1dd3877d3b"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","1a19311e568bf1e3006420f00992b138"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","cc71a1bb3bc88eedf770e8661e6a0b0e"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","bbb20621b0f4d61dd5f0501e9a014b57"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","3483e94a95be27bab1d569072c339806"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","935fdcb2f9a28369916db49ed897edd1"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","dd76c9b5628a6f872eacb6e4ce20b0ea"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","ea36a8438385d1d0f51d7584fcb84083"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","dd6d468861e393211059f3a45d8c9d86"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","5fc1afc94834ad559aa3d340bd4a2975"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","cda5c636013a7c56836d9111d6f8c6f2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","7388a12f5e9aa47136ee50ecc521ed79"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","65926de3152454a47640f76d9d7adaa3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","c2912a85a7bf30a5c2b8bfdb1f5bfc83"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","19b78cb2c99c8bc7ec40c999f9313f73"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","c19927b35916d83780391323528fe51f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","484c5d8547c510ac3bd512a67b5e66b5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","613134490d5c6fb45a16a69f34c4d97c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","a686b078e15ad44986dca4e837e9ffeb"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","ebd2d35182f608c80aea036f23ea03cf"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","29623c947c85066c925a2713468bab30"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","6399d2683860afd1f5bfc8fb07cfd30f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","e5458e0cf740b5cb75ced9b3aeae472c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","ea8264fec8d0bc869672c203d07e2aef"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/2/index.html","6fdbc66c943e3918e4b1b646e7820a7d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","d5e8239a99ba55126fac6ccba39c7a12"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","a7d41cdeecc3e38a1f2cde0ef490f033"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","a7a2b6b87ef397918de46dd8959af5d6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","4f2326ec4f188edacd8c7a080b657472"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","720498eaebf85a096ceeae5d82c95eba"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","ce89d41b11b03d8ff02d9ca0149df87f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","4cbc46080fe1d91bb4993d4e17a5d8b8"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","a5f92599259374bbb7d56860cff3b9fb"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","aac8108f0b36283863837412b32e8624"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","d4366a2a7349ed617ef19448d4f352c3"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







