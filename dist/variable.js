define("extensions/variable/util",[],function(){"use strict";function e(e,t,a){var r=document.createElement(e);return t&&(r.className=t),void 0!==a&&(r.innerHTML=a),r}function t(e,t){0===e.childNodes.length?e.appendChild(t):e.replaceChild(t,e.childNodes[0])}return{createElement:e,setChild:t}}),define("extensions/variable/properties",[],function(){"use strict";return{initialProperties:{variableValue:{},variableName:"",render:"f",valueType:"x",alternatives:[],dynamicvalues:"",min:0,max:100,step:1,style:"qlik",width:"",customwidth:""},definition:{type:"items",component:"accordion",items:{settings:{uses:"settings",items:{variable:{type:"items",label:"Variable",items:{name:{ref:"variableName",label:"Name",type:"string",component:"dropdown",options:function(e,t,a){return console.log("options",e,t,a),a.model.enigmaModel.app.getVariableList().then(function(e){return console.log("variableList",e),e.map(function(e){return{value:e.qName,label:e.qName}})})},change:function(e){e.variableValue=e.variableValue||{},e.variableValue.qStringExpression='="'+e.variableName+'"'}},render:{type:"string",component:"dropdown",label:"Show as",ref:"render",options:[{value:"b",label:"Buttons"},{value:"s",label:"Drop down"},{value:"f",label:"Input Field"},{value:"l",label:"Slider"}],defaultValue:"f"},style:{type:"string",component:"dropdown",label:"Style",ref:"style",options:[{value:"qlik",label:"Qlik"},{value:"bootstrap",label:"Bootstrap"},{value:"material",label:"Material"}]},width:{type:"string",component:"dropdown",label:"Width",ref:"width",options:[{value:"",label:"Default"},{value:"fill",label:"Fill"},{value:"custom",label:"Custom"}]},customwidth:{type:"string",ref:"customwidth",label:"Custom width",expression:"optional",show:function(e){return"custom"===e.width}},vert:{type:"boolean",label:"Vertical",ref:"vert",defaultValue:!1,show:function(e){return"l"===e.render}}}},values:{type:"items",label:"Values",show:function(e){return"f"!=e.render},items:{valueType:{type:"string",component:"dropdown",label:"Fixed or dynamic values",ref:"valueType",options:[{value:"x",label:"Fixed"},{value:"d",label:"Dynamic"}],defaultValue:"x",show:function(e){return["b","s"].indexOf(e.render)>-1}},dynamicvalues:{type:"string",ref:"dynamicvalues",label:"Dynamic values",expression:"optional",show:function(e){return["b","s"].indexOf(e.render)>-1&&"d"===e.valueType}},dynamictext:{component:"text",label:"Use | to separate values and ~ to separate value and label, like this: value1|value2 or value1~label1|value2~label2)",show:function(e){return["b","s"].indexOf(e.render)>-1&&"d"===e.valueType}},alternatives:{type:"array",ref:"alternatives",label:"Alternatives",itemTitleRef:"label",allowAdd:!0,allowRemove:!0,addTranslation:"Add Alternative",items:{value:{type:"string",ref:"value",label:"Value",expression:"optional"},label:{type:"string",ref:"label",label:"Label",expression:"optional"}},show:function(e){return["b","s"].indexOf(e.render)>-1&&"d"!==e.valueType}},min:{ref:"min",label:"Min",type:"number",defaultValue:0,expression:"optional",show:function(e){return"l"===e.render}},max:{ref:"max",label:"Max",type:"number",defaultValue:100,expression:"optional",show:function(e){return"l"===e.render}},step:{ref:"step",label:"Step",type:"number",defaultValue:1,expression:"optional",show:function(e){return"l"===e.render}},rangelabel:{ref:"rangelabel",label:"Slider label",type:"boolean",defaultValue:!1,show:function(e){return"l"===e.render}}}}}}}},support:{export:!0}}}),define("extensions/variable/style",[],function(){var e=document.createElement("style");e.innerHTML=".qv-object-variable{box-sizing:border-box}.qv-object-variable .icon-zoom-in{display:none}.qv-object-variable .qv-object-title{padding-right:0}.qv-object-variable div.bootstrap,.qv-object-variable div.material,.qv-object-variable div.qlik{height:40px}.qv-object-variable button{cursor:pointer;margin-right:3px;margin-bottom:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.qv-object-variable .labelwrap{position:absolute;top:11px;width:calc(98% - 30px)}.qv-object-variable input[type=range]{-webkit-appearance:none;width:100%;position:absolute;top:20px;padding:0;border:none;height:30px}.qv-object-variable input[type=range]:focus{outline:none}.qv-object-variable input[type=range]::-webkit-slider-runnable-track{cursor:pointer}.qv-object-variable input[type=range]::-webkit-slider-thumb{-webkit-appearance:none}.qv-object-variable input[type=range]::-moz-range-thumb{-webkit-appearance:none}.qv-object-variable input[type=range]::-ms-thumb{-webkit-appearance:none}.qv-object-variable input[type=range]::-ms-track{width:100%;cursor:pointer;background:transparent;border-color:transparent;color:transparent}.qv-object-variable .vert input[type=range]{transform:rotate(270deg);top:40%}.qv-object-variable .vert .labelwrap{top:24px;right:25px;height:calc(100% - 30px);width:10px}.qv-object-variable .qlik .rangelabel{position:absolute;margin-top:-10px;text-align:center;border:1px solid #ccc;background-color:#fff;padding-left:5px;padding-right:5px;border-radius:3px}.qv-object-variable .qlik input[type=range]::-webkit-slider-runnable-track{position:relative;width:99%;height:6px;border-radius:3px;border:1px solid #ccc;background-color:#fff}.qv-object-variable .qlik input[type=range]::-webkit-slider-thumb{height:22px;width:22px;margin-top:-10px;border-radius:15px;border:1px solid #ccc;background-image:linear-gradient(0deg,#e6e6e6,#fff)}.qv-object-variable .qlik input[type=range]::-moz-range-track{position:relative;width:99%;height:6px;border-radius:3px;border:1px solid #ccc;background-color:#fff}.qv-object-variable .qlik input[type=range]::-moz-range-thumb{height:22px;width:22px;margin-top:-10px;border-radius:15px;border:1px solid #ccc;background-image:linear-gradient(0deg,#e6e6e6,#fff)}.qv-object-variable .qlik input[type=range]::-ms-fill-lower,.qv-object-variable .qlik input[type=range]::-ms-fill-upper{position:relative;width:99%;height:6px;border-radius:3px;border:1px solid #ccc;background-color:#fff}.qv-object-variable .qlik input[type=range]::-ms-thumb{height:22px;width:22px;margin-top:-10px;border-radius:15px;border:1px solid #ccc;background-image:linear-gradient(0deg,#e6e6e6,#fff);margin-top:0}.qv-object-variable .bootstrap button{display:inline-block;padding:6px 12px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;background-image:none;border:1px solid transparent;border-radius:4px;text-decoration:none}.qv-object-variable .bootstrap button:focus{color:#333;background-color:#e6e6e6;border-color:#8c8c8c}.qv-object-variable .bootstrap button:hover{color:#333;background-color:#e6e6e6;border-color:#adadad}.qv-object-variable .bootstrap button.selected{background-color:#52cc52;color:#fff}.qv-object-variable .bootstrap input,.qv-object-variable .bootstrap select{display:block;width:90%;padding:6px 12px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.qv-object-variable .bootstrap input:focus,.qv-object-variable .bootstrap select:focus{border-color:#66afe9;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.qv-object-variable .bootstrap .rangelabel{position:absolute;margin-top:-10px;text-align:center;border:1px solid #ccc;background-color:#fff;padding-left:5px;padding-right:5px;border-radius:3px}.qv-object-variable .bootstrap input[type=range]{border:none;padding:0}.qv-object-variable .bootstrap input[type=range]::-webkit-slider-runnable-track{position:relative;width:99%;cursor:pointer;height:6px;border-radius:3px;background-color:#bababa}.qv-object-variable .bootstrap input[type=range]::-webkit-slider-thumb{height:22px;width:22px;margin-top:-8px;border-radius:50%;background-color:#337ab7;background-image:linear-gradient(180deg,#149bdf 0,#0480be);background-repeat:repeat-x;box-sizing:border-box}.qv-object-variable .bootstrap input[type=range]::-moz-range-track{position:relative;width:99%;cursor:pointer;height:6px;border-radius:3px;background-color:#bababa}.qv-object-variable .bootstrap input[type=range]::-moz-range-thumb{height:22px;width:22px;margin-top:-8px;border-radius:50%;background-color:#337ab7;background-image:linear-gradient(180deg,#149bdf 0,#0480be);background-repeat:repeat-x;box-sizing:border-box}.qv-object-variable .bootstrap input[type=range]::-ms-track{position:relative;width:99%;cursor:pointer;height:6px;border-radius:3px;background-color:#bababa}.qv-object-variable .bootstrap input[type=range]::-ms-thumb{height:22px;width:22px;margin-top:-8px;border-radius:50%;background-color:#337ab7;background-image:linear-gradient(180deg,#149bdf 0,#0480be);background-repeat:repeat-x;box-sizing:border-box}.qv-object-variable .bootstrap input[type=range]::-ms-fill-lower,.qv-object-variable .bootstrap input[type=range]::-ms-fill-upper{height:6px;background:#bababa;border:none}.qv-object-variable .material button,.qv-object-variable .material input,.qv-object-variable .material select{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.qv-object-variable .material button{text-align:center;outline:0;-webkit-tap-highlight-color:transparent;transition:.2s ease-out;text-decoration:none;color:#fff;background-color:#26a69a;letter-spacing:.5px;border:none;border-radius:2px;height:36px;line-height:36px;padding:0 1rem;text-transform:uppercase;z-index:1}.qv-object-variable .material button:hover{background-color:#2bbbad;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.qv-object-variable .material button.selected{background-color:#52cc52}.qv-object-variable .material input[type=text]{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;width:100%;margin:0 0 15px;padding:6px 12px;box-sizing:content-box;transition:all .3s}.qv-object-variable .material select{-webkit-appearance:menulist;-ms-flex-align:center;align-items:center;background-color:hsla(0,0%,100%,.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-bottom:1px solid #9e9e9e;border-radius:2px;text-rendering:auto;color:initial;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-shadow:none;display:inline-block;text-align:start}.qv-object-variable .material input:focus,.qv-object-variable .material select:focus{outline:1px solid #c9f3ef;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.qv-object-variable .material input:focus,.qv-object-variable .material select:hover{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.qv-object-variable .material .rangelabel{display:block;position:absolute;top:8px;width:30px;height:30px;line-height:30px;border:none;text-align:center;color:#fff;background-color:transparent;pointer-events:none}.qv-object-variable .material input[type=range]:focus{outline:none}.qv-object-variable .material input[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}.qv-object-variable .material input[type=range]::-webkit-slider-thumb{border:none;height:30px;width:30px;border-radius:50%;background-color:#26a69a;transform-origin:50% 50%;margin:-15px 0 0;transition:.3s}.qv-object-variable .material input[type=range]:focus::-webkit-slider-runnable-track{background:#26a69a}.qv-object-variable .material input[type=range]::-moz-range-track{height:3px;background:#c2c0c2;border:none}.qv-object-variable .material input[type=range]::-moz-range-thumb{border:none;height:30px;width:30px;border-radius:50%;background-color:#26a69a;transform-origin:50% 50%;margin:-15px 0 0;transition:.3s}.qv-object-variable .material input[type=range]::-ms-track{height:3px;background:#c2c0c2;border:none;margin-top:15px}.qv-object-variable .material input[type=range]::-ms-fill-lower,.qv-object-variable .material input[type=range]::-ms-fill-upper{background:#c2c0c2;border:none}.qv-object-variable .material input[type=range]::-ms-thumb{border:none;height:30px;width:30px;border-radius:50%;background-color:#26a69a;transform-origin:50% 50%;margin:-15px 0 0;transition:.3s;top:15px}.qv-object-variable .material input[type=range]:focus::-ms-fill-lower,.qv-object-variable .material input[type=range]:focus::-ms-fill-upper{background:#26a69a}.qv-object-variable .material.vert .labelwrap{left:calc(50% - 10px)}.qv-object-variable .material.vert .rangelabel{top:unset;left:-9px}",document.head.appendChild(e)}),define(["extensions/variable/util","extensions/variable/properties","extensions/variable/style"],function(e,t){"use strict";function a(e){return 100*(e.value-e.min)/(e.max-e.min)}function r(e,t,a){return e.backendApi.model.enigmaModel.app.getVariableByName(t).then(function(e){return e.setStringValue(a)})}function i(e,t,a){switch(e){case"material":case"bootstrap":if(a)return"selected";break;default:switch(t){case"button":return a?"qui-button-selected lui-button lui-button--success":"qui-button lui-button";case"select":return"qui-select lui-select";case"input":return"qui-input lui-input"}}}function o(e){return"l"===e.render?"98%":"custom"===e.width?e.customwidth:"fill"===e.width?"b"!==e.render?"100%":"calc( "+100/e.alternatives.length+"% - 3px)":void 0}function n(e,t){e.label?(t?e.label.style.bottom=a(e)+"%":e.label.style.left=a(e)+"%",e.label.textContent=e.value):e.title=e.value}function l(e){return e.split("|").map(function(e){var t=e.split("~");return{value:t[0],label:t.length>1?t[1]:t[0]}})}return{initialProperties:t.initialProperties,definition:t.definition,support:t.support,paint:function(t,a){var b=e.createElement("div",a.style||"qlik"),p=o(a),c="d"===a.valueType?l(a.dynamicvalues):a.alternatives,d=this;if(a.vert&&b.classList.add("vert"),"b"===a.render)c.forEach(function(t){var o=e.createElement("button",i(a.style,"button",t.value===a.variableValue),t.label);o.onclick=function(){r(d,a.variableName,t.value)},o.style.width=p,b.appendChild(o)});else if("s"===a.render){var u=e.createElement("select",i(a.style,"select"));u.style.width=p,c.forEach(function(t){var r=e.createElement("option",void 0,t.label);r.value=t.value,r.selected=t.value===a.variableValue,u.appendChild(r)}),u.onchange=function(){r(d,a.variableName,this.value)},b.appendChild(u)}else if("l"===a.render){var s=e.createElement("input");if(a.vert?(s.style.width=t.height()+"px",s.style.left="-"+(t.height()-t.width())/2+"px"):s.style.width=p,s.type="range",s.min=a.min||0,s.max=a.max||100,s.step=a.step||1,s.value=a.variableValue,s.onchange=function(){n(this,a.vert),r(d,a.variableName,this.value)},s.oninput=function(){n(this,a.vert)},b.appendChild(s),a.rangelabel){var v=e.createElement("div","labelwrap");s.label=e.createElement("div","rangelabel",a.variableValue),v.appendChild(s.label),b.appendChild(v)}n(s,a.vert)}else{var g=e.createElement("input",i(a.style,"input"));g.style.width=p,g.type="text",g.value=a.variableValue,g.onchange=function(){r(d,a.variableName,this.value)},b.appendChild(g)}e.setChild(t[0],b)}}});