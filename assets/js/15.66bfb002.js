(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{392:function(a,s,t){"use strict";t.r(s);var e=t(27),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"ros-cheatsheet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ros-cheatsheet"}},[a._v("#")]),a._v(" ROS Cheatsheet")]),a._v(" "),t("h2",{attrs:{id:"workspaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workspaces"}},[a._v("#")]),a._v(" Workspaces")]),a._v(" "),t("h3",{attrs:{id:"create-workspece"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-workspece"}},[a._v("#")]),a._v(" Create Workspece")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" catkin_ws "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" catkin_ws\nwstool init src\ncatkin_make\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" devel/setup.bash\n")])])]),t("h2",{attrs:{id:"package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package"}},[a._v("#")]),a._v(" Package")]),a._v(" "),t("h3",{attrs:{id:"create-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-package"}},[a._v("#")]),a._v(" Create Package")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("catkin_create_pkg package_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("dependencies "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[t("a",{attrs:{href:"https://wiki.ros.org/ROS/Tutorials/CreatingPackage#ROS.2FTutorials.2Fcatkin.2FCreatingPackage.package_dependencies",target:"_blank",rel:"noopener noreferrer"}},[a._v("Package dependencies external link."),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"package-folders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-folders"}},[a._v("#")]),a._v(" Package Folders")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("Folder")]),a._v(" "),t("th",[a._v("Description")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("include/package_name")]),a._v(" "),t("td",[a._v("C++ header files")])]),a._v(" "),t("tr",[t("td",[a._v("src")]),a._v(" "),t("td",[a._v("Source files. "),t("br"),a._v(" Python libraries in subdirectories")])]),a._v(" "),t("tr",[t("td",[a._v("scripts")]),a._v(" "),t("td",[a._v("Python nodes and scripts")])]),a._v(" "),t("tr",[t("td",[a._v("msg")]),a._v(" "),t("td",[a._v("Message definitions")])]),a._v(" "),t("tr",[t("td",[a._v("srv")]),a._v(" "),t("td",[a._v("Service definitions")])]),a._v(" "),t("tr",[t("td",[a._v("action")]),a._v(" "),t("td",[a._v("Action definitions")])])])]),a._v(" "),t("h2",{attrs:{id:"running-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-system"}},[a._v("#")]),a._v(" Running System")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("roscore\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("roslaunch package_name launch_file_name.launch\n")])])]),t("h3",{attrs:{id:"nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodes"}},[a._v("#")]),a._v(" Nodes")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("rosnode list\n")])])]),t("h3",{attrs:{id:"topics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#topics"}},[a._v("#")]),a._v(" Topics")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("rostopic list\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("rostopic "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("topic"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("rostopic hz "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("topic"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("rostopic info "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("topic"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"messages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[a._v("#")]),a._v(" Messages")]),a._v(" "),t("h3",{attrs:{id:"services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#services"}},[a._v("#")]),a._v(" Services")]),a._v(" "),t("h2",{attrs:{id:"remote-connection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remote-connection"}},[a._v("#")]),a._v(" Remote Connection")])])}),[],!1,null,null,null);s.default=r.exports}}]);