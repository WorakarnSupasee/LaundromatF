(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{357:function(t,e,n){var content=n(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("a4669b52",content,!0,{sourceMap:!1})},358:function(t,e,n){var r=n(90)((function(i){return i[1]}));r.push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),r.locals={},t.exports=r},359:function(t,e,n){var content=n(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("0c396eac",content,!0,{sourceMap:!1})},360:function(t,e,n){var r=n(90)((function(i){return i[1]}));r.push([t.i,".v-responsive{display:flex;flex:1 0 auto;max-width:100%;overflow:hidden;position:relative}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{flex:1 0 0px;transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1)}",""]),r.locals={},t.exports=r},387:function(t,e,n){"use strict";var r=n(11),o=(n(164),n(112),n(240),n(79),n(76),n(357),n(356)),c=(n(359),n(365)),l=n(165),h=n(21),d=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},Object(h.m)(this))}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),m=n(166),v=n(362),f=n(40),_="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(l.a)(d,m.a).extend({name:"v-img",directives:{intersect:o.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(r.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,n){if(!_||n||this.eager){if(this.normalisedSrc.lazySrc){var r=new Image;r.src=this.normalisedSrc.lazySrc,this.pollForSize(r,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(f.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;!function n(){var r=img.naturalHeight,o=img.naturalWidth;r||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/r):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(n,e)}()},genContent:function(){var content=d.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){var slot=Object(h.m)(this,"placeholder");if(slot){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},slot)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=d.options.render.call(this,t),data=Object(v.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:_?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})},563:function(t,e,n){"use strict";n.r(e);var r=n(414),o=n(399),c=n(363),l=n(549),h=n(369),d=n(387),m={data:function(){return{dialog:!1}},computed:{cardImg:function(){return this.$vuetify.breakpoint.xlOnly?"160px":this.$vuetify.breakpoint.lgOnly?"150px":this.$vuetify.breakpoint.mdOnly?"80px":""},btnHeight:function(){return this.$vuetify.breakpoint.lgAndUp?"46px":this.$vuetify.breakpoint.mdOnly?"30px":""}},created:function(){},mounted:function(){},methods:{openQrCode:function(){this.dialog=!0},closeQrCode:function(){this.dialog=!1}}},v=n(56),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{"max-width":t.$vuetify.breakpoint.lgAndDown?"":"210px",height:"100%"}},[e(o.a,{staticClass:"py-2 d-flex align-center justify-center grey lighten-5",attrs:{height:t.$vuetify.breakpoint.lgAndDown?"":"70px",elevation:"0"}},[e("h2",[t._v("Customer")])]),e(o.a,{staticClass:"pa-5 d-flex align-center justify-center flex-column",attrs:{height:t.$vuetify.breakpoint.lgAndDown?"":"272px",elevation:"0"}},[e(o.a,{staticClass:"mb-6 mx-5 d-flex flex-column align-center justify-center",attrs:{width:t.cardImg,height:t.cardImg}},[e(d.a,{attrs:{src:"/icon/LINE.svg","max-width":"80px","max-height":"80px"}})],1),e(r.a,{staticClass:"white--text text-capitalize",attrs:{width:"100%",height:t.btnHeight,color:"green",outlined:""},on:{click:t.openQrCode}},[t._v("Scan QR code")])],1),e(l.a,{attrs:{"max-width":"300px","max-height":"394px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(o.a,{staticClass:"d-flex flex-column align-center"},[e(r.a,{staticClass:"mr-2 d-flex align-self-end",attrs:{icon:""},on:{click:t.closeQrCode}},[e(h.a,[t._v("mdi-window-close")])],1),e(d.a,{attrs:{src:"/icon/qrCode.svg"}}),e("h2",{staticClass:"mb-2"},[t._v("@Washchine")]),e(c.a,{staticClass:"text-center"},[t._v("Scan the QR code to add friends to "),e("br"),t._v(" receive notifications when your "),e("br"),t._v(" laundry is done.")]),e(r.a,{staticClass:"mx-7 mb-7",attrs:{height:"48px",width:"240px",disabled:""}},[t._v("Success")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);