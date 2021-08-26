const express = require('express');
const app = express();
const port = 8080;
// CORSを有効にする
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});
app.get('/chat', function (req, res) {
        const userInputText = req.query.text;
        const callback = req.query.callback;
        const response = {output: []};
        const msg = response.output;

        if (userInputText == '挨拶') {
            msg.push({
                type: 'text',
                value: 'こんあくあー！湊あくあです！',
            });
        } else if (userInputText == '動画') {
            msg.push({
                type: 'text',
                value: 'ここから見れるよ！https://bit.ly/2Wq5sDF',
            });
        } else if (userInputText == 'Twitter') {
            msg.push({
                type: 'text',
                value: 'ここから見れるよ！https://bit.ly/3gwstLY',
            });
        } else if (userInputText == '誕生日') {
            msg.push({
                type: 'text',
                value: '12月1日だよ！',
            });    
        } else if (userInputText == 'パパ') {
            msg.push({
                type: 'text',
                value: 'がおうパッパだよ！ https://bit.ly/3sKjED6',
            });        
        } else if (userInputText == '体重') {
            msg.push({
                type: 'text',
                value: 'あああああああぁああああぃああああぁぁぁぁあぁぁぁぁぁあぁあああああぁああぁああああああぁぁぁああああぁあぁぁぁぁああぁあああぁぁぁぁぁぁぁぁぁぁぁぁぁぁぁあぁああぁぁぁぁぁあぁぁぁぁあぁぁぁぁぁぁ.......',
            });            
        } else if (userInputText == '自己紹介') {
            msg.push({
                type: 'text',
                value: '「皆さんどうもこんあくあー！湊あくあです！」マリンメイド服のバーチャルメイド。本人は頑張っているがおっちょこちょいでドジっ子。',
            });      
        　　} else if (userInputText == 'グッズが買いたい') {
            msg.push({
                type: 'text',
                value: 'おすすめは三周年記念グッズ！ここから買えるよ！https://hololive.booth.pm/items/3167052',
            });                  
        } else if (userInputText == '曲') {
            msg.push({
                type: 'text',
                value: '複数の音楽配信サービスで配信中だよ！https://open.spotify.com/artist/6GHr4rGFHGRUuzuCuxJA0f?autoplay=true',
            });
        } else if (userInputText == 'こんあくあ') {
            msg.push({
                type: 'text',
                value: 'こんあくあー！',
            });                                    
        } else {
            msg.push({
                type: 'text',
                value: '「' + userInputText + '」って言ったよ！'
            });
        }

        if (callback) {
            const responseText = callback + '(' + JSON.stringify(response) + ')';
            res.set('Content-Type', 'application/javascript');
            res.send(responseText);
        } else {
            res.json(response);
        }
    }
);
app.listen(port, () => {
    console.log('チャットサーバーを開始しました ポート番号:' + port);
});
