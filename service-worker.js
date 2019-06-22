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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","e22b44f767a0ca289f3c3557703bf63b"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","2e564678935b5a708b63692fab0ee81d"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","b7dd358b90c7e3138048a6dd1e19f958"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","0334851c8c2f7bbd2d1083ce3742df34"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","7f507ccf9ec3e2b6f8a54522dbea0413"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","c34a85cf8eee1ac57b1b0dbb1771182e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","11c3b7a38c6e5ea53f9471ee091f844e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","c8aee084358b31e5ee445638a6a11af7"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","9744884ca281b9879b1f3a73d91aabd8"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","d515f7b2de0a1dde76570e96244acce8"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","38c0a2c773bcc51519c02172e84ee351"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","dc85ee31a26bb84c5f03f73f4bc3fe0a"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","4679a3e57d914b4c257c27c3118715e9"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","c9ca067e7dab994603aa9d8630e030b9"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","e4f5c9c54e40e520cf9803ec21090a78"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","76a8a251736863078b8c61d2761cabb2"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","36b8dd54da62f22771339109b7008b09"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","b3945fa713fb99cbbca4db39b3bb1b07"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","3ec97413668614f059785cb675cf7704"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","281405cca5acf295cda758daefdcf099"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","ba15db21227fd81e9bd5c70e4190028d"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","6eb64ec2b0ca185285eacb71fbe0d783"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","161cb7157c990815aecfe10b5411712b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","0a8e78426fb70929d315a37ec26684a7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","535e6bffafe4a5d1b8a280fdbe2c311b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","c79048aaf1db4459689df16354602117"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","61a79a15bb7e9d902248881626013754"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","d5a609fd5629d64d922a0b1917b4adb0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","0d8eb54a01422526e582231ada2b577d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","3a4958a54c7055b5b805dfbbe139f70f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","93202761b1c7c5a59167656247980a8f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","55cf036c5dff2846d93d9eda9997cb92"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","b133879003a4edba0e0910139b9cf3be"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","1ad5b7048e758d72d77fabced1d6921b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","f13377c6a81a9a2c6382659bf4124203"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","26c39c5b902fce61be668ab804dbd352"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","34f975cf147884ef7447a16cfa27d607"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","ce3218e5cb13568fafe08cd8911683b5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","ce99c145af02646cfce48c53e6e535ea"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","bc45409aa54155216da7436d8ac95185"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","e8d2a29d84d25f072a387d083ff5aa69"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","ca0d820c76e2dcdca5de4bc58b034b9b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","115a5aeb920de065c0eec10a90baf823"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","fbbde8943c59805add3d76cbaf888742"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","dbaadd5ac41018fd664ca68d74e43086"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","43a0b413670be27b2ba0e2ec1a05c470"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","373c9eb52a8a5a74a00813296cf0e584"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","d0433d096ab8669f0fc978d4b9592278"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","3fa06327c3cf38955d078b926cb06fc2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","af0e1da67a9f94b5ed434e3e5bf5ed57"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","8f6293153aacd218e093faf2ecbe1cba"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","c7205ac20e7bd0baf43e8f7f0220d27a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","012fafc5bea8e2e2dd1c40885bc0a65c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","4e4559a2b7ecb5a73447d76cb502dce8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","380458953c60ff935320adbad07537ec"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","aecd2700248fc7a00098a0d7142d02ae"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","176474fba39c8a28016f1b6864052b00"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","35bb34f7179b0716173cb74951862109"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","5c3e301f6c7bfde9eeed3bf17a241b0b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","2706efafbe8cafe4b07017ead594f9fd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","23575e5b9dbc62da74baf7806dd3f578"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","95c679684a2f508b0a1591751b312677"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","31a758e071864a5ae3f608c87279e43c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","e37b4d5e9d14e3b51a1c2a18d49170ef"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","b0ca84235f8d58aee0bd43eb9aa6dd99"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","c70693436a66a4b10b9ac6aeb4703698"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","efc2c3c7e2c54a62cde20f977f328648"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","ffb9b52544bbc663c5072c9af8b98cf4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","e1ff05cca87da83e1b3f9c196f081cea"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","e63bea975cf55663332945ae5f9a1c6e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","c5d4a9504ff9a7ef4aeac6d4ca627c4e"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","1b5e43eedb30c7354209fdddc6867003"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","88c44dc6e7260513cd67fe0412392f36"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","5dc0fd67982ddac65064f3f6b3fb1ecc"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","3dba0f01aeeda95af4585d8c05dd5d64"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","ea4920e08ab4340ba5be818f17ddae1c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","7213d06dbd8a39653366d8d3476f604f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","bd10bab96f9196c427e5072570295c10"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","74ad641cde780a884b94ae7cbb777cb9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","d8f099186df786ce80346b0f7d6af153"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","e6038e821f3e9c40d9f8413b73cc4d5f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","74c21fba8256ffa3bb1403e9e4878635"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","a230cd52eb14772254acc3004a3a0d77"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","6fa7a117174c920d8573a0dcba9f7e97"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","050fd438e6773cf718a219e8a304091a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","7aea3e3403b2c78c455327cbe25cd981"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","651ce896f6e8a2810bea2896b46bc2d7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","b47463f3606c6fe5d8b321ceb59805c1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","f851c8e612ab74528a94cb8883effc8d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","457349cfae99b096948c22d406233884"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","ab59c5fbdffe339b4d671c4813dd5494"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","f321b88970f8ef8967988b1a8d4eeabc"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","7d860991af9a1aeddaf575b9c4212e0d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","3dd23d4bdc94d16d807e705726a02c0b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","b172bbc2f727ffd46c5d0d960223ad6a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","8971220a75bae756d01e7f05e003eb25"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","d9f44e52a43df8004f2db62e8034bfb6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","cda30a20f6c232066f4bd1741481f2ea"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","71604bae82bc201b6d3728f1f9ca912b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","ab5ea88046e03aba4bd147b82ef9f8b6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","16c9b961f10818d290a057a36d7f7be9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","54a681da2e05e7e10f7e3683c54b71ec"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","a9ad7543db5f08343914d9aeb17b48f7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","f4059812c71874dc0c4632c466e1614c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","99d88b959c8542be1b8be790f389ed5b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","85e124e0c4f69cb5910d60b613d0cf2d"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","643c894a2090a0ecd17737a18f3fab22"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","0b8920a5e6340a8c2612d0f42794888e"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","9d552aa7808b5f7d9537cf11981ad5f5"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","81add3a7799783e9acfd2190ea7629ed"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","b721f5a46a63c3c7171cf78eac047981"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","33d43376d0bedc93deaf8c0149087c6c"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","db0d19d05995884706de9d0ae8cdacac"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","bc98f35568ba4439a89221816f78a116"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","cdf975f7d2ac0c9f64be0a1473283650"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","8ab740c13f2c6d088be354c3946d124d"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","506b1ab555e352a3028e4f450a298ebb"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","352fa8264074afb5f34d8c1c0795d250"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","1a966f6f2e52259604b512db85997cbf"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","6cc8629c0b9eb094e716279143ed85ee"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","ef15ee7c37f2a560f4cbd0a228adb26c"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","642b58aac0b0ffc6deb20c3b520f4dd7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","36030ad5bd7529bf0d1016988c59b353"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","cbd85d817c674fc0b884c7422b4a3453"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","7951cda9675ead87fac81b534ebf75cf"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","e3bfba4540b80ff7eed320755ea90b96"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","d6887380267eef23f87bbee7585a344d"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","e98edadf22f6be5b4d2eeba7c73727ab"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","c38bc39261ec1760ac57974160843952"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","cdc730528f8e49cea95975978eb811a1"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","01a567ac86f757ed0716a290a18fabd0"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","2c97f21b2b615bdbf47e16285d878c36"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","577d4b7202f427d0a8d8594d89ea4db6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","0771a70ec71c9b325d0cd88612c87c6a"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","7563660401a5ee370d2a3596a50f8b17"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","38d94a7bd868ac645e4bfbe0d0cd25b2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","326ba94f13f27465ca36f9b13219a10c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","d2584e63dae0a9202c4ae400b2759637"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","28054d2e7f9c07e74fc6c363152f5013"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","dab82639674e9244e6291d985540a0cf"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","cae5ef52582be6021c882c48250d898d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","028c5b87ab90935944d9863c76095f81"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","192d7415d17303c848ac4cfebc66f9af"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","85698a102045d3ed118a72a083560387"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","e15f6ea928467908d7e90b6e7c11b22c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","24f0e2073bc6e5dfcf0613253ee49821"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","d69de862b86bbc284b71fb9a6f2e3a8d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","ea8e9f2ae51cc58baee17925905ece0a"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","58e8924a1a354d9df5cf9f9f93013035"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","a5bcca8fbaa190bc1c4b5c3862e8e3d5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","75e89fe3de92fe4dea74f911efb83d93"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","24b3caa885e1df7f95a4ef5cae60aefd"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","82f44a5610bfde2f076bc03439463d36"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","12b704022b818f348fbeaeb4eb5285f4"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







