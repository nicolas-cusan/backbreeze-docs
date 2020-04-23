(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3Rq3":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return r}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("q1tI");var a=t("7ljp"),i=t("LmON");var l={},m={_frontmatter:l},d=function(e){var n=e.children;return Object(a.mdx)(i.a,{title:"Mixins",subline:"Backbreeze Sass mixins"},n)};function r(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(a.mdx)(d,Object.assign({},m,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Backbreeze is not a mixin library and therefor only provides two mixins intended for public use."),Object(a.mdx)("h2",{id:"bb-utility-class"},Object(a.mdx)("inlineCode",{parentName:"h2"},"bb-utility-class")),Object(a.mdx)("p",null,"The ",Object(a.mdx)("inlineCode",{parentName:"p"},"bb-utility-class")," mixin is used under the hood to create all of Backbrezze' utility classes. By default it takes a property configuration map as parameter (see ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/configuration/#property-driven-variables"}),"property-driven variables"),") but it can also take a ",Object(a.mdx)("inlineCode",{parentName:"p"},"@content")," block to generate classes with multiple properties. This can be practical to generate custom utility classes for your project."),Object(a.mdx)("h3",{id:"usage-with-a-property-configuration-map"},"Usage with a property configuration map:"),Object(a.mdx)("p",null,"Mandatory keys:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"'name'"),": ",Object(a.mdx)("inlineCode",{parentName:"li"},"<String>")," Defines the generated class name"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"'prop'"),": ",Object(a.mdx)("inlineCode",{parentName:"li"},"<String>")," CSS property used"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"'values'"),": ",Object(a.mdx)("inlineCode",{parentName:"li"},"<Map>")," Property values where each map key maps to the value name used in the class name")),Object(a.mdx)("p",null,"Optional keys:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"'bps'"),": ",Object(a.mdx)("inlineCode",{parentName:"li"},"<Map>")," If set this will generate a responsive utility classes. Typically this will be set to ",Object(a.mdx)("inlineCode",{parentName:"li"},"$bb-bps")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"'pseudo'"),": ",Object(a.mdx)("inlineCode",{parentName:"li"},"<Map>")," If set this will generate pseudo selector utility classes. Typically this will be set to ",Object(a.mdx)("inlineCode",{parentName:"li"},"$bb-pseudo")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"'important'"),": ",Object(a.mdx)("inlineCode",{parentName:"li"},"<Boolean>")," If set the properties will be made ",Object(a.mdx)("inlineCode",{parentName:"li"},"!important"))),Object(a.mdx)("h4",{id:"example"},"Example"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"// _animation-utility.scss\n\n@include bb-utility-class(\n  (\n    'name': 'anim',\n    'prop': 'animation-name',\n    'values': (\n      'spin': spin,\n      'pulse': pulse,\n      'none': none,\n    ),\n    'bps': $bb-bps // <- Use the general breakpoints,,,\n  )\n);\n")),Object(a.mdx)("h3",{id:"usage-with-a-content-block"},"Usage with a content block:"),Object(a.mdx)("p",null,"Mandatory keys:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"'name'"),": ",Object(a.mdx)("inlineCode",{parentName:"li"},"<String>")," Defines the generated class name")),Object(a.mdx)("p",null,"Optional keys:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"'bps'"),": ",Object(a.mdx)("inlineCode",{parentName:"li"},"<Map>")," If set this will generate a responsive utility classes. Typically this will be set to ",Object(a.mdx)("inlineCode",{parentName:"li"},"$bb-bps")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"'pseudo'"),": ",Object(a.mdx)("inlineCode",{parentName:"li"},"<Map>")," If set this will generate pseudo selector utility classes. Typically this will be set to ",Object(a.mdx)("inlineCode",{parentName:"li"},"$bb-pseudo"))),Object(a.mdx)("h4",{id:"example-1"},"Example"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"// _embed.scss\n\n.embed {\n  position: relative;\n\n  &::before {\n    content: '';\n    display: block;\n  }\n}\n\n@include bb-utility-class(\n  (\n    'name': 'embed-16\\\\:9',\n    'bps': $bb-bps,\n  )\n) {\n  &::before {\n    padding-bottom: 9 / 16 * 100%;\n  }\n}\n\n@include bb-utility-class(\n  (\n    'name': 'embed-4\\\\:3',\n    'bps': $bb-bps,\n  )\n) {\n  &::before {\n    padding-bottom: 3 / 4 * 100%;\n  }\n}\n")),Object(a.mdx)("p",null,"Usage:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<div class="embed embed-4:3 embed-16:9@md">\n  <iframe src="//example.com/video" frameborder="0"></iframe>\n  \x3c!-- This embed will be 4:3 ration on mobile and 16:9 on larger screens --\x3e\n</div>\n')),Object(a.mdx)("h2",{id:"bb-mq"},Object(a.mdx)("inlineCode",{parentName:"h2"},"bb-mq")),Object(a.mdx)("p",null,"The ",Object(a.mdx)("inlineCode",{parentName:"p"},"$bb-mq")," mixin is a convenience mixin that allows you to reference breakpoints defined in the ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/configuration/#bb-bps"}),"global ",Object(a.mdx)("inlineCode",{parentName:"a"},"$bb-mqs")," variable")," by name and thus avoid having to hardcode values or do string interpolation."),Object(a.mdx)("p",null,"As first parameter it accepts the following:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"<String>")," Will render a ",Object(a.mdx)("inlineCode",{parentName:"li"},"min-width")," media query when matching a key in the global ",Object(a.mdx)("a",Object.assign({parentName:"li"},{href:"/configuration/#bb-bps"}),Object(a.mdx)("inlineCode",{parentName:"a"},"$bb-mqs"))," map matching the key's value"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"<Strings>")," Will render ",Object(a.mdx)("inlineCode",{parentName:"li"},"@media #{<String>}"),", useful for ",Object(a.mdx)("inlineCode",{parentName:"li"},"max-width")," or other complex media queries"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"<Number>")," Will render a ",Object(a.mdx)("inlineCode",{parentName:"li"},"min-width")," media query"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"<Null | Boolean>")," Will just render the ",Object(a.mdx)("inlineCode",{parentName:"li"},"@content")," block without a media query")),Object(a.mdx)("p",null,"The second parameter allows to define the media type and is only used when a string matching ","[",Object(a.mdx)("inlineCode",{parentName:"p"},"$bb-mqs"),"]"," map key or a number is passed."),Object(a.mdx)("h4",{id:"example-2"},"Example"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"// _config.scss\n$bb-mqs: (\n  'sm': 400px,\n  'lg': 900px,\n);\n\n// _my-custom-module.scss\n.my-module {\n  color: red;\n\n  @include bb-mq(false) {\n    font-size: 30px;\n  }\n\n  @include bb-mq('sm') {\n    color: purple;\n  }\n\n  @include bb-mq(600px) {\n    color: yellow;\n  }\n\n  @include bb-mq('lg', 'screen') {\n    color: blue;\n  }\n\n  @include bb-mq('screen and (max-width: #{map-get($bb-mqs, ' sm ') - 1px})') {\n    font-size: 22px;\n  }\n\n  @include bb-mq('print') {\n    color: black;\n  }\n}\n")),Object(a.mdx)("p",null,"Result:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".my-module {\n  color: red;\n  font-size: 30px;\n}\n\n@media all and (min-width: 400px) {\n  .my-module {\n    color: purple;\n  }\n}\n\n@media all and (min-width: 600px) {\n  .my-module {\n    color: yellow;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  .my-module {\n    color: green;\n  }\n}\n\n@media screen and (max-width: 399px) {\n  .my-module {\n    font-size: 22px;\n  }\n}\n\n@media print {\n  .my-module {\n    color: black;\n  }\n}\n")))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mixins-mdx-6150678e537b45eb26f5.js.map