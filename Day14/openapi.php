<?php
    header('Content-Type:application/json; charset=utf-8');

    //영화진흥위원회 OPEN API 를 대신 요청하여 오늘의 박스오피스 정보를 사용자에게 응답

    //php언어에서 다른 서버에 데이터를 요청하는 문법 : curl [client url의 약자] --CLI환경의 서버요청 명령어.
    // (서버인데 클라이언트 처럼 사용 가능.)
    
    //curl 라이브러리를 시작!
    $ch= curl_init();

    //curl로 수행할 작업을 옵션으로 설정
    $url="https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=494179480f84ebba867a5d0a4246c609&targetDt=202606111"
    curl_setopt($ch, CURLOPT_URL, "#url"); //이놈 어디로 갈지 정보를 획득했다.
    curl_setopt($ch,CURLOPT_RETURNRANSFER, true); //요청결과를 받겠다고 설정
    
    //설정되었으니.. curl 작업을 실행!!!
    $result= curl_exec($ch); //응답받은 결과를 리턴해 줌. (ch를 통해.)

    //결과가 있는지 확인 한 후 사용자에게 응답
    if($result){ //값이 있으면 트루, 없으면 펄스
        echo $result;
    }else{
        echo "실패!!" . cirl_erro($ch); //php에서는 .이 결합연산자
    }



?>