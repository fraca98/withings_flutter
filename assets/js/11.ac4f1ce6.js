(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{284:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"heart-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#heart-list"}},[t._v("#")]),t._v(" Heart - List")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("The data are only available once a synchronization occured between the device and Withings servers (which might include synchronizing with Withings mobile application or via Withings Mobile SDK).")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.withings.com/api-reference/#operation/heartv2-list",target:"_blank",rel:"noopener noreferrer"}},[t._v("Heart - List"),s("OutboundLink")],1),t._v(" returns a list of ECG records and Afib classification for a given period of time. To get the full ECG signal, for a specific ECG recording, use the "),s("a",{attrs:{href:"/WithingsFlutter/guide/heart/heartv2get"}},[t._v("Heart - Get")]),t._v(".")]),t._v(" "),s("p",[t._v("In WithingsFlutter, the response object is expressed by the "),s("code",[t._v("WithingsHeartListData")]),t._v(". In particular, an instance of "),s("code",[t._v("WithingsHeartListData")]),t._v(" has the following fields:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Response status")]),t._v("\nint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Array of objects")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SeriesHeartList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" series"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// To know if there is more data to fetch or not")]),t._v("\nbool"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" more"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Offset to use to retrieve the next data")]),t._v("\nint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("where "),s("code",[t._v("SeriesHeartList")]),t._v(" object is:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Timestamp of the recording")]),t._v("\nint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" timestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Object ECG")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ecg")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" ecg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Object bloodpressure")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bloodpressure")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" bloodpressure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Average recorded heart rate")]),t._v("\nint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" avgHeartRate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("and "),s("code",[t._v("Ecg")]),t._v(" object is:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Id of the signal of the specific ECG")]),t._v("\nint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" signalid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Atrial fibrillation classification")]),t._v("\nint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" afib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("and "),s("code",[t._v("Bloodpressure")]),t._v(" object is:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Diastole value")]),t._v("\nint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" diastole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Systole value")]),t._v("\nint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" systole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("For more info about the "),s("code",[t._v("status")]),t._v(" check the Withings API documentation "),s("a",{attrs:{href:"https://developer.withings.com/api-reference#section/Response-status",target:"_blank",rel:"noopener noreferrer"}},[t._v("Response Status"),s("OutboundLink")],1),t._v(" section.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("For more info about the values check the Withings API documentation "),s("a",{attrs:{href:"https://developer.withings.com/api-reference/#operation/heartv2-list",target:"_blank",rel:"noopener noreferrer"}},[t._v("Heart - List"),s("OutboundLink")],1),t._v(" in the "),s("code",[t._v("Responses")]),t._v(" ➡️ "),s("code",[t._v("body")]),t._v(" section.")])]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithingsHeartListData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" series"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SeriesHeartList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1663373398")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ecg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ecg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signalid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("163046202")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" afib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bloodpressure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" avgHeartRate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("51")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SeriesHeartList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1663113635")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ecg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ecg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signalid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("162143385")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" afib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" more"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Informations about the list of ECG recordings of the user can be obtained in three steps:")]),t._v(" "),s("h2",{attrs:{id:"step-1-instantiate-a-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-instantiate-a-manager"}},[t._v("#")]),t._v(" Step 1: Instantiate a manager")]),t._v(" "),s("p",[t._v("First, you need to instanciate a "),s("code",[t._v("WithingsHeartListDataManager")])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithingsHeartListDataManager")]),t._v(" withingsHeartListDataManager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithingsHeartListDataManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"step-2-create-the-request-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-create-the-request-url"}},[t._v("#")]),t._v(" Step 2: Create the request url")]),t._v(" "),s("p",[t._v("Then, you have to create a url object, "),s("code",[t._v("WithingsHeartAPIURL.list")]),t._v(", that fetches the list of ECG recordings, given the:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("access token")])])]),t._v(" "),s("p",[t._v("Then, if you want, set:")]),t._v(" "),s("ul",[s("li",[t._v("the "),s("code",[t._v("startdate")]),t._v(" and "),s("code",[t._v("enddate")]),t._v(" as "),s("strong",[t._v("UNIX Timestamp")]),t._v(" to define the range of time of ECG recordings you want to retrieve")]),t._v(" "),s("li",[t._v("the "),s("code",[t._v("offset")]),t._v(", if in the previous response "),s("code",[t._v("more = true")]),t._v(", so this means that there are more data to retrieve, so set in "),s("code",[t._v("offset")]),t._v(" the value of "),s("code",[t._v("offset")]),t._v(" of the previous response")])]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithingsHeartAPIURL")]),t._v(" withingsHeartAPIURL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithingsHeartAPIURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            accessToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" withingsCredentials"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withingsAccessToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//startdate: , //Not necessary: UNIX Timestamp startdate")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//enddate: , //Not necessary: UNIX Timestamp enddate")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//offset: , //Not necessary: use it if in the previous response more = true and insert here the value of offset")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"step-3-get-the-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-get-the-data"}},[t._v("#")]),t._v(" Step 3: Get the data")]),t._v(" "),s("p",[t._v("Finally you can obtain the list of the ECG recordings using")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithingsHeartListData")]),t._v(" listheartdata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" withingsHeartListDataManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("withingsHeartAPIURLList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("But if you want the package to automatically handle the "),s("code",[t._v("offset")]),t._v(" use the "),s("code",[t._v(".fetchAutoOffset")]),t._v(", instead of "),s("code",[t._v(".fetch")]),t._v(", of the manager, without specifying the "),s("code",[t._v("offset")]),t._v(" in the field of the URL object")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithingsHeartListData")]),t._v(" listheartdata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" withingsHeartListDataManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchAutoOffset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("withingsHeartAPIURLList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);