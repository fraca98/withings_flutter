(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{285:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"measure-getmeas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#measure-getmeas"}},[t._v("#")]),t._v(" Measure - GetMeas")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("The data are only available once a synchronization occured between the device and Withings servers (which might include synchronizing with Withings mobile application or via Withings Mobile SDK).")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.withings.com/api-reference/#operation/measure-getmeas",target:"_blank",rel:"noopener noreferrer"}},[t._v("Measure - GetMeas"),s("OutboundLink")],1),t._v(" provides measures stored at a specific date.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("The measures reported seems to be the "),s("strong",[t._v("manually recorded")]),t._v(" measures by the user or when the user "),s("strong",[t._v("requests a specific test/measure, starting a test")]),t._v(" (ex. ECG, SPO2) using the device.")])]),t._v(" "),s("p",[t._v("In WithingsFlutter, the response object is expressed by the "),s("code",[t._v("WithingsMeasureGetMeasData")]),t._v(". In particular, an instance of "),s("code",[t._v("WithingsMeasureGetMeasData")]),t._v(" has the following fields:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Response status")]),t._v("\nint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Array of measure group")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Measuregrps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" measuregrps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("where "),s("code",[t._v("Measuregrps")]),t._v(" object is:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// UNIX timestamp when measures were taken")]),t._v("\nint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Category for the measures in the group (see category input parameter)")]),t._v("\nint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" category"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// List of single measures")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SingleMeas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" measures"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("where "),s("code",[t._v("SingleMeas")]),t._v(" object is:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Type of the measure. See meastypes input parameter")]),t._v("\nint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Value for the measure in S.I. units (kilograms, meters etc...).")]),t._v("\ndouble"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("For more info about the "),s("code",[t._v("status")]),t._v(" check the Withings API documentation "),s("a",{attrs:{href:"https://developer.withings.com/api-reference#section/Response-status",target:"_blank",rel:"noopener noreferrer"}},[t._v("Response Status"),s("OutboundLink")],1),t._v(" section.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("For more info about the values check the the Withings API documentation "),s("a",{attrs:{href:"https://developer.withings.com/api-reference/#operation/measure-getmeas",target:"_blank",rel:"noopener noreferrer"}},[t._v("Measure - GetMeas"),s("OutboundLink")],1),t._v(" in the "),s("code",[t._v("Query Parameters")]),t._v(" section.")])]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithingsMeasureGetMeasData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" measuregrps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Measuregrps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1662859383")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" category"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" measures"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SingleMeas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("54")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("96.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Measuregrps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1662859346")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" category"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" measures"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SingleMeas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("54")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Measuregrps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1662859029")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" category"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" measures"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SingleMeas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("44.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SingleMeas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("135")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("93.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SingleMeas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("136")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("163.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SingleMeas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("137")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("433.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SingleMeas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("138")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("370.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Informations about the measures stored at a specific date can be obtained in three steps:")]),t._v(" "),s("h2",{attrs:{id:"step-1-instantiate-a-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-instantiate-a-manager"}},[t._v("#")]),t._v(" Step 1: Instantiate a manager")]),t._v(" "),s("p",[t._v("First, you need to instanciate a "),s("code",[t._v("WithingsMeasureGetMeasDataManager")])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithingsMeasureGetMeasDataManager")]),t._v(" withingsMeasureGetMeasDataManager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithingsMeasureGetMeasDataManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"step-2-create-the-request-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-create-the-request-url"}},[t._v("#")]),t._v(" Step 2: Create the request url")]),t._v(" "),s("p",[t._v("Then, you have to create a url object that can be of two different types that fetches the measures stored at a specific date:")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("WithingsMeasureAPIURL.getMeasRange")]),t._v(" where you have to set the:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("accessToken")])]),t._v(" "),s("li",[s("code",[t._v("startdate")]),t._v(" as "),s("strong",[t._v("UNIX Timestamp")]),t._v(" to define the range of time of measures to be retrieved")]),t._v(" "),s("li",[s("code",[t._v("enddate")]),t._v(" as "),s("strong",[t._v("UNIX Timestamp")]),t._v(" to define the range of time of measures to be retrieved")])]),t._v(" "),s("p",[t._v("Then, if you want, you can set the:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("meastypes")]),t._v(" is a "),s("code",[t._v("String")]),t._v(": a list of requested measure types (separated by a comma)")]),t._v(" "),s("li",[s("code",[t._v("category")]),t._v(" and set "),s("code",[t._v("1")]),t._v(" for real measures, "),s("code",[t._v("2")]),t._v(" for user objectives")])])])]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithingsMeasureAPIURL")]),t._v(" withingsMeasureAPIURLGetMeasRange "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithingsMeasureAPIURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMeasRange")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                startdate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1662857663")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                enddate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1662882863")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//meastypes: '11, 54', //Not necessary")]),t._v("\n                category"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Not necessary")]),t._v("\n                accessToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" withingsCredentials"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withingsAccessToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[s("code",[t._v("WithingsMeasureAPIURL.getMeasLastupdate")]),t._v(" where you have to set the:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("accessToken")])]),t._v(" "),s("li",[s("code",[t._v("lastupdate")]),t._v(" as "),s("strong",[t._v("UNIX Timestamp")]),t._v(" for requesting data that were updated or created after this date")])]),t._v(" "),s("p",[t._v("Then, if you want, you can set the:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("meastypes")]),t._v(" is a "),s("code",[t._v("String")]),t._v(": a list of requested measure types (separated by a comma)")]),t._v(" "),s("li",[s("code",[t._v("category")]),t._v(" and set "),s("code",[t._v("1")]),t._v(" for real measures, "),s("code",[t._v("2")]),t._v(" for user objectives")])])])]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithingsMeasureAPIURL")]),t._v(" withingsMeasureAPIURLGetMeasLastupdate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithingsMeasureAPIURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMeasLastupdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                lastupdate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1662920834")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//meastypes: '11, 54', //Not necessary")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//category: 1, //Not necessary")]),t._v("\n                accessToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" withingsCredentials"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withingsAccessToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("The field "),s("code",[t._v("meastypes")]),t._v(" seems not to be useful, cause the results with or without are the same")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("For more info about the "),s("code",[t._v("meastypes")]),t._v(" values check the Withings API documentation "),s("a",{attrs:{href:"https://developer.withings.com/api-reference/#operation/measure-getmeas",target:"_blank",rel:"noopener noreferrer"}},[t._v("Measure - GetMeas"),s("OutboundLink")],1),t._v(" in the "),s("code",[t._v("Query Parameters")]),t._v(" section.")])]),t._v(" "),s("h2",{attrs:{id:"step-3-get-the-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-get-the-data"}},[t._v("#")]),t._v(" Step 3: Get the data")]),t._v(" "),s("p",[t._v("Finally you can obtain the measures stored at a specific date using")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithingsMeasureGetMeasData")]),t._v(" getmeasrange "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" withingsMeasureGetMeasDataManager\n                      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("withingsMeasureAPIURLGetMeasRange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithingsMeasureGetMeasData")]),t._v(" getmeasupdate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" withingsMeasureGetMeasDataManager\n                      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("withingsMeasureAPIURLGetMeasLastupdate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("depending on the URL object.")])])}),[],!1,null,null,null);s.default=n.exports}}]);