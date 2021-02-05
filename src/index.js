import $ from "expose-loader?exposes=$,jQuery!jquery";
// JQuery结合Bootstrap的插件
$("#jquery-app button").on('click',()=>$('#myModal').modal())
