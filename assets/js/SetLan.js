// 需要操作到的元素
const root=document.documentElement;
const dropdown_title_icon=document.querySelector(".dropdown-title-icon");
const dropdown_title=document.querySelector(".dropdown-title");
const dropdown_list=document.querySelector(".dropdown-list");
const main_button=document.querySelector(".main-button");
const floating_icon=document.querySelector(".floating-icon");
var nowl = 'en';
// 图标对象
const icons={
    "中文":
        "M314 163L130 297l70-217 71 217L86 163h228zm56-109l70 29-74 18 50-58-7 76-39-65zm92 70l53 55-75-13 69-34-36 67-11-75zm17 116l26 72-63-43 76-3-60 47 21-73zm-65 83l-3 76-42-64 71 27-73 20 47-59z",
    "原文":
        "M200 120h-80v80H80v-80H0V80h80V0h40v80h80v40zM0 165v-15l33-17h30L0 165zm200-26v15l-41-21h30l11 6zM41 67H11L0 61V46l41 21zm126 0h-30l63-32v15z",
    "日本語":
        "M200, 200 m -100,-100 m -75, 0 a75,75 0 1,0 150,0 a75,75 0 1,0 -150,0",
};
const Languages = {
    "中文":
        "zh",
    "原文":
        "en",
    "日本語":
        "jp"
}


// 下拉列表项
const list_items=["中文","原文","日本語"];

// 图标模板
const iconTemplate=(path)=>{
    return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${path[1]}${path[2]}${path[3]} ${path[1]}${path[2]}${path[3]}">
            <path d="${path}"></path>
        </svg>
    `;
}

// 下拉列表项模板
const listItemTemplate=(text,translate_value)=>{
    return `
        <li class="dropdown-list-item">
            <button class="dropdown-button list-button" data-translate-value="${translate_value}%">
                <span class="text-truncate">${text}</span>
            </button>
        </li>
    `;
}

// 生成下拉列表项
const renderListItems=()=>{
    dropdown_list.innerHTML+=list_items.map((item,index)=>{
        return listItemTemplate(item,100*index);
    }).join("");
}

// 在页面加载事件中执行生成下拉列表项
window.addEventListener("load",()=>{
    renderListItems();
})

// 设置自定义属性的值
const setDropdownProps=(deg,ht,opacity)=>{
    root.style.setProperty("--rotate-arrow",deg!==0?deg+"deg":0);
    root.style.setProperty("--dropdown-height",ht!==0?ht+"rem":0);
    root.style.setProperty("--list-opacity",opacity);
}

// 下拉框按钮点击事件
main_button.addEventListener("click",()=>{
    const list_wrapper_sizes=3.5;
    const dropdown_open_height=4.6*list_items.length+list_wrapper_sizes;
    const curr_dropdown_height=root.style.getPropertyValue("--dropdown-height")||0;
    curr_dropdown_height==="0"?setDropdownProps(180,dropdown_open_height,1):setDropdownProps(0,0,0);
})

// 下拉列表项鼠标移入事件
dropdown_list.addEventListener("mouseover",(e)=>{
    const translate_value=e.target.dataset.translateValue;
    root.style.setProperty("--translate-value",translate_value);
})

// 下拉列表项点击事件
dropdown_list.addEventListener("click",(e)=>{
    const clicked_item_text=e.target.innerText.toLowerCase().trim();
    const clicked_item_icon=icons[clicked_item_text];
    transformLanguage(Languages[clicked_item_text],nowl);
    nowl = Languages[clicked_item_text];
    setCookie('Lan',nowl,7);//The Cookie:Lan is Users Language
    console.log(Languages[clicked_item_text]);
    dropdown_title_icon.innerHTML=iconTemplate(clicked_item_icon);
    dropdown_title.innerHTML=clicked_item_text;
    setDropdownProps(0,0,0);
})

// 下拉列表项鼠标移动事件
dropdown_list.addEventListener("mousemove",(e)=>{
    const icon_size=root.style.getPropertyValue("--floating-icon-size")||0;
    const x=e.clientX-dropdown_list.getBoundingClientRect().x;
    const y=e.clientY-dropdown_list.getBoundingClientRect().y;
    const targetText=e.target.innerText.toLowerCase().trim();
    const hover_item_text=icons[targetText];
    floating_icon.innerHTML=iconTemplate(hover_item_text);
    root.style.setProperty("--floating-icon-left",x-icon_size/2+"px");
    root.style.setProperty("--floating-icon-top",y-icon_size/2+"px");
})
