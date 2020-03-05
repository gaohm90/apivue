
export const storage = {
    set(key, value) {
      api.setPrefs({ key, value });
    },
  
    get(key) {
      return api.getPrefs({ sync: true, key });
    },
  
    del(key) {
      api.removePrefs({ key });
    }
  };
  
  export const memory = {
    set(key, value) {
      api.setGlobalData({ key, value });
    },
  
    get(key) {
      return api.getGlobalData({ key });
    }
  };
  




export function openWin(path,title,pageParam) {
    pageParam.title = title;
    pageParam.url = path;
    api.openWin({
        name: 'win'+path,
        url: 'win.html',
        bounces: false,
        pageParam: pageParam
    });
}

export function get(url,cb) {
    api.ajax({
        url: 'http://shici.upeasy.cc:8082/'+url,
        method: 'get',              
    }, function(ret, err) {
        api.hideProgress();
        if (ret && ret.status == 1) {
            cb(ret.data);
        } else {
            
        }
    });
}

export function objToUrl(query) {
    // var query = api.pageParam.content;
    var url_end ="";        
    for(let key in query) {            
        url_end += (key+"="+query[key]+"&")
    }
    url_end.trim();
    if(url_end.length>1) url_end = url_end.substring(0,url_end.length-1)
    return url_end;
}



export function hudShow(msg) {    
    api.toast({
        msg: msg,
        duration: 2000,
        location: 'middle'
    });
}

export function hudShowProgress(text) {
    api.showProgress({
        style: 'default',
        animationType: 'fade',
        title: '',
        text: text,
        modal: false
    });
}

export function hudHideProgress() {
    api.hideProgress();
}

export function goBack() {
    api.closeWin({
        type: "reveal",
        subType: "from_left"
    });
}

export function loadMore(callback) {
    api.addEventListener({
        name:'scrolltobottom',
        extra:{
            threshold:0            //设置距离底部多少距离时触发，默认值为0，数字类型
        }
    },function(ret,err){
        callback(ret);
    });
}
