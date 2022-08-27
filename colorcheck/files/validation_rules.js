$(function() {

    /**
     * 全角→半角(クラス定義)
     * 使用例 : $this->Form->input('name', array('class'=>'numeric_hankaku'))
     * @todo idを.numeric_hankakuに順次変更すること
     */
    $('body').on('change', '.numeric_hankaku', function(){
        $(this).numericZenToHan();
    });

    /**
     * 全角→半角(関数呼び出し）
     * 使用例 : $(this).numericZenToHan()
     */
    $.fn.numericZenToHan = function()
    {
        //データを取得
        var data = $(this).val();
        var table = {
            "０":0,
            "１":1,
            "２":2,
            "３":3,
            "４":4,
            "５":5,
            "６":6,
            "７":7,
            "８":8,
            "９":9
        };
        //全角→半角
        while(data.match(/[０-９]/))
        {
            $.each(table, function(n,val){
                data = data.replace(n,val);
            });
        }
        //0-9以外の文字列を削除する
        data = data.replace(/[^0-9]/gi,'');
        
        //データをセットし直す
        $(this).val(data);
    }
    //初回設定
    $('.numeric_hankaku').trigger('change');

    /**
     * 英数字の全角→半角(クラス定義)
     * 使用例 : $this->Form->input('name', array('class'=>'alphanumeric_char'))
     */
    //全角→半角自動切り替え
    $('body').on('change', '.alphanumeric_char', function(){
        
        $(this).alphanumericZenToChar();
    });
    
    /**
     * 全角→半角(関数呼び出し）
     * 使用例 : $(this).numericZenToHan()
     * 記号 : @._+-,
     */
    $.fn.alphanumericZenToChar = function()
    {
        //データを取得
        var data = $(this).val();

        //英数字の変換
        data = data.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
        
        //0-9 a-z A-Z以外の文字列を削除する
        data = data.replace(/[^0-9 ^a-z ^A-Z]/gi, '');
        
        //データをセットし直す
        $(this).val(data);
    }
    //初回設定
    $('.alphanumeric_char').trigger('change');

    /**
     * 英数字記号の全角→半角(クラス定義)
     * 使用例 : $this->Form->input('name', array('class'=>'alphanumeric_hankaku'))
     */
    //全角→半角自動切り替え
    $('body').on('change', '.alphanumeric_hankaku', function(){
        
        $(this).alphanumericZenToHan();
    });
    
    /**
     * 全角→半角(関数呼び出し）
     * 使用例 : $(this).numericZenToHan()
     * 記号 : @._+-,
     */
    $.fn.alphanumericZenToHan = function( should_no_delete )
    {
        //データを取得
        var data = $(this).val();
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

        if( !should_no_delete )
        {
            //0-9 a-z A-Z その他特殊記号以外の文字列を削除する
            data = data.replace(/[^0-9 ^a-z ^A-Z ^\@ ^\. ^\_ ^\$ ^\+ ^\- ^\, ^\n ^\r]/gi, '');
        }
        
        //データをセットし直す
        $(this).val(data);
    }
    //初回設定
    $('.alphanumeric_hankaku').trigger('change');
    
    /**
     * 英数字の全角→半角(クラス定義)
     * 使用例 : $this->Form->input('name', array('class'=>'alphanumeric_char'))
     */
    //全角→半角自動切り替え
    $('body').on('change', '.alphanumeric_char', function(){
        
        $(this).alphanumericZenToHan();
    });
    
    $.fn.alphanumericZenToChar = function()
    {
        //データを取得
        var data = $(this).val();

        //英数字の変換
        data = data.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
        
        //0-9 a-z A-Z以外の文字列を削除する
        data = data.replace(/[^0-9 ^a-z ^A-Z]/gi, '');
        
        //データをセットし直す
        $(this).val(data);
    }
    //初期設定
    $('.alphanumeric_char').trigger('change');
    
    /**
     * 数字を全角→半角にして16文字制限
     * 使用例 : $this->Form->input('name', array('class'=>'numeric_hankaku'))
     * @todo idを.numeric_hankakuに順次変更すること
     */
    $('body').on('change', '.numeric_hankaku16', function(){
        $(this).numericZenToHan();
        
        var data = $(this).val();
        
        // 16文字より大きい場合
        if (data.length > 16) {
            data = data.substr(0, 16);
            $(this).val(data);
        }
        
    });
    //初回設定
    $('.numeric_hankaku16').trigger('change');

    /**
     * 数字を全角→半角にして20文字制限
     * 使用例 : $this->Form->input('name', array('class'=>'numeric_hankaku'))
     * @todo idを.numeric_hankakuに順次変更すること
     */
    $('body').on('change', '.numeric_hankaku20', function(){
        $(this).numericZenToHan();
        
        var data = $(this).val();
        
        // 20文字より大きい場合
        if (data.length > 20) {
            data = data.substr(0, 20);
            $(this).val(data);
        }
        
    });
    //初回設定
    $('.numeric_hankaku20').trigger('change');

    /**
     *************************************************
     * 
     * 数字を全角→半角にして4文字制限
     * 使用例 : $this->Form->input('name', array('class'=>'numeric_hankaku'))
     * @todo idを.numeric_hankakuに順次変更すること
     * 
     *************************************************
     */
    $('body').on('change', '.numeric_hankaku4', function(){
        $(this).numericZenToHan();
        
        var data = $(this).val();
        
        // 4文字より大きい場合
        if (data.length > 4) {
            data = data.substr(0, 4);
            $(this).val(data);
        }
        
    });
    //初回設定
    $('.numeric_hankaku4').trigger('change');
    
    //=======================================
    // rules
    // 必須ルール
    //note:ここより下でバリデーションチェックコードを記載してください。
    $('div.required,th.required+td').find('input').addClass('validate[required]');
    $('div.required,th.required+td').find('textarea').addClass('validate[required]');
    $('div.required,th.required+td').find('select').addClass('validate[required]');
    //テーブルの項目名の位置上側専用（thの右側にtdがない場合は、次のtrの中を対象にする）
    $('th.required').each(function(){
        if ($(this).next('td').length == 0)
        {
            $(this).parent('tr').next('tr').find('input').addClass('validate[required]');
            $(this).parent('tr').next('tr').find('textarea').addClass('validate[required]');
            $(this).parent('tr').next('tr').find('select').addClass('validate[required]');
        }
    });
    //form ver2以降
    $('.myForm input.required').addClass('validate[required]');
    $('.myForm textarea.required').addClass('validate[required]');
    $('.myForm select.required').addClass('validate[required]');
    
    // メアドルール
    $("*[name='data[User][mail]']").addClass('validate[custom[email]]');
    
    // サブアドルール
    $("*[name='data[User][submail]']").addClass('validate[custom[subemail]]');

    // UnivaPay メアドルール
    $("*[name='data[User][em]']").addClass('validate[custom[email]]');
    
    // フリガナルール
    $("*[name='data[User][kana]']").addClass('validate[custom[onlyKana]]');
    
    // 電話番号ルール
    $("*[name='data[User][tel]']").addClass('validate[custom[phone]]');
    
    // 郵便番号ルール
    $("*[name='data[User][zipcode]']").addClass('validate[custom[zipcode]]');

    // パスワード
    $("*[name='data[User][password]']").addClass('validate[custom[password]]');

    // bind
    $("*[id='UserItemForm']").validationEngine('attach', {
        //コメント位置を左側に設定
        promptPosition:"topLeft"
    });

    //住所を抜けた時には都道府県もチェックする
    $("*[name='data[User][zip]']").blur(function(){
        $("*[name='data[User][pref]']").trigger('blur');
    });
});