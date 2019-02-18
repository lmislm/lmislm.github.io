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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","84129dc3a568f908543da419007c75d9"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","1b48d640304054539c97643dfa92eb28"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","fde0617b414b3cd622e622a9c08ff256"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","1eae17228aaa5e65e8178fa04741ce41"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","981af530a7f34df8adfa77dbf506024d"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","69b267a559b132f60bf6f67c6839dfe9"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","b18b2dc5b4721edee9917461cd731915"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","f5f2f74a95f3bb38d870df4ba038ab0a"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","6301cf8e95b589931a0805851a64ff83"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","f1c4ba76b878808a4988ec2b48eeae81"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","e5b20d809470438f71a5119f53c6c54e"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","9855d33981e26b475081177d0b530aef"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","aa29e7f816a9f77a19488c93c2361a29"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","fa40199e0f8a6eb69d471511445f819f"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","9c1de7414760e0ffd533ac21883c85e6"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","df4f69a9d399311090ef0285b8d1398b"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","dfccc888e237c6922326b03ecaee22fc"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","ccc235ada42500f352445620944b29df"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","71db85b83a08d26421b1e6982a0a2359"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","479778042b8846a14cac3a04fa0d55c5"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","592ea6d15cc086cf19e2b2210ebda492"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","39e48d700b43c6a11b35c9062af0880a"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","bff3efd2bea1f27830227046f700a5fc"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","167a18dbf22e519c6149939478df50a5"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","6276f4f728dc893fff11deb96f95955c"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","4a93f60d38bc99e71a95a7bb60562979"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","4c0e8aff34ebf077491db6118f585459"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","b846ee9c8ca5f5a62413608e9baa339b"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","e299777b17587488c6f895e32c6844bb"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","065308fc7ab2777a4d33e68d6009a4ce"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","1c2ccd69b8441eb3a65269b591ab7c37"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","2727f1ca05c584954cb88570bf4f27fb"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","ec58680c8729c6955766c76e3546f056"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","40d657e79a3f24731a50621489c45fb6"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","fcd8308e63d08e0ea2e1f32f2f1343ba"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","6cce6c51fe68b61970216bd0984972e6"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","efdc159d5b7ff1e3c82a24cc333a6f2b"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","7510c787791bff26b4a8ef66b556b622"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","37b7706484db255b51b3ae3069d12ef4"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","02245e5e654dbf085dac8e4027ac63fa"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","2b904856cb1aeceb4a296508464ee85a"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","b82ce028b6a48b24946a0fd4c500a60f"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","570e12ef071facff68d5feaad1fd9d40"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","911da608e95e8cfbddd9184d1a730ce8"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","99bef4471a1daaa12f53d416004ad932"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","d7c7ffac0587b103776850e49c26f098"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","87989f48d935db8cff039fcb6d7196b0"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","759439a51ffb98e151debd4fcefadb35"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","f8a0e0cc928c87e80f9e901d9a3d4be3"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","eb96bc375263dbc05993a9ef3c54bcd2"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","59bff41a59ea675f762dfa23d9f5ee09"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","87c7761d024015041da98c62954b842d"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","97e1a1d6af2bfbbf4a8e357d1d0e977b"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","135bc873336712c9bb7aa64deac6100d"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","3a03dbefc1f40c821f4e405525dfed46"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","190960c1d82471a117865e6d905f2d08"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","e37658343e8d2e29cb8f1fde420bdacc"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","e88be8683e753e9b6f9227caee06d320"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","e1b82784558fe013e452dc3b80a9ebe0"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","9735fe1e109d1f3ce4de58d89b5cffac"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","a93fdbe2471e586b162c0b9a35d742e5"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","7ae17b2dad657da1973a47773662e7aa"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","f5d5a1c97e64448603f46d9e6ce58dc0"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","22aecbdac4364727f55323ae84c3571e"],["C:/lmislm.github.io/public/about/index.html","10ad27c350d01cb16f26ee6a9e8fc459"],["C:/lmislm.github.io/public/archives/2016/01/index.html","db05dab29566731d776342e3c76a9e71"],["C:/lmislm.github.io/public/archives/2016/03/index.html","36fb7ee64534c1f520aa54fd185c76de"],["C:/lmislm.github.io/public/archives/2016/index.html","1e7bf7e6997f4d2f883f559cd515d0a8"],["C:/lmislm.github.io/public/archives/2017/01/index.html","b87b103541b3d94ff4ade177794eee7a"],["C:/lmislm.github.io/public/archives/2017/03/index.html","338f15c63e577c9cb90fd1b08c50b8af"],["C:/lmislm.github.io/public/archives/2017/04/index.html","94fab36043c604c8938f65cc6d1063a8"],["C:/lmislm.github.io/public/archives/2017/05/index.html","2b980a8e196727819fb0620e102f576c"],["C:/lmislm.github.io/public/archives/2017/07/index.html","bc0bf862fcab25a23381597515616c8d"],["C:/lmislm.github.io/public/archives/2017/index.html","e57880f86d9e6c3b2d244fa2b316ae96"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","585ec17fbe278a93b418ed0f1a43b7bd"],["C:/lmislm.github.io/public/archives/2018/01/index.html","25daf1ccbd4ff0a0613abcb0401bb175"],["C:/lmislm.github.io/public/archives/2018/03/index.html","d299bec00db375b70062d79787a84557"],["C:/lmislm.github.io/public/archives/2018/12/index.html","947057c7cdb0738500ee21f80e1cf23a"],["C:/lmislm.github.io/public/archives/2018/index.html","8cd7ddcf204bd55eee97a91c49c95ac1"],["C:/lmislm.github.io/public/archives/2019/01/index.html","a182c01e1452406f62d97d4d3b9f8bfc"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","030be4e283289eb8181ac57b6f8b8ba1"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","3f6b68b6515f4c918cf44b393be2f909"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","b9078b21a85a6fd3eca0daa43db1b8b2"],["C:/lmislm.github.io/public/archives/2019/02/index.html","001e888e2698aea90a135963a3e32238"],["C:/lmislm.github.io/public/archives/2019/index.html","6963ee39d449f788ae188e7e0fe32880"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","7f3a0e34856611504e7ce2ebb971aed9"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","53c727c5e4070b04a81e7f6e8d5a0616"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","922b0b2bf73836ef373c0d14099eaf49"],["C:/lmislm.github.io/public/archives/index.html","66c818d59d90f3ae519ba54608f92566"],["C:/lmislm.github.io/public/archives/page/2/index.html","1a7b129de1128c85e3e4bceeb602c2dd"],["C:/lmislm.github.io/public/archives/page/3/index.html","9ce49e5bcd6c42167ba2bec17a9f61fa"],["C:/lmislm.github.io/public/archives/page/4/index.html","8601e3c2bd46d7667c4b85eb0d2df57f"],["C:/lmislm.github.io/public/archives/page/5/index.html","ece79524284c8fa032893e5fce0e9f0a"],["C:/lmislm.github.io/public/archives/page/6/index.html","670cde5026f75d8f0f6582b9ab931ca8"],["C:/lmislm.github.io/public/archives/page/7/index.html","82d53c36fcb572df73ee5b5fe4423531"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","a4d9b30a355de31fa8a321373a24b75a"],["C:/lmislm.github.io/public/categories/index.html","77bc906fa63422a900119dfd48fa34af"],["C:/lmislm.github.io/public/categories/学习/index.html","70c949c5852438f2e00ed29889b50c4a"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","231ba7cce66d557ec101c80c91c2ebda"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","03f271308e11e96aa0fa36f7acd7fc7e"],["C:/lmislm.github.io/public/categories/工作/index.html","549a70a44c3f667e93fa3d9ed7f9ff11"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","daaded22e21cf10f2d9e588c5dd3e2ef"],["C:/lmislm.github.io/public/categories/技术/index.html","fb9dbdbb4411348f4c15a836f42ff690"],["C:/lmislm.github.io/public/categories/日常操作/index.html","2754be0d78b7a4099762eb76846c0066"],["C:/lmislm.github.io/public/categories/生活/index.html","e5df98d72d431bf52e81cbb1f3191e7f"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","a2caf93fe1a7bae16b611ce0ab2f57c4"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","683c6135686c3c7ab175bf9adc7a8ce4"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","5ff6548683f5c08c75a7dd4248a21aa2"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","9a704f7b75b65dd0d988eea699a3221d"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","806b774f3d75c64e63ae8dfba8155662"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","c00a30243633b4ee9377de1dbbe78a61"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","ad96f7607802b7a19d7de89efc357d32"],["C:/lmislm.github.io/public/page/3/index.html","ed93444dabac53310aa6e8dbb08805e0"],["C:/lmislm.github.io/public/page/4/index.html","83d0dcc636ce525f133f3c1723531250"],["C:/lmislm.github.io/public/page/5/index.html","7106a7d51f5629dd67264401a01bc181"],["C:/lmislm.github.io/public/page/6/index.html","16dcd3909275b67a8e5e3ed4c422e430"],["C:/lmislm.github.io/public/page/7/index.html","f3dd3075d3760431c06fcd254b2faf45"],["C:/lmislm.github.io/public/tags/Interview/index.html","9e74b316a56cff41d39930a53b607ca6"],["C:/lmislm.github.io/public/tags/JS/index.html","d69748ed23b3c0f8f4c4e403b6c98724"],["C:/lmislm.github.io/public/tags/acm/index.html","749daf2de5edae408e26c6639d98442d"],["C:/lmislm.github.io/public/tags/c/index.html","5c31aa8aa98018edff4c7e4e3a4f3a41"],["C:/lmislm.github.io/public/tags/codewars/index.html","c19ac9943c8c5623ccd512f9b2c77592"],["C:/lmislm.github.io/public/tags/css/index.html","c0c19b9dc612231dfefc0747fa7b7af4"],["C:/lmislm.github.io/public/tags/git/index.html","958bb7e1c1b1f775561a2403fec1565f"],["C:/lmislm.github.io/public/tags/hexo/index.html","866a8e91518fcbe294e735dc71fa9b76"],["C:/lmislm.github.io/public/tags/index.html","1ca8d166faa5b7f63ccc0e4f5087502b"],["C:/lmislm.github.io/public/tags/markdown/index.html","d053c4041aeb310b5367e9dd9fd4460c"],["C:/lmislm.github.io/public/tags/poj/index.html","c61743ffe0b42f44214980b7085614fe"],["C:/lmislm.github.io/public/tags/shell/index.html","a86d54292050cdb04b5bdc51e5132761"],["C:/lmislm.github.io/public/tags/vue/index.html","95016e950a16f87441f6231e46ff4edd"],["C:/lmislm.github.io/public/tags/前端/index.html","85572604df2baf6947ecef612e083bc0"],["C:/lmislm.github.io/public/tags/小技巧/index.html","aac7ab9ff8ea1c92ac11c2190d753668"],["C:/lmislm.github.io/public/tags/展示/index.html","e33cbb8febaad384f55a8afe36386012"],["C:/lmislm.github.io/public/tags/工具/index.html","94e9dd94d512f0e4b70f3972f9ec701e"],["C:/lmislm.github.io/public/tags/感悟/index.html","984a7c3fbeefb9eb3f26cf9c8efae239"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","6181e43375c6d3ae11c7d1f39201a543"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","e5e49ed225e653a17936953d95344649"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","326f866a899824c19b6f6b545314dfcd"],["C:/lmislm.github.io/public/tags/练习/index.html","00e4ada8c23caddb2a927c67fd66950e"],["C:/lmislm.github.io/public/tags/编程/index.html","fbadb2cace30d1fba6bb31adf5128425"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","e123f9e50b47ccfe1b3955b21785cbcf"],["C:/lmislm.github.io/public/tags/运维/index.html","e3489431232882341a2244b1fd638da6"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







