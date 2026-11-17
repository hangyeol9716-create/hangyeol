// ==========================================
// 1. TRIP DATA (11/21 ~ 11/22 속초·양양 1박 2일)
// ==========================================

const scheduleData = [
  // DAY 1: 11월 21일 (토)
  {
    id: 'd1-1',
    day: 1,
    time: '07:00',
    category: 'drive',
    catLabel: '출발 · 이동',
    title: '녹번에서 자차 출발',
    address: '서울 은평구 녹번역 인근 집결',
    desc: '서울양양고속도로 진입 전 커피 한 잔 챙기고 출발! 토요일 오전 정체를 피하기 위해 7시 정각 출발.',
    tips: '💡 운전 교대자 확인 및 하이패스·주유 상태 체크',
    naverUrl: null,
    lat: null,
    lng: null
  },
  {
    id: 'd1-2',
    day: 1,
    time: '08:20 ~ 09:10',
    category: 'meal',
    catLabel: '아침 식사',
    title: '고속도로 휴게소 아침 식사',
    address: '서울양양고속도로 가평휴게소 또는 내린천휴게소 (양양방향)',
    desc: '이동 중 휴게소에 들러 든든하게 아침 식사 및 간식 타임.',
    tips: '💡 가평휴게소(잣소고기국밥, 호두잣과자) 또는 내린천휴게소 추천',
    naverUrl: 'https://map.naver.com/p/search/서울양양고속도로%20휴게소',
    lat: null,
    lng: null
  },
  {
    id: 'd1-3',
    day: 1,
    time: '10:30 ~ 12:00',
    category: 'spot',
    catLabel: '관광 명소',
    title: '양양 낙산사 도착 & 산책',
    address: '강원 양양군 강현면 낙산사로 100',
    desc: '동해 바다가 한눈에 내려다보이는 해수관음상과 의상대, 홍련암까지 바다 산책 코스.',
    tips: '💡 의상대 주차장 또는 낙산사 후문(법당) 주차장 이용 시 동선이 편합니다. (관람료 무료, 주차료 별도)',
    naverUrl: 'https://map.naver.com/p/search/양양%20낙산사',
    lat: 38.1246,
    lng: 128.6282
  },
  {
    id: 'd1-4',
    day: 1,
    time: '12:30 ~ 14:00',
    category: 'meal',
    catLabel: '점심 맛집',
    title: '아바이마을 · 단천식당',
    address: '강원 속초시 아바이마을길 17',
    desc: '속초 아바이마을 원조 맛집에서 명태회냉면, 아바이순대, 오징어순대로 점심 식사 & 아바이마을 해변 구경.',
    tips: '💡 대표메뉴: 아바이순대, 오징어순대, 모듬순대, 명태회냉면 / 청호동 공영주차장 주차 편리',
    naverUrl: 'https://naver.me/xRQ0QRfv',
    lat: 38.2016,
    lng: 128.5945
  },
  {
    id: 'd1-5',
    day: 1,
    time: '14:20 ~ 17:00',
    category: 'spot',
    catLabel: '시장 · 카페',
    title: '속초중앙시장 & 속초 카페 투어',
    address: '강원 속초시 중앙로147번길 12 (속초관광수산시장)',
    desc: '시장 구경하며 밤에 숙소(3차)에서 먹을 안주 포장 구매 후, 근처 오션뷰 카페에서 여유로운 커피 타임.',
    tips: '💡 숙소 안주 픽업 추천: 만석/중앙 닭강정, 마카롱 아이스크림, 오징어순대, 새우강정 등 (대형공영주차장 이용)',
    naverUrl: 'https://map.naver.com/p/search/속초관광수산시장',
    lat: 38.2044,
    lng: 128.5904
  },
  {
    id: 'd1-6',
    day: 1,
    time: '17:30 ~ 19:30',
    category: 'meal',
    catLabel: '저녁 1차',
    title: '연탄불생구이 (저녁 식사)',
    address: '강원 속초시 중앙부두길 71',
    desc: '연탄불 향 가득한 노포 감성 맛집에서 1차 저녁 겸 반주 스타트! (※ 차는 숙소에 먼저 주차 후 택시/도보 이동 추천)',
    tips: '💡 대표메뉴: 뒷고기, 돼지꼬리(양념/소금), 닭목살구이, 제철 양미리구이, 된장찌개',
    naverUrl: 'https://naver.me/GKUJ0ycy',
    lat: 38.2041,
    lng: 128.5931
  },
  {
    id: 'd1-7',
    day: 1,
    time: '20:00 ~ 22:00',
    category: 'drink',
    catLabel: '술집 2차',
    title: '금주언니포장마차',
    address: '강원 속초시 청대로204번길 18 (조양동)',
    desc: '현지인 추천 가성비 끝판왕 한식 포차에서 2차! 숙소(호텔 더블루테라)와도 가까운 조양동 위치.',
    tips: '💡 대표메뉴: 신선한 한우육회 및 제철 해산물·포차 안주류 (착한가격업소 선정 맛집)',
    naverUrl: 'https://naver.me/GsjYbU3P',
    lat: 38.1892,
    lng: 128.5978
  },
  {
    id: 'd1-8',
    day: 1,
    time: '22:15 ~ 심야',
    category: 'hotel',
    catLabel: '숙소 & 3차',
    title: '호텔 더블루테라 (체크인 & 숙소 3차)',
    address: '강원 속초시 동해대로 3920',
    desc: '속초중앙시장에서 사 온 야식 안주 세팅하고 방에서 편하게 3차 우정 술자리!',
    tips: '💡 체크인 15:00 / 체크아웃 11:00 (1차 가기 전 오후에 미리 체크인하고 차를 두고 나가면 훨씬 편합니다!)',
    naverUrl: 'https://map.naver.com/p/search/호텔더블루테라',
    lat: 38.1904,
    lng: 128.6012
  },

  // DAY 2: 11월 22일 (일)
  {
    id: 'd2-1',
    day: 2,
    time: '09:30 ~ 12:30',
    category: 'spot',
    catLabel: '등산 · 트레킹',
    title: '설악산 흔들바위 등반',
    address: '강원 속초시 설악산로 1091 (설악산 소공원)',
    desc: '호텔 체크아웃 후 설악산 소공원 이동! 신흥사 ➔ 내원암 ➔ 흔들바위(계조암) 왕복 등반 코스 (왕복 약 2시간 ~ 2시간 30분).',
    tips: '💡 완만한 산책로 위주라 가볍게 오르기 좋음! 흔들바위 인증샷 찍고 하산하기',
    naverUrl: 'https://map.naver.com/p/search/설악산%20흔들바위',
    lat: 38.1764,
    lng: 128.4908
  },
  {
    id: 'd2-2',
    day: 2,
    time: '13:00 ~ 14:30',
    category: 'meal',
    catLabel: '점심 맛집',
    title: '남경막국수 본점',
    address: '강원 속초시 대포항희망길 47 남경막국수',
    desc: '등산 후 시원하고 고소한 들기름·동치미 막국수와 보들보들한 수육, 감자전으로 완벽한 해장 겸 점심 식사.',
    tips: '💡 대포항 인근 위치 / 막국수 + 한우국밥 또는 수육·감자전 조합 추천!',
    naverUrl: 'https://naver.me/IDB1K4gO',
    lat: 38.1731,
    lng: 128.6079
  },
  {
    id: 'd2-3',
    day: 2,
    time: '14:40 ~',
    category: 'drive',
    catLabel: '서울 복귀',
    title: '서울(녹번)로 출발 & 복귀',
    address: '대포항 ➔ 서울 은평구 녹번',
    desc: '일요일 오후 고속도로 정체 상황을 확인하며 안전하게 서울로 복귀!',
    tips: '💡 졸음운전 방지를 위해 휴게소 스트레칭 & 커피 타임 필수',
    naverUrl: null,
    lat: null,
    lng: null
  }
];

const placesData = [
  {
    name: '단천식당',
    category: 'meal',
    catBadge: 'DAY 1 점심',
    address: '강원 속초시 아바이마을길 17',
    menus: ['아바이순대', '오징어순대', '명태회냉면', '모듬순대'],
    note: '아바이마을 터줏대감 맛집! 쫄깃한 명태회냉면 위에 따뜻한 오징어순대 한 점 올려 먹으면 별미.',
    naverUrl: 'https://naver.me/xRQ0QRfv'
  },
  {
    name: '연탄불생구이',
    category: 'meal',
    catBadge: 'DAY 1 저녁 (1차)',
    address: '강원 속초시 중앙부두길 71',
    menus: ['뒷고기', '돼지꼬리구이', '닭목살구이', '양미리구이'],
    note: '연탄불에 노릇하게 구워 먹는 특수부위 & 제철 생선구이 노포 맛집. 소주 안주로 최고!',
    naverUrl: 'https://naver.me/GKUJ0ycy'
  },
  {
    name: '금주언니포장마차',
    category: 'drink',
    catBadge: 'DAY 1 술집 (2차)',
    address: '강원 속초시 청대로204번길 18',
    menus: ['한우육회', '제철 해산물', '포차 한식 안주'],
    note: '숙소(조양동) 근처에 위치한 정겨운 감성 포차! 착한가격업소로 선정된 가성비와 손맛 좋은 안주 맛집.',
    naverUrl: 'https://naver.me/GsjYbU3P'
  },
  {
    name: '남경막국수 본점',
    category: 'meal',
    catBadge: 'DAY 2 점심',
    address: '강원 속초시 대포항희망길 47 남경막국수',
    menus: ['막국수', '수육', '감자전', '한우국밥'],
    note: '설악산 흔들바위 하산 후 들르기 딱 좋은 대포항 막국수 맛집. 시원한 육수와 메밀면의 조화!',
    naverUrl: 'https://naver.me/IDB1K4gO'
  },
  {
    name: '속초중앙시장 (관광수산시장)',
    category: 'spot',
    catBadge: 'DAY 1 안주 픽업 & 구경',
    address: '강원 속초시 중앙로147번길 12',
    menus: ['닭강정', '새우강정', '오징어순대', '감자전'],
    note: '밤에 호텔 더블루테라에서 3차로 먹을 안주거리 포장 및 시장 간식 투어 코스.',
    naverUrl: 'https://map.naver.com/p/search/속초관광수산시장'
  },
  {
    name: '호텔 더블루테라',
    category: 'spot',
    catBadge: '숙소 (체크인 15:00)',
    address: '강원 속초시 동해대로 3920',
    menus: ['체크인 15:00', '체크아웃 11:00', '속초해수욕장 인근'],
    note: '1일차 저녁 먹으러 가기 전 미리 체크인 & 주차해두면 1차·2차 후 편하게 복귀 가능!',
    naverUrl: 'https://map.naver.com/p/search/호텔더블루테라'
  },
  {
    name: '양양 낙산사',
    category: 'spot',
    catBadge: 'DAY 1 오전 코스',
    address: '강원 양양군 강현면 낙산사로 100',
    menus: ['해수관음상', '의상대', '홍련암', '바다 산책로'],
    note: '서울에서 속초로 들어가는 길목에 들르는 동해안 대표 절경 사찰.',
    naverUrl: 'https://map.naver.com/p/search/양양%20낙산사'
  },
  {
    name: '설악산 흔들바위',
    category: 'spot',
    catBadge: 'DAY 2 오전 등반',
    address: '강원 속초시 설악산로 1091 (설악산 소공원)',
    menus: ['왕복 약 2시간', '신흥사 경유', '계조암 흔들바위'],
    note: '소공원에서 출발해 완만한 숲길을 걸어 올라가는 설악산 대표 트레킹 명소.',
    naverUrl: 'https://map.naver.com/p/search/설악산%20흔들바위'
  }
];

const defaultChecklist = [
  { id: 'c1', text: '편한 운동화 / 트레킹화 (설악산 흔들바위 등반용)', checked: false },
  { id: 'c2', text: '바람막이 또는 따뜻한 겉옷 (11월 말 바닷바람 & 산행 대비)', checked: false },
  { id: 'c3', text: '운전면허증 & 차량용 충전기 / 거치대', checked: false },
  { id: 'c4', text: '숙소 3차용 간단한 주류 / 숙취해소제', checked: false },
  { id: 'c5', text: '세면도구 (칫솔, 치약, 클렌징폼) & 개인 상비약', checked: false },
  { id: 'c6', text: '보조배터리 & 휴대폰 충전기', checked: false }
];

// ==========================================
// 2. STATE & LOCAL STORAGE
// ==========================================
let completedItems = JSON.parse(localStorage.getItem('sokcho_completed') || '[]');
let expenses = JSON.parse(localStorage.getItem('sokcho_expenses') || '[]');
let memberCount = parseInt(localStorage.getItem('sokcho_members') || '4', 10);
let checklist = JSON.parse(localStorage.getItem('sokcho_checklist') || JSON.stringify(defaultChecklist));

// ==========================================
// 3. RENDER TIMELINE
// ==========================================
function renderTimeline(filterDay = 'all') {
  const container = document.getElementById('timeline-container');
  container.innerHTML = '';

  const daysToShow = filterDay === 'all' ? [1, 2] : [parseInt(filterDay, 10)];

  // Toggle Route Overview Rows
  document.querySelectorAll('.route-overview-row').forEach(row => {
    const dayGroup = row.getAttribute('data-day-group');
    row.style.display = (filterDay === 'all' || filterDay === dayGroup) ? 'flex' : 'none';
  });

  daysToShow.forEach(dayNum => {
    const dayItems = scheduleData.filter(item => item.day === dayNum);
    const dayBlock = document.createElement('div');
    dayBlock.className = 'day-block';

    const bannerTitle = dayNum === 1
      ? '11월 21일 (토) · 낙산사 & 속초 먹방 투어'
      : '11월 22일 (일) · 설악산 흔들바위 & 막국수';
    const bannerSub = dayNum === 1
      ? '녹번 07:00 출발 ➔ 낙산사 ➔ 아바이마을 ➔ 중앙시장 ➔ 연탄구이 & 포차 ➔ 호텔'
      : '호텔 체크아웃 ➔ 설악산 흔들바위 등반 ➔ 남경막국수 본점 ➔ 서울 복귀';

    dayBlock.innerHTML = `
      <div class="day-banner ${dayNum === 2 ? 'day2-banner' : ''}">
        <div class="day-banner-left">
          <span class="day-badge">DAY ${dayNum}</span>
          <div>
            <div class="day-banner-title">${bannerTitle}</div>
            <div class="day-banner-sub">${bannerSub}</div>
          </div>
        </div>
      </div>
      <div class="timeline-list">
        ${dayItems.map(item => {
          const isDone = completedItems.includes(item.id);
          return `
            <div class="timeline-item ${isDone ? 'completed' : ''}" data-cat="${item.category}" data-id="${item.id}">
              <span class="timeline-dot"></span>
              <div class="item-top">
                <div class="item-meta">
                  <span class="item-time">${item.time}</span>
                  <span class="item-cat-tag cat-${item.category}">${item.catLabel}</span>
                </div>
                <button type="button" class="check-done-btn ${isDone ? 'active' : ''}" onclick="toggleScheduleDone('${item.id}')">
                  <i data-lucide="${isDone ? 'check-circle-2' : 'circle'}"></i>
                  ${isDone ? '완료됨' : '방문 체크'}
                </button>
              </div>
              <h3 class="item-title">${item.title}</h3>
              <div class="item-address">
                <i data-lucide="map-pin" style="width:14px;height:14px;"></i>
                <span>${item.address}</span>
              </div>
              <p class="item-desc">${item.desc}</p>
              <div class="item-tips">${item.tips}</div>
              <div class="item-actions">
                ${item.naverUrl ? `
                  <a href="${item.naverUrl}" target="_blank" rel="noopener noreferrer" class="btn-naver">
                    <i data-lucide="navigation"></i> 네이버 지도 열기
                  </a>
                ` : ''}
                <button type="button" class="btn-copy-addr" onclick="copyText('${item.address}', '주소가 복사되었습니다!')">
                  <i data-lucide="copy"></i> 주소 복사
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
    container.appendChild(dayBlock);
  });

  lucide.createIcons();
}

window.toggleScheduleDone = function(id) {
  if (completedItems.includes(id)) {
    completedItems = completedItems.filter(item => item !== id);
  } else {
    completedItems.push(id);
  }
  localStorage.setItem('sokcho_completed', JSON.stringify(completedItems));
  const activeDayBtn = document.querySelector('.day-btn.active');
  renderTimeline(activeDayBtn ? activeDayBtn.dataset.day : 'all');
};

// ==========================================
// 4. RENDER PLACES & FOOD CARDS
// ==========================================
function renderPlaces(filterCat = 'all') {
  const grid = document.getElementById('places-grid');
  const filtered = filterCat === 'all'
    ? placesData
    : placesData.filter(p => p.category === filterCat);

  grid.innerHTML = filtered.map(place => `
    <div class="place-card">
      <div class="place-card-top">
        <div class="place-badges">
          <span class="item-cat-tag cat-${place.category}">
            ${place.category === 'meal' ? '식사 맛집' : place.category === 'drink' ? '술집 · 포차' : '관광 · 숙소'}
          </span>
          <span class="place-day-label">${place.catBadge}</span>
        </div>
        <h3 class="place-name">${place.name}</h3>
        <div class="place-addr">📍 ${place.address}</div>
        <div class="menu-pills">
          ${place.menus.map(m => `<span class="menu-pill">#${m}</span>`).join('')}
        </div>
        <div class="place-note">${place.note}</div>
      </div>
      <div class="place-card-actions">
        <a href="${place.naverUrl}" target="_blank" rel="noopener noreferrer" class="btn-naver">
          <i data-lucide="external-link"></i> 네이버 지도 바로가기
        </a>
        <button type="button" class="btn-copy-addr" onclick="copyText('${place.address}', '${place.name} 주소가 복사되었습니다!')">
          <i data-lucide="copy"></i> 주소 복사
        </button>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// ==========================================
// 5. INTERACTIVE ROUTE MAP (LEAFLET)
// ==========================================
let mapInstance = null;
let mapLayerGroup = null;

function initMap() {
  if (mapInstance) return;
  mapInstance = L.map('trip-map').setView([38.185, 128.575], 12);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    maxZoom: 18
  }).addTo(mapInstance);

  mapLayerGroup = L.layerGroup().addTo(mapInstance);
  updateMapMarkers('all');
}

function updateMapMarkers(dayFilter = 'all') {
  if (!mapInstance || !mapLayerGroup) return;
  mapLayerGroup.clearLayers();

  const points = scheduleData.filter(item =>
    item.lat && item.lng && (dayFilter === 'all' || item.day === parseInt(dayFilter, 10))
  );

  const day1Coords = [];
  const day2Coords = [];
  const bounds = [];

  points.forEach((pt, idx) => {
    const isDay1 = pt.day === 1;
    const pinClass = isDay1 ? 'pin-day1' : 'pin-day2';
    const orderNum = idx + 1;

    const icon = L.divIcon({
      className: '',
      html: `<div class="custom-pin ${pinClass}">${orderNum}</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });

    const marker = L.marker([pt.lat, pt.lng], { icon }).addTo(mapLayerGroup);
    marker.bindPopup(`
      <div style="font-family:Pretendard,sans-serif;min-width:190px;">
        <div style="font-size:11px;font-weight:700;color:${isDay1 ? '#0284c7' : '#ea580c'};margin-bottom:2px;">
          DAY ${pt.day} · ${pt.time}
        </div>
        <div style="font-size:14px;font-weight:800;margin-bottom:4px;">${pt.title}</div>
        <div style="font-size:12px;color:#667085;margin-bottom:8px;">${pt.address}</div>
        ${pt.naverUrl ? `<a href="${pt.naverUrl}" target="_blank" style="display:inline-block;background:#03c75a;color:#fff;padding:5px 10px;border-radius:6px;text-decoration:none;font-size:12px;font-weight:700;">네이버 지도 열기</a>` : ''}
      </div>
    `);

    if (isDay1) day1Coords.push([pt.lat, pt.lng]);
    else day2Coords.push([pt.lat, pt.lng]);

    bounds.push([pt.lat, pt.lng]);
  });

  if (day1Coords.length > 1) {
    L.polyline(day1Coords, {
      color: '#0284c7',
      weight: 4,
      opacity: 0.8,
      dashArray: '8, 6'
    }).addTo(mapLayerGroup);
  }

  if (day2Coords.length > 1) {
    L.polyline(day2Coords, {
      color: '#ea580c',
      weight: 4,
      opacity: 0.85,
      dashArray: '8, 6'
    }).addTo(mapLayerGroup);
  }

  if (bounds.length > 0) {
    mapInstance.fitBounds(bounds, { padding: [40, 40] });
  }
}

// ==========================================
// 6. EXPENSE CALCULATOR & CHECKLIST
// ==========================================
function renderExpenses() {
  const listEl = document.getElementById('expense-list');
  const totalEl = document.getElementById('total-expense');
  const perPersonEl = document.getElementById('per-person-expense');
  const memberDisplay = document.getElementById('member-count-display');

  memberDisplay.textContent = memberCount;

  if (expenses.length === 0) {
    listEl.innerHTML = `<li class="expense-item" style="color:#667085;justify-content:center;">아직 등록된 지출 내역이 없습니다.</li>`;
  } else {
    listEl.innerHTML = expenses.map((ex, i) => `
      <li class="expense-item">
        <span>${ex.title}</span>
        <div>
          <span class="expense-item-amount">${ex.amount.toLocaleString()}원</span>
          <button type="button" class="btn-del" onclick="removeExpense(${i})">삭제</button>
        </div>
      </li>
    `).join('');
  }

  const total = expenses.reduce((acc, cur) => acc + cur.amount, 0);
  const perPerson = Math.ceil(total / memberCount);

  totalEl.textContent = `${total.toLocaleString()}원`;
  perPersonEl.textContent = `${perPerson.toLocaleString()}원`;
}

window.removeExpense = function(idx) {
  expenses.splice(idx, 1);
  localStorage.setItem('sokcho_expenses', JSON.stringify(expenses));
  renderExpenses();
};

function renderChecklist() {
  const listEl = document.getElementById('checklist-items');
  listEl.innerHTML = checklist.map((item, idx) => `
    <li class="check-item ${item.checked ? 'checked' : ''}">
      <label>
        <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleCheckItem(${idx})" />
        <span>${item.text}</span>
      </label>
      <button type="button" class="btn-del" onclick="deleteCheckItem(${idx})">삭제</button>
    </li>
  `).join('');
}

window.toggleCheckItem = function(idx) {
  checklist[idx].checked = !checklist[idx].checked;
  localStorage.setItem('sokcho_checklist', JSON.stringify(checklist));
  renderChecklist();
};

window.deleteCheckItem = function(idx) {
  checklist.splice(idx, 1);
  localStorage.setItem('sokcho_checklist', JSON.stringify(checklist));
  renderChecklist();
};

// ==========================================
// 7. CLIPBOARD & TOAST HELPERS
// ==========================================
window.copyText = function(text, message = '복사되었습니다!') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message);
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast(message);
  });
};

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

// ==========================================
// 8. EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderTimeline('all');
  renderPlaces('all');
  renderExpenses();
  renderChecklist();

  // Main Navigation Tabs
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');

      if (targetId === 'section-map') {
        setTimeout(() => {
          initMap();
          mapInstance.invalidateSize();
        }, 60);
      }
    });
  });

  // Schedule Day Filter
  document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTimeline(btn.dataset.day);
    });
  });

  // Places Category Filter
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPlaces(btn.dataset.cat);
    });
  });

  // Map Day Filter
  document.querySelectorAll('.map-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.map-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateMapMarkers(btn.getAttribute('data-map-day'));
    });
  });

  // Expense Form
  document.getElementById('expense-form').addEventListener('submit', e => {
    e.preventDefault();
    const titleInput = document.getElementById('expense-title');
    const amountInput = document.getElementById('expense-amount');
    const title = titleInput.value.trim();
    const amount = parseInt(amountInput.value, 10);

    if (title && !isNaN(amount)) {
      expenses.push({ title, amount });
      localStorage.setItem('sokcho_expenses', JSON.stringify(expenses));
      titleInput.value = '';
      amountInput.value = '';
      renderExpenses();
    }
  });

  document.getElementById('member-minus').addEventListener('click', () => {
    if (memberCount > 1) {
      memberCount--;
      localStorage.setItem('sokcho_members', memberCount);
      renderExpenses();
    }
  });

  document.getElementById('member-plus').addEventListener('click', () => {
    memberCount++;
    localStorage.setItem('sokcho_members', memberCount);
    renderExpenses();
  });

  document.getElementById('copy-settlement-btn').addEventListener('click', () => {
    const total = expenses.reduce((acc, cur) => acc + cur.amount, 0);
    const perPerson = Math.ceil(total / memberCount);
    const details = expenses.map(e => `- ${e.title}: ${e.amount.toLocaleString()}원`).join('\n');
    const text = `[속초 1박 2일 정산 내역]\n${details || '- 내역 없음'}\n------------------\n총 지출: ${total.toLocaleString()}원 (${memberCount}명)\n👉 1인당 정산금: ${perPerson.toLocaleString()}원`;
    copyText(text, '단톡방 공유용 정산 내역이 복사되었습니다!');
  });

  // Checklist Form
  document.getElementById('checklist-form').addEventListener('submit', e => {
    e.preventDefault();
    const input = document.getElementById('checklist-input');
    const val = input.value.trim();
    if (val) {
      checklist.push({ id: Date.now().toString(), text: val, checked: false });
      localStorage.setItem('sokcho_checklist', JSON.stringify(checklist));
      input.value = '';
      renderChecklist();
    }
  });

  document.getElementById('reset-check-btn').addEventListener('click', () => {
    checklist = JSON.parse(JSON.stringify(defaultChecklist));
    localStorage.setItem('sokcho_checklist', JSON.stringify(checklist));
    renderChecklist();
    showToast('체크리스트가 초기화되었습니다.');
  });

  // Copy Full Schedule for KakaoTalk
  document.getElementById('copy-full-schedule-btn').addEventListener('click', () => {
    const shareText = `[🌊 속초 1박 2일 우정여행 일정표]
📅 일시: 11월 21일(토) ~ 11월 22일(일)
🚗 이동: 자차 (11/21 오전 7시 녹번 출발)
🏨 숙소: 호텔 더블루테라 (강원 속초시 동해대로 3920)

■ DAY 1 (11/21 토)
1. 07:00 녹번 출발 ➔ 고속도로 휴게소 아침식사
2. 낙산사 도착 & 관람
3. 아바이마을 점심 [단천식당]
   📍 강원 속초시 아바이마을길 17 (https://naver.me/xRQ0QRfv)
4. 속초중앙시장 & 카페 (저녁 3차 안주 포장 + 구경)
5. 저녁 1차 [연탄불생구이]
   📍 강원 속초시 중앙부두길 71 (https://naver.me/GKUJ0ycy)
6. 술집 2차 [금주언니포장마차]
   📍 강원 속초시 청대로204번길 18 (https://naver.me/GsjYbU3P)
7. 숙소 복귀 & 3차 [호텔 더블루테라]

■ DAY 2 (11/22 일)
1. 설악산 흔들바위 등반 (소공원 출발)
2. 점심 [남경막국수 본점]
   📍 강원 속초시 대포항희망길 47 (https://naver.me/IDB1K4gO)
3. 서울(녹번) 복귀`;

    copyText(shareText, '카카오톡 공유용 전체 일정이 복사되었습니다!');
  });
});
