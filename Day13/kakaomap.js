//지도를 보여줄 div 요소 찾기
var container= document.getElementById('map');

// 지도의 위치나 줌레벨 정도를 옵션으로 미리 지정
var options= {
    center: new kakao.maps.LatLng(37.48659345150115 , 126.92925999999999), //center는 정해진 이름
    level: 3, //1~25
}

//지도객체를 만들고 보여주기
var map= new kakao.maps.Map(container, options);
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 내 위치에 마커 표시하기
// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.48659345150115 , 126.92925999999999);

var imageSrc = './image/usagi.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.48659345150115 , 126.92925999999999); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage
});
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ




// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);



//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
 
// 마커를 표시할 위치와 title 객체 배열입니다 
// 위도, 경도 변환 사이트 (https://gps.aply.biz/)
var positions = [
    {
        title: '우장빌딩', 
        latlng: new kakao.maps.LatLng(37.48685234635721, 126.92935682081259)
    },
    {
        title: '하나감자탕', 
        latlng: new kakao.maps.LatLng(37.48510404206718, 126.9282102418394)
    },
    {
        title: '신림역 더벤티', 
        latlng: new kakao.maps.LatLng(37.48385490316818, 126.92943106889294)
    },
    {
        title: '르네상스 쇼핑몰',
        latlng: new kakao.maps.LatLng(37.48476690401548, 126.93001457091592)
    }
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "./image/arm1.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
}

// function abc(){
//     var files= document.getElementById('m1').files
//     var fr= new FileReader();
//     // fr.onload=function(){
//     //     document.getElementById('m2').src=fr.result;
//     // 
//     fr.readAsDataURL(files[0])
// }

function freviwe(){ //파일 선택하면 실행되는 함수
    var files = document.getElementById('mi').files; //미에서 사용자가 선택한 파일을 가져옴. 결과는 배열처럼 생긴 객체
    // alert(files);
    document.getElementById('preview').innerHTML=''; //전에 있던 이미지 다 지움. 새로 선택하면 새로 다시 보여주기 위해서
    for(var i=0; i<files.length; i++){ //선택한 이미지files 개수length만큼 반복++
        var fr= new FileReader(); //컴퓨터 파일을 읽는 도구, 이미지 base64로 변환
        fr.onload=function(){ //퍼알 읽기가 끝나면 실행되는 함수 / 비동기(나중에 실행됨)
            var img= document.createElement('img'); 

            img.src= this.result;
            img.style.border="2px solid black";
            img.style.width= "200px";
            img.style.margin= "5px";

            document.getElementById('preview').appendChild(img); //preview div 안에 이미지 추가
        }

        fr.readAsDataURL(files[i]);
    }
}