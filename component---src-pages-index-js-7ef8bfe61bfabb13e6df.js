(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(56),c=n(160),o=(n(155),n(158)),l=n(165),s=n.n(l),m=n(167);function d(){var e=s()(["\n  @media (min-width: 980px) {\n    & > .top-article {\n      border-bottom: 1px solid #ccc;\n      margin-bottom: 6px;\n    };\n    & > .top-article > h3 {\n      font-size: 1.4rem;\n      margin-bottom: 12px;\n    };\n    & > .top-article > h3 > a {\n      color: #2f4371;\n      text-decoration: none;\n    };\n    & > .top-article > h3 > a:hover {\n      color: #546790;\n    }\n    & > .top-article > div {\n      display: flex;\n    };\n    & > .top-article > div > div:first-child > img {\n      max-height: 200px;\n      max-width: 200px;\n      width: auto;\n      height: auto;\n      margin: 0\n    };\n    & > .top-article > div > div:last-child {\n      margin-left: 12px;\n    };\n    & > .top-article > p {\n      font-size: 14px;\n      margin-bottom: 6px;\n      text-align: right;\n    };\n  };\n  @media (max-width: 979px) {\n    & > .top-article > h3 > a {\n      color: #2f4371;\n      text-decoration: none;\n    };\n    & > .top-article > h3 > a:hover {\n      color: #546790;\n    }\n    & > .top-article {\n      border-bottom: 1px solid #ccc;\n      margin-bottom: 6px;\n    };\n    & > .top-article > p {\n      font-size: 14px;\n      margin: 6px 0;\n      text-align: right;\n    }\n  }\n  \n"]);return d=function(){return e},e}var p=Object(m.a)(function(e){return r.a.createElement("div",{className:e.className},e.articles.map(function(e){var t=e.node,n=t.id,a=t.frontmatter,c=a.title,o=a.date,l=a.author,s=a.description,m=a.path,d=a.cover_image,p=d.publicURL;return d.childImageSharp.sizes.srcSet,r.a.createElement("div",{key:n,className:"top-article"},r.a.createElement("h3",null,c),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:p})),r.a.createElement("div",null,r.a.createElement("div",null,s),r.a.createElement(i.Link,{to:m},"Read more"))),r.a.createElement("p",null,"By ",l," on ",o))}))})(d());n.d(t,"pageQuery",function(){return u});var u="2537671655";t.default=function(e){return r.a.createElement(c.a,null,r.a.createElement(o.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement(p,{articles:e.data.allMarkdownRemark.edges}))}},155:function(e,t,n){"use strict";n(161);var a=n(157),r=n(0),i=n.n(r),c=n(56),o=n(162),l=n.n(o);t.a=function(){return i.a.createElement(c.StaticQuery,{query:"2827433203",render:function(e){return i.a.createElement(l.a,{fixed:e.placeholderImage.childImageSharp.fixed,style:{marginRight:10},imgStyle:{margin:0}})},data:a})}},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Ketchener Post"}}}}},157:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAC4iAAAuIgGq4t2SAAAEL0lEQVQ4y22VbUyVZRjHDyKojdpcsjU3U7/ATJPXpSBTSkUChrAG58B5P4fzwjkc3vEcPIopKmGQppmY0QDHOokVzDiHFzWttFUf+mAf2tyyrdlqfWl+sGbJr/t+nueAbH24dt0vz/2/r5f//X90yVOwNAZJwifF5oSfU+dyLGyp3J9amMe/Ub6bP6NiSCydCqh9pB1Ijj1mWfRflgmfrJmcK14xdRy/MB6EBrgYSILrZsXGVWEzwqY1fw11fWbBzweiBaUAykmCtikPJ4lxzsU7OM+NUzb6HWmf3Gdz5C4F57/Ad/pDvMOzmEZvkX7pJxKnF5dJjVAspF7+nSRx6+axe3R1HWO42cV0p5fPupoZOxwkEm4hXFnCG4a9RJqdXDzYTsm7MbLGf1GCiGemAC4VQNnHx7A17mcg2EJvTQWBinJ6vU4OmWsYCNTxts+Jo3gP+ld2kpeZw578fPRvjrBh/Fd0U/8D+FTkN4pyczmor8C4u4id2TnYd71MYUYmrxUUYNixnd3Z2VRu2yb2cinN20LuuRtKLeNgi7qcEJ2jsLQaV14mL61by/b0dKoK8slc/Rxbn19NRupKctavx1P6KiVb88nfsJHUoR9ZIhqVJLq/qCmyy0vEIOP0Ndb1TrLK00dm+iaqsjayptjCqp4oqaERkrpjWCwu0ge+ZoOhkRf6YyRcl4AafeIRxgmt0OQGJN4UJRi5R1lxOc8M3UV3W6x/Jdaij9hr8bNCpLjywh127TulRfgk4Fyc2GIiiRv9B50Yr51+iLspSPLHf7J8WuViycAMxe9MorsFacM/sKs3ogQxT/AFwDk1f7Ehybpp6Hs6jp6g++hRPG8N4uy7gKnnPG0Hj2A+fAqr4OKRk2fpGhjh6cm/lZeS+MQTVABldPK2F9//Br/HTYO/gWAoSO/r+wm2NBFqbSJ8IEy4o5VjnW10HwhxOBzCHTqEo3+Q1OhDlT7xlBXAzwUf+ydosJmx+xqp8/iwOOpwCO/yi7nXj63OTbXRTHtHGwfCnRhqjHS4bZQP31Syk+98IUJR4LyTEzS5nfha2vF5PNhtNsUH/D7cdS7sFgu1NbU4XR6cbi8WpweL2UKg5xQps9rzVQAlskh5R99lGj0unP4mjHo9+mq94qWZDQb0lRXYzSbMdvFyXF7sAri6xkQgECDtyh+qkKhqozak6PgwrQ4T9U4H9aZqAtYaUQIjPqsRvyiFs9aA3ViLxWjEIaK3WqwYzVbqzQYhJLdVFYrLl+zUmsjPZH3wLTnvfcmWM1Pkn/yUwr5L7DkxSumxQcoPnaE82EPVvm5qW8KYfC1U2d3YavWUnZ1QuTyv2DL/GU0HpV3XNPCqqn9LpMRNq2Iqi7988hErrvxFyvgDnv3oPikTD5T9eR6qcv5YI/gTphA3Tt6FX4LMSOqhNHmZ9BLrP9MH5kRBm1HqAAAAAElFTkSuQmCC",width:40,height:40,src:"/static/cab9599646cf4efe99cd7bcc2baae264/abff9/ketchener-icon-blue.png",srcSet:"/static/cab9599646cf4efe99cd7bcc2baae264/abff9/ketchener-icon-blue.png 1x,\n/static/cab9599646cf4efe99cd7bcc2baae264/5b280/ketchener-icon-blue.png 1.5x,\n/static/cab9599646cf4efe99cd7bcc2baae264/cbb77/ketchener-icon-blue.png 2x,\n/static/cab9599646cf4efe99cd7bcc2baae264/c6bd3/ketchener-icon-blue.png 3x"}}}}}},158:function(e,t,n){"use strict";var a=n(159),r=n(0),i=n.n(r),c=n(1),o=n.n(c),l=n(164),s=n.n(l);function m(e){var t=e.description,n=e.lang,r=e.meta,c=e.keywords,o=e.title,l=a.data.site,m=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:m}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Ketchener Post",description:"This is awesome website with news articles",author:"Ketchener Post, Inc."}}}}},160:function(e,t,n){"use strict";var a=n(156),r=n(0),i=n.n(r),c=n(1),o=n.n(c),l=n(56),s=n(155),m=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{backgroundColor:"#983939",marginBottom:"1.5rem"}},i.a.createElement("div",{style:{display:"flex",margin:"0 auto",maxWidth:960,padding:"0.5rem 1.0875rem"}},i.a.createElement(s.a,null),i.a.createElement("h1",{style:{margin:0,fontSize:"2.2rem",lineHeight:"2.1rem"}},i.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};m.propTypes={siteTitle:o.a.string},m.defaultProps={siteTitle:""};var d=m,p=(n(163),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"www.ketchenerpost.com © ",(new Date).getFullYear(),","," ","The Ketchener Post")))},data:a})});p.propTypes={children:o.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-index-js-7ef8bfe61bfabb13e6df.js.map