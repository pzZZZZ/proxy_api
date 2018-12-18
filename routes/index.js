const router = require('koa-router')()
const proxy = require('http-proxy-middleware')
const c2k = require('koa2-connect')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/api/getFirstData', c2k(proxy({ target: 'https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=somemessage&udid=dddddddddddddddddddddd', changeOrigin: true })))

router.post('/api/getFirstData', c2k(proxy({ target: 'https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=somemessage&udid=dddddddddddddddddddddd', changeOrigin: true })))
router.all('/api/getQuestion', async (ctx, next) => {
  ctx.body = {
    "code": 200,
    "msg": "成功",
    "data": {
      "analyse": "设OE=xcm，则上底面边长为2xcm，下底面边长为（2x-10）cm，故O<SUB>1</SUB>E<SUB>1</SUB>=（x-5）cm，结合棱台的全面积为512cm<SUP>2</SUP>，解方程可得棱台的上、下底面的边长．",
      "method": "解：设OE=xcm，则下底面边长为2xcm，上底面边长为（2x-10）cm，故O<SUB>1</SUB>E<SUB>1</SUB>=（x-5）cm，<br />则FE=5cm，<br />又∵正四棱台高是12cm，<br />∴EE<SUB>1</SUB>=13cm，<br />故正四棱台的全面积S=<span class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\">4<span><span>x</span><span style=\"vertical-align:super;font-size:90%\">2</span></span>+(2x-10<span><span>)</span><span style=\"vertical-align:super;font-size:90%\">2</span></span>+4×<table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tr><td style=\"border-bottom:1px solid black\">1</td></tr><tr><td>2</td></tr></table>×(2x+2x-10)×13</span>=8（x<SUP>2</SUP>+8x-20）=512cm<SUP>2</SUP>． <br />解得：x=6cm，<br />故正四棱台下底面边长为12cm，<br />故选B．",
      "discuss": "本题考查的知识点是棱台的表面积，考查学生的计算能力，难度中档．",
      "id": 402,
      "jyID": "00000000-0000-0000-0000-000000000000",
      "cate": 1,
      "cateName": "选择题",
      "questionContent": "<img alt=\"菁优网\" src=\"http://img.jyeoo.net/quiz/images/201611/220/9b2d611c.png\" style=\"vertical-align:middle;FLOAT:right\" />已知正四棱台的高是12cm，两底面边长之差为10cm，表面积为512cm<SUP>2</SUP>，则下底面的边长为（　　）",
      "answers": [
        "B"
      ],

    }
  }
})

router.all('/api/getOptionList', async (ctx, next) => {
  ctx.body = {
    code: 200,
    data: {
      "optionList": [
        {
          "choice": "A",
          "selectValue": "A",
          "optionContent": "10"
        },
        {
          "choice": "B",
          "selectValue": "B",
          "optionContent": "12"
        },
        {
          "choice": "C",
          "selectValue": "C",
          "optionContent": "14"
        },
        {
          "choice": "D",
          "selectValue": "D",
          "optionContent": "16"
        }
      ]
    }
  }
})


module.exports = router
