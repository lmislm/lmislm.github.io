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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","6d177514ef70a2f6746e8caebc149d91"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","ffda01a6cecfada9f5584957714acf7c"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","6536383a6d7150ca12058ec41b876910"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","2825d87490f0ce55810c86a45dc0d32c"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","f5a0c2febda7d0389e53cc4e863897ec"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","2d42d260c5a0e1a1203c702ac4d52c04"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","0689f64bbb641b6126723ce1b562dd9c"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","1f5f0ef11e807d5a08fdd2371c0979eb"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","9be1db7eca6f13fa059d2cadca59e87e"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","fc36649bec5f33d8a7d62b34b0000f5c"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","5c4b02ebbd09f047bc3222c568d82e8a"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","e967e22d861600201a8592e9a9678856"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","699ac98e2a3fd585e6915d8204cb7604"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","8db3b94cdfccd93b89f9896176371849"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","6d92e0097f574419f995f9632b367edf"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","0e0e1abb83ec9ed32fa5d7640873cca0"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","1c3d1c3818781f009b8bf2f9953439fe"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","7626a18364d6f55adeb124a6022263ae"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","034e3ce01873e711a488c05806e36cfa"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","9ace3a4eb1cb40a17b45bb75755faefb"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","5d9dc5e274576315f2ae34e098db93a7"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","6ad38c8fe54422747ce3218e7cb127ee"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","b4e68dd45332da41d71b8a3697fc7514"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","8dcce3f2bde13bfa7777c70d96b2f89a"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","6b92cef3e80ea8cf1efb79c9fbdd773c"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","a8e3b36cd2af2fc3fe5e5cfa1130120a"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","de9e7e08c736f161b9023870b31b842a"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","c3419f73ca0db984560798176da72463"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","849d88f8232fbfb733ddd4a0a1362355"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","c1032c62d0b1e76501324734983a1694"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","705a465869640ed293af25b74c4cae7d"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","1e88db4b1b9654e835b1d4381cf88eca"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","2e59ddc36f085445f060eec692d5ee9b"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","14e402b640a544e26e807318b9f41e89"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","851a478d2754467c306a4672235479b4"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","188f42c8527e3f1671812ccb0dfc7554"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","78b0a769263870e356c3513b2e440d89"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","8bb11dc394de74743e34dfa12b97ca98"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","3f47337e5a9037063965b7baa8faf25e"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","1eca0c05dc739754ba360346464efe45"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","86ce958974480c0040daadedbabce466"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","dee5be7ce4bf5ba37bf02ea41800450f"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","43c4adef0fdfb69a093fa9418d7415ca"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","f257dcb69dd81c9ef55309f0db843b88"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","d53ec2d8a3cd86bb04504ff720b123d8"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","a59e78d1900d22c4e9f40ab15d924b08"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","b446b52e2110c89b3b78b5c41f543279"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","903499cc3324088cf2179803c825f09e"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","e515011e29a091e1b71a1aefdf7843b7"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","a7062ec4796ca8cf4c370d9e147cde8c"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","37152287ecb312ad62e12159e1bb8286"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","c61036e529e4b78731df997f747611bc"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","9645949ffb7d3784d12fd908acfcc834"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","0f4bfeea8d5c43b72822e7ababfa08d7"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","e66384d96c77b97098ad725ba29d9f1d"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","db7217295af1b5c3268a72f834dbeb42"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","5700a11bacc31e48b0005ca908263898"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","b27eee31be2a135cba992dfb630b3ab6"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","5a1aaae2924c801e515510c7e7111efb"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","7c7ae382958cb19aa6c6361efad3fe60"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","039038032830ca52df7a650eeec5c7ce"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","c157fcf23eee34386cbd0073541aacf8"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","d6e4f93fdaea77e4222c67e5b39649a1"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","0caa85d5615e910f083f199a89e56b19"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","c9e5afeef15f261270726736d7710457"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","acc3f9bfcf2016c8622cef2afc8e14c8"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","db6edd403164224f06b16693c88d7120"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","5b373f6fd19c0facd63fee0eafd50b4e"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","1cf33c45d7365b0d4b55f8c6c3c95e76"],["C:/lmislm.github.io/public/about/index.html","fb0d3e7b3a04559893128ac55013c9b0"],["C:/lmislm.github.io/public/archives/2016/01/index.html","6508aa44e91851d6789b4c2a81c996f1"],["C:/lmislm.github.io/public/archives/2016/03/index.html","8d11c2cebafc7919ffba37eec1b3a5f6"],["C:/lmislm.github.io/public/archives/2016/index.html","255a3b53c3f5fca314c20ac3c2555480"],["C:/lmislm.github.io/public/archives/2017/01/index.html","48a2a9a98329db4eb3e97a7770f7ecea"],["C:/lmislm.github.io/public/archives/2017/03/index.html","efd7c7cb3051d18db98e691b9a8d6a58"],["C:/lmislm.github.io/public/archives/2017/04/index.html","7d3dcbcd9f77bafc7db1e171d8676691"],["C:/lmislm.github.io/public/archives/2017/05/index.html","052f1aa902c3c7862b3089517b8ad917"],["C:/lmislm.github.io/public/archives/2017/07/index.html","2cbc79846359fea35185914f8ca1a42e"],["C:/lmislm.github.io/public/archives/2017/index.html","9068d096934c44344ec7161000ceec74"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","eb7faa77aca35f76f2b8ae20bf2c4dfa"],["C:/lmislm.github.io/public/archives/2018/01/index.html","b2102d18b4b1b0ae6b6d6aa11192b714"],["C:/lmislm.github.io/public/archives/2018/03/index.html","f1aea2719daded9c9f391bf027387fe8"],["C:/lmislm.github.io/public/archives/2018/12/index.html","e5239c36178d3dc92d36492e3be77f51"],["C:/lmislm.github.io/public/archives/2018/index.html","bfe276daab8ea23d3d731e85f1b3da5d"],["C:/lmislm.github.io/public/archives/2019/01/index.html","e67b434fec96211e5a5a6bf8fa4fbc2a"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","7f39ab8e852dc1e1c1e7a615fba072e8"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","2bb928db8fd3c73ab879497d1a1aace6"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","a3af72fb883b67901f13c59d6f56cf91"],["C:/lmislm.github.io/public/archives/2019/02/index.html","86e19e5fd970e52de8c3ca7fed762841"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","6ccc0497812ebab5499ea61289330487"],["C:/lmislm.github.io/public/archives/2019/index.html","44a8cba928874fb11083838af65ad1d4"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","7af8e01f2e720989e9770cca726b17ae"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","e1f04fa0c520a06c8a451528096a3fab"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","942ec044cbd82de2ce964e3259e8a4e5"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","5802615c55539257de84610f6d6f19bf"],["C:/lmislm.github.io/public/archives/index.html","c3d979c8b0bbb0b46668db841a17b8db"],["C:/lmislm.github.io/public/archives/page/2/index.html","a3079372595baae292178b04c584e02c"],["C:/lmislm.github.io/public/archives/page/3/index.html","5ec41ca04b6930431d755b938e14c29d"],["C:/lmislm.github.io/public/archives/page/4/index.html","ddef92407d437bd9f67082fb33e1f3a3"],["C:/lmislm.github.io/public/archives/page/5/index.html","faa5b5a4ebc7148b3b7f7b9c11318896"],["C:/lmislm.github.io/public/archives/page/6/index.html","846309c7fb8224cdc00c05109fde7224"],["C:/lmislm.github.io/public/archives/page/7/index.html","9fe0786788e436a8483cca3611214f2e"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","8f4c12c90bcbccbba14f57a1969b2a06"],["C:/lmislm.github.io/public/categories/index.html","2598cd76cf7f8ff2670b0fcc336ee9b6"],["C:/lmislm.github.io/public/categories/学习/index.html","51f5d9c0daeb6585d493b119689a3cb0"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","cd2a26397fc383dc16612d8fa2435eee"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","57d345cdaa700c2c40d70e2a2f510085"],["C:/lmislm.github.io/public/categories/工作/index.html","9afc6bb78e2036e85b4d4c251903cc70"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","215b33d67151cc618355db6e389302c8"],["C:/lmislm.github.io/public/categories/技术/index.html","4debb0c2ccccc6dbeec80d75f58338dc"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","775fba45fb8cc38849675ed5fdad422b"],["C:/lmislm.github.io/public/categories/日常操作/index.html","d6fc0fef1b9235bf11d95f847acf083c"],["C:/lmislm.github.io/public/categories/生活/index.html","13eb77c7370458f61e09b00c5591ccb4"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","6c0b28bf960fe52eb94fe4420a35a51a"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","48eda2816995c8dd56438f6de0730784"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","c615c432ca25763e0cdc901b07f64c78"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","5c1a8dd79a67896c5acbbce6997fa83b"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","de865426ad30c802d5a4d5e510c10506"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","b3fa1c41946b2f47c01057c77c6197e9"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","01fc59667378d8a6748702d37e1c639e"],["C:/lmislm.github.io/public/page/3/index.html","197930f3aa0988ea0992112548d7a95a"],["C:/lmislm.github.io/public/page/4/index.html","1018145f73f86dc61e4b4ecfde4dfbdf"],["C:/lmislm.github.io/public/page/5/index.html","ce39727cb191a6755848074feec036ff"],["C:/lmislm.github.io/public/page/6/index.html","1969dcc35b2fb6836f8315868c707d16"],["C:/lmislm.github.io/public/page/7/index.html","9e40b5d700f05091adf0102258a1f88d"],["C:/lmislm.github.io/public/tags/Interview/index.html","fd9df9ba3b67df1f153aa3de5f872324"],["C:/lmislm.github.io/public/tags/JS/index.html","e021153fd733cb1c30ff0b3963955894"],["C:/lmislm.github.io/public/tags/acm/index.html","d5f95848204b8e8c1ba58718b1fa51f0"],["C:/lmislm.github.io/public/tags/c/index.html","7e78a2baea1b2cab7b20d6f673e69225"],["C:/lmislm.github.io/public/tags/codewars/index.html","1ff36a743f39d4fb3d3fb35bb927e960"],["C:/lmislm.github.io/public/tags/css/index.html","ed859152d9fbf0d9b89379810f33ebd2"],["C:/lmislm.github.io/public/tags/git/index.html","db9d041bdbcfc1ad01f4825c95d75c2e"],["C:/lmislm.github.io/public/tags/hexo/index.html","224333638aec6fd5479b14fb34be0f08"],["C:/lmislm.github.io/public/tags/index.html","762a8f31412888d9fed8f979fbfe1062"],["C:/lmislm.github.io/public/tags/markdown/index.html","003065d8fe5b2e5afc3db83c5056f6fe"],["C:/lmislm.github.io/public/tags/poj/index.html","2abe3977130e0a70d88f6146412d7b60"],["C:/lmislm.github.io/public/tags/shell/index.html","462eb7a19c51887fbe7e70dbbef3ac21"],["C:/lmislm.github.io/public/tags/vue/index.html","6ded6a8992121ae1c8b78754bf95976f"],["C:/lmislm.github.io/public/tags/前端/index.html","ff352f1be7430a4fa38265f4e43dcd60"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","f9a308927ef8a0d0a830aca8f05a7e5a"],["C:/lmislm.github.io/public/tags/小技巧/index.html","0d79ac151f8bab7e500e2da0e45b52a2"],["C:/lmislm.github.io/public/tags/展示/index.html","23f4477e7930fa18511c8327d0da3059"],["C:/lmislm.github.io/public/tags/工具/index.html","e7a17e30e84200ceab4ac12fd0c239e3"],["C:/lmislm.github.io/public/tags/感悟/index.html","22c5144fabc46e69b172af5d83a10bae"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","de1c44495ccf00c2bbae2e389e69c5ad"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","dc706eb60cefbe262360269d440014c2"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","8c317f8400adffbe1aac554cd4c7d886"],["C:/lmislm.github.io/public/tags/练习/index.html","27987f98bc4c52a429753de9a2b9d7bf"],["C:/lmislm.github.io/public/tags/编程/index.html","e236d60cf122f293c9c79105c356e3b6"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","aa99a09c3f71a3edca3eb033c2f8f33f"],["C:/lmislm.github.io/public/tags/运维/index.html","6d47ed987fbebe95b8263e4053390194"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







