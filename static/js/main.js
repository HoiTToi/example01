// 메인페이지 접속 시 우선 실행
window.onload = function () {
    if (window.Notification.permission !== 'granted') {
        alert('알림표시를 허용으로 선택해주세요');
    }

    if (window.Notification) {
        Notification.requestPermission();
    }
}

// 알림받기 버튼 클릭 시 동작
function notify() {
    // 알림 차단 눌렀을 때 알림창 표시
    if (Notification.permission !== 'granted') {
        alert('알림표시를 허용으로 선택해주세요');
    }
    else {
        // console.log('launched')
        let getDay = checkTime()
        let currentDay = getDay().substring(8,10)
        let getMenu = checkMenu()
        let notification = new Notification(`${currentDay}`+`일 점심메뉴`, {
            icon: 'https://www.gntp.or.kr/assets/images/head/ci.png',
            body: `${getMenu}`,
        });

        // 알림 창 클릭 시 동작
        notification.onclick = function () {
            // window.open('http://google.com');
            window.open('/');
            // window.location.href('/');
            // window.reload
        };
    }
}

// 현재 날짜 불러오기
function checkTime() {
    let today = window.Date
    return today
}

// 메뉴 가져오기
function checkMenu() {
    let g = ['쌀밥', '김치', '추어탕', '탕수육', '꽈리고추멸치볶음']
    return g
}

// function calculate() {
//     setTimeout(function () {
//         notify();
//     }, 10);
// }
