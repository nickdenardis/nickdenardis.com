(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{385:function(s,j,t){var e={"./af":250,"./af.js":250,"./ar":251,"./ar-dz":252,"./ar-dz.js":252,"./ar-kw":253,"./ar-kw.js":253,"./ar-ly":254,"./ar-ly.js":254,"./ar-ma":255,"./ar-ma.js":255,"./ar-sa":256,"./ar-sa.js":256,"./ar-tn":257,"./ar-tn.js":257,"./ar.js":251,"./az":258,"./az.js":258,"./be":259,"./be.js":259,"./bg":260,"./bg.js":260,"./bm":261,"./bm.js":261,"./bn":262,"./bn-bd":263,"./bn-bd.js":263,"./bn.js":262,"./bo":264,"./bo.js":264,"./br":265,"./br.js":265,"./bs":266,"./bs.js":266,"./ca":267,"./ca.js":267,"./cs":268,"./cs.js":268,"./cv":269,"./cv.js":269,"./cy":270,"./cy.js":270,"./da":271,"./da.js":271,"./de":272,"./de-at":273,"./de-at.js":273,"./de-ch":274,"./de-ch.js":274,"./de.js":272,"./dv":275,"./dv.js":275,"./el":276,"./el.js":276,"./en-au":277,"./en-au.js":277,"./en-ca":278,"./en-ca.js":278,"./en-gb":279,"./en-gb.js":279,"./en-ie":280,"./en-ie.js":280,"./en-il":281,"./en-il.js":281,"./en-in":282,"./en-in.js":282,"./en-nz":283,"./en-nz.js":283,"./en-sg":284,"./en-sg.js":284,"./eo":285,"./eo.js":285,"./es":286,"./es-do":287,"./es-do.js":287,"./es-mx":288,"./es-mx.js":288,"./es-us":289,"./es-us.js":289,"./es.js":286,"./et":290,"./et.js":290,"./eu":291,"./eu.js":291,"./fa":292,"./fa.js":292,"./fi":293,"./fi.js":293,"./fil":294,"./fil.js":294,"./fo":295,"./fo.js":295,"./fr":296,"./fr-ca":297,"./fr-ca.js":297,"./fr-ch":298,"./fr-ch.js":298,"./fr.js":296,"./fy":299,"./fy.js":299,"./ga":300,"./ga.js":300,"./gd":301,"./gd.js":301,"./gl":302,"./gl.js":302,"./gom-deva":303,"./gom-deva.js":303,"./gom-latn":304,"./gom-latn.js":304,"./gu":305,"./gu.js":305,"./he":306,"./he.js":306,"./hi":307,"./hi.js":307,"./hr":308,"./hr.js":308,"./hu":309,"./hu.js":309,"./hy-am":310,"./hy-am.js":310,"./id":311,"./id.js":311,"./is":312,"./is.js":312,"./it":313,"./it-ch":314,"./it-ch.js":314,"./it.js":313,"./ja":315,"./ja.js":315,"./jv":316,"./jv.js":316,"./ka":317,"./ka.js":317,"./kk":318,"./kk.js":318,"./km":319,"./km.js":319,"./kn":320,"./kn.js":320,"./ko":321,"./ko.js":321,"./ku":322,"./ku.js":322,"./ky":323,"./ky.js":323,"./lb":324,"./lb.js":324,"./lo":325,"./lo.js":325,"./lt":326,"./lt.js":326,"./lv":327,"./lv.js":327,"./me":328,"./me.js":328,"./mi":329,"./mi.js":329,"./mk":330,"./mk.js":330,"./ml":331,"./ml.js":331,"./mn":332,"./mn.js":332,"./mr":333,"./mr.js":333,"./ms":334,"./ms-my":335,"./ms-my.js":335,"./ms.js":334,"./mt":336,"./mt.js":336,"./my":337,"./my.js":337,"./nb":338,"./nb.js":338,"./ne":339,"./ne.js":339,"./nl":340,"./nl-be":341,"./nl-be.js":341,"./nl.js":340,"./nn":342,"./nn.js":342,"./oc-lnc":343,"./oc-lnc.js":343,"./pa-in":344,"./pa-in.js":344,"./pl":345,"./pl.js":345,"./pt":346,"./pt-br":347,"./pt-br.js":347,"./pt.js":346,"./ro":348,"./ro.js":348,"./ru":349,"./ru.js":349,"./sd":350,"./sd.js":350,"./se":351,"./se.js":351,"./si":352,"./si.js":352,"./sk":353,"./sk.js":353,"./sl":354,"./sl.js":354,"./sq":355,"./sq.js":355,"./sr":356,"./sr-cyrl":357,"./sr-cyrl.js":357,"./sr.js":356,"./ss":358,"./ss.js":358,"./sv":359,"./sv.js":359,"./sw":360,"./sw.js":360,"./ta":361,"./ta.js":361,"./te":362,"./te.js":362,"./tet":363,"./tet.js":363,"./tg":364,"./tg.js":364,"./th":365,"./th.js":365,"./tk":366,"./tk.js":366,"./tl-ph":367,"./tl-ph.js":367,"./tlh":368,"./tlh.js":368,"./tr":369,"./tr.js":369,"./tzl":370,"./tzl.js":370,"./tzm":371,"./tzm-latn":372,"./tzm-latn.js":372,"./tzm.js":371,"./ug-cn":373,"./ug-cn.js":373,"./uk":374,"./uk.js":374,"./ur":375,"./ur.js":375,"./uz":376,"./uz-latn":377,"./uz-latn.js":377,"./uz.js":376,"./vi":378,"./vi.js":378,"./x-pseudo":379,"./x-pseudo.js":379,"./yo":380,"./yo.js":380,"./zh-cn":381,"./zh-cn.js":381,"./zh-hk":382,"./zh-hk.js":382,"./zh-mo":383,"./zh-mo.js":383,"./zh-tw":384,"./zh-tw.js":384};function n(s){var j=r(s);return t(j)}function r(s){if(!t.o(e,s)){var j=new Error("Cannot find module '"+s+"'");throw j.code="MODULE_NOT_FOUND",j}return e[s]}n.keys=function(){return Object.keys(e)},n.resolve=r,s.exports=n,n.id=385},386:function(s,j,t){"use strict";t.r(j);var e=t(249),n=t.n(e),r={props:{title:String},computed:{effectiveTitle(){return this.title||this.$page.title},postDate(){return n()(this.$frontmatter.date).format("MMMM Do, YYYY")}}},a=t(4),i=Object(a.a)(r,(function(){var s=this._self._c;return s("div",{staticClass:"text-center"},[s("h1",{domProps:{textContent:this._s(this.effectiveTitle)}}),this._v(" "),s("time",{staticClass:"inline-block border-b-4 border-gray-500 pb-4",attrs:{datetime:this.$frontmatter.date},domProps:{textContent:this._s(this.postDate)}})])}),[],!1,null,null,null);j.default=i.exports}}]);