export default defineEventHandler((event)=>{
    const {panelName} = getQuery(event);
    let news = [
        {name:'نام خبر',id:1},
        {name:'نام خبر',id:2},
        {name:'نام خبر',id:3},
        {name:'نام خبر',id:4},
        {name:'نام خبر',id:5},
    ];
    let products = [
        {name:'نمونه کار',id:1},
        {name:'نمونه کار',id:2},
        {name:'نمونه کار',id:3},
        {name:'نمونه کار',id:4},
        {name:'نمونه کار',id:5},
    ];
    let maps = [
        {name:'نقشه',id:1},
        {name:'نقشه',id:2},
        {name:'نقشه',id:3},
        {name:'نقشه',id:4},
        {name:'نقشه',id:5},
    ];
    let members = [
        {name:'نام عضو',id:1},
        {name:'نام عضو',id:2},
        {name:'نام عضو',id:3},
        {name:'نام عضو',id:4},
        {name:'نام عضو',id:5},
    ];
    if(panelName=='news'){
        return news;
    }else if(panelName=='product'){
        return products;
    }else if(panelName=='map'){
        return maps;
    }else if(panelName=='member'){
        return members;
    }
})