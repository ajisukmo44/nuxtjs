(window.webpackJsonp=window.webpackJsonp||[]).push([[30,10],{294:function(t,e,o){var content=o(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("1e0d3cd7",content,!0,{sourceMap:!1})},295:function(t,e,o){"use strict";o.r(e);var n=o(298),r=o.n(n),l={data:function(){return{token:"Bearer "+this.$auth.$storage.getLocalStorage("access_token"),user:this.$auth.$storage.getLocalStorage("user")}},methods:{logout:function(){localStorage.clear(),this.$auth.logout({headers:{"Content-Type":"application/json",Authorization:this.token}}),r.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!1,didOpen:function(t){t.addEventListener("mouseenter",r.a.stopTimer),t.addEventListener("mouseleave",r.a.resumeTimer)}}).fire({icon:"info",title:"Logout Berhasil!"})}}},c=(o(296),o(65)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"topnav d-none d-md-block",attrs:{id:"myTopnav"}},[o("a",{staticClass:"x",attrs:{href:""},on:{click:t.logout}},[o("i",{staticClass:"fa fa-sign-out"}),t._v(" Logout")]),t._v(" "),o("a",{staticClass:"x",attrs:{href:""}},[o("i",{staticClass:"fa fa-user-o"}),t._v(" "+t._s(t.user.name))])])])}),[],!1,null,"07be6309",null);e.default=component.exports},296:function(t,e,o){"use strict";o(294)},297:function(t,e,o){var n=o(63)(!1);n.push([t.i,"body[data-v-07be6309]{margin:0;font-family:Arial,Helvetica,sans-serif}.topnav[data-v-07be6309]{overflow:hidden;background-color:#02554f}.topnav a[data-v-07be6309]{float:left;display:block;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-size:17px}.topnav a[data-v-07be6309]:hover{background-color:#f6b756;color:#02554f}.topnav a.active[data-v-07be6309]{background-color:#04aa6d;color:#fff}.topnav .icon[data-v-07be6309]{display:none}.topnav .x[data-v-07be6309]{float:right}@media screen and (max-width:600px){.topnav a[data-v-07be6309]:not(:first-child){display:none}.topnav a.icon[data-v-07be6309]{float:right;display:block}}@media screen and (max-width:600px){.topnav.responsive[data-v-07be6309]{position:relative}.topnav.responsive .icon[data-v-07be6309]{position:absolute;right:0;top:0}.topnav.responsive a[data-v-07be6309]{float:none;display:block;text-align:left}}",""]),t.exports=n},358:function(t,e,o){var content=o(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("04191fc8",content,!0,{sourceMap:!1})},403:function(t,e,o){"use strict";o(358)},404:function(t,e,o){var n=o(63)(!1);n.push([t.i,".skuad[data-v-1494fe0d]{background-color:#e4e5e6}",""]),t.exports=n},428:function(t,e,o){"use strict";o.r(e);var n=o(25),r=(o(77),o(18),o(17),o(39),o(43),o(154),o(9),o(16),o(298)),l=o.n(r),c=(o(76),{middleware:"authuser",data:function(){return{url:"https://cms.ajisukmo.com",token:"Bearer "+this.$auth.$storage.getLocalStorage("access_token"),user_id:this.$auth.$storage.getLocalStorage("user").id,agenda:{},team:[],selectedName:"Pilih Foto ..",selectedFile:null,previewImage:null,form:{id:"",nama_skuad:"",staf_pelatih:""}}},methods:{onFileSelected:function(t){this.selectedFile=t.target.files[0],this.selectedName=t.target.files[0].name,this.previewImage=URL.createObjectURL(this.selectedFile)},uploadAgenda:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o={"Content-Type":"application/json",Authorization:t.token},[],(n=new FormData).append("image",t.selectedFile),e.next=7,t.$axios.$post("/tambahskuad/"+t.form.id+"/"+t.form.nama_skuad+"/"+t.form.staf_pelatih,n,{headers:o}).then((function(t){l.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:4e3,timerProgressBar:!1,didOpen:function(t){t.addEventListener("mouseenter",l.a.stopTimer),t.addEventListener("mouseleave",l.a.resumeTimer)}}).fire({icon:"success",title:"Tambah Skuad Berhasil!"}),location.replace("/auth/timskuad")})).catch((function(t){(t.response.status=422)&&l.a.fire({icon:"error",title:"Tambah Tim Skuad Gagal!",text:"Type: jpg,jpeg,png Max: 2Mb",confirmButtonColor:"#F27474"})}));case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.form.id=this.$auth.$storage.getLocalStorage("team").id}}),d=(o(403),o(65)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"d-flex skuad",attrs:{id:"wrapper"}},[o("Sidebar2"),t._v(" "),o("div",{attrs:{id:"page-content-wrapper"}},[o("Nav"),t._v(" "),o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row p-4"},[o("div",{staticClass:"col-sm-8 mt-4"},[o("div",{staticClass:"title"},[o("h6",{staticClass:"text-secondary mb-2"},[o("b",[o("nuxt-link",{staticClass:"text-secondary",attrs:{to:"/auth/dashboard"}},[t._v("Dashboard ")]),t._v(" "),o("i",{staticClass:"fa fa-angle-right"}),t._v(" "),o("nuxt-link",{staticClass:"text-secondary",attrs:{to:"/auth/timskuad/"}},[t._v("Tim Skuad ")]),t._v(" "),o("i",{staticClass:"fa fa-angle-right"}),t._v(" "),o("span",{staticClass:"text-h"},[t._v(" Tambah Data ")])],1)])]),t._v(" "),o("div",{staticClass:"bg-white p-3"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-12 col-xs-12 p-5 text-secondary bg-white"},[o("form",{on:{submit:function(e){return e.preventDefault(),t.uploadAgenda.apply(null,arguments)}}},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v("Nama Skuad")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nama_skuad,expression:"form.nama_skuad"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.form.nama_skuad},on:{input:function(e){e.target.composing||t.$set(t.form,"nama_skuad",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v("Staf Pelatih")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.staf_pelatih,expression:"form.staf_pelatih"}],staticClass:"form-control",attrs:{type:"text",col:"2",rows:"2",required:""},domProps:{value:t.form.staf_pelatih},on:{input:function(e){e.target.composing||t.$set(t.form,"staf_pelatih",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[t._m(0),t._v(" "),o("div",{staticClass:"custom-file"},[o("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"validatedCustomFile",required:""},on:{change:t.onFileSelected}}),t._v(" "),o("label",{staticClass:"custom-file-label text-secondary ",attrs:{for:"validatedCustomFile"}},[t._v(t._s(t.selectedName))]),t._v(" "),o("div",{staticClass:"invalid-feedback"})]),t._v(" "),o("img",{staticClass:"img-fluid pt-3",attrs:{src:t.previewImage,width:"250"}})]),t._v(" "),o("div",{staticClass:"form-group text-right"},[o("nuxt-link",{staticClass:"btn btn-r",attrs:{to:"/auth/timskuad/"}},[t._v(" Kembali ")]),t._v(" "),o("button",{staticClass:"btn btn-h",attrs:{type:"submit"}},[t._v(" Simpan ")])],1)])])])])])])])],1)],1)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{attrs:{for:""}},[t._v("Foto Tim "),o("span",{staticClass:"text-danger"},[t._v("* File: jpg, jpeg, png, Max:2mb")])])}],!1,null,"1494fe0d",null);e.default=component.exports;installComponents(component,{Sidebar2:o(304).default,Nav:o(295).default})}}]);