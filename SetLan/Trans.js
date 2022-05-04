function transformLanguage(newLanguage,OldL = 'en') {
    // &#33719;&#21462;&#25152;&#26377;dom&#20803;&#32032;&#20013;&#25991;
    let transformStr = '';
    // &#33719;&#21462;&#25152;&#26377;dom&#20803;&#32032;
    function getChildDom(dom, type, data = {}) {
        if(type == 'read') {
            [...dom.children].forEach(v => {
                // &#21028;&#26029;&#20013;&#25991;
                // /^[\u0391-\uFFE5]+$/

                let re= /*/[\u4e00-\u9fa5]/g*//[A-Za-z]/g;
                // &#38450;&#27490;&#26576;&#20123;&#26631;&#31614;&#26377;&#20869;&#23481;&#24182;&#19988;&#26377;&#26631;&#31614; &#65292;&#25110;&#32773;&#26377;&#31354;&#26684; 
                let vHtml = $(v).contents().filter(function (index, content) {return content.nodeType === 3}).text().trim();
                // &#36339;&#36807;script&#26631;&#31614;
                if (re.test(vHtml) && v.tagName != 'SCRIPT') {
                    transformStr += `${vHtml}\n`
                }
                // &#36882;&#24402;&#33719;&#21462;&#20803;&#32032;
                getChildDom(v, type, data);
            })
        }else {
            //var transNew = data.trans_result[0].dst.split('\n');
            var transOld = [];
            var transNew = [];
            for(let res of data.trans_result){
                transOld.push(res.src);
                transNew.push(res.dst);
            }
            [...dom.children].forEach(v => {
                // &#21028;&#26029;&#20013;&#25991;
                // /^[\u0391-\uFFE5]+$/
                let re= /*/[\u4e00-\u9fa5]/g*//[A-Za-z]/g;
                let vHtml = $(v).contents().filter(function (index, content) {return content.nodeType === 3}).text().trim();
                // &#36339;&#36807;script&#26631;&#31614;
                if (re.test(vHtml) && v.tagName != 'SCRIPT') {
                    // &#38450;&#27490;&#26631;&#31614;&#37324;&#38754;&#36824;&#26377;&#26631;&#31614;&#65292;&#25152;&#20197;&#21482;&#26367;&#25442;&#37324;&#38754;&#30340;html,&#20351;&#29992;replace
                    $(v).html(
                        $(v).html().replace(
                        transOld[transOld.findIndex(arrList => arrList == vHtml)]
                        ,
                        transNew[transOld.findIndex(arrList => arrList == vHtml)]
                        )
                    )
                }
                // &#36882;&#24402;&#33719;&#21462;&#20803;&#32032;
                getChildDom(v, type, data);
            })
        }
    }
    getChildDom(document,'read');
    getTranslateData(OldL);
    // &#33719;&#21462;&#32763;&#35793;
    function getTranslateData(OldL='en') {
        let appid = '20220427001192334';   // &#30334;&#24230;&#32763;&#35793;API&#30340;appid
        let key = 'YRu7JRo0lxIBlky3cUhP';   // &#30334;&#24230;&#32763;&#35793;API&#30340;key
        let salt = (new Date).getTime();
        let query = transformStr/*"apple"*/;
        let from = OldL;
        let to = newLanguage;
        let str1 = appid + query + salt + key;
        let sign = hex_md5(str1);
        $.ajax({
            url: 'https://api.fanyi.baidu.com/api/trans/vip/translate',
            type: 'get',
            dataType: 'jsonp',
            data: {
                q: query,
                appid: appid,
                salt: salt,
                from: from,
                to: to,
                sign: sign
            },
            success: function(data) {
                data.trans_result && getChildDom(document,'write',data);
                console.log(data);
            }
        });
    }
}
    
