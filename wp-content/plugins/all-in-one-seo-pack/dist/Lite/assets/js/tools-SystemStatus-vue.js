(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["tools-SystemStatus-vue"],{"4cec":function(t,s,e){"use strict";var i=e("8772"),a=e.n(i);a.a},8772:function(t,s,e){},d046:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-tools-system-status-info"},[e("core-card",{attrs:{slug:"systemStatusInfo","header-text":t.strings.systemStatusInfo}},[e("div",{staticClass:"actions"},[e("grid-row",[e("grid-column",{staticClass:"left",attrs:{sm:"6"}},[e("base-button",{attrs:{type:"blue",size:"medium"},on:{click:t.downloadSystemStatusInfo}},[e("svg-download"),t._v(" "+t._s(t.strings.downloadSystemInfoFile)+" ")],1),e("base-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.copySystemStatusInfo,expression:"copySystemStatusInfo",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{type:"blue",size:"medium"}},[t.copied?t._e():[e("svg-copy"),t._v(" "+t._s(t.strings.copyToClipboard)+" ")],t.copied?[e("svg-checkmark"),t._v(" "+t._s(t.strings.copied)+" ")]:t._e()],2)],1),e("grid-column",{staticClass:"right",attrs:{sm:"6"}},[e("base-input",{class:{"aioseo-error":t.emailError},attrs:{size:"medium",placeholder:t.strings.emailDebugInformation},model:{value:t.emailAddress,callback:function(s){t.emailAddress=s},expression:"emailAddress"}}),e("base-button",{attrs:{type:"blue",size:"medium",loading:t.sendingEmail},on:{click:t.processEmailDebugInfo}},[t._v(" "+t._s(t.strings.submit)+" ")])],1)],1)],1),e("div",{staticClass:"aioseo-settings-row"},[t._l(t.$aioseo.data.status,(function(s,i){return[s.results.length?e("div",{key:i,staticClass:"settings-group"},[e("div",{staticClass:"settings-name"},[e("div",{staticClass:"name"},[t._v(t._s(s.label))])]),e("div",{staticClass:"settings-content"},[e("div",{staticClass:"system-status-table"},t._l(s.results,(function(s,i){return e("table-row",{key:i,class:{even:0===i%2}},[e("table-column",{staticClass:"system-status-header"},[t._v(" "+t._s(s.header)+" ")]),e("table-column",[t._v(" "+t._s(s.value)+" ")])],1)})),1)])]):t._e()]}))],2)])],1)},a=[],o=(e("d3b7"),e("3ca3"),e("ddb0"),e("2b3d"),e("5530")),n=e("2f62"),r={data:function(){return{copied:!1,emailError:null,emailAddress:null,sendingEmail:!1,strings:{systemStatusInfo:this.$t.__("System Status Info",this.$td),downloadSystemInfoFile:this.$t.__("Download System Info File",this.$td),copyToClipboard:this.$t.__("Copy to Clipboard",this.$td),emailDebugInformation:this.$t.__("Email Debug Information",this.$td),submit:this.$t.__("Submit",this.$td),wordPress:this.$t.__("WordPress",this.$td),serverInfo:this.$t.__("Server Info",this.$td),activeTheme:this.$t.__("Active Theme",this.$td),muPlugins:this.$t.__("Must-Use Plugins",this.$td),activePlugins:this.$t.__("Active Plugins",this.$td),inactivePlugins:this.$t.__("Inactive Plugins",this.$td),copied:this.$t.__("Copied!",this.$td)}}},computed:{copySystemStatusInfo:function(){return JSON.stringify(this.$aioseo.data.status)}},methods:Object(o["a"])(Object(o["a"])({},Object(n["b"])(["emailDebugInfo"])),{},{onCopy:function(){var t=this;this.copied=!0,setTimeout((function(){t.copied=!1}),2e3)},onError:function(){},downloadSystemStatusInfo:function(){var t=new Blob([JSON.stringify(this.$aioseo.data.status)],{type:"application/json"}),s=document.createElement("a");s.href=URL.createObjectURL(t),s.download="aioseo-system-status-".concat(this.$moment().format("YYYY-MM-DD"),".json"),s.click(),URL.revokeObjectURL(s.href)},processEmailDebugInfo:function(){var t=this;this.emailError=!1,this.emailAddress&&/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.emailAddress)?(this.sendingEmail=!0,this.emailDebugInfo(this.emailAddress).then((function(){t.emailAddress=null,t.sendingEmail=!1}))):this.emailError=!0}})},l=r,c=(e("4cec"),e("2877")),d=Object(c["a"])(l,i,a,!1,null,null,null);s["default"]=d.exports}}]);