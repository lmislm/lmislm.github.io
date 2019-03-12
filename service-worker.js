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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","351eb658e90a43c0006686eaca671f31"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","298b07a5912e5c31f04312370b402dc4"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","b0a32cc078a212a4e8e689320900f47a"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","1cac672de2fb22acefcd43cf9e646ef1"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","ec5a0cbfff406a97042e1ed6e745948f"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","b6e067b5a30bd0088940b3ac14af60b9"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","59295434f819702d54ac84190da9df31"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","c4649929e43c78e5b04cf86633f4d2d3"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","004db438d8a65ac5ec37e8478bc85815"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","911effcbfddd48177e0265c66beb6ceb"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","6c69eb7c610e012f5fe34dc9bcb1296f"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","193a04a7fb847aacbdfc917626acd4ae"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","8c782cacd27e710b022e5c6cddc45b2a"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","2efa290a9e94ccc7cda5151db2297e14"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","62cb824d2e0382395405d96ca44c708b"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","bc3d436ff4076daf3e98bc304933c4ea"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","8ae46119b07347cb7bf675d3b24177f9"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","53fbf67ec0c017a5ab01c57ce9fd4c8d"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","05443611a4a922fccaa4506beceffe2c"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","b6f11316568bcc50399d600e613dc5bc"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","1afb578f8914260c74d2af58a1de77cd"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","022e1d0dd8b568a751954f0f407edd6c"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","364c7d645c40886c114f60cab1945cbd"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","2f9010134a2472a174115b8185d44471"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","4059886d0af638dd13fd371183699d13"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","4db8a1a39a9cacb1a85008b8e832f624"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","14fbe91ebb21602d80970212fa49f09b"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","cbdc6edc542d7c571520f09434d05f04"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","7dd54e4a5fe7af0a61bbd641d9b4773e"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","961b819deaae7e30d26c669e60d41a90"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","a563da69b677213836656beb82eede25"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","92abe16f159f33311bbd9f3a24aae3bb"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","794363e509e8a7d6d16b543fb0b9d0d7"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","4e09ac27b25048eb3371953269b41859"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","6382c73a75dde50095cf76b3b151da8d"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","fbde6ae6a1603f74b6ac6beaa1919569"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","2d6f2477b57ef6b87ff6ebea253d049b"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","a0bdc31334d235266ae629a26167a525"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","01634f412ec79dde23dfab67afa67760"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","a989118adafcb97ebd0ffc14012224c9"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","42fad2c6375b3ff1a3164036e0a60ff3"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","591723558d94bfcf0b65b90eb3cbd1fa"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","91686633a6862a0d9d8cd83da766aac7"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","23c191a4994eaa357bcaf26bd3563927"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","2c8e6b14881311f942b320ba83ca15d6"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","7a9df8e541ea64767608c35593c11058"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","827f5891270fbc7c7b97ce851d7ab30a"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","a226ed53bbe3cf2eb663649ce61e41f3"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","739f08376291d5160fa14627bfd0907c"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","dd5dd113eb773999353cddd5c7a27a2c"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","5f390119dce60ca372d4ca5302aee442"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","90aabd3b461da8b3f2517bbb1abff5b3"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","725d9ff87c43c423c785130bf1974c1f"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","36f457690a57873ae9dfab96c2793c90"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","14b3f54a6e63e963f9aba11ca3c6eb35"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","25808555859ef1d9ea68ed0a475d15a4"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","318502e9467986471044c9bc84a9244f"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","ea6477946ab6e789b286c15a59381af6"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","740ab0abb6a5daa7d6db195effe4ce39"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","ffa761aa5b10fe463ec286cde5631c28"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","fa59e53d8da0d1be4f3360d22bd9851c"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","b85fdaa7cefe88e12857844895b435f6"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","651d1215d1544a1a78c3e8c48296f50f"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","3e0b180f454b39819d0b130427150137"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","1dd4d811f5bbd7a3219c533b0fcbf36d"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","6a990a5fdc16b166b8ca410ffbb65736"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","62053904da62547901f6be316e2443bd"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","ae60c3fe9d2b3ece35b3021600c8a2cf"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","3fe7284fb3bf5f4c724fa5a88521a077"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","e7e54bc18def6dee9b06b88f089aee4f"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","bdc1d815e401f204328bfd2a4a50b8ed"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","eab7f99d660c67b9c9f8ca5d90d48c9b"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","12ba118d49fe980fa204940b8727d0bb"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","320a09d6dd9b8e7bcb1b7a5c72a2a9e3"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","d7099ea984ca35951434466388982d29"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","93051b980a30092692d410d4276c1f09"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","f096825cfa9aa3230dcd1e8471f5aada"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","3463eba9a17b2980f18984f3daa8cdaf"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","b7a776e27e81f66a375326bb19cd56b1"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","0d0b921e0f278fff0975ddeb0240b0bb"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","09e3183204560d7643d2d6f0564ae74d"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","8f7ccb0a4000b9a80169c34e1d709f17"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","fe85356d108e28873f928c3d48c6a197"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","f5d664fdfb319ae3684cc878c4afbcbd"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","948c324dcba013f23f2ea5daf9e7ae7f"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","5dcf7c20ab05d826baeaf9eeac5cd69f"],["C:/lmislm.github.io/public/about/index.html","43d7679746d7d54c8815500753bb401e"],["C:/lmislm.github.io/public/archives/2016/01/index.html","62fd2685c0d5bd274f74c4af6cd096f1"],["C:/lmislm.github.io/public/archives/2016/03/index.html","66904d833c49bb16de7e5e530678e301"],["C:/lmislm.github.io/public/archives/2016/index.html","0715e4b111b492c291386b68a8210dde"],["C:/lmislm.github.io/public/archives/2017/01/index.html","c8974a865e6fa0658e57ffde655ea83c"],["C:/lmislm.github.io/public/archives/2017/03/index.html","b2820f36d89a6c7e795dc159edcec3a5"],["C:/lmislm.github.io/public/archives/2017/04/index.html","b2be8c35147069ca6a5025f9dd47b2a5"],["C:/lmislm.github.io/public/archives/2017/05/index.html","50077dfdfb74877f09a04cae3245389e"],["C:/lmislm.github.io/public/archives/2017/07/index.html","8a05c887872c3e2b76c16cdc49d19dd5"],["C:/lmislm.github.io/public/archives/2017/index.html","364dc94f6b81046614807e26d9e1f781"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","9d269e82238cef55fe1e4c429d0a7c40"],["C:/lmislm.github.io/public/archives/2018/01/index.html","df322834b57b0ca5ac654cfdb0460ee2"],["C:/lmislm.github.io/public/archives/2018/03/index.html","1486647849056ea5d9c16f38c02be1f6"],["C:/lmislm.github.io/public/archives/2018/12/index.html","078fa3788e90e62268e9ec96f72ad14b"],["C:/lmislm.github.io/public/archives/2018/index.html","e41fd4231a903cf9a6f95c7d6e5de703"],["C:/lmislm.github.io/public/archives/2019/01/index.html","fee0f61ec281bfb6e9be813bae3f15de"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","9006ccb7442f075185b35999e137a052"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","209afa65a8b271f1cd37404f71f37bac"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","e96048c8b4d73893b3ed1915cf9bf198"],["C:/lmislm.github.io/public/archives/2019/02/index.html","44db3be36fb86d504a81b19b015d28dd"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","bf18fef944fbec627d39bae6f2f0a89b"],["C:/lmislm.github.io/public/archives/2019/03/index.html","b49da4411092c47b2d79bb597a35b05e"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","3861532510cfd3142c17198a6915ad9c"],["C:/lmislm.github.io/public/archives/2019/index.html","60c838a0477745508f8ff0a36108d7a7"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","26b4f308543c3bfc85a1f5deccdef677"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","5c29e87932638d80bd296d517f6b3538"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","7b0f1a76574f8d5f175f3477aa821aa1"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","709c4ca9ce440713d5898d5131538ec7"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","755119c413c7efd151f059b5cb7da9fd"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","7d5b94f1e5d965ae6076f8b33bb65658"],["C:/lmislm.github.io/public/archives/index.html","b06633d0bd02fb97754b1064b485c47e"],["C:/lmislm.github.io/public/archives/page/2/index.html","dbc2be5e981ffe85de9dc6f9dd08043b"],["C:/lmislm.github.io/public/archives/page/3/index.html","462b9273d45713ec5f9c18be99ea14aa"],["C:/lmislm.github.io/public/archives/page/4/index.html","f4242f0db27d5fa141c0b20529a2a3a7"],["C:/lmislm.github.io/public/archives/page/5/index.html","c2942dc43d811bf206e247dcffac94ae"],["C:/lmislm.github.io/public/archives/page/6/index.html","16c3c9fa3db958edcd58c648c51a3591"],["C:/lmislm.github.io/public/archives/page/7/index.html","44477692555b17b72e1283e291733e5e"],["C:/lmislm.github.io/public/archives/page/8/index.html","a7fdc132c0dd0ebdc9609f94064c9d6b"],["C:/lmislm.github.io/public/archives/page/9/index.html","b0aa46f626dc6a7905e93c69e8aee1d1"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","f8de4db4ba4fab75cb4f1d8ee5a1fbd7"],["C:/lmislm.github.io/public/categories/index.html","b2ecceabf71323c5db898dd2b640a6c7"],["C:/lmislm.github.io/public/categories/学习/index.html","ff92ddff367b49f5066fba7b3832af81"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","2c6f848ab06e67ca54e7553e12fa0543"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","8910b25ff642f1ae41b54e7f848d50d2"],["C:/lmislm.github.io/public/categories/工作/index.html","afe5e19fd88037edb9800db214aaf032"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","ab4727cfde97d3e131fdb66596e854ed"],["C:/lmislm.github.io/public/categories/技术/index.html","13c8c8faa743f59523c37668bee7b46b"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","4a2e6821f261c04cc3c7b920070812b3"],["C:/lmislm.github.io/public/categories/日常操作/index.html","409714ce3fd8753a076be416d443440f"],["C:/lmislm.github.io/public/categories/生活/index.html","941f1b1a7ca5732ad0bf4e3f088f6f7a"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","a3076ad44a2af00d1eff2b7e74a6574b"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","ab761177513f85cc701241210eb88c92"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","548ade7721a2645d21fb324bcc0797a4"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","9b46e96bdf2ba7ea6606469f66f5f3c0"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","93b6c2ce945472b8959d1dbe218ec2a1"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","5f614686df32678a3f02b026271543dd"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","4fef519c95c30355f127b9d1bae7d9e0"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","5df18f56fa23617c70c564b05312cb63"],["C:/lmislm.github.io/public/page/3/index.html","3c5c73ac050a84e6050b6cedb214b3d2"],["C:/lmislm.github.io/public/page/4/index.html","36182c7ad676ec84ce146ae092d02e61"],["C:/lmislm.github.io/public/page/5/index.html","5011c7e936afb989add1c2864c479bed"],["C:/lmislm.github.io/public/page/6/index.html","244e682e6612d64de965d92a00ee2667"],["C:/lmislm.github.io/public/page/7/index.html","cb4870639920840104dbd6a93b47f90d"],["C:/lmislm.github.io/public/page/8/index.html","a2f64965b24b816f879e12cc352a048d"],["C:/lmislm.github.io/public/page/9/index.html","e458ad59b99c878c0e186e8d55c4459d"],["C:/lmislm.github.io/public/tags/Interview/index.html","e77655101dd399e3ad7c1123611a88dc"],["C:/lmislm.github.io/public/tags/JS/index.html","b162ea139f38e0ca42e905910f4ea30d"],["C:/lmislm.github.io/public/tags/acm/index.html","2dc116547284e13667c971740d03b2c6"],["C:/lmislm.github.io/public/tags/c/index.html","005e62a217f6a91e7cbd0387c3a56e80"],["C:/lmislm.github.io/public/tags/codewars/index.html","031ab9dacdc3390d8448770a7daea87b"],["C:/lmislm.github.io/public/tags/css/index.html","7855e322a50932a1b056cd7b7568f5e0"],["C:/lmislm.github.io/public/tags/git/index.html","3b528afb56d4cd4dc7766319662a0b85"],["C:/lmislm.github.io/public/tags/hexo/index.html","0cc94172c8b9533cf38977e27f4f00ed"],["C:/lmislm.github.io/public/tags/index.html","34572506ad2ac239a65033e0196e3b93"],["C:/lmislm.github.io/public/tags/markdown/index.html","dbcbca4a0b855dee100376118213a3bf"],["C:/lmislm.github.io/public/tags/poj/index.html","9db0966713c1049f54d58e94f826a784"],["C:/lmislm.github.io/public/tags/shell/index.html","f2e1ed0ea5b702657e5e71755022a6ac"],["C:/lmislm.github.io/public/tags/vue/index.html","a0efc90d3be1cf42345a7bad3d3ce15d"],["C:/lmislm.github.io/public/tags/前端/index.html","0620aefea623668ab1dbdb6c3987d35c"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","cda067d442fe82d7540e1437e3a171f7"],["C:/lmislm.github.io/public/tags/小技巧/index.html","5b256d11f59e2d02538e15907c541710"],["C:/lmislm.github.io/public/tags/展示/index.html","eab4c8d76110c4ea4ed4a0d803b86241"],["C:/lmislm.github.io/public/tags/工具/index.html","8dac13d68b1c3b01518a42ab1bfe1676"],["C:/lmislm.github.io/public/tags/感悟/index.html","a8bd707fe07d51647f05f55171c8cd31"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","019a480a3c18c6fac58febb22e9821c7"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","301f2acaba06ec897c461d4f0eb14c44"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","7b718b5390d301c0b3adf1f496cd5700"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","bf9ac3cbe0dd62a82dcefa7fd7a4698a"],["C:/lmislm.github.io/public/tags/练习/index.html","99b07cc628bc769d6144c90be383d131"],["C:/lmislm.github.io/public/tags/编程/index.html","07b7ca34b048d79e90ec58e46b9d1150"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","08a0f9b567ba35dcc3ffddedf963926e"],["C:/lmislm.github.io/public/tags/运维/index.html","9c800e33ac3f434fc698393617de8496"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







