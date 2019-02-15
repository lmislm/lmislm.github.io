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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","922ad5503d253efc1da02a8b4d84b2d9"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","32c697194f1a3f97771cd791977aed36"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","db7a51dd61ec01d77179fef603147511"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","ad795955e51a14e8cba22ac1c90b80bf"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","328f52928755c8675405aa7db04b4bb7"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","43ebfe82b1c362356053cf18b1250092"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","42b740f8aec852b4f0cb236058e6091b"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","a3ffde1cd8728278d89518bfbcc605eb"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","6d789236de62221cb24c6f649cca5a6e"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","f88037394f05b75834908aa2364ea694"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","7279f2c1e7b8a69303d0e469a18b7f97"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","5322d235577fc3dea50944fd77b193be"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","6cbedf4162c7fb1675c54a7cdb3bc0c8"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","12aa1c657d45baa92ce83e1167a9b595"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","9d3f8ed187c51c1eddd2e849d00f8b61"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","da7c9b290accc8d42dec7b21b880d44a"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","361a391758760a6c12428f4c1d2db7e0"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","0f50c1f1961a2cab6e93d4ecdb2cd09e"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","08f194466a2ababef4c9b8c0f27fffbb"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","5cfd68c07a1328c51a07278b2d4d4904"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","c3e7d90485d15c355b403122967d146f"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","251432cf148c7a6816855a949dc4fbc3"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","4845b4e4ba6afc649e9ea7af8b08a3d3"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","08f59e8458e44dff3cdc04245fba002a"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","475db7d152acd3b0839f46700bdb0db4"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","cb9cd20f3b0c032eabf8c13bd0820123"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","7628f236a52ec992ca6cab5534070008"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","fa31071a8728b6d90ba149ec88e6fb9a"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","c25b1a394360c2400eb75c39e6044b20"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","9c37605e53cf656de50034915d49fe4c"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","d8a9571de9a09fe97c85499b8761e876"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","12c6dc2644d0afe85ac50df1d3ebc3cf"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","e0ef57fdd5ac512d2b06ed86c42f4f02"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","34f401fc724496df6f110d3df09b7a96"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","b84eebfcfb4a0c830d8c5eb16597ce45"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","648ad9f058c45aa2e5c2ec9e00934eba"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","55f4ab2f5cdf90c0b387f7fcf84d19a9"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","3cf49da187961f5a97ebaac84de81436"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","3aaeb37bb38d5fa1553be4ca682e5ade"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","facf77c57582c9c28243dba9ef9faeb4"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","736eb10673c7d68ee0f64d1a4ba94814"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","a53b460c782e52f16ba0619ec841d6cb"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","75147400718d5f44c418a643276dab91"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","c60a9a15b9db4c73836a6ec991e2e879"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","143a0cc726ce944770c808edf29539a7"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","ecb9dbeaa08be93908b98e54fca3036d"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","e8166043d96160a527a1d5605bf71a9e"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","bf11c74d62e7949ecd8fb91d43962638"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","f8f0c65d2d707ab05d2d1c2c7e991af8"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","f2e164642bef8c829e55f0d1b976c3b1"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","2b1c5f8150cff5c31bd80fac84e6caf3"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","86764e9acb4f9c70e74999322aae2034"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","51509065bf15e750575c0bdea413e0b0"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","6252741566381fa883340e4253bc24f8"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","5b7ebcf540aafc8cf6834c2d0171c0b8"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","0e12eff14fd83a190bb39ccec5a468db"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","61758b83a44f76ddb1d19d1cf4ebefc2"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","2517c95287d0e0f6045adff0598373c2"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","ababdb63bc4d9209e60af60ef36ccada"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","83b57de86add1310b041391399c322f8"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","989c5de8710b495c3dbaee33221a3779"],["C:/lmislm.github.io/public/about/index.html","e09b7b18e5ad25c47117199f3062e25d"],["C:/lmislm.github.io/public/archives/2016/01/index.html","20d208f38209fd22e4969ba59b2b3000"],["C:/lmislm.github.io/public/archives/2016/03/index.html","5a95b6fde6019ab2075b2b2ac81126d9"],["C:/lmislm.github.io/public/archives/2016/index.html","ca59dd597cef30b4b588e33635843bdb"],["C:/lmislm.github.io/public/archives/2017/01/index.html","51020678d959c8ff0f55e3ecc45c075e"],["C:/lmislm.github.io/public/archives/2017/03/index.html","ed980e1ec63389765cab36bc74c278e5"],["C:/lmislm.github.io/public/archives/2017/04/index.html","2c51e8cf0a16f94ffd369544594d5aca"],["C:/lmislm.github.io/public/archives/2017/05/index.html","069be1593ff298b92b83b36786438ae4"],["C:/lmislm.github.io/public/archives/2017/07/index.html","7c16d6cf35c8fa33b62d0f8743ae1fe7"],["C:/lmislm.github.io/public/archives/2017/index.html","6c3059bb9a448ef2a107a4a327c6c2b0"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","4d1a7d7ea0029e44c142e2220d5bf200"],["C:/lmislm.github.io/public/archives/2018/01/index.html","e15277aa02294f5c981f9c4c1f9f70ca"],["C:/lmislm.github.io/public/archives/2018/03/index.html","48125cd883f59bc08b1a98e2cc672d4d"],["C:/lmislm.github.io/public/archives/2018/12/index.html","f0867960b1bbbb12efd994565790df47"],["C:/lmislm.github.io/public/archives/2018/index.html","e8b26b58312f1f8687271b3c5c6d1894"],["C:/lmislm.github.io/public/archives/2019/01/index.html","942ad4d2c316c2dc164063ec1a0774d6"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","a7400065f6b0a82e4fc8a3d42e448f53"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","349832fc62ead52e31e5dfa026d7a864"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","170c9b725feddf3ace3c1fae53c80ab8"],["C:/lmislm.github.io/public/archives/2019/02/index.html","06378693486887df620ed22d2ad4de6e"],["C:/lmislm.github.io/public/archives/2019/index.html","c9650c79e8d5305388ecd92de5c6e91d"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","81ec13b01069f179a49db3dbfe9c33f0"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","20f7480e65e5b05f9638b934ce724b02"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","9772f702bba6fb19f84eff5d8165d4c0"],["C:/lmislm.github.io/public/archives/index.html","10e24be001e6f696cda4c3d796a019cf"],["C:/lmislm.github.io/public/archives/page/2/index.html","f9cb634e5f83e1caf19c9a966e0f30c8"],["C:/lmislm.github.io/public/archives/page/3/index.html","4ba2be2ce3e56273c534c7fbdb727ce1"],["C:/lmislm.github.io/public/archives/page/4/index.html","aa0f1f81d4874b6240263f52670a87da"],["C:/lmislm.github.io/public/archives/page/5/index.html","996813194b718fa13b1180f2fdfcf958"],["C:/lmislm.github.io/public/archives/page/6/index.html","b3b7008760101cc594e079bf15b5906b"],["C:/lmislm.github.io/public/archives/page/7/index.html","c981d68a67b1dbf39c8a279343638131"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","595b8bcde0d1e5844988586ed10b47ab"],["C:/lmislm.github.io/public/categories/index.html","104484fc31e3c567db3624a2e7482f4e"],["C:/lmislm.github.io/public/categories/学习/index.html","1eb99bb29b3475295afa887bd26278b2"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","6e4335eecfb65c11b42a0fd44f173aa3"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","10b76741773d56e93c1d39bedc39214e"],["C:/lmislm.github.io/public/categories/工作/index.html","0146257199618c59b488ef16453c8ebb"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","5729ef05889c907ef5dc4ebcb06aa8da"],["C:/lmislm.github.io/public/categories/技术/index.html","ec7f0b4b2deb4a4ac452fc1586fb2920"],["C:/lmislm.github.io/public/categories/日常操作/index.html","f384b3ccf433269dc5f45b0b6a0f1ad8"],["C:/lmislm.github.io/public/categories/生活/index.html","935f8e03fb386158683a15dfe79cd806"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","d2a81ac6e9e390751350944bf398e575"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","a234ed0541eb6374bada710a1d0688c2"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","5575d70d907f630c688a4c7c5765980a"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","354c4a3416d99aefe4bb9f66c0fc320a"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","45f6e5232ad71e330ff47be85048f26c"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","d38d1547e8db5a4cb71823dd69dd8799"],["C:/lmislm.github.io/public/page/3/index.html","47dea87d13b84c0b47be522f01d6882d"],["C:/lmislm.github.io/public/page/4/index.html","457b1a5f572069d53bfe2b5d21c18049"],["C:/lmislm.github.io/public/page/5/index.html","c3c7f996981ccb1d86bd6f7901befcb0"],["C:/lmislm.github.io/public/page/6/index.html","ae5f664cfa220cae893a2f34be3bd57a"],["C:/lmislm.github.io/public/page/7/index.html","196829e0516700d7e09993f021c9c643"],["C:/lmislm.github.io/public/tags/Interview/index.html","a4380146e0971491acf9d5c5c0a64537"],["C:/lmislm.github.io/public/tags/JS/index.html","f8df42914ff2f8af795760743020d041"],["C:/lmislm.github.io/public/tags/acm/index.html","fa0cb3a7dd942e309b02c417004458dd"],["C:/lmislm.github.io/public/tags/c/index.html","ec188d4c03cb89696e0d990b59d44bab"],["C:/lmislm.github.io/public/tags/codewars/index.html","99bee16ed0a25d6930eb770b62f00a66"],["C:/lmislm.github.io/public/tags/css/index.html","2da78f82bbd4ef30f424c3b7ab083cb0"],["C:/lmislm.github.io/public/tags/git/index.html","0ec5515905b0c6a83275c2248fa8cdc7"],["C:/lmislm.github.io/public/tags/hexo/index.html","49ed2e319a3692843efeb2fcf7de11f6"],["C:/lmislm.github.io/public/tags/index.html","62c8d6d18a582a815a465068136224e5"],["C:/lmislm.github.io/public/tags/markdown/index.html","6e9ddb33b8b81afc9266ae9acdb33c92"],["C:/lmislm.github.io/public/tags/poj/index.html","6e5a405a793be7fafdf2b5204b5a74fe"],["C:/lmislm.github.io/public/tags/shell/index.html","5b01fd2bc81bfa84d655d1b3df87d4da"],["C:/lmislm.github.io/public/tags/vue/index.html","eca8f52fee2a1ba1a5f5bb47fab34e84"],["C:/lmislm.github.io/public/tags/前端/index.html","1498fd4c5299d6cd841b5b91c9441efc"],["C:/lmislm.github.io/public/tags/小技巧/index.html","26b712f2b10f39e54c5a1eaf621059ef"],["C:/lmislm.github.io/public/tags/展示/index.html","679a6ff270f54e755b8a0a4d3f47f4db"],["C:/lmislm.github.io/public/tags/工具/index.html","5dbdf5fa01febbf543de9c35f06b8ae5"],["C:/lmislm.github.io/public/tags/感悟/index.html","cefa685a23dd2467d901fe0f4ca0c206"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","22f8dfe40f5149d810182496ac8dc4ba"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","4076344d9d04ff28a79d81b0b7341777"],["C:/lmislm.github.io/public/tags/练习/index.html","9014176720989e1e79c9f06c4178c056"],["C:/lmislm.github.io/public/tags/编程/index.html","564be874496c16d3c34024c1d5b0b2be"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","9afa583bb116ec983ed1c804ea589f71"],["C:/lmislm.github.io/public/tags/运维/index.html","8edaac8f391cbe994d885fb7d182cbea"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







