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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","220d42fa0b5b000904295afd3c44cdba"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","58de8a1e084f0908ff742dfdfd7a7d01"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","b03b38c54696e4fb33202918a428ea33"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","7d670ba96da91445bbab786ae9fb9908"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","b5a08b6b250643a1914bfbff8cc49d94"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","afbea8c05bad8c2359000b568ac66aa3"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","61423b5d9c51d61e822a77edb9b718e6"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","b39586b2bcb561d5c6a9d74b7cb1aba0"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","848568291c363362ccc3af140282151f"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","0554b656dcc3d7b1e1be988616225068"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","8baab89825ac5bbaa02e220ef94b9799"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","d0a4cda12da4f585ba691f052ea65642"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","aaa8e41ffcf7ef44afbd5139307349d2"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","b9accc89e38043be245516c255d90125"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","3e54fc9433d7447d0845ab13944ef8dc"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","c3d846346213e18bf52d8e9dd97740aa"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","ecddeba1a455868ab217b3f4ffd7a8ab"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","56a3116ae406100a34aeaf2a826c70d1"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","ae3a25f8e0f725c854a7cef8084c957f"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","39c75e13c2531e88e2c83e0cab721a63"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","0b4d04464abdeb7d58001767e01ad429"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","5c8c5f39167eabeb9009a905db8f6ca8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","2923c0ea594020d3e7849afa87d60cb0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","dc64075f3a358a100c3aeacc0b54839f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","f69c2759948979d9d1406233660ce0d6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","180572e08c0d86a97f2db70e8212c6e8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","363bd3d9776d09af6cf34365d4e68d76"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","adb4d2b367f1637f87e6efe05a2b4692"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","4c0b2b499071807e7dd82ae5303f236d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","b8cb9694462517a983459c94b78836a7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","9aed02c658458379ab74c758e8cd6c26"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","c40e72167b54610e7089234de720b7f5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","3ad66468c363f2c0aa7e22a3a40927cd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","0d3534da9e60f29ae904877c75768e3e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","a2e47be73b21bc215a0a39e91dd8549b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","69a0ad1249c003a1e6780a146efcf2cd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","a6ec4e4ab5a31b3144723c879deb87f0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","143b1f49c07a37ab0a5d33ea1b4992d8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","c32f028aa7d4c4767daef1ff64509405"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","3f58a1a1cabf068ea4f314ee7da24aef"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","88e3d9d3bbebfc97ec6741f24bbce2c2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","2935a4e100880785771dd6ce136cb81c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","64f9f4ef394e064102603d3982adc2d8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","8fc21a708593d6cf464e45b8fac37bd2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","96cb3a6e97b8eba2db1a93e65316680f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","4eb8673fc7526a607ba887b3ae7d11d4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","dfa632ce3375431d9fa3e98dd7afb282"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","eff95df075425ae380c9d5bb02f78a24"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","5de3e4a3d461bc12f458ab8c9da625d5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","4da938ec15fc599a208ae8b092aa8d43"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","fbeee65aa91108abb6dbde2e16fea26d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","62affc445bad6cf3d9e77ba6d17d74de"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","4e0976da9f52636a4db4c2aa99224301"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","8a1c7bb33f8c447251227ed3108155e5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","42cb929555b05437e32eedfc7fa2b2fd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","2d258d9aeb9838d4871d9db8cec40ea0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","e1b6c8ec200fbb9732091ed40ae8cb26"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","09fadc4b8fbfad9c7551bb6767e7864a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","28c2ba46efa3dbea56f5155795bab94f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","33cede672b1bf9ab6d5308c5f7481396"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","36e540db85ba5d8d8433338ef1f1adad"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","0c4c573b4352e4d6ce8e7cc2420888ee"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","fb4e106a77dac0f276455a66fadcaa99"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","557fa7af92ab3ff5bf97aa338ffba5ed"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","c1d8295f08c7cc17eece8c815c0674f0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","6c0aa2905eee298a4d2455d0a9f6ce2b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","d2eef9217bf2fbe19979dd597ffd019d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","d9b7f4a9e107daa1c58a26c3159b0586"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","b21b9242067f3fba065af0f3c304b3bc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","40259d1786aaae331b4b58542939e975"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","1766ca869f4795c5ca0494c5f863386c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","d629a3f03ecfa0676c4beed841a551a5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/24/2019-06-24/index.html","1ec1fcb25c8fe38132f1ef07fe5ec125"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/25/2019-06-25/index.html","7dde9434fd9b2306bc4342636d764948"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/26/2019-06-26/index.html","34b4b4f0e5d92fffef0d8a4b5dfd5067"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/27/2019-06-27/index.html","2126ff9c5ec4e5636db087e071c5d28f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/28/2019-06-28/index.html","110ad4be862b2621e01f8318be46f20a"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","9af43db4f999d510eb9630e64a185564"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","9ffc827b7f9b27020f61fad31a7db7d2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","97e3d1ba9b61888897f8f10447130189"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","2bb9c691985c8fb2dccf7c3623253651"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","3e33dcf53b840ed3e7b82cc5159159d2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","4b92fa01f39961cf7cd68f6975f86b72"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","a6ccaa46d1eb43e7bd4aca33fc5c04e0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","21b3d2160f83915670c1086572e4ad78"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","55a9685b31db425491a4fc38ac74185c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","5eea3c7581ba21ce1b64bab7631b8270"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","8c57df9abca1d7c62f870a5c2a132014"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","76957ca6c207b066f67ca637ba273458"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","a3304a9f5c76a5a00aa63b93a72ddb5a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","49fc7865d7f0176232de30865ae36786"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","5d072c498fd821d09d52e2b9deb90c87"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","b780090125e159a160cf59eb9850082f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","6bab7d3c997b2922f9c360ba5585c1f9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","6fecbf9b83250942e0cbad2c0c15252b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","d0d47097cbebe228c93ffc1cd1e2a965"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","c0ef18c86017c7eb4f698a7bcded6e88"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","ceea5a82ba545fa0a66ec00665c1f055"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","4cf87fc17e9b9214b01b0f6242aeee0c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","ff940ee414b0e7982c917aea745d3faa"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","0cca185f32dbd200aa65a9d4e2d2ad75"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","57f3b754c039ed1a1abe2fb225f7b26f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","ffb6d440b290a1b8e80866e657ee1f46"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","2d2bcdfcbd42ae1bd77f0d9c27a4e07c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/6/index.html","6c07c0b2c773c7d170ab623852417fe5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","c575bb034c59af6849ad1e1e594c2468"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","b5882325f141592359d14e87de030537"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","11538b79a43cca79d828f2114b5a29ad"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","9d9c5cf9b4fee7b6bfcd4c1dc2255510"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","59abf80125d19a3a35e9c95c2b3285a0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","3c200fc6ce53a9ca7959637af6373304"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","e6dd28c13bae78a6ae043928d3e93379"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","6b9285754d9ca39d4bbdd812214fca59"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","b79898c33068cf5bead4594b94c722fb"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","7e9980d22ac460f2ba7581950f88d4fd"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","5bccba6894d4e35ea707e89d9b57ca7f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","c1286c882088db191f04c71c76a27ac8"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","7b3871ac410b6b91160c9dada2cccc5d"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","30e648ed014dacfac5d243150a8309eb"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","8b0f910aabd8d80e5bdb13876d2fdcd3"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","953415ee766259ff7a663365e673943a"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","dc26e914f0c6535a66e16409018df279"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/3/index.html","481a44865891a5c6a5689273f04fbd34"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","f9321d9d49b86c7ff5afa46d154de2cd"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","d2ac86e87827c18508ef018f1b5dd4e3"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","72288a4cbb7aad21153b1509f49c45d1"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","44b5daca3417637736d7d0ba40253bd2"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","96bb04488e9d6ee66014c371f3c3d42d"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","bf545555a2fcbd636ec8dff41195f160"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","adbe6f35418c02f8d89e1208ebe2f338"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","73e82b23406f196e195a79039e2560a0"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","4825a668566d7ff0aedbc31ab901e570"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","7eacc6b1b3501e8707df29b3f397e176"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","d43048c9deeac15b0e63b8c8dfc8ee17"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","d8e5280078d767e3f2d7df6ee6f4b02a"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","25ebe6876a6f72f6f67b3e324d31873c"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","aedb2079ca76103e6a7e7b02573ddbf7"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","116d014dae524fa03b0c2ba2e40ac028"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","0d1f288a2f5bb454fc335162ed2861ed"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","daac01b1e93775a20f7a9f42a6acf95b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","1a5037b64a2e2d0bb318a5c8972b883b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","9f4611562534c29a866bdbbbad7773dc"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","59f2cca62152ad44eb24fd568071fc67"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","f5ee798a63e1973747baa8a6c5255ff6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","360b365e83c2ad7de9fd070f4c6acf3e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","b8a5e9861ccb0e0a8fe74f605c2c7538"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","5aaa2edd524c6101cbd4f097b4d2fe55"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","7c7c2108114f15393f386b3ee588aadf"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","ffb3c5f3499c308ab8e5bb771da25fc5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","4f322eef696b32c4f2f671fe0b9d7baf"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","7f347db7fdee461c1a4660cb1d095be4"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","2fe96a47484076dec56dee5a0bbea41e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/2/index.html","4326e5b22dfb239a00fe332f820620df"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","038b497c504c1e582edd3447a7b39c56"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","8e42716803071d1dd319674612b2a483"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","ea29b12b1c6962f6385d58c46f899634"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","e764169cd8389f5c9a616f1eb26c6116"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","8f0e39576528c96e9f87d3b997d20f76"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","d2449ddeea0991bb84ed73e61ca1c419"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","b859374414ec32e6f7b48962a15b6302"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","94c55337a9b55c40cdba6a540ede7d71"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","6aa39cb8173b4a282c6364e72b0c2579"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","095cc74adaf4dce8d5d97f52da2a3de1"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







