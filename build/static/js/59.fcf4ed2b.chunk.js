webpackJsonp([59],{1854:function(n,t,e){"use strict";function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function a(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?n:t}function o(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}function i(n){var t=n.Contacts;return{contacts:t.contacts,seectedId:t.seectedId,editView:t.editView}}Object.defineProperty(t,"__esModule",{value:!0});var l=e(0),c=e.n(l),p=e(50),d=e(417),s=e(34),f=e(392),h=e(3565),u=e(3567),m=e(3568),x=e(3086),g=e(757),b=e(84),y=e(3571),w=e(258),v=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),C=d.a.changeContact,j=d.a.addContact,O=d.a.editContact,k=d.a.deleteContact,N=d.a.viewChange,E=s.s.Content,A=function(n){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,n),v(t,[{key:"render",value:function(){var n=this.props,t=n.contacts,e=n.seectedId,r=n.editView,a=n.changeContact,o=n.addContact,i=n.editContact,l=n.deleteContact,p=n.viewChange,d=e?t.filter(function(n){return n.id===e})[0]:null,v=function(){return p(!r)};return c.a.createElement(y.a,{className:"isomorphicContacts",style:{background:"none"}},c.a.createElement("div",{className:"isoContactListBar"},c.a.createElement(h.a,{contacts:t,seectedId:e,changeContact:a,deleteContact:l})),c.a.createElement(s.s,{className:"isoContactBoxWrapper"},d?c.a.createElement(E,{className:"isoContactBox"},c.a.createElement("div",{className:"isoContactControl"},c.a.createElement(f.b,{type:"button",onClick:v},r?c.a.createElement(s.p,{type:"check"}):c.a.createElement(s.p,{type:"edit"})," "),c.a.createElement(x.a,{deleteContact:l,contact:d}),c.a.createElement(f.b,{type:"primary",onClick:o,className:"isoAddContactBtn"},c.a.createElement(b.a,{id:"contactlist.addNewContact"}))),c.a.createElement(w.a,{className:"contactBoxScrollbar"},r?c.a.createElement(m.a,{contact:d,editContact:i,otherAttributes:g.b}):c.a.createElement(u.a,{contact:d,otherAttributes:g.b}))):c.a.createElement("div",{className:"isoContactControl"},c.a.createElement(f.b,{type:"primary",onClick:o,className:"isoAddContactBtn"},c.a.createElement(b.a,{id:"contactlist.addNewContact"})))))}}]),t}(l.Component);t.default=Object(p.b)(i,{changeContact:C,addContact:j,editContact:O,deleteContact:k,viewChange:N})(A)},2802:function(n,t,e){"use strict";var r=e(34);t.a=r.R},3086:function(n,t,e){"use strict";function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function a(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?n:t}function o(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}var i=e(0),l=e.n(i),c=e(728),p=e(392),d=e(400),s=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),f=function(n){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,n),s(t,[{key:"render",value:function(){var n=this.props,t=n.contact,e=n.deleteContact,r="";return t.firstName&&(r=t.firstName+" "),t.lastName&&(r=""+r+t.lastName),r||(r="No Name"),l.a.createElement(c.a,{title:"Sure to delete "+r+"?",okText:"DELETE",cancelText:"No",onConfirm:function(){Object(d.a)("error",r+" Deleted",""),e(t.id)}},l.a.createElement(p.b,{icon:"close",type:"button",className:"isoDeleteBtn"}))}}]),t}(i.Component);t.a=f},3087:function(n,t,e){"use strict";e.d(t,"a",function(){return p});var r=e(44),a=e(67),o=(e.n(a),e(85)),i=e(74),l=function(n,t){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  width: 100%;\n  height: calc(100% - 145px);\n  padding: 0 35px;\n  display: -webkit-flex;\n  display: -ms-flex;\n  display: flex;\n\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 0 20px;\n  }\n\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    flex-direction: column;\n  }\n\n  .isoContactCardHead {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 120px;\n    flex-shrink: 0;\n    margin-right: ",";\n    margin-left: ",";\n    flex-shrink: 0;\n\n    @media only screen and (max-width: 600px) {\n      margin-bottom: 20px;\n    }\n\n    @media only screen and (min-width: 767px) and (max-width: 990px) {\n      margin-bottom: 20px;\n    }\n\n    .isoPersonImage {\n      width: 120px;\n      height: 120px;\n      display: flex;\n      flex-shrink: 0;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 10px;\n      overflow: hidden;\n      ",";\n\n      .avatar-uploader {\n        width: 100%;\n        height: 100%;\n      }\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n      }\n    }\n\n    .isoPersonName {\n      font-size: 15px;\n      font-weight: 500;\n      color: ",";\n      line-height: 1.5;\n      margin: 0;\n    }\n  }\n\n  .isoContactInfoWrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    @media only screen and (max-width: 767px) {\n      padding: 20px 0;\n    }\n\n    .isoContactCardInfos {\n      width: 100%;\n      display: flex;\n      flex-shrink: 0;\n      align-items: baseline;\n      flex-direction: row;\n      margin-bottom: 15px;\n\n      @media only screen and (max-width: 430px) {\n        flex-direction: column;\n        margin-bottom: 20px;\n      }\n\n      .isoInfoLabel {\n        font-size: 14px;\n        font-weight: 500;\n        color: ",";\n        line-height: 1.5;\n        margin: 0;\n        margin-right: ",";\n        margin-left: ",";\n        text-align: ",";\n        min-width: 80px;\n        position: relative;\n\n        @media only screen and (max-width: 430px) {\n          margin-bottom: 5px;\n          margin-right: ",";\n          margin-left: ",";\n          padding-right: ",";\n          padding-left: ",";\n          min-width: 0;\n        }\n\n        &::after {\n          content: ':';\n          position: absolute;\n          right: ",";\n          left: ",";\n        }\n      }\n\n      .isoInfoDetails {\n        font-size: 14px;\n        font-weight: 400;\n        color: ",";\n        line-height: 1.5;\n        margin: 0;\n        text-align: ",";\n      }\n\n      input {\n        font-size: 14px;\n        font-weight: 400;\n        color: ",";\n        line-height: inherit;\n        height: 36px;\n        padding: 0 15px;\n        margin: 0;\n        border: 1px solid ",";\n        outline: 0 !important;\n        overflow: hidden;\n        background-color: #ffffff;\n        ",";\n        ",";\n        ",";\n\n        &:focus {\n          border-color: ",";\n          ",";\n          outline: 0;\n        }\n\n        &:hover {\n          border-color: ",";\n        }\n\n        &::-webkit-input-placeholder {\n          color: ",";\n        }\n\n        &:-moz-placeholder {\n          color: ",";\n        }\n\n        &::-moz-placeholder {\n          color: ",";\n        }\n        &:-ms-input-placeholder {\n          color: ",";\n        }\n      }\n\n      textarea {\n        font-size: 14px;\n        font-weight: 400;\n        color: ",";\n        line-height: 24px;\n        height: 210px;\n        padding: 10px 15px;\n        margin: 0;\n        border: 1px solid ",";\n        outline: 0 !important;\n        background-color: #ffffff;\n        ",";\n        ",";\n        ",";\n\n        &:focus {\n          border-color: ",";\n          ",";\n          outline: 0;\n        }\n\n        &:hover {\n          border-color: ",";\n        }\n\n        &::-webkit-input-placeholder {\n          color: ",";\n        }\n\n        &:-moz-placeholder {\n          color: ",";\n        }\n\n        &::-moz-placeholder {\n          color: ",";\n        }\n        &:-ms-input-placeholder {\n          color: ",";\n        }\n      }\n    }\n  }\n"],["\n  width: 100%;\n  height: calc(100% - 145px);\n  padding: 0 35px;\n  display: -webkit-flex;\n  display: -ms-flex;\n  display: flex;\n\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 0 20px;\n  }\n\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    flex-direction: column;\n  }\n\n  .isoContactCardHead {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 120px;\n    flex-shrink: 0;\n    margin-right: ",";\n    margin-left: ",";\n    flex-shrink: 0;\n\n    @media only screen and (max-width: 600px) {\n      margin-bottom: 20px;\n    }\n\n    @media only screen and (min-width: 767px) and (max-width: 990px) {\n      margin-bottom: 20px;\n    }\n\n    .isoPersonImage {\n      width: 120px;\n      height: 120px;\n      display: flex;\n      flex-shrink: 0;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 10px;\n      overflow: hidden;\n      ",";\n\n      .avatar-uploader {\n        width: 100%;\n        height: 100%;\n      }\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n      }\n    }\n\n    .isoPersonName {\n      font-size: 15px;\n      font-weight: 500;\n      color: ",";\n      line-height: 1.5;\n      margin: 0;\n    }\n  }\n\n  .isoContactInfoWrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    @media only screen and (max-width: 767px) {\n      padding: 20px 0;\n    }\n\n    .isoContactCardInfos {\n      width: 100%;\n      display: flex;\n      flex-shrink: 0;\n      align-items: baseline;\n      flex-direction: row;\n      margin-bottom: 15px;\n\n      @media only screen and (max-width: 430px) {\n        flex-direction: column;\n        margin-bottom: 20px;\n      }\n\n      .isoInfoLabel {\n        font-size: 14px;\n        font-weight: 500;\n        color: ",";\n        line-height: 1.5;\n        margin: 0;\n        margin-right: ",";\n        margin-left: ",";\n        text-align: ",";\n        min-width: 80px;\n        position: relative;\n\n        @media only screen and (max-width: 430px) {\n          margin-bottom: 5px;\n          margin-right: ",";\n          margin-left: ",";\n          padding-right: ",";\n          padding-left: ",";\n          min-width: 0;\n        }\n\n        &::after {\n          content: ':';\n          position: absolute;\n          right: ",";\n          left: ",";\n        }\n      }\n\n      .isoInfoDetails {\n        font-size: 14px;\n        font-weight: 400;\n        color: ",";\n        line-height: 1.5;\n        margin: 0;\n        text-align: ",";\n      }\n\n      input {\n        font-size: 14px;\n        font-weight: 400;\n        color: ",";\n        line-height: inherit;\n        height: 36px;\n        padding: 0 15px;\n        margin: 0;\n        border: 1px solid ",";\n        outline: 0 !important;\n        overflow: hidden;\n        background-color: #ffffff;\n        ",";\n        ",";\n        ",";\n\n        &:focus {\n          border-color: ",";\n          ",";\n          outline: 0;\n        }\n\n        &:hover {\n          border-color: ",";\n        }\n\n        &::-webkit-input-placeholder {\n          color: ",";\n        }\n\n        &:-moz-placeholder {\n          color: ",";\n        }\n\n        &::-moz-placeholder {\n          color: ",";\n        }\n        &:-ms-input-placeholder {\n          color: ",";\n        }\n      }\n\n      textarea {\n        font-size: 14px;\n        font-weight: 400;\n        color: ",";\n        line-height: 24px;\n        height: 210px;\n        padding: 10px 15px;\n        margin: 0;\n        border: 1px solid ",";\n        outline: 0 !important;\n        background-color: #ffffff;\n        ",";\n        ",";\n        ",";\n\n        &:focus {\n          border-color: ",";\n          ",";\n          outline: 0;\n        }\n\n        &:hover {\n          border-color: ",";\n        }\n\n        &::-webkit-input-placeholder {\n          color: ",";\n        }\n\n        &:-moz-placeholder {\n          color: ",";\n        }\n\n        &::-moz-placeholder {\n          color: ",";\n        }\n        &:-ms-input-placeholder {\n          color: ",";\n        }\n      }\n    }\n  }\n"]),c=r.b.div(l,function(n){return"rtl"===n["data-rtl"]?"inherit":"50px"},function(n){return"rtl"===n["data-rtl"]?"50px":"inherit"},Object(o.a)("5px"),Object(a.palette)("text",0),Object(a.palette)("text",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"15px"},function(n){return"rtl"===n["data-rtl"]?"15px":"inherit"},function(n){return"rtl"===n["data-rtl"]?"right":"left"},function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},function(n){return"rtl"===n["data-rtl"]?"inherit":"10px"},function(n){return"rtl"===n["data-rtl"]?"10px":"inherit"},function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(a.palette)("text",2),function(n){return"rtl"===n["data-rtl"]?"right":"left"},Object(a.palette)("text",2),Object(a.palette)("border",0),Object(o.b)("none"),Object(o.a)("3px"),Object(o.c)(),Object(a.palette)("primary",0),Object(o.b)("0 0 0 2px rgba(68, 130, 255, 0.2)"),Object(a.palette)("primary",0),Object(a.palette)("grayscale",0),Object(a.palette)("grayscale",0),Object(a.palette)("grayscale",0),Object(a.palette)("grayscale",0),Object(a.palette)("text",2),Object(a.palette)("border",0),Object(o.b)("none"),Object(o.a)("3px"),Object(o.c)(),Object(a.palette)("primary",0),Object(o.b)("0 0 0 2px rgba(68, 130, 255, 0.2)"),Object(a.palette)("primary",0),Object(a.palette)("grayscale",0),Object(a.palette)("grayscale",0),Object(a.palette)("grayscale",0),Object(a.palette)("grayscale",0)),p=Object(i.a)(c)},3565:function(n,t,e){"use strict";function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function a(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?n:t}function o(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}function i(n,t){return t=t.toUpperCase(),t?n.filter(function(n){return n.name.toUpperCase().includes(t)}):n}var l=e(0),c=e.n(l),p=e(84),d=e(187),s=e(3086),f=e(1),h=(e.n(f),e(3566)),u=e(258),m=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),x=function(n){function t(n){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.singleContact=e.singleContact.bind(e),e.onChange=e.onChange.bind(e),e.state={search:""},e}return o(t,n),m(t,[{key:"singleContact",value:function(n){var t=this.props,e=t.seectedId,r=t.deleteContact,a=t.changeContact,o=e===n.id?"active":"",i=function(){return a(n.id)};return c.a.createElement("div",{key:n.id,className:o+" isoSingleContact",onClick:i},c.a.createElement("div",{className:"isoAvatar"},n.avatar?c.a.createElement("img",{alt:"#",src:n.avatar}):""),c.a.createElement("div",{className:"isoContactName"},c.a.createElement("h3",null,n.name?n.name:"No Name")),c.a.createElement(s.a,{deleteContact:r,contact:n}))}},{key:"onChange",value:function(n){this.setState({search:n.target.value})}},{key:"render",value:function(){var n=this,t=this.state.search,e=i(this.props.contacts,t);return c.a.createElement(h.a,{className:"isoContactListWrapper"},c.a.createElement(d.b,{placeholder:this.context.intl.formatMessage({id:"contactlist.searchContacts"}),value:t,onChange:this.onChange,className:"isoSearchBar"}),e&&e.length>0?c.a.createElement("div",{className:"isoContactList"},c.a.createElement(u.a,{className:"contactListScrollbar"},e.map(function(t){return n.singleContact(t)}))):c.a.createElement("span",{className:"isoNoResultMsg"},c.a.createElement(p.a,{id:"Component.contacts.noOption"})))}}]),t}(l.Component);t.a=x,x.contextTypes={intl:f.PropTypes.object.isRequired}},3566:function(n,t,e){"use strict";e.d(t,"a",function(){return p});var r=e(44),a=e(67),o=(e.n(a),e(85)),i=e(74),l=function(n,t){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  .isoNoResultMsg {\n    padding: 15px 20px;\n    text-align: center;\n    color: ",";\n    font-weight: 500;\n    font-size: 14px;\n  }\n\n  .isoSearchBar {\n    .ant-input {\n      width: 100%;\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      height: 69px;\n      padding: 0 20px;\n      padding-left: ",";\n      padding-right: ",";\n      border: 0;\n      border-bottom: 1px solid ",";\n      outline: 0 !important;\n      overflow: hidden;\n      background-color: #ffffff;\n      ",";\n      ",";\n      ",";\n\n      @media only screen and (max-width: 767px) {\n        height: 50px;\n      }\n\n      &:hover,\n      &:focus {\n        border-color: "," !important;\n      }\n\n      &::-webkit-input-placeholder {\n        color: ",";\n      }\n\n      &:-moz-placeholder {\n        color: ",";\n      }\n\n      &::-moz-placeholder {\n        color: ",";\n      }\n      &:-ms-input-placeholder {\n        color: ",";\n      }\n    }\n  }\n\n  .ant-input-suffix {\n    left: 10px;\n    right: auto;\n    color: ",";\n  }\n\n  .isoContactList {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    max-height: 100%;\n    overflow: hidden;\n    overflow-y: auto;\n\n    .contactListScrollbar {\n      height: calc(100vh - 200px);\n\n      @media only screen and (max-width: 767px) {\n        max-height: 60vh;\n      }\n    }\n\n    .isoSingleContact {\n      width: 100%;\n      margin: 0;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      flex-shrink: 0;\n      padding: 15px 20px;\n      padding-right: ",";\n      padding-left: ",";\n      border-bottom: 1px solid ",";\n      text-align: ",";\n      position: relative;\n      cursor: pointer;\n\n      &.active {\n        background-color: ",";\n      }\n\n      &:last-child {\n        border-bottom: 0;\n      }\n\n      .isoAvatar {\n        width: 35px;\n        height: 35px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: ",";\n        margin-left: ",";\n        flex-shrink: 0;\n        overflow: hidden;\n        ",";\n\n        img {\n          width: 100%;\n          height: 100%;\n          object-fit: cover;\n        }\n      }\n\n      .isoContactName {\n        h3 {\n          font-size: 15px;\n        }\n      }\n\n      .isoNoteText {\n        width: calc(100% - 60px);\n        margin-right: ",";\n        margin-left: ",";\n        padding: 20px 0;\n        cursor: pointer;\n\n        h3 {\n          width: 100%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          color: ",";\n          font-weight: 500;\n        }\n\n        .isoNoteCreatedDate {\n          font-size: 13px;\n          color: ",";\n        }\n      }\n\n      .isoDeleteBtn {\n        width: 24px;\n        height: 24px;\n        background-color: transparent;\n        flex-shrink: 0;\n        position: absolute;\n        top: 20px;\n        right: ",";\n        left: ",";\n        padding: 0;\n        border: 0;\n        font-size: 14px;\n        color: ",";\n        ",";\n\n        &:hover {\n          color: ",";\n        }\n      }\n    }\n\n    .isoNotlistNotice {\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      padding: 30px 0;\n    }\n  }\n"],["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  .isoNoResultMsg {\n    padding: 15px 20px;\n    text-align: center;\n    color: ",";\n    font-weight: 500;\n    font-size: 14px;\n  }\n\n  .isoSearchBar {\n    .ant-input {\n      width: 100%;\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      height: 69px;\n      padding: 0 20px;\n      padding-left: ",";\n      padding-right: ",";\n      border: 0;\n      border-bottom: 1px solid ",";\n      outline: 0 !important;\n      overflow: hidden;\n      background-color: #ffffff;\n      ",";\n      ",";\n      ",";\n\n      @media only screen and (max-width: 767px) {\n        height: 50px;\n      }\n\n      &:hover,\n      &:focus {\n        border-color: "," !important;\n      }\n\n      &::-webkit-input-placeholder {\n        color: ",";\n      }\n\n      &:-moz-placeholder {\n        color: ",";\n      }\n\n      &::-moz-placeholder {\n        color: ",";\n      }\n      &:-ms-input-placeholder {\n        color: ",";\n      }\n    }\n  }\n\n  .ant-input-suffix {\n    left: 10px;\n    right: auto;\n    color: ",";\n  }\n\n  .isoContactList {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    max-height: 100%;\n    overflow: hidden;\n    overflow-y: auto;\n\n    .contactListScrollbar {\n      height: calc(100vh - 200px);\n\n      @media only screen and (max-width: 767px) {\n        max-height: 60vh;\n      }\n    }\n\n    .isoSingleContact {\n      width: 100%;\n      margin: 0;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      flex-shrink: 0;\n      padding: 15px 20px;\n      padding-right: ",";\n      padding-left: ",";\n      border-bottom: 1px solid ",";\n      text-align: ",";\n      position: relative;\n      cursor: pointer;\n\n      &.active {\n        background-color: ",";\n      }\n\n      &:last-child {\n        border-bottom: 0;\n      }\n\n      .isoAvatar {\n        width: 35px;\n        height: 35px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: ",";\n        margin-left: ",";\n        flex-shrink: 0;\n        overflow: hidden;\n        ",";\n\n        img {\n          width: 100%;\n          height: 100%;\n          object-fit: cover;\n        }\n      }\n\n      .isoContactName {\n        h3 {\n          font-size: 15px;\n        }\n      }\n\n      .isoNoteText {\n        width: calc(100% - 60px);\n        margin-right: ",";\n        margin-left: ",";\n        padding: 20px 0;\n        cursor: pointer;\n\n        h3 {\n          width: 100%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          color: ",";\n          font-weight: 500;\n        }\n\n        .isoNoteCreatedDate {\n          font-size: 13px;\n          color: ",";\n        }\n      }\n\n      .isoDeleteBtn {\n        width: 24px;\n        height: 24px;\n        background-color: transparent;\n        flex-shrink: 0;\n        position: absolute;\n        top: 20px;\n        right: ",";\n        left: ",";\n        padding: 0;\n        border: 0;\n        font-size: 14px;\n        color: ",";\n        ",";\n\n        &:hover {\n          color: ",";\n        }\n      }\n    }\n\n    .isoNotlistNotice {\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      padding: 30px 0;\n    }\n  }\n"]),c=r.b.div(l,Object(a.palette)("secondary",2),Object(a.palette)("text",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"35px"},function(n){return"rtl"===n["data-rtl"]?"35px":"inherit"},Object(a.palette)("border",0),Object(o.b)("none"),Object(o.a)(),Object(o.c)(),Object(a.palette)("border",0),Object(a.palette)("grayscale",0),Object(a.palette)("grayscale",0),Object(a.palette)("grayscale",0),Object(a.palette)("grayscale",0),Object(a.palette)("grayscale",0),function(n){return"rtl"===n["data-rtl"]?"20px":"35px"},function(n){return"rtl"===n["data-rtl"]?"35px":"20px"},Object(a.palette)("border",0),function(n){return"rtl"===n["data-rtl"]?"right":"left"},Object(a.palette)("secondary",1),function(n){return"rtl"===n["data-rtl"]?"inherit":"15px"},function(n){return"rtl"===n["data-rtl"]?"15px":"inherit"},Object(o.a)("50%"),function(n){return"rtl"===n["data-rtl"]?"inherit":"20px"},function(n){return"rtl"===n["data-rtl"]?"20px":"inherit"},Object(a.palette)("secondary",2),Object(a.palette)("grayscale",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"5px"},function(n){return"rtl"===n["data-rtl"]?"5px":"inherit"},Object(a.palette)("grayscale",0),Object(o.c)(),Object(a.palette)("primary",0),Object(a.palette)("grayscale",0)),p=Object(i.a)(c)},3567:function(n,t,e){"use strict";function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function a(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?n:t}function o(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}var i=e(0),l=e.n(i),c=e(3087),p=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),d=function(n){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,n),p(t,[{key:"render",value:function(){var n=this.props,t=n.contact,e=n.otherAttributes,r=t.name?t.name:"No Name",a=[];return e.forEach(function(n){var e=t[n.value];e&&a.push(l.a.createElement("div",{className:"isoContactCardInfos",key:n.value},l.a.createElement("p",{className:"isoInfoLabel"},""+n.title),l.a.createElement("p",{className:"isoInfoDetails"},e)))}),l.a.createElement(c.a,{className:"isoContactCard"},l.a.createElement("div",{className:"isoContactCardHead"},l.a.createElement("div",{className:"isoPersonImage"},t.avatar?l.a.createElement("img",{alt:"#",src:t.avatar}):""),l.a.createElement("h1",{className:"isoPersonName"},r)),l.a.createElement("div",{className:"isoContactInfoWrapper"},a))}}]),t}(i.Component);t.a=d},3568:function(n,t,e){"use strict";function r(n){if(Array.isArray(n)){for(var t=0,e=Array(n.length);t<n.length;t++)e[t]=n[t];return e}return Array.from(n)}function a(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?n:t}function i(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}function l(n){return"image/jpeg"!==n.type?(Object(h.a)("error","You can only upload JPG file!",""),!1):n.size/1024/1024<2?(Object(h.a)("success","Image uploaded successfully!",""),!0):(Object(h.a)("error","Image must smaller than 2MB!",""),!1)}var c=e(0),p=e.n(c),d=e(34),s=e(187),f=e(2802),h=e(400),u=e(3087),m=e(3569),x=(e.n(m),function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}()),g=function(n){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,n),x(t,[{key:"render",value:function(){var n=this,t=this.props,e=t.contact,a=t.otherAttributes,o=e.name?e.name:"No Name",i=[];return[].concat([{value:"firstName",title:"First Name"},{value:"lastName",title:"Last Name"}],r(a)).forEach(function(t){var r=e[t.value],a=function(r){e[t.value]=r.target.value;var a="";e.firstName&&(a=e.firstName+" "),e.lastName&&(a=""+a+e.lastName),e.name=a,n.props.editContact(e)};"note"===t.value?i.push(p.a.createElement("div",{className:"isoContactCardInfos",key:t.value},p.a.createElement("p",{className:"isoInfoLabel"},""+t.title),p.a.createElement(s.c,{placeholder:""+t.title,value:r,type:"textarea",rows:5,onChange:function(n){return a(n)}}))):i.push(p.a.createElement("div",{className:"isoContactCardInfos",key:t.value},p.a.createElement("p",{className:"isoInfoLabel"},""+t.title),p.a.createElement(s.d,{placeholder:""+t.title,value:r,onChange:function(n){return a(n)}})))}),p.a.createElement(u.a,{className:"isoContactCard"},p.a.createElement("div",{className:"isoContactCardHead"},p.a.createElement("div",{className:"isoPersonImage"},p.a.createElement(f.a,{className:"avatar-uploader",name:"avatar",showUploadList:!1,beforeUpload:l,action:""},e.avatar?p.a.createElement("img",{src:e.avatar,alt:"",className:"avatar"}):"",p.a.createElement(d.p,{type:"plus",className:"avatar-uploader-trigger"}))),p.a.createElement("h1",{className:"isoPersonName"},o)),p.a.createElement("div",{className:"isoContactInfoWrapper"},i))}}]),t}(c.Component);t.a=g},3569:function(n,t,e){var r=e(3570);"string"===typeof r&&(r=[[n.i,r,""]]);var a={hmr:!1};a.transform=void 0;e(1828)(r,a);r.locals&&(n.exports=r.locals)},3570:function(n,t,e){t=n.exports=e(1827)(!0),t.push([n.i,".avatar,.avatar-uploader,.avatar-uploader-trigger{width:150px;height:150px}.avatar-uploader{display:block;border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer}.avatar-uploader-trigger{display:table-cell;vertical-align:middle;font-size:28px;color:#999}","",{version:3,sources:["/Users/jhosehprendon/Desktop/development/React/isomorphic/src/components/contacts/upload.css"],names:[],mappings:"AAAA,kDAGE,YAAa,AACb,YAAc,CACf,AACD,iBACE,cAAe,AACf,0BAA2B,AAC3B,kBAAmB,AACnB,cAAgB,CACjB,AACD,yBACE,mBAAoB,AACpB,sBAAuB,AACvB,eAAgB,AAChB,UAAY,CACb",file:"upload.css",sourcesContent:[".avatar-uploader,\n.avatar-uploader-trigger,\n.avatar {\n  width: 150px;\n  height: 150px;\n}\n.avatar-uploader {\n  display: block;\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.avatar-uploader-trigger {\n  display: table-cell;\n  vertical-align: middle;\n  font-size: 28px;\n  color: #999;\n}\n"],sourceRoot:""}])},3571:function(n,t,e){"use strict";e.d(t,"a",function(){return p});var r=e(44),a=e(67),o=(e.n(a),e(85)),i=e(74),l=function(n,t){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  padding: 50px 35px;\n  display: flex;\n  "," @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n    flex-direction: column;\n    height: auto;\n  }\n\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    padding: 40px 30px;\n  }\n\n  .isoContactListBar {\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n    background: #ffffff;\n    border: 1px solid ",";\n    width: 320px;\n    overflow: hidden;\n    overflow-y: auto;\n\n    @media only screen and (max-width: 767px) {\n      width: auto !important;\n      margin-bottom: 20px;\n      min-width: 0 !important;\n      max-width: 100% !important;\n      flex: 0 !important;\n    }\n\n    @media only screen and (min-width: 767px) and (max-width: 990px) {\n      width: 270px !important;\n      flex: 0 0 270px !important;\n    }\n  }\n\n  .isoContactBoxWrapper {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    background-color: #ffffff;\n    border: 1px solid ",";\n    border-left: ",";\n    border-right: ",";\n    position: relative;\n\n    .isoContactBox {\n      width: 100%;\n      height: 100%;\n    }\n\n    .contactBoxScrollbar {\n      height: calc(100vh - 225px);\n    }\n\n    .isoContactControl {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      flex-shrink: 0;\n      padding: 30px;\n      background-color: #ffffff;\n\n      @media only screen and (max-width: 767px) {\n        padding: 30px 20px;\n      }\n\n      button:not(.isoAddContactBtn) {\n        font-size: 16px;\n        color: ",";\n        width: 35px;\n        height: 35px;\n        display: flex;\n        align-items: center;\n        text-align: center;\n        justify-content: center;\n        background-color: #ffffff;\n        outline: 0;\n        padding: 0;\n        border: 1px solid ",";\n        margin-left: ",";\n        margin-right: ",";\n        cursor: pointer;\n        ",";\n        ",";\n\n        i {\n          width: 100%;\n        }\n\n        span {\n          display: none;\n        }\n\n        &:first-child {\n          margin-left: ",";\n          margin-right: ",";\n        }\n\n        &:hover {\n          color: ",";\n          background-color: ",";\n        }\n      }\n\n      .isoAddContactBtn {\n        background-color: ",";\n        border: 0;\n        height: 30px;\n        padding: 0 15px;\n        margin-left: ",";\n        margin-right: ",";\n        ",";\n        ",";\n\n        span {\n          font-size: 12px;\n          font-weight: 400;\n          padding: 0;\n          text-transform: uppercase;\n          color: #ffffff;\n        }\n\n        &:hover {\n          background-color: ",";\n        }\n      }\n    }\n  }\n"],["\n  padding: 50px 35px;\n  display: flex;\n  "," @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n    flex-direction: column;\n    height: auto;\n  }\n\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    padding: 40px 30px;\n  }\n\n  .isoContactListBar {\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n    background: #ffffff;\n    border: 1px solid ",";\n    width: 320px;\n    overflow: hidden;\n    overflow-y: auto;\n\n    @media only screen and (max-width: 767px) {\n      width: auto !important;\n      margin-bottom: 20px;\n      min-width: 0 !important;\n      max-width: 100% !important;\n      flex: 0 !important;\n    }\n\n    @media only screen and (min-width: 767px) and (max-width: 990px) {\n      width: 270px !important;\n      flex: 0 0 270px !important;\n    }\n  }\n\n  .isoContactBoxWrapper {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    background-color: #ffffff;\n    border: 1px solid ",";\n    border-left: ",";\n    border-right: ",";\n    position: relative;\n\n    .isoContactBox {\n      width: 100%;\n      height: 100%;\n    }\n\n    .contactBoxScrollbar {\n      height: calc(100vh - 225px);\n    }\n\n    .isoContactControl {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      flex-shrink: 0;\n      padding: 30px;\n      background-color: #ffffff;\n\n      @media only screen and (max-width: 767px) {\n        padding: 30px 20px;\n      }\n\n      button:not(.isoAddContactBtn) {\n        font-size: 16px;\n        color: ",";\n        width: 35px;\n        height: 35px;\n        display: flex;\n        align-items: center;\n        text-align: center;\n        justify-content: center;\n        background-color: #ffffff;\n        outline: 0;\n        padding: 0;\n        border: 1px solid ",";\n        margin-left: ",";\n        margin-right: ",";\n        cursor: pointer;\n        ",";\n        ",";\n\n        i {\n          width: 100%;\n        }\n\n        span {\n          display: none;\n        }\n\n        &:first-child {\n          margin-left: ",";\n          margin-right: ",";\n        }\n\n        &:hover {\n          color: ",";\n          background-color: ",";\n        }\n      }\n\n      .isoAddContactBtn {\n        background-color: ",";\n        border: 0;\n        height: 30px;\n        padding: 0 15px;\n        margin-left: ",";\n        margin-right: ",";\n        ",";\n        ",";\n\n        span {\n          font-size: 12px;\n          font-weight: 400;\n          padding: 0;\n          text-transform: uppercase;\n          color: #ffffff;\n        }\n\n        &:hover {\n          background-color: ",";\n        }\n      }\n    }\n  }\n"]),c=r.b.div(l,"",Object(a.palette)("border",0),Object(a.palette)("border",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(a.palette)("secondary",0),Object(a.palette)("border",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"-1px"},function(n){return"rtl"===n["data-rtl"]?"-1px":"inherit"},Object(o.a)(),Object(o.c)(),function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(a.palette)("primary",0),Object(a.palette)("grayscale",7),Object(a.palette)("primary",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"auto"},function(n){return"rtl"===n["data-rtl"]?"auto":"inherit"},Object(o.a)("3px"),Object(o.c)(),Object(a.palette)("primary",1)),p=Object(i.a)(c)}});