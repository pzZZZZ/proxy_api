

$.ajax({
    url: "/api/getQesList",
    data: {
        length: 50
    }
}).done(res => {
    let frg = document.createDocumentFragment()
    const { QList } = res.data//对象解构
    const mapList = QList.map((
        ele, index
    ) => {
        let temp = `
        <div>
            ${ele.questionContent}
            <div>
            ${ele.analyse}
            </div>
            <div>
            ${ele.discuss}
            </div>
            <div>
            ${ele.method}
            </div>
        </div>
        `
        return temp
    }).join(',')
    $('.box').html(mapList)

})
