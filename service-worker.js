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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","cf58dc9425c792807e229248c45bb57c"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","32b5e7db1f95440a1cb07ba00e673d35"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","ff9a10bcdc0be17417531864d0243f16"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","b9bef29d74be5c729f0e22817cd9188a"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","90ad385a0d774836b53f2737ad203dff"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","aff2093c19bec4989123c5151cf06d1b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","c7d623c87ced5e3c4639174bda6766fc"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","35f4bdf7b7547d03d8daa51669a0dc59"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","2698681013b4b5260fd57b4da1f5fe7f"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","9f42a69758ccb1bea9dee65494498bb7"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","bb7aa243021682cd63a48dc61a0c637a"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","6808d30c1557fd0ea4aeb557a940b31e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","5b8df032263717ba2113333023073635"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","45bb1deb53df05b7b3496f524cf17ab8"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","21c5c46f196e243bfdac29484ddff029"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","e54fbef1eec288deaec2583affebd348"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","3dff9228e1a91234f46bc57d036b28e2"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","36ba2f5303afbb15a1497f2e8f73cf0a"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","f139f9c26abae0f978dc8543fc4de1a9"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","5a1cc0849a7c1d96724b5ccd87415387"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","9006aba3f08988d6baf2b185f2637edd"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","8e3cb604fcf6946935c9e0803b7dc491"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","52cadbd88cd9f091e28f789e6af7577e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","8f48aa431008673089eedb06e8463dd0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","2e47aa313965af71d494d94a937ca112"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","14c341d46162e870f6ef95ab1872cb2b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","39e473ae9aae93ae5627b0e58728a258"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","acf75e572501aab8fa28c0575df1f3e1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","74ae087d66a1daaa22c1256318d5f41b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","419becd06e22b6c27e77a3e891a9e8b9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","1108ed53ed9af2aa0f42f6d8c2786883"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","2510e3f8c847c13ae7626610b2dcc8bb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","98a6e1aeb5a3ba759117d0e6985a4491"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","07062d61ee2bb81bdabf0da380e86d68"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","39d39622001973d77c295d6ddd4bb1d3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","bcca1193638962b0e8da3abf402d0b98"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","4be2d7b473839034ccd89bea3ef73982"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","1bcca110705d885f32c10c78aa6afe65"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","cb8810dce8759c808f9e3420761f9ceb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","5b98a6615bd92b06fe3ac7d8ffe83280"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","1a9310090ef7a911956dcedcb8bdc31d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","383ba7045b55b8df4f278c931e556858"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","4bef6e757bdab13dbbeb9a6c5b90a749"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","ba21ea993a6ce4001d1d5ab04553dc65"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","0b33a97b479f65ac3ed6f569840bece7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","a6ba995da1bb3451009d8687cd294e06"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","01614c26154525bbfe4a04993def1c7b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","e5433d7e9b7b2a89f6027d4bd1e9ec07"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","55332c0e3fd42b5415c80f45890c7538"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","d1dee0ff5f6d7b81811e0f85b483c316"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","a529bd5d6c022069f23cfb2ffddb41d3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","7883d50b9227f37f03a0617b013c48a6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","7cab6c3f2f0c4646d711cfdd2269cfd4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","32a6e2a7631cb5460b16f00b312ce79a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","bb15ab277b3341206008a46bf7cd98fa"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","fd30bde8524bedc4df5f3b4077ce6615"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","0f1e3ce6233b1ce7c4e7492786aaad24"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","efac8afe05d8b0e4bdaaaf9e4b163a25"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","8ca67ff983c0763bac5ca594ebf5ec00"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","cd7217ea0255f11c1ec392386e9e3daf"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","814ad361b3e6aa3df7ce102b291999aa"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","3106b1705981c3424dfb9e18ad917302"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","c036c8dc14c81939833dfc69fe564fff"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","a1ee6ef78eb8c4ca8b0c3b0b2a4f3e96"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","f7f6c3bb66f6c7ccb56fe933e6fb73d6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","2436944206843de050815ac554b62436"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","569893dceba1e9b23467fc48f41eafe3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","3185a1ab9c80152196a17d360bc51824"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","ac7b10883cdd74c08d1c62491d30f56b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","15f60c5e376a6e8227dba4dcab25ef55"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","4ac14b4f9fab4401c15a83ab78f674f8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","c3fb7a1ae86c21c80fbfd244bca38680"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/24/2019-06-24/index.html","4fb9f3fcfb91a168e9bfccbf6442071c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/25/2019-06-25/index.html","4fdb4816bae557f37553bb6cf0e5dc2e"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","63d686398c9d3543dff64e431a394343"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","5641078889487bfc40980935c3ed6d63"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","4c488c4ec5312332c62791f1fbdf8af2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","3a068a37310d5b177703109f81812337"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","0afb074f5fe50f1179138d75412af3d6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","b3b57cbb6e111f035d220ed4754e9ec5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","889b926c144e3c33a4281ff1969d861e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","301a33334d2411cf6811434dcd32fc69"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","dfc864ed5a6f0dad4e980a268ced532d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","bafeb16a0d764d4ce0e46d0232c02aff"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","4d2a8d3b2ec799aace906ff90b85eee3"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","4d87e505c6953ea775fda097e588ef8c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","140dd8f5ca43d0cd1ec8351ebbca8c5e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","1a29a280d8d9e5dff488d8d792156456"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","9ee6f0e18b1ac74bb4476e2a56f1d2a6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","5fed740fd1d65adcabffef2864ca72ec"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","469923f92c52883e6185ca7c4a44c4ee"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","dc7a1ce2cd6ab77d3b915b539c0738d1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","6da023cd4663a69623db21f50bd3860b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","e235e9afd98ba3ac0ce551f6459b55e0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","1125472148b852255b317206543db19f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","b06924847215ccd0fbe83d909dddb3b1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","3a96eb3a562b64cbf5387c2740b1d89b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","b46638deb526bceb42fa5968e38a1a79"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","a18e67d9c763a1fa6e87ada18436d41d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","578278697fcdbf9c326f6dbc2d197d35"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","b7515509ae3c96525cb25ef929f3b8b3"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/6/index.html","8b52fe27c3e4aad64e5a185b3a293df2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","6561cf307ff97396bee412a496c782e5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","cc42e0369a911cf6c606f3d2a4d7291d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","d38f8180058d88df10bd8a8f39a22675"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","9f636b7024b55a07ae64bbc8d7eb5031"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","4ebc61c1ae7986b09738e6bfa0b8af23"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","ece401eb064e935529d3f687956c43b7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","7232cdbbd1d6dc792cbcf1cf933e8872"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","16d3b007ece9777f0459c1c2aac15fa6"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","4bce282c8b5a7533ed36a0d8fa9194fe"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","32370e9f1d7294b1c5b159feb17a99cd"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","3916c5a189811f1f47523c134573f138"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","fe3edbde632a1a4b4b9c8011ae81bbfd"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","48bfb24b079494e3ccf0b956fedb5825"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","55b8fb861afd6bc27c3ecc6d0eb12ff9"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","6637d6e1ad1392427c5bfe22068805c3"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","6c36738b9bebea70576cd3b7dad30bc2"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","00033f3b3259f0d7ce26fbf19e0e8093"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","c2348e11fde57474985df77cabbf1041"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","3f8859c241234de570090abde508c334"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","393d43e6fe9c840ed261af77d96cf230"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","2988e6a0098a22817fbad052658abf1c"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","7984625dd4f8509e8cb5c16f569930a6"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","f91fa651b33f745f8767cdd157c9163b"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","acdf9397a0319bcc8131904108db8fa3"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","f7c69f4ce733caeaf1adfcbb8036e092"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","2858d9f6210c69eed270bda4ebd9c25f"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","93d2423798b20bda5b3108d0bc8592a4"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","55910a627967fcf79014646e7e8dc22f"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","4c1b2c3cea2e5857e9011e9d5ae7b4aa"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","ef62cf8addc05a142d5817098d817da0"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","f22de4af3b2498c30c5a8bdd5bbda58e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","b993d14cc74533eb71296c4bfb099bac"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","4e8e6e0baa5adf455fbeee3bc556a124"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","aab59204786abe71dc01eccfa647c61b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","c66b11299990972320631e1d59ba86d8"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","e7ce4b13fe239acbe348f2b6f5bb7afe"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","c0566bdd5a9ed27795590c96d042c713"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","93ba5fa1a87fc9debe81ceb9f14e08a9"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","e223f4aa8966f5808bd9b6d9f182b9ae"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","ce297b0b353dff4ae4e5e9c26999f6a4"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","9540a750ba6297ee4fb7a392936f58ed"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","711922970421e8b881a6d8b958cadf8c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","d189abf414a7e41dbd3364b44bc05911"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","ae292fa5dae920067afe3f39c9adab2c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","7170d288f4fd5b357a811ea762e009b1"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","2b702e0de0f2882664f6336b92843274"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/2/index.html","5b9ef78f5551347af4669e06dbd6ec17"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","5653722d180a5c3d72dfcef50bd993c7"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","b8a4c483c8b35e25b3b0787a9b45599d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","abcfba744b74d97abe8727524fae68ea"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","ddbe8e516066dfbd88b9f2f68272ad12"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","d63faaba73c21327e1e7f316f6bf23b8"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","d751fba95b547e83662fea39e93b3468"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","3d6a8460f10ff665b8e0a1e09e7375e1"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","fe405d67e6395c717c201bf6de158844"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","9296409ba0f3d9349266bc5f274b19d0"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","715e13d34944d34cb6c315e617504368"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







