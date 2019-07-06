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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","fa09470d0f99ae7c968f840b92b486ba"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","9b613fab2c2f6bd0418882bb11d22c10"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","20093a64518045b2e69242d82df575c5"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","d33377dc58b47a27c2f83a7ddb093f90"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","0a8f4a4f760ad10e862190a3457a1d2b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","7c5e9eed2a1c4d09b318a998b2ddc8e2"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","73d3f256d7a87fd66b174aed792f4a5f"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","8356a9a6d3f4d6d3ac40f49e3e1da96e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","88a8682214c99c89f2722a821daaebf7"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","c0b50074becd00d9126f5a3ccad06c29"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","8da39fed4f123fd47357264ee68b12df"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","204b73241b31012c374777c52d2512e4"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","f348d820badaec8b9f8e8b556d78f732"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","d6f253471434601592f67dd7ec497024"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","2bd4f4171f82d93ad84b2a341c539b89"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","1583c32bda6bcfb24e37d205c6bfe5ce"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","474594ded1758a53b3ed4645852c2e15"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","c9660c1652f7b8519d0bc740311843a3"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","4d56da1997179318655925cc48b84103"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","abf1c80a9c35f5c4d42493eecd5305f9"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","3905c8d3c81b692db96538620eb96860"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","6b3e5f9a11e04308db0e6d7250e37ac0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","581dc1c0fc959471cd9785b72eac921c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","755e7fe009483a25fb95ded0791956f7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","98a62317b88da4bff3ed07f1063329f0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","0a80882202b4b3e43218ebde52fed262"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","9a044fa1e93ae66677b8346f89b45713"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","8f7b3f1856d301bc685989edef94202c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","b55dd351e20ca8031910841ec6638f2b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","75c2245bc486af43e2f8911a85a0d79d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","f3f1805ea03b5363c60da164cbf0ff1d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","3452278d5873785016324a7b821b20f8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","5edb220fb78625ffaca1ce1a3398738f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","04d1b9ab3a16b1adde3ac7c6b86782ba"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","c6924b49c9da8f044d53dffc18b04182"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","01836e97c44ba5b51bc40af7dc2be32a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","59511bca00eb413d071d3135d5416eb8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","82c9d852b70c12503c2a10d5f27d4b4d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","0656d7a3e0d869f9198b2fa836a640b6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","616d9f9dd2dc9c8f76f440e072be8ddf"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","34fae7154e4ed18afecaadea2846424d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","19c8bed5224909425e544197f87e08dc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","c67b69272a4116b0395c1585327cb61f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","cec79aec0d57cf86edcadcfa5f9374ee"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","63bbe89c8ca0a923026a98a891d0e13a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","2962e3c27504210df5828343eee4c033"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","b9577acadb166556976173674b23e7ef"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","ea6301bb82e1a85079d3fdb69003e9ef"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","c9931dfa68bd0d3bb59f0407d01b7bb6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","d3b9c26b3ad8bca2aaddb72cfd78f530"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","ae07342138c7c535b421bc5096cbcf86"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","f0efd6d935bec04108a3381955ca3987"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","e034df2d6ccdb89646e1e5dfcdce10aa"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","75226619b1f347174d1f0147df03cb6e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","08844570b518700c358bf18776364a34"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","167bfb60c3a24dd8586e4deb66a67a34"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","3978d409e9ba94f7ffb70209490bf595"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","bc5750f57762351fb79d768c600833a4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","f78c2859fc0f0d7df0cd9359b1d70d88"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","01676ec22e73dfe45dd844836b1819a3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","614eb8c5488dfc6ac07cdb61606a6a6c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","e2b722eb08cb615061a286fda7fcf100"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","3fa4f4bff42e021fdbe90107f7782e2f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","03910f9faee15a35637d72c48fc4d2a2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","92fc85e152d548947d48ffd2264db980"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","76de2aa90c165aa8fe113e7bb9dd4531"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","233f5f8e619719a36ac12d7afc1988b5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","be9cdc6a745f5ac313408ece5b3ad203"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","1cd42d003b143d12811b6ca0ee818fa3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","17c22cf641b2d47561b8498a445bcb31"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","bb3f38afb867f223d469edf6b92789de"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","e56856a7e04d24d681d1d9a5f387d620"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/24/2019-06-24/index.html","f1aeeed334a842cfb73143197a105cac"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/25/2019-06-25/index.html","757fb3f69f3fbd714ea854600b2f4a69"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/26/2019-06-26/index.html","184b85f4cfcb1855580667f538bff38a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/27/2019-06-27/index.html","ca597aa23a64d3d763ce78d198943565"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/28/2019-06-28/index.html","f61f605c9be660a5afb1d73380e0bd41"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/29/2019-06-29/index.html","469ece540fb99d20de1182fa27d1a5c6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/30/2019-06-30/index.html","16ff7cf2ed23094e46eb9ce27be08592"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/01/2019-07-01/index.html","575817c00d57ad7fd9e357fdfddcae84"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/02/2019-07-02/index.html","6ff7a9dfc2eb1302b565a8666725d16d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/03/2019-07-03/index.html","80c08d9a5a3d163203468e7fbe784fcc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/04/2019-07-04/index.html","7478255e82c8b79c5cdae23db7bf4774"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/05/2019-07-05/index.html","dfff40a4f7ee8cf9df2ca6690d8c8e90"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/06/2019-07-06/index.html","60cff5a81242b5d93ea91237ab1e27f9"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","ff858ad945239bf1a36ff5a883e826f2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","dfacebc77b84bb87f7a0ecfa6a6a2813"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","db57b5928b4918d5e945088f426c5adb"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","92497b337b2a4d420899081dfe85d07d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","761ab1ec041a4d9de2b5e56bd3cb1c39"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","d8da424a3340527412f897d00f9185bf"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","cea61d9c3fa1052aca2e5f91b7d0fbfa"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","20c7a9dcd96db27b889b134ceb96cc59"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","b9385465c98bd2e35c402b37887af8a4"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","1891a577c61fe7617b6e33b2cc6594d9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","7bab78e3931d8a75eaef08d3d8d27f0f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","5c0312982743917054f35bf3e4359de2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","ab7b20df73b9391a9372119b893c7810"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","c70583e9d6cbdf9d4cc6b017b14f15db"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","a6bf3b2ec6619e4c7e918b2fe8a0928c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","c47123ef16e81350471ce3874248db11"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","2fe35d10ba93f1ef13d4175612ed373e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","94588de420bb4801e7a1578d90b01a04"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","c1eb374da3cf7dfd7e18c1b2d8ad4e38"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","a57b74ee0465744e8b88db429f3b2f62"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","c2e587f154a4a21f98710df7e8a86abf"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","996f02796445586fbe231f6381fb05c4"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/3/index.html","9b3169978e86f8a4c30671921bedccbf"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/07/index.html","556ba76e024807b401dc312696a0788e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","c59ae1c3155f21bf5e25f50ee79d28fb"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","616c5618e370301f5951c4ff86b14076"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","f437a7b1e41fd458b059128be0870ab2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","bae2e168b9984588e50c2c5ab2ba970f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","acb7c0a0f7971bf6f6b0a13293224f83"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/6/index.html","c2846c9d28e10be7c6337e5198869617"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/7/index.html","be738bdc8c826e238f2b8e449025a398"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","403b11cd6f7222e4b9612b3ef10b2271"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","0c21de662eef8d1286b52b18ddbf87f0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","0e92485d4773d1728d594ccb094ef34d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","566477975833c6ee466e5e6e60aff674"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","dfc25a689db3770623917debd693d02f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","2995f3c8273555dd3002fcf17a007d46"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","6e4e74fef9f26c405b665b82777546a0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","db3c9200b851ff53da59ab63604ade47"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/9/index.html","5f4fce2a4e4221e399e83fb58146fb19"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","e9eee43a13f5e60a017630a3fe6a13e7"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","b9bc4b05d2b7f982642ef3e68ef9cb47"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","e4a49d42d05c4440a01d3163fbf11561"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","32e2f2d4e2acd042ba47f187ef0d73e8"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","c93f916cf49075d6986afba63d63f0fa"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","557ab5698f363353fe8c291ccbba92c8"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","8e6625f5562a82e0b0d305c702af2d0a"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","50dc198f82cce19254b26d3608d3fa41"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","99d1d4d60fbce9db858d6917a6f14dad"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/3/index.html","97c9057d894f7374bb4f78c6fc718115"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/4/index.html","539239a9837eecda3f37c3f495f6868f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","ec5c13ac1f0897b4ed875f72da8fbaf8"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","50c06b153f65dd95444d01719157d4e3"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","5245bf4a799fa0a1d5710a05e08c6256"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","c6c46302e25fb5cea2fe45d41ea312d6"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","f490d4d2fea33b2a62e3cc1afc2c9d14"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","cf79fdfbb8614fc7a1d33ae0bc7f714d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","c4274032e9512026aa977ed45f5892d3"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","29753ee37f132536ac7da96ff97bdb1e"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","9c754addd9100c47b6a19ffe31e695ea"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","1bb4fe9f35743a7f7286b583cf0c3535"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","a1ebed585a27ec1f1095f708ef885470"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","ce399f55007e7d1a8c2eba92ae5e0003"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","6e14a61cbdc041900c0721cc96c8e342"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","4482783b8f397e888ec83f17ffc743ab"],["C:/Users/10421/Documents/lmislm.github.io/public/page/9/index.html","a3f61fbb1414fcc12cbbc7ee08e1812d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","1e776700741c32409f1d5ae19accfd98"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","74a7b0a69907acec370af4b4f5bd7f90"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","8deb7ae9af5b208bff395f8703e36c65"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","741a3f78e8a30451238e7fafe3f72348"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","b0eb4fbc4a570ddb800ec7023bcfe56a"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","5398fff30f39da67f9033d94b80371b7"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","57b638ebe288011460c17bff0b73c69e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","1060f06f6cde52f9203621dbf36bc29e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","1981ce40998a924b4a4978f780f5f0ac"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","6accaf77c67697a90ab438683e49dfdd"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","e864991c3d2e9b53100a7d05fefd721b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","fa5461237437a475271bfc705b109f91"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","d24b03ca8187920c724a6e9794997343"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","f453db5ae4fba9029ca8419b65d4a3ad"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","1c684fa0d1e3a614be37a410c348db52"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/2/index.html","5af3a2989558f01b2742fda7accbab16"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/3/index.html","88fbc9e9e7e8b3f1e526f89e239983a2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","171d310d56e0f5bce3ded9c5eae86005"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","680fbbe5e9aa49cf596ffce642f131d0"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","79a3d47ba1574fa5d9baed808ce42718"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","3759b82615db73cadb29aa8d16d57c63"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","c37ebcbc3e37b95af641e949bd26913c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","1c5bdafce6663bd736a8aa7534daa3dc"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","fba202b46d9fe23f91c32c9184e1cafd"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","edef552022a85526c8d5649dae1f29dc"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","d6cc14bcf1619cc7cb14eb1750240412"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","04cb3a908310122aebd3c18fef21daf3"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







