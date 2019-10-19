
// 新闻列表
$.ajax({
    url: 'http://192.168.97.236:3006/news',
    type: 'get',
    dataType: 'json',
    success: function(res) {
        var html = template('tablist',res)
        $(".news-lists").html(html)
    }
})

// 为你推荐
$.ajax({
    url: 'http://192.168.97.236:3006/recommend',
    type: 'get',
    dataType: 'json',
    success: function(res) {
        var html = template('recommend',res)
        $(".new-recommend-content-list").html(html)
    }
})

// 案例展示
$.ajax({
    url: 'http://192.168.97.236:3006/case',
    type: 'get',
    dataType: 'json',
    success: function(res) {
        var html = template('case',res)
        $(".sup-caseshow-lists").html(html)
    }
})

