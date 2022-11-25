function ChangeLanguageBar() {
    if(window.localStorage["LanguageBar"] == "en-US") {
      window.localStorage["LanguageBar"] = "zh-CN";
      window.location.href = "/lang/zh-CN/";
    } else if(window.localStorage["LanguageBar"] == "zh-CN") {
      window.localStorage["LanguageBar"] = "zh-TW";
      window.location.href = "/lang/zh-TW/";
    } else { // zh-TW
      window.localStorage["LanguageBar"] = "en-US";
      window.location.href = "/lang/en-US/";
    }
}

function SetLang(lang) {
    if(!window.localStorage["LanguageBar"]) window.localStorage["LanguageBar"] = lang;
}

function Change_Lang(lang_id) {
    if(lang_id == 1) {
        // en-US
        window.localStorage["LanguageBar"] = "en-US";
        window.location.href = "/lang/en-US/";
    } else if(lang_id == 2) {
        // zh-CN
        window.localStorage["LanguageBar"] = "zh-CN";
        window.location.href = "/lang/zh-CN/";
    } else {
        // zh-TW
        window.localStorage["LanguageBar"] = "zh-TW";
        window.location.href = "/lang/zh-TW/";
    }
}