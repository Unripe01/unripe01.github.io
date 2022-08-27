;/*****************************************************************
 * Japanese language file for jquery.validationEngine.js (ver2.0)
 *
 * Transrator: tomotomo ( Tomoyuki SUGITA )
 * http://tomotomoSnippet.blogspot.com/
 * Licenced under the MIT Licence
 * note: 追加機能
 *       "normalize": function(object) データを正規化するイベント
 *       
 * 
 *******************************************************************/
(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* 必須項目です",
                    "alertTextCheckboxMultiple": "* 選択してください",
                    "alertTextCheckboxe": "* チェックボックスをチェックしてください"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Field must equal test"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* ",
                    "alertText2": "文字以上にしてください"
                },
				"groupRequired": {
                    "regex": "none",
                    "alertText": "* You must fill one of the following fields"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* ",
                    "alertText2": "文字以下にしてください"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* ",
                    "alertText2": " 以上の数値にしてください"
                },
                "max": {
                    "regex": "none",
                    "alertText": "* ",
                    "alertText2": " 以下の数値にしてください"
                },
                "past": {
                    "regex": "none",
                    "alertText": "* ",
                    "alertText2": " より過去の日付にしてください"
                },
                "future": {
                    "regex": "none",
                    "alertText": "* ",
                    "alertText2": " より最近の日付にしてください"
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* チェックしすぎです"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* ",
                    "alertText2": "つ以上チェックしてください"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* 入力された値が一致しません"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* 無効なクレジットカード番号"
                },
                //電話番号
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
					"regex": /^\+?\d{0,3}?\-?\d{1,4}\-?\d{1,4}\-?\d{4}$/,
                    "alertText": "* 電話番号が正しくありません",
                    "normalize": function(object){
                    	//全角を半角にする
                    	normalizeZenToHan(object, true);
                    	//スペース削除
                    	normalizeSpaceDelete(object);
                        return true;
                    },
                },
                //メールアドレス
                "email": {
					// docomo形式も通るように
					"regex": /^([A-Za-z0-9_\-\.\+])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/,
                    "alertText": "* メールアドレスが正しくありません",
                    "normalize": function(object){
                    	//全角を半角にする
                    	normalizeZenToHan(object,false);
                    	//スペース削除
                    	normalizeSpaceDelete(object);
                        return true;
                    },
                },
                //サブアドレス
                "subemail": {
					// docomo形式も通るように
					"regex": /^([A-Za-z0-9_\-\.\+])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/,
                    "alertText": "* メールアドレスが正しくありません",
                    "normalize": function(object){
                    	//全角を半角にする
                    	normalizeZenToHan(object,false);
                    	//スペース削除
                    	normalizeSpaceDelete(object);
                        return true;
                    },
                },
                // パスワード
                "password": {
                    "regex": /^[a-zA-Z0-9!?:;=<>%&@~|#$_*+-]*$/,
                    "alertText": "* 利用できない文字が入力されました<br>　半角英数字、一部記号（!?:;=<>%&@~|#$_*+-）で入力してください",
                },
                //郵便番号
				"zipcode": {
					// 郵便番号形式(数字7桁or 3桁ハイフン4桁)
					"regex": /^\d{3}\-?\d{4}$/,
                    "alertText": "* 郵便番号が正しくありません",
                    "normalize": function(object){
                    	//全角を半角にする
                    	normalizeZenToHan(object, true);
                    	//スペース削除
                    	normalizeSpaceDelete(object);
                        return true;
                    },
				},
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* 整数を半角で入力してください"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* 数値を半角で入力してください"
                },
                "date": {
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
                    "alertText": "* 日付は半角で YYYY-MM-DD の形式で入力してください"
                },
                "ipv4": {
                	"regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* IPアドレスが正しくありません"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* URLが正しくありません"
                },
                "onlyKana": {
                    //・コード表のヴまでではなくヵヶまで含むようにしました
                	//・全角スペースも追加
                    "regex": /^[ァ-ヶー　]+$/,
                    "alertText": "* カタカナで入力してください",
                    "normalize": function(object){
                        //スペース削除
                        normalizeSpaceDelete(object);
                        //半角カナを全角カナにする
                        normalizeKanaHanToZen(object);
                        return true;
                    },

                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* 半角数字で入力してください"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* 半角アルファベットで入力してください"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* 半角英数で入力してください"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* This name is already taken",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This name is available",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
                "validate2fields": {
                    "alertText": "* 『HELLO』と入力してください"
                }
            };
            
        }
    };
    $.validationEngineLanguage.newLang();
    
    /**
     * ************************************
     * 
     * 正規化イベント：スペースを削除する
     * 
     * ************************************
     */
    function normalizeSpaceDelete(object)
    {
    	var $string = object.val();
    	$string = $string.split(' ').join('');
    	$string = $string.split('　').join('');
    	object.val($string);
    }
    /**
     * ************************************
     * 
     * 正規化イベント：全角を半角にする
     * 
     * ************************************
     */
    function normalizeZenToHan(object,should_delete)
    {
		//データを取得
		var data = object.val();
		//特殊記号テーブル
		var table = {
			"＠":"@",
			"．":".",
			"。":".",
			"＿":"_",
			"！":"!",
			"＃":"#",
			"＄":"$",
			"％":"%",
			"＆":"&",
			"‘":"`",
			"＋":"+",
			"ー":"-",
			"ー":"-",
			"‐":"-",
			"‐":"-",
			"／":"/",
			"’":"'",
			"＾":"^",
			"｛":"{",
			"｝":"}",
			"？":"?",
			"｜":"|",
			"～":"~",
			"＊":"*",
			"＝":"=",
			"、":",",
		};
		
		//英数字の変換
		data = data.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
			return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
		});
		
		
		//記号全角→半角
		while(data.match(/[＠．。＿！＃＄％＆‘＋ーー‐‐／’＾｛｝？｜～＊＝]/))
		{
			$.each(table, function(n,val){
				data = data.replace(n,val);
			});
		}

        if( should_delete )
        {
		    //0-9 a-z A-Z その他特殊記号以外の文字列を削除する
		    data = data.replace(/[^0-9 ^a-z ^A-Z ^\@ ^\. ^\_ ^\$ ^\+ ^\- ^\, ^\n ^\r]/gi, '');
        }
		
		//データをセットし直す
		object.val(data);
    }
    
    /**
     * ************************************
     * 
     * 正規化イベント：半角カナを全角カナにする
     * 
     * ************************************
     */ 
    function normalizeKanaHanToZen(object)
    {
		//データを取得
		var data = object.val();
		
        var kanaMap = {
                'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
                'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
                'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
                'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
                'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
                'ｳﾞ': 'ヴ', 'ﾜﾞ': 'ヷ', 'ｦﾞ': 'ヺ',
                'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
                'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
                'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
                'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
                'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
                'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
                'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
                'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
                'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
                'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
                'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
                'ｯ': 'ッ', 'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
                '｡': '。', '､': '、', 'ｰ': 'ー', '｢': '「', '｣': '」', '･': '・'
            };    	
    	
        var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
        data = data
                .replace(reg, function (match) {
                    return kanaMap[match];
                })
                .replace(/ﾞ/g, '゛')
                .replace(/ﾟ/g, '゜');
        
		//データをセットし直す
		object.val(data);
    }
    
    
})(jQuery);


    
