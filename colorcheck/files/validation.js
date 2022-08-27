// 必要なCSSとJavascriptの動的読み込み

function addStyleSheet(path)
{
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', path);
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
}

// id存在チェック
function isExistId(id)
{
    if (document.getElementById(id) != null)
    {
        return true;
    }
    return false;
}

// 現在時刻を「yyyymmddhhiiss」形式で文字列取得
// purchase_common.jsに同名関数あり。上書き注意。
function getTimestamp()
{
    var now = new Date();
    var y = ('0000' + now.getFullYear()).slice(-4);
    var m = ('00' + (parseInt(now.getMonth()) + 1)).slice(-2);
    var d = ('00' + now.getDate()).slice(-2);
    var h = ('00' + now.getHours()).slice(-2);
    var i = ('00' + now.getMinutes()).slice(-2);
    var s = ('00' + now.getSeconds()).slice(-2);
    return y + m + d + h + i + s;
}

// purchase_common.jsに同名関数あり。上書き注意。
function documentWriteWithTimestamp(path, type)
{
    if (typeof type === 'undefined')
    {
        type = 'js';
    }

    if (path.match(/\?/))
    {
        path = path + '&d=' + getTimestamp();
    }
    else
    {
        path = path + '?d=' + getTimestamp();
    }

    if (type == 'js')
    {
        document.write('<script src="' + path + '" charset="UTF-8"></script>');
    }
    else if (type == 'css')
    {
        document.write('<link rel="stylesheet" type="text/css" href="' + path + '">');
    }
}

var server_url = '';
if (isExistId('server_url'))
{
    server_url = document.getElementById('server_url').value;
}

addStyleSheet(server_url + 'css/validationEngine.jquery.css?d=' + getTimestamp());
documentWriteWithTimestamp(server_url + 'js/jquery-1.7.1.min.js');
documentWriteWithTimestamp(server_url + 'js/jquery.validationEngine.js');
documentWriteWithTimestamp(server_url + 'js/jquery.validationEngine-ja.js');
documentWriteWithTimestamp(server_url + 'js/validation_rules.js');

//jsファイル宣言時についているGETのパラメータを取得
//note : 取得したパラメータは他のJSファイル宣言時に付加します。
var scripts = document.getElementsByTagName("script");
//var shopid = '';
var param_str = '';
for (var i = 0; i < scripts.length; i++)
{
    var s = scripts[i];
    if (s.src && s.src.match(/validation\.js(\?.*)?/)) {
        var param_str = s.src.replace(/.+\?/, '');
        break;
    }
}

// 決済システムのJS宣言
if (param_str !== '')
{
    // dパラメータは重複するので削除する
    var removed_params = [];
    var params = param_str.split("&");
    for (var i = 0; i < params.length; i++)
    {
        var tmp = params[i].split("=");
        if (tmp[0] != 'd')
        {
            removed_params.push(params[i]);
        }
    }

    params = removed_params;
    param_str = params.join('&');
    for (var i = 0; i < params.length; i++)
    {
        var tmp = params[i].split("=");
        if (tmp[0] == 'mode')
        {
            //UnivaPay決済のスプリクト
            if ('ips' == unescape(tmp[1]))
            {
                //mask
                documentWriteWithTimestamp(server_url + 'css/jquery.loadmask.css', 'css');
                documentWriteWithTimestamp(server_url + 'js/jquery.loadmask.min.js');

                //document.write('<script src="https://s3-ap-northeast-1.amazonaws.com/token.ccps.jp/UpcTokenPaymentMini.js" charset="UTF-8"></script>');
                document.write('<script src="https://token.ccps.jp/UpcTokenPaymentMini.js" charset="UTF-8"></script>');
                documentWriteWithTimestamp(server_url + 'js/jquery.ips.js?' + param_str);
                break;
            }
            //GMO決済のスプリクト
            else if ('gmo' == unescape(tmp[1]))
            {
                //mask
                documentWriteWithTimestamp(server_url + 'css/jquery.loadmask.css', 'css');
                documentWriteWithTimestamp(server_url + 'js/jquery.loadmask.min.js');

                //テスト環境時
                //document.write('<script src="https://stg.static.mul-pay.jp/ext/js/token.js" charset="UTF-8"></script>');
                //本番環境時
                document.write('<script src="https://static.mul-pay.jp/ext/js/token.js" charset="UTF-8"></script>');
                documentWriteWithTimestamp(server_url + 'js/jquery.gmo.js?' + param_str);
                break;
            }
            //payjp
            else if ('payjp' == unescape(tmp[1]))
            {
                //mask
                documentWriteWithTimestamp(server_url + 'css/jquery.loadmask.css', 'css');
                documentWriteWithTimestamp(server_url + 'js/jquery.loadmask.min.js');

                //js
                document.write('<script src="https://js.pay.jp/v2/"></script>');
                documentWriteWithTimestamp(server_url + 'js/jquery.payjp.js?' + param_str);
            }
            //stripe
            else if ('stripe' == unescape(tmp[1]))
            {
                //mask
                documentWriteWithTimestamp(server_url + 'css/jquery.loadmask.css', 'css');
                documentWriteWithTimestamp(server_url + 'js/jquery.loadmask.min.js');

                //js
                document.write('<script src="https://js.stripe.com/v3/"></script>');
                documentWriteWithTimestamp(server_url + 'js/jquery.stripe.js?' + param_str);
            }
            //Amazon Pay
            else if ('amazonpay' == unescape(tmp[1]))
            {
                //Amazon Pay CV2のjs
                document.write('<script src="https://static-fe.payments-amazon.com/checkout.js" charset="UTF-8"></script>');

                //mask
                documentWriteWithTimestamp(server_url + 'css/jquery.loadmask.css', 'css');
                documentWriteWithTimestamp(server_url + 'js/jquery.loadmask.min.js');

                //js
                documentWriteWithTimestamp(server_url + 'js/jquery.amazonpay.js?' + param_str);
            }
            //ZEUS
            else if ('zeus' == unescape(tmp[1]))
            {
                //mask
                documentWriteWithTimestamp(server_url + 'css/jquery.loadmask.css', 'css');
                documentWriteWithTimestamp(server_url + 'js/jquery.loadmask.min.js');

                //js
                documentWriteWithTimestamp(server_url + 'js/jquery.zeus.js?' + param_str);

                //ZEUS
                document.write('<script type="text/javascript" src="https://linkpt.cardservice.co.jp/api/token/1.0/zeus_token_cvv.js"></script>');
                document.write('<link rel="stylesheet" href="https://linkpt.cardservice.co.jp/api/token/1.0/zeus_token.css">');
            }
            //ROBOT PAYMENT
            else if ('robot_payment' == unescape(tmp[1]))
            {
                //mask
                documentWriteWithTimestamp(server_url + 'css/jquery.loadmask.css', 'css');
                documentWriteWithTimestamp(server_url + 'js/jquery.loadmask.min.js');

                //js
                documentWriteWithTimestamp(server_url + 'js/jquery.robotpayment.js?' + param_str);

                //ROBOT PAYMENT
                document.write('<script src="https://credit.j-payment.co.jp/gateway/js/CPToken.js" charset="UTF-8"></script>');
            }
        }
    }
}





// 郵便番号入力欄があったら郵便番号自動補完スクリプトを読み込む
if ( isExistId('Userzipcode') ){
    var autozip_path = server_url + 'js/autozip.js';
    documentWriteWithTimestamp(autozip_path);
}
