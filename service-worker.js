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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","239fbda17cc8444da8eaf461be2a9c3a"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","fe7ff58cf796d564b26efcaabb96c617"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","3dfcd7083e9c8df3f7886aa4125f6c6c"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","c9523a1bb9c14dc7effd3c624b4ddcbb"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","c4bd749461e5f24abbcfa4794c6eed00"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","9995072436b0aa3725269e7d15b81a06"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","c51276baa583cfb8224b304b1dcf07ca"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","7ecfa6ec71dc7ce2f87681524ac5946d"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","0d703f6738fd91a91057052f25e63425"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","7b73b7d2816d7de663bd1355e70a6c3a"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","da7111688e08dc9f2dc26d0f11e11876"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","e8f9fcae9657ec9d7dda8d7c3b7bb56e"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","e1292e9e5df9006461c370c4b2b6eb9a"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","689a99029baefed5e0a6a0920e2597af"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","214bba091580bd773b8ed2c2e011a58d"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","f63a97cd0a6d10a4ce7645394175f1fc"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","f88d19f8cf1bdfb7e3d05810e519fba4"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","e03417dc3dfb5f0c9cf23229ef0449d5"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","2cfbdfd0e53391a8b02faf7aa1274c83"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","2e5e37085ac9188a0a8cffb364461427"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","10a657bd023937e497d72486f83eebf7"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","b987ac419303cdc24be37815280ad7de"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","9edf39a2a4346ef0b11c153300c9e7d5"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","49a3c69117e991749e912c2d4a33a26f"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","203e6d94fd8dd351d78bc6d04cd2396c"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","8a62fad103ac72fe84ec7f9399386036"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","00b26367dd33b074168d2a005337fbcd"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","11b0746a03b9dd3fc59dfda45da8a051"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","8fbad205233f1d0a4a2d6124ecd8dbaf"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","724bc6f99cf5c4a775e360b7b2f7884b"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","d03e6a309ec10bf367db3083cd1e6461"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","93775c84815102d5773619915d9ac005"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","ce18016a615fc67e97a564e7163c19a8"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","d6017d6b47bd9cd581c2f338a71c9473"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","7af409fdea29885d64d23d6bd322afaf"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","7bcba914c341a8e2e972cc83992dcfab"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","c827334ba4225e4f0778aaf106f77e28"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","cdb0f7f96d0fd5c11bdd0cb833f5a492"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","fb977183eda40f481f681b6ed86bb0f9"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","e12d49d777ff9ddc53db3c6083b8582e"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","4d621c809ded244f1b46c0d12648f0df"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","da3ee03ce16206a64bca7370c79d92c0"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","aafcb5ee4420f7b536fdf48a90510dcb"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","349a9f69f1ae6cd7115c7955c34c0026"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","44eee3a82b19d4d380176a73d4f71915"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","56c7d8f1032f3b06af5319b48e31bca4"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","3d0df24212dc7cc206a1be29f3cb0c60"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","2d6d598a9a7337e87fc8976e1e52e8e5"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","92ada58f67ca32bc55df65c2d106ac12"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","26397943bce85602f8bf8e966ff504a8"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","7edf1aa9c4d3b330b8b140fac0c41091"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","8483e9726d1ac1e73f225d550fba3a4a"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","d458b1fa5ad61c7241dcbf941ca1778b"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","e17b0d32cf85d275afb74faaacf99ac7"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","30844712ebacbfb74082fc4a30882c1e"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","cfc5c04dbf27f66a2e7ac0ea517a35aa"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","83beab3153ccccfc02c491f7b8fb6920"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","fd1d4d88212ba4702373acaf78dbeec0"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","56501a3727401338865896affe89e437"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","b0723b87fb2a8c1af88a2fab436eaf40"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","7bd2b47a436708290f9970306978be6e"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","add7e9ad87ffdf23e6e9b8b0a5d93cba"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","c956923a30542ebb9f0f18a0da3864ba"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","ad48e481f9fe2a9a8c79be936f446c0d"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","7437e0c3d87f1c44b7cf7d43655e8a47"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","d17e08f4689ed5499ce06d8b3be89bd6"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","d231529d32c1d8430e7c56864b1e5f73"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","12f10bb9c7fe4a5949ac76982a0828dc"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","3c6e8356891fb25a2b2087cc0b858340"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","07adec5da9ad8edb862ec9a63bb56f3b"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","fa2e97a2682ae58c1b54621418d1bd0c"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","f23fa23f0902f8a2b9f725b656bb3817"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","2d6228e61f0d34eac5c69eb61fcd3e27"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","ff078e8959fac114616ee510f4a68f82"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","bcf5160f593e9d63af94be0f6305d6fd"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","d21929c5e977a081f9ec0c37fdebde3a"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","2edd95f296217a839997a08c9f455779"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","e6d1780c010979bf4c25747e8df3563b"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","384ef465e743ffadcf3bcf2370688e7d"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","357cbc1ab43282a0cb6addfdd3d41b0f"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","90bbd21d2a2cfccc13f216875b2a210e"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","58fe62fffe761727403cba5abba28463"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","15955b9f4a50e22727aafbb5848e5e21"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","56fca93cdd118f2ca9782879558aeedc"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","ec9142c92f72aa0ec059c5e11c0694cd"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","1d4ec7197b26d90b344564b3d97bf148"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","092e30f0dc45dbc692e6bbec23b873ac"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","4144c404e4748fb5420bfe272eb47686"],["C:/lmislm.github.io/public/about/index.html","e745d401a26422991aa7accebc3b2082"],["C:/lmislm.github.io/public/archives/2016/01/index.html","559cb7d918d22d77f87e76f458669442"],["C:/lmislm.github.io/public/archives/2016/03/index.html","8f8f18b4cdc0f036d70a52812d44a7f5"],["C:/lmislm.github.io/public/archives/2016/index.html","ffbe59c8ba49d07523632493fd090758"],["C:/lmislm.github.io/public/archives/2017/01/index.html","233749e4919ba38e30cca32c0f364e31"],["C:/lmislm.github.io/public/archives/2017/03/index.html","8cb53b79cf3e31c4c2eac5221bcaf4f7"],["C:/lmislm.github.io/public/archives/2017/04/index.html","38e74c9c93d7b4509d282c8ab471b559"],["C:/lmislm.github.io/public/archives/2017/05/index.html","0fb075095492de4438f9995735a3c861"],["C:/lmislm.github.io/public/archives/2017/07/index.html","7f6db06f965017522ecf21f303fa9df9"],["C:/lmislm.github.io/public/archives/2017/index.html","988d358c9843e2a90f6324b729a35175"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","ee38f31330d00e3e3d10914b375c4cbf"],["C:/lmislm.github.io/public/archives/2018/01/index.html","266ab0a5fa6cff97cca09d318a9229f9"],["C:/lmislm.github.io/public/archives/2018/03/index.html","238f6b5a7bba88b9eee0a509185b1bfa"],["C:/lmislm.github.io/public/archives/2018/12/index.html","6837fb8919ebb2c3f0ff31e010d3f9e0"],["C:/lmislm.github.io/public/archives/2018/index.html","772adeaeea2f0ccd7d57edb42bced382"],["C:/lmislm.github.io/public/archives/2019/01/index.html","3000829ee28fe6c90ebd1abba7549575"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","1ab5c20643c02a723e4ee6da12ddafc0"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","d27b79c919ce4c5131117c4747eeb1fe"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","5da27a4b6fbb079b4803efa48a58d6bb"],["C:/lmislm.github.io/public/archives/2019/02/index.html","c0f131fb991a448e8251bfe668afd53d"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","d05e0cfdd2cd7ead5a7f1992e36692c8"],["C:/lmislm.github.io/public/archives/2019/03/index.html","91fb68aeab59a89e862533ea58ee5e31"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","dca0a9373124600d3c0f3fb3210e9a11"],["C:/lmislm.github.io/public/archives/2019/index.html","c4b84ee9663a519c709305ededac9b97"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","8ec8e4b5cbd8ecc220dc450a41ae6e4e"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","479b004a1e6c27ed86e4084f94fbc865"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","b395e0885ceee450813c89bea89d7ec8"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","9935584a33e6e2426421438dc2c48b53"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","33a8deb41ca03f1fee21ab0e1bdf07b1"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","818cfe5d6a8b08dfbc47fcb98a015e80"],["C:/lmislm.github.io/public/archives/index.html","4e6b8c4c8c1c781938f74b7ebad6661f"],["C:/lmislm.github.io/public/archives/page/2/index.html","3416f7f08ec603d99ce538f63abec731"],["C:/lmislm.github.io/public/archives/page/3/index.html","597fd880db4091b56914d58c15bd9c9d"],["C:/lmislm.github.io/public/archives/page/4/index.html","c71f1dfed1d2b80feddf4adde951df7b"],["C:/lmislm.github.io/public/archives/page/5/index.html","c4fb4de14d0d41aee11d681393afc352"],["C:/lmislm.github.io/public/archives/page/6/index.html","73e134a2e5f92dd2ebf46e9d53a0b5ad"],["C:/lmislm.github.io/public/archives/page/7/index.html","9076a07763977541036d7f51e4f08a0a"],["C:/lmislm.github.io/public/archives/page/8/index.html","f5f7b7619cb545bb62b94761d0b3403b"],["C:/lmislm.github.io/public/archives/page/9/index.html","72570abc051f95ff867a00a07309b277"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","ba5c3c6520246b19d405582a37ad54cf"],["C:/lmislm.github.io/public/categories/index.html","2736aeeb783a657a672baf9798d6ab3d"],["C:/lmislm.github.io/public/categories/学习/index.html","26eca622b0c115fd1257ec8cc3b6f614"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","f1d85c0d856ce2cfbe7217d7847e42d8"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","cf8681123796a0362f83ef8ae2ddf31e"],["C:/lmislm.github.io/public/categories/工作/index.html","64362cc70bfc37ad69f145a59529993a"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","a26e317be3611d2750d1f17018eeb5bf"],["C:/lmislm.github.io/public/categories/技术/index.html","15de38ac23f99f44cb37520c62a03a23"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","e9fa9f0af3025554b1368e77faa738b2"],["C:/lmislm.github.io/public/categories/日常操作/index.html","5da802600f2c6fef68e6d86199b6a94c"],["C:/lmislm.github.io/public/categories/生活/index.html","73cfeaad870a7872747f2db9a80c0245"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","48c975230f923260e11724b476e2d1b8"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","f30f5e7954c7024f9e6b22093839e60c"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","34ff00d88f7542c892b6ce9c6a8b64d6"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","5cdc6c88839978fc132575158b84baee"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","3d968c404eeab85447faf7e643870600"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","f948ca6b5789411633e30f84607faf57"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","f28835bbd6fb6fa745f6c953b37dfe67"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","5f5e472250dc3b7bd17eba3f4a9e04b3"],["C:/lmislm.github.io/public/page/3/index.html","7e33d1e608a5cb5c43dbde7fbaabafb1"],["C:/lmislm.github.io/public/page/4/index.html","2396fba14535a204ab091bbff7b03b6c"],["C:/lmislm.github.io/public/page/5/index.html","ac172f6dabc7334dadb03f85a30d4543"],["C:/lmislm.github.io/public/page/6/index.html","4cc3a5903832424430b8fd7552df41f5"],["C:/lmislm.github.io/public/page/7/index.html","824b163f8fc0ac0da29e20a595ac285d"],["C:/lmislm.github.io/public/page/8/index.html","11f3ca9bdbba66cb52b6823b2d02f1ca"],["C:/lmislm.github.io/public/page/9/index.html","0798380cdbce20bc3c9662b7bcb0e175"],["C:/lmislm.github.io/public/tags/Interview/index.html","77679a80ad457a31ed1f02d369da53b5"],["C:/lmislm.github.io/public/tags/JS/index.html","d9856ee552435ada60c6446e2c538446"],["C:/lmislm.github.io/public/tags/acm/index.html","191b091a98cdea2084c674bad4396dd7"],["C:/lmislm.github.io/public/tags/c/index.html","734f1d623b7806c2f9896cabee069532"],["C:/lmislm.github.io/public/tags/codewars/index.html","ad81d469987cbe650b95e917df25e946"],["C:/lmislm.github.io/public/tags/css/index.html","fb131ff4753474a18630c4b9ad59742d"],["C:/lmislm.github.io/public/tags/git/index.html","c545b7aa7ed8f4c69e4b7711c22d77ce"],["C:/lmislm.github.io/public/tags/hexo/index.html","4db5db2e83fb4f7458da3f9d7becd104"],["C:/lmislm.github.io/public/tags/index.html","f64804570bf6d8b568b9a8da69169c43"],["C:/lmislm.github.io/public/tags/markdown/index.html","7dc1791b61ee78fb9a1b14242fcc20c2"],["C:/lmislm.github.io/public/tags/poj/index.html","2036a8ebae85d28dadc3dc48c6d0bc75"],["C:/lmislm.github.io/public/tags/shell/index.html","7822a9540ae259e4ecf56ba5713c2eae"],["C:/lmislm.github.io/public/tags/vue/index.html","66e7d847e7ac5d98390417f22ed30596"],["C:/lmislm.github.io/public/tags/前端/index.html","2fb160ea197facc37a8c81b91ed9e712"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","f4a5bcd3e92cb0cb351c83dca66820b8"],["C:/lmislm.github.io/public/tags/小技巧/index.html","aac721bd7b9e7472c83ec3fe16b0c40c"],["C:/lmislm.github.io/public/tags/展示/index.html","a3e9c1656453e6c8897f9ee4e825e204"],["C:/lmislm.github.io/public/tags/工具/index.html","02f8fa39f1a97fd0b78790ae948781cb"],["C:/lmislm.github.io/public/tags/感悟/index.html","95a30f6c31f73b92badd370ebabc6d9e"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","a0935a471ae28d3983fcf42bf0eb572a"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","705d13427baba5453faec503d8a49993"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","2c9506c6165ed049389d63ed49b66579"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","810f56e30f3c7a3b3118dbcf247f8b9d"],["C:/lmislm.github.io/public/tags/练习/index.html","0e104facb03acde557bdbb27f7151781"],["C:/lmislm.github.io/public/tags/编程/index.html","c86ae599906c1f0f95bc61683ba7680d"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","6c16180f0e63c764e11c39ed7b30a078"],["C:/lmislm.github.io/public/tags/运维/index.html","fa0a59728ceb54d83dddf685546565d6"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







