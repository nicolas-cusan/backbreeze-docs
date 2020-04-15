(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RSxu:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return s})),a.d(n,"default",(function(){return c}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("q1tI");var t=a("7ljp"),l=a("LmON");var s={},i={_frontmatter:s},r=function(e){var n=e.children;return Object(t.mdx)(l.a,{title:"Configuration",subline:"Create your own style system via configuration."},n)};function c(e){var n=e.components,a=function(e,n){if(null==e)return{};var a,t,l={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(t.mdx)(r,Object.assign({},i,a,{components:n,mdxType:"MDXLayout"}),Object(t.mdx)("h2",{id:"sass-default-variables"},"Sass ",Object(t.mdx)("inlineCode",{parentName:"h2"},"!default")," variables"),Object(t.mdx)("p",null,"In Sass variables can be flagged as ",Object(t.mdx)("inlineCode",{parentName:"p"},"!default"),". That means that if another variable with the same name is defined in the scope of the project the ",Object(t.mdx)("inlineCode",{parentName:"p"},"!default")," variable will be overwritten (learn more about it ",Object(t.mdx)("a",Object.assign({parentName:"p"},{href:"https://sass-lang.com/documentation/variables#default-values"}),"here"),")."),Object(t.mdx)("p",null,"Backbreeze's configuration API is based on this principle. To configure a Backbreeze you need to overwitte it by creating a variable with the same name in your project:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"// project config\n\n// This declaration will overwritte each instance\n// of the `!default` $bb-colors variable\n\n$bb-colors: (\n  'white': #fff,\n  'black': #000,\n  'primary': #006cd6,\n  'accent': #f8c326,\n  'danger': #cb2431,\n  'current': currentColor,\n);\n")),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"// bacbreeze config default\n\n// Default value\n\n$bb-colors: (\n  'white': #fff,\n  'black': #000,\n  'current': currentColor,\n) !default;\n")),Object(t.mdx)("p",null,"Due to the way default variables work in Sass you need to overwrite any Backbreeze variables ",Object(t.mdx)("strong",{parentName:"p"},"before")," including the Backbreeze ",Object(t.mdx)("inlineCode",{parentName:"p"},"_config.scss")," file (see ",Object(t.mdx)("a",Object.assign({parentName:"p"},{href:"/installation/#including-in-your-project"}),"installation"),")."),Object(t.mdx)("p",null,"Backbreeze configuration variables are categorized in:"),Object(t.mdx)("ul",null,Object(t.mdx)("li",{parentName:"ul"},Object(t.mdx)("strong",{parentName:"li"},Object(t.mdx)("a",Object.assign({parentName:"strong"},{href:"#general-variables"}),"General"))),Object(t.mdx)("li",{parentName:"ul"},Object(t.mdx)("strong",{parentName:"li"},Object(t.mdx)("a",Object.assign({parentName:"strong"},{href:"#property-driven-variables"}),"Property-driven"))),Object(t.mdx)("li",{parentName:"ul"},Object(t.mdx)("strong",{parentName:"li"},Object(t.mdx)("a",Object.assign({parentName:"strong"},{href:"#internal-variables"}),"Internal")))),Object(t.mdx)("h2",{id:"general-variables"},"General variables"),Object(t.mdx)("p",null,"General variables are used to define values for multiple properties. It is recommended to customize these for every project."),Object(t.mdx)("h3",{id:"bb-namespace"},Object(t.mdx)("inlineCode",{parentName:"h3"},"$bb-namespace")),Object(t.mdx)("p",null,"Type ",Object(t.mdx)("inlineCode",{parentName:"p"},"<String>"),". Namespace generated class names, it defaults to an empty string, that means classes are not namespaced by default. In case you want to use Backbreeze with another library or just want to make clear what classes are utility classes you can set a namespace to prevent naming collisions."),Object(t.mdx)("p",null,Object(t.mdx)("strong",{parentName:"p"},"Default value")),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$bb-namespace: '' !default;\n")),Object(t.mdx)("p",null,"Example:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$bb-namespace: 'bb';\n")),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-diff"}),"- .ta-center {\n+ .bb-ta-center {\n    text-align: center;\n  }\n")),Object(t.mdx)("p",null,"Example: setting ",Object(t.mdx)("inlineCode",{parentName:"p"},"$bb-namespace: 'bb-';")," will make all classes look like this: ",Object(t.mdx)("inlineCode",{parentName:"p"},".bb-<REST OF THE CLASS>")," (",Object(t.mdx)("inlineCode",{parentName:"p"},".-bb-<REST OF THE CLASS>"),") for negative classes."),Object(t.mdx)("h3",{id:"bb-bps"},Object(t.mdx)("inlineCode",{parentName:"h3"},"$bb-bps")),Object(t.mdx)("p",null,"Map of breakpoints. The keys will be used in the responsive class names. Used in: all classes that are responsive."),Object(t.mdx)("p",null,"Default value:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$bb-bps: (\n  'xs': 416px,\n  'sm': 756px,\n  'md': 1024px,\n  'lg': 1220px,\n  'xl': 1460px,\n) !default;\n")),Object(t.mdx)("h3",{id:"bb-spacing"},Object(t.mdx)("inlineCode",{parentName:"h3"},"$bb-spacing")),Object(t.mdx)("p",null,"Defines spacing. Used in: ",Object(t.mdx)("inlineCode",{parentName:"p"},"padding"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"margin"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"top"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"left"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"right"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"bottom"),"."),Object(t.mdx)("p",null,"Default value:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$bb-spacing: (\n  '1': 1px,\n  '2': 2px,\n  '3': 3px,\n  '4': 4px,\n  '': 26px,\n) !default;\n")),Object(t.mdx)("h3",{id:"bb-sizes"},Object(t.mdx)("inlineCode",{parentName:"h3"},"$bb-sizes")),Object(t.mdx)("p",null,"Defines sizes. Used in: ",Object(t.mdx)("inlineCode",{parentName:"p"},"width"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"max-width"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"min-width"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"height"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"max-height"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"min-height"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"flex-basis"),"."),Object(t.mdx)("p",null,"Default value:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$bb-sizes: (\n  '1': 1px,\n  '2': 2px,\n  '3': 3px,\n  '4': 4px,\n  '': 26px,\n) !default;\n")),Object(t.mdx)("h3",{id:"bb-colors"},Object(t.mdx)("inlineCode",{parentName:"h3"},"$bb-colors")),Object(t.mdx)("p",null,"Defines colors. Used in: ",Object(t.mdx)("inlineCode",{parentName:"p"},"background-color"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"border-color"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"color"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"outline-color"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"fill"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"stroke")),Object(t.mdx)("p",null,"Default value:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$bb-colors: (\n  'white': #fff,\n  'black': #000,\n  'current': currentColor,\n) !default;\n")),Object(t.mdx)("h2",{id:"property-driven-variables"},"Property-driven variables"),Object(t.mdx)("p",null,"Each CSS property class has two configuration variables, one that holds the property's ",Object(t.mdx)("a",Object.assign({parentName:"p"},{href:"#values"}),Object(t.mdx)("strong",{parentName:"a"},"values")),", and one that holds ",Object(t.mdx)("a",Object.assign({parentName:"p"},{href:"#configuration"}),Object(t.mdx)("strong",{parentName:"a"},"configuration"))," for that property (e.g. name, breakpoints, pseudo states), both variables are Sass maps."),Object(t.mdx)("p",null,"All variables have the same pattern:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$bb-<PROPERTYNAME>-values: (\n  /* values */\n);\n\n$bb-<PROPERTYNAME>-config: (\n  /* configuration */\n);\n")),Object(t.mdx)("p",null,"Example:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$bb-text-align-values: (\n  /* values */\n);\n\n$bb-text-align-config: (\n  /* configuration */\n);\n")),Object(t.mdx)("h3",{id:"values"},"Values"),Object(t.mdx)("p",null,"The values variable follow a simple key value pattern where the key will be the name for the value that is used in the resulting utility class:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$bb-text-align-values: (\n  'c': center,\n);\n\n// will yield:\n\n.ta-c {\n  text-align: center;\n}\n")),Object(t.mdx)("p",null,"If the variable is false or the map is empty no classes will be generated."),Object(t.mdx)("h4",{id:"note-empty-map-keys"},"NOTE: Empty map keys"),Object(t.mdx)("p",null,"Using an empty map key will result in a class without a value reference."),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$main-font-size: 18px;\n\n$bb-font-size-values: (\n  '': $main-font-size,\n  'lg': 22px,\n);\n")),Object(t.mdx)("p",null,"Will yield:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".fs {\n  font-size: 18px;\n}\n\n.fs-lg {\n  font-size: 22px;\n}\n")),Object(t.mdx)("h4",{id:"note-using-special-characters-in-map-keys"},"NOTE: Using special characters in map keys"),Object(t.mdx)("p",null,"To have nice classes some of the default values use characters that need to be escaped in the generated CSS e.g.:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<div class="lh-1.5">\n  \x3c!-- ... --\x3e\n</div>\n')),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".lh-1\\.5 {\n  line-height: 1.5;\n}\n")),Object(t.mdx)("p",null,"Backbreeze will escape ",Object(t.mdx)("inlineCode",{parentName:"p"},"."),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"/"),", and ",Object(t.mdx)("inlineCode",{parentName:"p"},"%")," automatically."),Object(t.mdx)("p",null,"Other special characters will need to be escaped using ",Object(t.mdx)("inlineCode",{parentName:"p"},"\\\\"),":"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$bb-line-height-values: (\n  '1.4': 1.4, // <= Automatically escaped\n  '2': 2,\n  '1\\\\*2': 2, // <= `*` needs to be escaped\n);\n")),Object(t.mdx)("h4",{id:"note-negative-values"},"NOTE Negative values"),Object(t.mdx)("p",null,"Negative values are generated automatically for CSS properties to whom it is useful by default. These properties are defined in the internal variable ",Object(t.mdx)("a",Object.assign({parentName:"p"},{href:"#bb-negative-properties"}),Object(t.mdx)("inlineCode",{parentName:"a"},"$bb-negative-properties")),". Adding a positive value will also generate a negative counterpart:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$bb-top-values: (\n  '10': 10px,\n);\n")),Object(t.mdx)("p",null,"Will yield:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".top-10 {\n  top: 10px;\n}\n\n.-top-10 {\n  top: -10px;\n}\n")),Object(t.mdx)("p",null,"Negative values / classes can also be generated by prefixing value keys with a dash (",Object(t.mdx)("inlineCode",{parentName:"p"},"-"),"). Be aware that this pattern does not make the value automatically negative, you have to take care of that yourself. This feature is useful for non strictly numeric values like transforms."),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$bb-transform-values: (\n  '-50\\\\%': translate(-50%, -50%),\n  // ...,\n);\n")),Object(t.mdx)("p",null,"Will yield"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".-tf-50\\% {\n  transform: translate(-50%, -50%);\n}\n")),Object(t.mdx)("h3",{id:"configuration"},"Configuration"),Object(t.mdx)("p",null,"The configuration map has three mandatory keys:"),Object(t.mdx)("ul",null,Object(t.mdx)("li",{parentName:"ul"},Object(t.mdx)("inlineCode",{parentName:"li"},"'name'"),": ",Object(t.mdx)("inlineCode",{parentName:"li"},"<String>")," Defines the generated class name"),Object(t.mdx)("li",{parentName:"ul"},Object(t.mdx)("inlineCode",{parentName:"li"},"'prop'"),": ",Object(t.mdx)("inlineCode",{parentName:"li"},"<String>")," CSS property used"),Object(t.mdx)("li",{parentName:"ul"},Object(t.mdx)("inlineCode",{parentName:"li"},"'values'"),": ",Object(t.mdx)("inlineCode",{parentName:"li"},"<Map>")," Values used, ",Object(t.mdx)("strong",{parentName:"li"},"this should be the corresponding values variable"))),Object(t.mdx)("p",null,"Optional keys:"),Object(t.mdx)("ul",null,Object(t.mdx)("li",{parentName:"ul"},Object(t.mdx)("inlineCode",{parentName:"li"},"'bps'"),": ",Object(t.mdx)("inlineCode",{parentName:"li"},"<Map>")," If set this will generate a responsive utility classes. Typically this will be set to ",Object(t.mdx)("inlineCode",{parentName:"li"},"$bb-bps")),Object(t.mdx)("li",{parentName:"ul"},Object(t.mdx)("inlineCode",{parentName:"li"},"'pseudo'"),": ",Object(t.mdx)("inlineCode",{parentName:"li"},"<Map>")," If set this will generate pseudo selector utility classes. Typically this will be set to ",Object(t.mdx)("inlineCode",{parentName:"li"},"$bb-pseudo")),Object(t.mdx)("li",{parentName:"ul"},Object(t.mdx)("inlineCode",{parentName:"li"},"'important'"),": ",Object(t.mdx)("inlineCode",{parentName:"li"},"<Boolean>")," If set the properties will be made ",Object(t.mdx)("inlineCode",{parentName:"li"},"!important"))),Object(t.mdx)("p",null,"Example:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$bb-text-align-config: (\n  'name': 'ta',\n  'prop': 'text-align',\n  'values': $bb-text-align-values,\n  'bps': $bb-mqs,\n);\n")),Object(t.mdx)("h2",{id:"internal-variables"},"Internal variables"),Object(t.mdx)("p",null,"Internal variables that should not no customization."),Object(t.mdx)("h3",{id:"bb-directional-properties"},Object(t.mdx)("inlineCode",{parentName:"h3"},"$bb-directional-properties")),Object(t.mdx)("p",null,"Type ",Object(t.mdx)("inlineCode",{parentName:"p"},"<List>"),". List of CSS properties that have directional values (e.g. padding-left, margin-bottom)."),Object(t.mdx)("p",null,"Default value:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$bb-directional-properties: (\n  'padding',\n  'margin',\n  'border',\n  'border-width',\n  'border-style',\n  'border-color',\n  'border-radius'\n) !default;\n")),Object(t.mdx)("h3",{id:"bb-negative-properties"},Object(t.mdx)("inlineCode",{parentName:"h3"},"$bb-negative-properties")),Object(t.mdx)("p",null,"Type ",Object(t.mdx)("inlineCode",{parentName:"p"},"<List>"),". All values for the properties in this list will have a corresponding negative value (and corresponding class name) generated automatically."),Object(t.mdx)("p",null,"Default value:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$bb-negative-properties: ('margin', 'top', 'left', 'bottom', 'right') !default;\n")),Object(t.mdx)("p",null,"Negative classes are prefixed by a dash:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".-top-10 {\n  top: -10px;\n}\n")),Object(t.mdx)("h3",{id:"bb-pseudo"},Object(t.mdx)("inlineCode",{parentName:"h3"},"$bb-pseudo")),Object(t.mdx)("p",null,"Type ",Object(t.mdx)("inlineCode",{parentName:"p"},"<List>"),". Pseudo classes to generate for a given property."),Object(t.mdx)("p",null,"Default value:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$bb-pseudo: ('hover', 'focus', 'active', 'group-hover') !default;\n")),Object(t.mdx)("p",null,"Group hover is used to allow for nested elements that respond to hover interaction with its parent ",Object(t.mdx)("inlineCode",{parentName:"p"},".group")," element:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<a class="group">\n  <h3 class="c-primary:group-hover">\n    Hovering the group will change the coolor of the text\n  </a>\n</a>\n')),Object(t.mdx)("h3",{id:"bb-overflow"},Object(t.mdx)("inlineCode",{parentName:"h3"},"$bb-overflow")),Object(t.mdx)("p",null,"Type ",Object(t.mdx)("inlineCode",{parentName:"p"},"<List>"),". Overflow values used for the properties ",Object(t.mdx)("inlineCode",{parentName:"p"},"overflow"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"overflow-x"),", ",Object(t.mdx)("inlineCode",{parentName:"p"},"overflow-y"),"."),Object(t.mdx)("p",null,"Default value:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$bb-overflow: (\n  'hidden': hidden,\n  'visible': visible,\n  'scroll': scroll,\n  'auto': auto,\n) !default;\n")),Object(t.mdx)("h2",{id:"recommended-configuration"},"Recommended configuration"),Object(t.mdx)("p",null,"The following variables will are the most likely to be customized for every project that uses Backbreeze:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"// _vars.scss\n\n// Breakpoints\n$bb-bps: (/* ... */);\n\n// Spacing\n$bb-spacing: (/* ... */);\n\n// Sizes\n$bb-sizes: (/* ... */);\n\n// Colors\n$bb-colors: (/* ... */);\n\n// Font Family\n$bb-font-family-values: (/* ... */);\n\n// Font Sizes\n$bb-font-size-values: (/* ... */);\n\n// Line height\n$bb-line-height-values: (/* ... */);\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-configuration-mdx-ca0f113b028b54c65cda.js.map