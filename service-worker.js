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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","5863ae5bfe15ecc3235c7a6e45906ecd"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","e70086f3d2b9f971828f1dd6fab902af"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","e1c29c81c055c40bac0e35553e1c74c0"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","16872a50c41100d01a493375c05cc35d"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","1be0ff582121c7f7b6bf2eec53e06e6b"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","300862da89dc562996982fa08fd55a35"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","0c91196677b263f767cf05cd89e966cc"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","c17fedba9cf6cbca7ef510183068c7c6"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","c46d13e80b0291a71e2a47e26fbf0605"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","6c44c0e67a78fe27ca0938bcb88e9788"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","65b72297744497f1422506081c73c6be"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","6cbf990010193d8d82794fb6748f138e"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","c25c5d2fee40aec45bb4c418077714f4"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","396deebf4c5ae722a2576b470a11fa16"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","45016f0164af1cec780eff40cc3a0ba9"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","191529d0c916385fe5b7a642291f9897"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","2c00bcf495a4e25fe92b4f87069f791b"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","50ae7b4148418e14ab59e0e905c20387"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","f09132ffaf234aa57ee5e7e9c07101bc"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","384cb934df928c1243f441bb891250f5"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","b60096b7a004da7a8d1120925976d868"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","c799bcc0829741e151d8bb07e223475a"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","05f8048cd5d30805469b562ee08ef574"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","47d6a51f6c58783f9eafe2d33681023a"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","c2022bc7b55a5da6b90e7f7c679ce6da"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","9800deafe0fe44762c1687e07d854ee1"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","3edcc0cea848fd4a31c32bd50852547a"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","298e5f777f564c3f1aa67ee0ea695d20"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","4389c1173dc169e5b0459a32524c0b8d"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","277fac46cc1f357dc1d31a160fe30ecc"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","778c47bc3b643e7bbf6816d04fce1312"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","f928c7f783ba60eb09d2d43233d6c723"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","e4b74cd40aa566e07b9df1640ee1788e"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","de87431d3839d5a222033724db5ab0fa"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","a34c0a35956b84f1de27bf0b1a4d0337"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","a1b25c37803d479bae04cbf4a566bd22"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","3e502f6a097e11bdae7cd54b456ae186"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","8b1c2750101c9f2b5e5d1b4000f944b9"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","58b02cc17518299050181191d2b7e87f"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","43accb1cbfac6d73fcab402546c8dd5c"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","c603d28b3f9b966da2fa3d25cd15559e"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","ba0865e6d8fa23ec2a5e839985c17f49"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","eb5e813e2b3e2cb77c70f7dc0c2b7628"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","5fd595201a917fbb0f205b822c4568b3"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","49c8adf9f82d5d3e346ebb3ed6ddb222"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","291b6cc6ccef2ffc3260984636494909"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","66f2cd8966eee893eec01f4c43f80ed4"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","ee6ae5b6edefd785c8e1e5ff5f61bfc2"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","2d7f3ed65a6dcfb65c535c013231789f"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","77d8272dbd604fb2c0dc8d879a401e5d"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","cc92742b3624fd42c259ee370af59147"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","d294a281f7f4de31149b66f6d9fbf139"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","75792a453d7d18d8ca43ef2c71d7cf25"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","b61812ee3256fa3371db77009125cfa4"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","4c0282060754da6202c4fa1ddc8b7c32"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","663d43730c301d4a9d0a2647fd0ec7e8"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","3c464a39d5d39088a185b2630892c824"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","7e91ce1eb57b1ecc4cd83c8fa2934d33"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","7bf29aa58f8cbfaeaceb6bbf95b6b34c"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","2b8ada863315a6268d98239ccafe83ec"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","ad1aff45d67c6fc5287b06deffd2218f"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","babfb0e790b7f73182db3bf29c9b9012"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","0118ca734b99052f14346e7d238baad0"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","b44a8b1b5e1e53a5948798e21d5c87b3"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","6acb34edd279276b066fed3ac1f6ad06"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","1efb8df1b27e9f803253ea4efda02543"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","bb0588d2ed0bc3e18a1ae29b965ff73d"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","b92189c904c2dc7d975539e8e69cf02c"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","8ccd06049950163e1177b6fa6b66b101"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","61de9726306bf8b612579b2107347383"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","8a902c1cc2ea263dcaac32e488157cfa"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","9838578f014aefe160a28b1ccd0efe57"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","5416ec79429051ebaebeba31c150157c"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","88d243e416160c03e8f2508e44ee6728"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","d0cf18b07e0e0e9d7bcf9dd80deeacee"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","62b679fa71bc14443cf847208ae82e5b"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","b15c02c3e71948978b11c3d0e83cf67e"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","fcd5a38e6affcfd46af732399496f7b1"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","3e1b75c5daad88b1a723d2a3f54bc906"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","d563b08c9a7f0dcf81421a57eb90d4d7"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","2981b5779ce47f7bdc4f4b1b06e71537"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","43b42feff70144364997bb173623ceb8"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","8a7228cb077724d7e69682095b6da892"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","b95dc715793ef15a56421745c574f41a"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","381aa6216d79dc267a9d1a445b995932"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","5464ef49cb117cd99d8b1260ba1fd507"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","601b48ac1ae1d04fc3fc743b3146c878"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","a79052c677a27c9b7a225e5cbb92e2f5"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","9a8bcafc7423c256ea927a19358233fe"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","df47827d136adc3d7cf73c3f8da9159c"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","a18a980843bacb1b6cfee0d5d8a35bd6"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","304adb8a8075f87f87d99b55a9ed9e3d"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","19b78ccf653462f7b42c781fe35870f8"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","86ea6674c957ee7759764398fba825c8"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","e3ed6dd5e2a0bc762d3240aaea78c40f"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","824602364657007b94adf1934e43ebcc"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","16f6485cf266ec8216bd28ddb693c98b"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","3883311ce10d75c23a3f3c1ee0064863"],["C:/lmislm.github.io/public/about/index.html","0333c9497b3eda1ac22e418f4c094864"],["C:/lmislm.github.io/public/archives/2016/01/index.html","545cab1aa5a4e15dbe27405bc014349c"],["C:/lmislm.github.io/public/archives/2016/03/index.html","27dc88492b7ca2e389ca26be667fe68b"],["C:/lmislm.github.io/public/archives/2016/index.html","32f3e3f816bfc12000529e9116f792e6"],["C:/lmislm.github.io/public/archives/2017/01/index.html","9cadb51b26341f447928f99f43349ff4"],["C:/lmislm.github.io/public/archives/2017/03/index.html","293720521541feab9d954166a55679f1"],["C:/lmislm.github.io/public/archives/2017/04/index.html","7527c9ffd8878641dac605d6efa9910c"],["C:/lmislm.github.io/public/archives/2017/05/index.html","98232425b3e11b16e53d5db293064b7b"],["C:/lmislm.github.io/public/archives/2017/07/index.html","69f2b8d65acdb60ea9a6f0fdd9d9baea"],["C:/lmislm.github.io/public/archives/2017/index.html","fdcda2dfaaf6d9f455c8362deda9b3d0"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","f2716de97763310475fde08b13c74952"],["C:/lmislm.github.io/public/archives/2018/01/index.html","54755c54d2d8e823852687f63d5edf0c"],["C:/lmislm.github.io/public/archives/2018/03/index.html","7bce3eecb7a22f08e03ac78d2a09a610"],["C:/lmislm.github.io/public/archives/2018/12/index.html","4accc014c2e26e4af2242c99524d0ef9"],["C:/lmislm.github.io/public/archives/2018/index.html","80690f3be785386de0b3b06e4ddf0486"],["C:/lmislm.github.io/public/archives/2019/01/index.html","2b210458a6e4db7df59c4a2f901a1539"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","8525d93053d36d7cc828ffcaf10aeb50"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","b7bd75a4ed7ccbcf36c2c182446e1a89"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","d3edfdcdcd6fb17e101c2729337438e4"],["C:/lmislm.github.io/public/archives/2019/02/index.html","fe0ed149093378262cf6659867595094"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","15a2ab056b737a2afec32ff9940955c0"],["C:/lmislm.github.io/public/archives/2019/03/index.html","e37de0d02c11d3ef10137228cea55cf5"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","a9ea263c96b4bc3941729689e93934cc"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","40c8a7f590cc3f1f5aa3b02d8add9fe4"],["C:/lmislm.github.io/public/archives/2019/index.html","d2b5f32582f62b8b94e01200cd167d69"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","f0d2b8384ff5e1c92b05a1157133bcbd"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","0bec5f91ac06bb84c8797e9e99ae9e3b"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","e2b251257226fd2790261254a56f0ba2"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","e5e23b23a043e44e53c4a0adc4445355"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","a6e410ebb1e71530b6e95411e195c539"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","c14a70e850555edcbf45d5e62875217a"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","8d367e3be82094f3240f9d1c7085b6fb"],["C:/lmislm.github.io/public/archives/index.html","cbd9a1a40b9bad70bc6806cdb47445b2"],["C:/lmislm.github.io/public/archives/page/10/index.html","d2ef89b0beb1941b575e8b4791218f55"],["C:/lmislm.github.io/public/archives/page/2/index.html","c372233c3a881adc49c379832b937e63"],["C:/lmislm.github.io/public/archives/page/3/index.html","20f9e348fadd69689fd6133f69adbdda"],["C:/lmislm.github.io/public/archives/page/4/index.html","add5504921f77983b08ffedf34adbad2"],["C:/lmislm.github.io/public/archives/page/5/index.html","34035fada3528d8e6dd12ddc24442eff"],["C:/lmislm.github.io/public/archives/page/6/index.html","572f2ec82be8f078c1f787c5a8829af6"],["C:/lmislm.github.io/public/archives/page/7/index.html","8aea888eb8d199db37ef6af660df088f"],["C:/lmislm.github.io/public/archives/page/8/index.html","b797fb502d9355cf15d0d3f17e244350"],["C:/lmislm.github.io/public/archives/page/9/index.html","1ab57e7b3e4e6e22719fcbaf24b10e25"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","16aa3390f2fce08c7601f9ce0c311059"],["C:/lmislm.github.io/public/categories/index.html","4dec74b2fe0651acf63b42c321c6adaa"],["C:/lmislm.github.io/public/categories/xx/index.html","3498890709ac7f0dfa94141eeb17b5b2"],["C:/lmislm.github.io/public/categories/学习/index.html","48a16bf23033bc69cb9059e549ec0099"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","d169042b7e2af5ce398ddda0002421c0"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","b806d4cd2b687ebf6cddd4fbb035a40f"],["C:/lmislm.github.io/public/categories/工作/index.html","8dc65acc3f7218b238a79c6e052164d9"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","3169ae51a77d208d42fb39909f589b4a"],["C:/lmislm.github.io/public/categories/技术/index.html","875225c2eb2cf7537a75d95e78b030a0"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","cc221a9a75574387c8ddcae99a9d6576"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","49e56ce0b43d87f351abf7b13aae2912"],["C:/lmislm.github.io/public/categories/日常操作/index.html","ce2e0c2a4196e7f9e9e30d9058bf9c37"],["C:/lmislm.github.io/public/categories/生活/index.html","8d171fef8239acbbbbd2d0105cb252d8"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","847c5f7ec3719c0273af7ff27b00ab33"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","9c978265ebe9ddff3606c74db01e10d3"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","acfe3057f52994f04eb5b4d62f1dbbc4"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","4c7c899af87aada39a373157cae4bfe7"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","41169c054782e53484e5844b974ef460"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","0a31f970777c9f46c6ed4b999f3abedc"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","2f9d462026d3326cbbf4889e861e54f7"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","5a8c60e992b1ee1598c4bbdbf02a6b9b"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","0d0c7d72119393c69f1d378b0f53a2ce"],["C:/lmislm.github.io/public/page/2/index.html","3cc66cc8e86b10a08db07fce6d314421"],["C:/lmislm.github.io/public/page/3/index.html","b68c00331386ca647ef0988db8784ec4"],["C:/lmislm.github.io/public/page/4/index.html","200f228f48f6d29aa8d2b254cdf21475"],["C:/lmislm.github.io/public/page/5/index.html","4bb1e38e83741d9137acb905eab3150f"],["C:/lmislm.github.io/public/page/6/index.html","948c8f7ad6b628d140b32fe3d44699ac"],["C:/lmislm.github.io/public/page/7/index.html","c867f32328e4515715a6891a888e09e5"],["C:/lmislm.github.io/public/page/8/index.html","a2c3bf3a5601086511b242d37e4b209b"],["C:/lmislm.github.io/public/page/9/index.html","fbd34e77df7a846be6cdbfc8377505fd"],["C:/lmislm.github.io/public/tags/Interview/index.html","59789c003cee3fb9a0c7f3db6b89e572"],["C:/lmislm.github.io/public/tags/JS/index.html","f5d18b5a105542f2030a8b8f4a0b002d"],["C:/lmislm.github.io/public/tags/acm/index.html","f42fe15269647b289d596684592dcccd"],["C:/lmislm.github.io/public/tags/c/index.html","3db8cf586bfdc795a2c051049f88fa21"],["C:/lmislm.github.io/public/tags/codewars/index.html","7ad7f3248a4da923d2a44f1bf635390a"],["C:/lmislm.github.io/public/tags/css/index.html","1967eb1edd7d5a80b3a5b837aa3a4ac3"],["C:/lmislm.github.io/public/tags/git/index.html","36594f00af89383e9ee39d1387e1d1a8"],["C:/lmislm.github.io/public/tags/hexo/index.html","0f0a32944325dbcb24d8143bd0c56ae9"],["C:/lmislm.github.io/public/tags/index.html","f265de16d9d9f52896f8fabd1b736966"],["C:/lmislm.github.io/public/tags/markdown/index.html","a359b857552d0ebe8eb147261eb3689f"],["C:/lmislm.github.io/public/tags/poj/index.html","3ffa2f1445f0d854b3f30d30f2d2448f"],["C:/lmislm.github.io/public/tags/shell/index.html","e41745c1daf321fe9742d8a0dac3d17b"],["C:/lmislm.github.io/public/tags/vue/index.html","1065c91ce6fb6dba9f5cacc32377db14"],["C:/lmislm.github.io/public/tags/xx/index.html","9c73c84327c525144bfc152b0cf23ca9"],["C:/lmislm.github.io/public/tags/前端/index.html","c23e302c4de28cabd72701ea9adb2686"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","8639d35702bb016ac7fa46ba8541a2e3"],["C:/lmislm.github.io/public/tags/小技巧/index.html","6c114f591bc1d6847d9bd0d4978bd2a2"],["C:/lmislm.github.io/public/tags/展示/index.html","980d8e4c42fd376ac2c22f49b29d2c6f"],["C:/lmislm.github.io/public/tags/工具/index.html","0e580920fbd434d1fe95d81ec44554e9"],["C:/lmislm.github.io/public/tags/感悟/index.html","09e840ed6f8b50877c68e8719eaab2e0"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","70cc8022042fccb543b815407ad06b5c"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","437d50f6dd37b2056b6a433389b08f6e"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","73d7fe8133556d4d7654f6e29a880139"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","00bf83e9ece238e2e15ef9a10bfc5a6c"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","92a2711f386713e993951dd49f543aa3"],["C:/lmislm.github.io/public/tags/练习/index.html","ee6d1e4810ca4d73b5e53c9d521f1f4e"],["C:/lmislm.github.io/public/tags/编程/index.html","568fc236c601e1f11b79debc7b3cc76d"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","c4277d659da828949ca456119169da6b"],["C:/lmislm.github.io/public/tags/运维/index.html","5c6286d5c5e49b6486461897066ff4d5"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
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

var createCacheKey = function (originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function (originalUrl,
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







