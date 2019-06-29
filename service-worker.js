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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","e47620cbc51615108c3321cd73b83a5c"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","bb659d8043d8aefc5e23bb694676598c"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","c6498088bd00cc3c166df6175a899e68"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","857f3fb9c406be9c0d21b51b07ea3a57"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","9f38e0e4eaab3d1dfa1133012d11e717"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","1fa26d586dc2532230a0b695eb06b06a"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","b82c4abcc51dcea175c69f9ab6688988"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","6c9526f3c58c5ef20a5bb5182074f3d7"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","f8d37732ec4cb8add8a3a885a94aa722"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","38a577ab9f9b89488e5d4de3d3ba0259"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","4df3a3c3ee42e39522873adf7af000f7"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","986c2f4a4778e297a7f72a1fe69e9251"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","464b65764720ec4bca154ff6ea6c2f92"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","2a3d04a47c697b60c436ec4f3a0b2951"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","ed88116be3bb884a7eabcab538023090"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","a462d92d5ab6eb7ffb7f706e8ed3edc2"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","abe2191b4a7bb6dd44dd2afea4a5832f"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","b756ed19dcd11c162ae75f5fe78aca2f"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","ee34f248d3ea7e9706b6203ebc5515f7"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","bdcfcca16d9bba6fe48eab9a3cc67084"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","29bf541684f48c3c99d51f24b19849d4"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","5d0e347322b551d14e491631fb23805e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","c4579f113a95cea147eaa26fc7734143"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","d2f445310a93b082c02ea66f37a5881c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","9c240707f63f74afd96a75e2814284c8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","248252de97778fdbc04e9f331d39f96d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","3834056c5406bdc6512a221d9764a3ad"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","3bd79d8aa849b15a861a1d56c7bffef8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","da4c8314198e9ee49ec262278a96c511"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","c72bd2246246aad63c54f88608c585f0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","24896f858f42f1f92c72850487dafa7a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","6f3bf29fe7fa4b1b960ec1dfe8db8467"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","b0abc56491cc88b02d87a953bec89887"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","9c1311d743b6090c83175fab23d8097b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","0cf8e43d2c3e3d03dd6e9ec3709c9bf8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","27ef50f76618b4419f0a6c493ddd0160"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","e51a2017d592e1fa78b7c3dfd25d970d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","e0afaf6a2134e6fda2624d1271472ecb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","3d6027778e7216dd438d6c651f60e817"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","e75e898572dff0dea2fdfab38b7aa8bd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","1428381fbbb0eb1059a23618a1cc0631"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","ed6dd749c3ab0e9f86f9a9a95b6e33b0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","c3af9d2e6a93bf333254127d738f09fa"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","98b306aaa52afb9446ad23b8479dc824"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","3cd59cef11cba75b36c02c4231b2d1c0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","ba4fcf4e3e20f76039ee8496cd803de0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","bfe25a3adb097ddfb68b29a27e871d8d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","a983a31d7552b3958233b7c44b1d1a66"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","1d481a953a41bb4ef8d0de0bcc45fc57"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","e2c20d0ed4ca96b8cf52fed6d689d120"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","fa76ec4473b5f1e4444e7375b30801a9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","64619b46f756ee1ef619cde7e9005d70"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","082b00ce67edf3923519c74897ca3044"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","f0ac9014ed787b2e6414b7b1f55bce8a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","3bfe7bbe2b9b1a18bc7db14fe2a03d4f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","6c4af929c1fb77c4022c5703cc2753d7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","2cd6a972480672bfeedc2f367a0f1481"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","becf17e8ec116108fc09096f9f834628"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","97653e2ae84788c7deeb2a26a13e355e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","2bbc16a95c637a2c5f9c2edfa4863d39"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","2eac3c65f41102ea7c864f7bc125139e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","fb1407ae7523bb4bd996901427fb3dd1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","b8b83886fa3c8d0d9000a7a494e8758a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","cdab744933bd2b2e4fdf5351ebe22d2c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","d9eba17505b116362e32fb9b386d68a6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","928ad59e90ab8b3561ef410edeffbb89"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","42ee45c28baa9eaa137ae6bc3cad9b3d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","6a3ffd5745292604ddba925bcec1d67d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","7e3f7bc35f23550543662c2bc27bc107"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","d62fb3724a0a4f73c07ee378b844d975"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","b400583ee600821138a8420001a6f0d1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","7ba2f0254a3f4e313c0fb10329f704a7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/24/2019-06-24/index.html","06442b80495ea01fba9c8bd692de618e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/25/2019-06-25/index.html","c10b4d82393d3de1a024da363e789b07"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/26/2019-06-26/index.html","44407063323899cd461a92a7ff62ca54"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/27/2019-06-27/index.html","717c72865d5020535080c9c2d1075e82"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/28/2019-06-28/index.html","e9dcc5b7137f6be2eed5523856be06bc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/29/2019-06-29/index.html","f93466bb6a397fc3663833c185c3337e"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","609e3a2e73be834be0d61615ea465114"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","3eeba2afb74a1b44dab394cf464f81b3"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","f53b7d5e6cd151b2aa7f11c50065cf58"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","3241a70cfade7d99c031c8caa38b3eb1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","a116b2fc0a9ceb2a77db04d64a9a8283"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","504c0a81e2df4cf0e6dafd7f46c6398f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","6de2f13989e69da34b675b7566125ebf"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","1a4a29cb61146385b9b2dc870bb4e080"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","8812f25d0f4cbe8fef74aceeb6ad72b6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","96acc437d089632e30d7856c172e7681"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","a528906e7d82e1c375bcb94fcdc0212b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","ad2f631683a4b79a2b58dd7abeec80d6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","565d83115b0b2d3cc478db09cc07dd6f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","615d5a160863b3def943ae6d033fa7b7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","725fb6ae93f5a46d2c046c96c2837bf4"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","4f02439b5d9e16868cfbbe6fefc958ca"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","508ad33653fa00b169b44da4eec54e30"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","cafe9c04d4670273816d571ef83407c9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","a7db3ce01eb7a8374ae6a4ec1dd5a8b5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","7e20933a327dcd273c10b287a9ff4646"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","866d482d7a2fde0842abf6cf941b341a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","ec5958f60ce0e9b2c5699f266acaab66"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","1912345ccb88e83d9830f0ffc4ba1c0d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","d0c1fe303c3c14b19ded29e8fef391ba"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","b88aa8aca6a1710aeb47957b04c0bc3b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","b361e83c0f2103c16095b3af9787acec"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","0bfbfa4ee56ff59e96f541d8bc24783c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/6/index.html","f693280e8aa8eb278734bbdc69069bce"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","099c6cdbd8d6a48baa38a7626a128525"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","03c5568239b51a51bc86c0abf32d7063"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","44c673f64aa0b7f64b1ba60f8c36f0cc"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","662997160a61cd5d88f2cd3689abac0c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","94ede4e769cf1afb74cb7aad7a6655f7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","b0d69608e365ae99002946af1fe22617"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","b2b5b26c2418b14c3a99d686c7a2182a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","60c45f0b3245d9d6e16c49b654ed4aec"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","e398c622482cce240a95a8cc1d857103"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","4fab6eba6e9f33d9f171a5f901e72fe9"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","50b835c302e1866fe5cecfdb250ad4b8"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","7f7e0046f96bc4892fb479049d306b86"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","fa16887466cafe2d2de6c89c1e5efeb5"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","45760f2fe30d76d46edbd476981d21d8"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","753c445099f34c968f281e7f61159ea9"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","deed4d1970a44723b5dfc0ef4de335ef"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","6eb55b153f7d896f9e6288997bbb8490"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/3/index.html","0ddf23462cc5d05417dae803d5ef009b"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","b088ce6941501e9181a88d99b8b3f128"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","6e11a9dc5587b0da3ce7eb2bf36640f1"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","0f43062230bd783d06fb78d08483be9f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","5976c4d834433efa1290c11284bd8342"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","4d00356f8d9b0606e032e235735a733d"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","ff7354b6b56306733cd05418e3d48695"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","141b4c4e8c6218ad4a00ee81972c8c1e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","1ea91139a3848e87ae5b717c49a118cc"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","53f3dbf5a4f83808aed2bbe70b72ac4e"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","56dc2febc9e3befa7f9deea7ae84cea6"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","e32c75172b569498e4e85751f3023c41"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","2ea93c53878e812f2e1945b53a91d59b"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","4386c61cfe7274463f8087045c7ebc6e"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","327c2a200095435d9450990e774c9203"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","f7c35dddda7a36bb2c3e26aab2c7875f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","f916b2ee77c3d0cf96fca1bb2fbb43bd"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","5addf0b9e204f28a4a5195722e4ccb41"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","7785d7dbf55a70febb4c963fb9111ae5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","658411e4dc669a92eff04cb49fa00a81"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","c520aeb709b716a3a08a539aef8ef273"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","dc2b967db1f516e17fd6e72d808b213e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","55b5823822311fcb8986a6d91da12af0"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","97d7bb6eb66d42cf30cc0635a4a76362"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","6e7ab3e9bb15debb0b034f9f5505c615"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","6eb93237fdf495b8225833747a580f69"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","21f20e2406ce93eaebfbfa8b1e5065f1"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","4fb72cd84700bcb10716f56cf927c98b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","d6ecfbf9e2a700391570f294516cc29b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","c3595698c23b74d5bdece52ca0a4c894"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/2/index.html","34fb6d9cfd7c09741233561f71584c2f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","01b3d80624fcf2ed1ec5aab909544456"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","1466239c289fd3f59f8734b171198989"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","a8dd36720b79427857b228789dfa83dc"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","6f291913c3baedd616d99e765680973e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","385ecad5520d41361f71ba3bec6121cf"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","5d4f344cc0bb0d23f4dda7552e3ce24b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","31adaebeb9e07203f94a560664aca081"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","9ce163adf0bf84f29b8d7851126071c0"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","8a3da6aa98fb27806b7fed7bddee8678"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","58209b10a1f4cc3f7e0d6566cb8ddabb"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







