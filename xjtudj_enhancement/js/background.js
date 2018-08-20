let logPrefix = 'background.js'

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == 'popup') {
        sendResponse('进入“我的空间”，点击相应的“课程详情”，稍作等待');
    }else if(request.greeting){
        chrome.notifications.create({
        type:     'basic',
        iconUrl:  'images/icon-128.png',
        title:    '西交党课学习机',
        message:  request.greeting,
        priority: 0});
        sendResponse("Created.")
    }
});

// cancel course_updateUserWatchRecord ajax request to server for safety
/*
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log('[%s] canceld xmlhttprequest: %o', logPrefix, details);
        return { cancel:true };
    },
    {
        urls: [
            "*://xjtudj.edu.cn/course/course_updateUserWatchRecord.do*",
        ],
        types: [
            "xmlhttprequest",
        ]
    },
    [
        "blocking"
    ]
);*/