"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[139],{6139:(i,d,e)=>{e.r(d),e.d(d,{HTML:()=>a});var n=e(4298);function a(i=[],d=!1){return`\n      \n       <search-component></search-component>\n       \n        <div class="container" hchange>\n             \n           <div class="for-rect">\n             ${d?"<div class='loader'><p>Loading, please wait....</p></div>":function(i){return i.map(((i,d)=>`<div class="file${i.observe||""}" } \n                     data-role="showFile" data-id="${i._id}">\n                <div class="controls">\n               \n                <p  style=" overflow:hidden; text-after-overflow: ellipsis; width:170px">${i.originalName} </p>\n              \n                 ${i.observe?"":` <i files="id" class="fas fa-window-close fa-cross" data-id="${i._id}" data-role = 'close'></i>`}\n                 </div>\n                 ${function(i){const{type:d}=i;return`\n         <div class="file-content" data-name="${i.originalName}">\n               <div class="file-foreground" data-role='showFile' data-id="${i._id}" ></div> \n               <img files="img" ${i.observe?"data-observe=observable":""} data-id="${i._id}" data-role='showFile' src="${n.LB+i.imgSrc}" alt="" class="preview">\n               ${e=`<audio src="http://localhost:5000/${i.urlUnencoded} " controls></audio>`,a="audio"===d?.split("/")[0],a?e:""}\n               <p class="author-name">${i.observe?`From ${i.authorName}`:""}</p>\n         </div>\n    `;var e,a}(i)}\n                 <div class="lds-default" id="fileSpinner" style="display: none"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>  \n            </div>`)).join("")}(i)}\n            </div>\n        </div>\n       \n        \n         \n   `}}}]);