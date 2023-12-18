import{n as d,r as i,d as w,a as c,V as p,b as y,c as N,u as f,s as u,o as x}from"./index.3d1d5747.js";var V=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"custom-input"},[e("label",{staticClass:"custom-input__label"},[t._v(t._s(t.label))]),e("textarea",{attrs:{placeholder:t.placeholder},on:{input:t.updateValue}}),t._v(" "),t.showCounter?e("div",{staticClass:"custom-input__counter"},[t._v(" "+t._s(t.inputValue.length)+" / "+t._s(t.maxLength)+" ")]):t._e(),t.errorMessage?e("div",[e("div",{staticClass:"custom-input__error"},[t._v(t._s(t.errorMessage[0]))])]):t._e()])},g=[];const C={props:{label:String,placeholder:String,showCounter:Boolean,errorMessage:Array,maxLength:Number},methods:{updateValue(t){this.inputValue=t.target.value,this.$emit("input",t.target.value)}},setup(){return{inputValue:i("")}}},_={};var b=d(C,V,g,!1,S,"63fc9dca",null,null);function S(t){for(let o in _)this[o]=_[o]}const $=function(){return b.exports}(),h=w("notes",{state:()=>({notes:null}),getters:{notesSerialized:t=>{var o;return(o=t.notes)==null?void 0:o.map(e=>({title:e.title,content:e.content,id:e.id}))}},actions:{async createNote(t){try{await c.post("/notes",t)}catch(o){return await Promise.reject(o)}},async getUserNotes(){try{const{data:t}=await c.get("/notes");this.notes=t}catch(t){return await Promise.reject(t)}},async deleteNote(t){try{await c.delete(`/notes/${t}`)}catch(o){return await Promise.reject(o)}}}});var M=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("transition",{attrs:{name:"modal"}},[t.showAddNoteModal?e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("h2",{staticClass:"modal-title"},[t._v("\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438")]),e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(s){var a=s.handleSubmit;return[e("form",{on:{submit:function(n){return n.preventDefault(),a(t.onSubmit)}}},[e("ValidationProvider",{attrs:{name:"noteName",rules:"required|max:64"},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.errors;return[e("VInput",{attrs:{label:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",type:"text","error-message":r,"show-counter":!0,"max-length":64},model:{value:t.noteName,callback:function(l){t.noteName=l},expression:"noteName"}})]}}],null,!0)}),e("ValidationProvider",{attrs:{rules:"required|max:255",name:"noteText"},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.errors;return[e("VTextArea",{attrs:{label:"\u0422\u0435\u043A\u0441\u0442 \u0437\u0430\u043C\u0435\u0442\u043A\u0438",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442",type:"text","error-message":r,"show-counter":!0,"max-length":255},model:{value:t.noteText,callback:function(l){t.noteText=l},expression:"noteText"}})]}}],null,!0)}),e("div",{staticClass:"modal-actions"},[e("div",{staticClass:"modal-links"}),e("div",{staticClass:"modal-button"},[e("VButton",{attrs:{fullWidth:!0,disabled:t.isLoading,showLoadIcon:t.isLoading,type:"submit"}},[t._v("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")])],1)])],1)]}}],null,!1,1795803523)}),e("VButton",{staticClass:"modal-close-button",attrs:{showCloseIcon:!0},on:{click:function(s){t.showAddNoteModal=!1}}})],1)])]):t._e()])},A=[];const k={name:"HomeView",components:{VButton:p,VInput:y,VLink:N,VTextArea:$},setup(){const t=f(),o=h(),{showAddNoteModal:e}=u(t),s=i(""),a=i(""),n=i(!1);return{showAddNoteModal:e,onSubmit:async()=>{n.value=!0;const l={title:s.value,content:a.value};try{await o.createNote(l),await o.getUserNotes()}catch{}finally{n.value=!1,e.value=!1,s.value="",a.value=""}},noteName:s,noteText:a,isLoading:n}}},v={};var T=d(k,M,A,!1,L,null,null,null);function L(t){for(let o in v)this[o]=v[o]}const j=function(){return T.exports}();var B=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"notes"},[t._l(t.notesSerialized,function(s,a){return e("div",{key:a,staticClass:"note"},[e("h4",{staticClass:"note-title"},[t._v(t._s(s.title))]),e("div",{staticClass:"note-content"},[t._v(t._s(s.content))]),e("div",{staticClass:"note-actions"},[e("VButton",{staticClass:"note-btn",attrs:{showCloseIcon:!0},on:{click:function(n){return t.deleteNote(s.id)}}},[t._v("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")])],1)])}),e("VButton",{staticClass:"add-note-btn",attrs:{showAddIcon:!0},on:{click:function(s){t.showAddNoteModal=!t.showAddNoteModal}}}),e("VAddNoteModal")],2)},I=[];const P={name:"NotesView",components:{VButton:p,VAddNoteModal:j},setup(){const t=f(),o=h(),{showAddNoteModal:e}=u(t),{notesSerialized:s}=u(o);return x(async()=>{await o.getUserNotes()}),{showAddNoteModal:e,notesSerialized:s,deleteNote:async n=>{try{await o.deleteNote(n),await o.getUserNotes()}catch{}}}}},m={};var z=d(P,B,I,!1,R,null,null,null);function R(t){for(let o in m)this[o]=m[o]}const F=function(){return z.exports}();export{F as default};