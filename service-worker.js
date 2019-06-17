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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","51b5528cc3269c6cf31526480c233c60"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","31c898f41c674848ba7a302cbc910e66"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","89fdaf88c3e69b841dfda83af3b8a5d9"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","38fbada4497ea72b781066bf32a67a03"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","65cf600d959b71e00d247bd52b30fbd8"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","3a5650aa331f06e151be813ae71e3471"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","68e4e76ad1cf8905e4902c1c896821fe"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","d3425af6825e8e74cf36f7d4a1eebf6c"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","87912902c7ed03662683d5a59b2ef3f1"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","6d08d0d91b98ad58532fed6af71d37c9"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","1e0df20b825545a5adf83d20385c1d3b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","2a5f3441f0542541280c3ffa24e40ec2"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","0637afe968dfc1c0c12f6a9dee03fe88"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","49d4de2ca501e03162581c37bd39501e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","886822a5f92db7abed86001d18aff9c9"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","84c2fe998afd153de98ece1785fe8d75"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","b19c53c1458ad06982672061d97ca1e6"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","4b456f095b127bf8fde70ea53723b126"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","e626579768d69a2d2ce882641f3322e8"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","fcaf36e23718b018d5f0526d97f2dedf"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","dd5db0cac88937c5b86943b3846173b9"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","62529ddfee8959e001db89e184158f26"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","ee58e0bf90eb06e77091e7a147e60f3d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","99eca4ba7ba87c0e3b3ab3319ed6b04f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","184c412f410b42f4951d3adc1d96b23a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","3c2705143548097746c9436a6b34729c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","9c11e0d15110124b54a7fe8c1df03374"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","a15fd9b28420c4a603bc1e8b8fd2baa7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","4ce62c53f87acf44598cf864c543de53"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","1fd8fc6bc22434c5302f00c3efbdc632"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","0518b372c3a8a680b510bb0da443dbea"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","f6cdb8ce24ada5dd3834ff9473026ded"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","650c0577d3bbd23982d8519ee5cc21b7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","dc3041dce9466c8c4deac2faf6120dea"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","ce9022c1deb2293c2a02f3313c4aef6c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","23ecd75ba648bd95f7274a5ae31c2968"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","da5fa97c6087589ddecaeabbbf33b8b4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","8cba3f7c140c966da6ac6201e82bba68"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","3eab418ee367446b6eeb4734362e9a28"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","dbbfeed70ac7ac587b0facb509f539a1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","d38179593db4f7c16ff5ffdce807daa3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","46af41fc6142809a9b720dbe5f559e48"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","2e4fa9aa9938427c782ee16f466c7230"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","fbaafda4441d60f3a940f98985ada4c6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","d232e51b7baa881168e821552387df3a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","141f854eba88adfa2b93539a6e536328"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","e76353d1d45bbcf437e78e8a59d0120c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","59a5aa5476347c776d6452fe40efa6e8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","5ea6e11fed4f60210e76c54ee758dfc8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","199bb852a677b39347cd2d7886043a54"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","ce49d2337564b521a1a3998840274f3e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","def0f4be7dc9a5fa63d24febd319f89a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","ac0411e1c2a60be016f7477d72fa2542"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","091c5702ad1cd655b5f8571c6afab197"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","80976759a82ac8dc18dc905c7a856106"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","f006da037300d30c6ea16005aac919ef"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","d3c075f479671ada3daadaf1c711205c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","7a0578cbae44afc3fed562d763a10647"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","788596afc752fa8531d56bdf1d5c140e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","70b3063a52608f6f434e7f18597b71bf"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","8ba3bb2df8817825947b12f5c2d6ee06"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","6cb50bfd9bed40a31454fcf79419ca2d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","fb999211ce4e30e27b3a8f7d59276049"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","7e4ebedb2dd7614fc6a93451c0307283"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","c568608a4566ba6a6f42a0fbfb1d7ea6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","34448efa8e9d75f16d3f3b05c89f788c"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","7e482a3c67e96f0f9490d4b01bd5f142"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","b648d934532a4c4194a301b3358e7f4e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","98bcafa3f7301bf2b3c9f273c5e89262"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","762fbb805d397295ad4299bf54d599ae"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","20870d3ef23097ca9f381e33df715f09"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","24027f4b3b26dd638fdbd5de8392faaa"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","81fd9af5da439c7ead1aee05d9435faf"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","6b58a1dcae8bf62cadfbfb56a68bdb5b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","b2dad31be93565f713178bfbf5807759"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","296ea690dfaccb44ea1a2630947916d0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","2534aba6c248d2fc8aa644c3cb4dbf09"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","430aad7be7c6c91f98d4f998299dd50a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","bb566b660bec0d645ce99b616030bac7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","0f765854645a4e54d6779358d6bc5c25"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","5109333606d000527677b11538e198c1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","084464125719ea383360067145187f81"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","6dfc619bdcab7c8b28adbbee01d35a75"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","759eca5e582eb655ea450c4e3a528b16"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","c5c37405415048414692b46341e01f33"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","0ac5d3bb00e37d23317c46cff8105d03"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","8dd559337900c5afb37da2cc0da98be0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","18b087e45a952a5f98e00af399ceb586"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","0558430339ee71e17d7965c7c57846ea"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","a2ccdb23d092c5f4ba2fb314b87ed488"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","33f6fd57f3c31bfce69ca2d95f05ac0b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","8c68ab8f834ad5941388a0545455fe1c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","e532b1646a75481a3079ebf4adb2aaea"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","2a61001e9bfccd89a33fffbdfcef4e4c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","400b5e50a4ab8cb5d349c93cc2aafd31"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","a5bc67d300831466ab807209b9a9ac36"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","28f9185a787defc3e8fc1e43c3fe9a2f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","f07d687b98c5ae31b8b8fc5288cd81b3"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","ff01e30d1e626177dc87829de2061cab"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","875a101a184f6f4a67aa18ce205e4c36"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","d585a99ad95b859322b4999de8f2e9a5"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","cbcd6ce865e43e63e7be047ebb191620"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","f8f240a8153de8bb4a5fd3bdd4ccddce"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","6b8c1daf16170538e6c646d4bf8c22d5"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","ce75bfbf02c939d80bc7b9a12e93477a"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","c557bb4d88f9e670a1a263209710cea1"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","d51e79b4da4dbcd0f1c5683e9718f81e"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","25a308a3fa286d990c31f316654b37e0"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","b1ea021078526feb58d812f3626ccc43"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","ae6e46aca5ad09210eec06974fc35b5d"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","6027a4f90c2ad9b17931697c2a2dbf6b"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","bebf46f18beb81873b2d1e474fdf54e7"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","6e064456d6b84466f9bed82e284e0ef7"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","365c1dd3571272515038e93f85a00613"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","ac9a1f60f74263ce6cb9d4c986d02519"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","1e6aeef1f88ac36b9042a111d3786659"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","2bfd07e3e69d65cfb63ef09d426bc7f2"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","ecb68a5f4bdde28cf29f4573ee60fdd5"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","3a9541d8e6e3663a1c29c3a4f0573eab"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","3e47463bba83796fbfafa6e35eb4fe2b"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","8fd39c11c49db695ad08366c94f0db78"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","caf91fb3277fc9ae1cea528db7c144fa"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","04a8280a9e90b2418b2dde87e9f60524"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","c4c5a590b2ef03c86c60d2932389afcc"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","af02320f3c9c67ac12a82b579d211738"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","7ffb9fc036b00407f2cb7677a2d124e1"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","868c45bbe69a51139fee783716e4641e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","93e7e3dc9d607a3caa887e8e714f032a"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","26241f58f140e90892d7084cc63121df"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/js/index.html","3469deab26ae0fb08858d27f37fd3d97"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","7e24b6321a45b39daf5abccd268a7315"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","705fd6ecdcce93e51093c10eb93efa74"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","2f5c7b6505315bb76a602a1d0a2627a4"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","f294ca003fb93eeb164bfa754884cb07"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","a3390fd84211cc8c3d0583f30a43e820"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","c2b62fafe18cce43760d26429916f705"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","7373ea18dddba21650548300fae25db5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","60f272ad47a8f053a779f838a8c629a1"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","c2f8c2852da65b06b71cd16cee182cbf"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","347b9ed6753737686d4e86fc5aba84a8"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","2cc49863d6bd3a3ac93c43a2e5e3c5d9"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","47fb5806154fe3e572e34ddd521b4fc9"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","8014fca44727a07bc43eaa573a062de7"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","5e4fb4ecb121c56146522b105d1fd865"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","ad4326d46eefad8cca30a23ca20332b0"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







