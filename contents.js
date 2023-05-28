//URLを取得
let Logs_Pn   = location.pathname.split('/');
let Logs_Hash = location.hash
let Logs_Hash_Int = Logs_Hash.replace(/[^0-9]/g, '');
//URLを分割する
let Logs_Url  = Logs_Pn[2] + Logs_Hash[1];
//要素を取得
let Div = document.getElementById("filter-fight-and-phase");

//新しいaタグを追加
let a_tag = document.createElement("a");

//属性を追加
a_tag.setAttribute("href","https://xivanalysis.com/fflogs/" + Logs_Pn[2] + "/" + Logs_Hash_Int);

//aタグ要素とその中にテキスト情報を追加
a_tag.innerHTML = "xivanalysisで表示";

//elem要素の下に新規のnewElem要素を挿入
Div.insertBefore(a_tag, null);