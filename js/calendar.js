
  //도서관 일정 리스트 세팅
  var nlCalendarListMap = new Map();
  var tempList = new ArrayList();
  var tempListMap = null;

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-25");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "0";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "N";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3472");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-25");
  // 				nlCalendarMap.put("nlhdTitle","정기휴관");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-25", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-25" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-17");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "3";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "N";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3782");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-17");
  // 				nlCalendarMap.put("nlhdTitle","임시휴관일");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-17", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-17" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-16");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "3";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "N";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3781");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-16");
  // 				nlCalendarMap.put("nlhdTitle","임시휴관일");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-16", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-16" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-15");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "3";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "N";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3780");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-15");
  // 				nlCalendarMap.put("nlhdTitle","임시휴관일");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-15", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-15" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-14");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "3";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "N";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3779");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-14");
  // 				nlCalendarMap.put("nlhdTitle","임시휴관일");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-14", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-14" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-13");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "3";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "N";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3778");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-13");
  // 				nlCalendarMap.put("nlhdTitle","임시휴관일");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-13", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-13" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-12");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "3";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "N";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3777");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-12");
  // 				nlCalendarMap.put("nlhdTitle","임시휴관일");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-12", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-12" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-11");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "N";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3470");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-11");
  // 				nlCalendarMap.put("nlhdTitle","정기휴관");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-11", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-11" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-10");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "3";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "N";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3776");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-10");
  // 				nlCalendarMap.put("nlhdTitle","임시휴관일");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-10", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-10" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-09");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "3";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "N";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3775");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-09");
  // 				nlCalendarMap.put("nlhdTitle","임시휴관일");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-09", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-09" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-08");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "3";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "N";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3774");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-08");
  // 				nlCalendarMap.put("nlhdTitle","임시휴관일");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-08", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-08" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-07");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "3";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "N";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3773");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-07");
  // 				nlCalendarMap.put("nlhdTitle","임시휴관일");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-07", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-07" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-06");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "3";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "N";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3772");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-06");
  // 				nlCalendarMap.put("nlhdTitle","임시휴관일");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-06", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-06" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-05");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "3";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "N";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3771");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-05");
  // 				nlCalendarMap.put("nlhdTitle","임시휴관일");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-05", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-05" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-04");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "3";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "N";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3770");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-04");
  // 				nlCalendarMap.put("nlhdTitle","임시휴관");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-04", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-04" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-03");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "3";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "N";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3717");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-03");
  // 				nlCalendarMap.put("nlhdTitle","임시휴관일");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-03", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-03" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-02");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "3";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "N";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3716");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-02");
  // 				nlCalendarMap.put("nlhdTitle","임시휴관일");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-02", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-02" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }

  tempList = new ArrayList();
  tempListMap = nlCalendarListMap.get("2021-01-01");
  if (tempListMap != null) {
    tempList = tempListMap;
    tempListMap = null;
  }
  var nlCalendarMap = new Map();
  var nlhdType = "1";
  if (ItgJs.fn_isEmpty(nlhdType)) {
    var nlhdIsClose = "Y";
    var nlhdIsHoliday = "Y";
    if (nlhdIsClose == "Y" && nlhdIsHoliday == "Y") { //휴관일(공휴일)
      nlhdType = "1";
    } else if (nlhdIsClose == "Y" && nlhdIsHoliday == "N") { //정기휴관일
      nlhdType = "0";
    }
  }
  nlCalendarMap.put("nlhdType", nlhdType);
  // 				nlCalendarMap.put("nlhdRecKey","3468");
  // 				nlCalendarMap.put("nlhdHoliday","2021-01-01");
  // 				nlCalendarMap.put("nlhdTitle","신정");
  tempList.add(nlCalendarMap);
  nlCalendarListMap.put("2021-01-01", tempList); //각 날짜에 신청 목록 넣기

  if ("2021-01-01" == "2020-07-20") {
    tempList = new ArrayList();
    tempListMap = nlCalendarListMap.get("2020-07-21");
    if (tempListMap != null) {
      tempList = tempListMap;
      tempListMap = null;
    }
    var nlCalendarMap = new Map();
    nlCalendarMap.put("nlhdType", "3");
    tempList.add(nlCalendarMap);
    nlCalendarListMap.put("2020-07-21", tempList); //
  }


  //전시 일정 리스트 세팅
  var exhibitListMap = new Map();
  var tempList = new ArrayList();
  var tempListMap = null;


  //교육 일정 리스트 세팅
  var eduListMap = new Map();
  var tempList = new ArrayList();
  var tempListMap = null;


  //강연세미나 일정 리스트 세팅
  var seminarListMap = new Map();
  var tempList = new ArrayList();
  var tempListMap = null;

  console.log(seminarListMap);

  /* 교육, 강연세미나 일정 병합 */
  for (var i = 0; i < seminarListMap.size(); i++) {
    tempList = new ArrayList();

    var nlSeminarList = seminarListMap.values()[i];
    var schNdt = seminarListMap.keys()[i];
    if (eduListMap.containsKey(schNdt)) {
      tempList = eduListMap.get(schNdt);
      for (var j = 0; j < nlSeminarList.size(); j++) {
        tempList.add(nlSeminarList.get(j));
      }
      eduListMap.put(schNdt, tempList);
    } else {
      eduListMap.put(schNdt, nlSeminarList);
    }

  }

  $(document).ready(function() {
    initNlEduList(eduListMap, null);
    initNlExhibitList(exhibitListMap, null);
    initNlCalendarList(nlCalendarListMap, 2);

    $(".btn__layer").click(function() {
      //var layer = $(this).attr("data-layer");
      //$(".layer_popup_wrap"+ "[data-layer='" + layer + "']").fadeIn().attr('tabindex','0').focus();
      //fn_changeMonth_modal("");
      location.href = "/NL/contents/N41200000000.do";
    });

  });


  //달력에 도서관 일정 출력
  function initNlCalendarList(nlCalendarListMap, limit) {

    for (var i = 0; i < nlCalendarListMap.size(); i++) {
      var nlCalendarList = nlCalendarListMap.values()[i];
      var schNdt = nlCalendarListMap.keys()[i];
      if (nlCalendarList.size() < limit || limit == null) limit = nlCalendarList.size();
      for (var j = 0; j < limit; j++) {
        var nlhdType = nlCalendarList.get(j).get("nlhdType");
        if (!ItgJs.fn_isEmpty(nlhdType)) {
          // 				var nlhdTitle = nlCalendarList.get(j).get("nlhdTitle");
          var closeDt = $("#" + schNdt).find("strong").text();
          var closeType = "";
          var closeName = "";
          if (nlhdType == 0) {
            closeType = "closed";
            closeName = "정기휴관일";
          } else if (nlhdType == 1) {
            closeType = "closed";
            closeName = "공휴일";

          } else {
            closeType = "closed_temporary";
            closeName = "임시휴관일";
          }
          var closeStr = "<div class='inner'>" +
            "<button type='button' class=" + closeType + " data-tooltip-text='" + closeName + "'>" +
            "<strong>" + closeDt + "</strong>" +
            "<span class='ir_text'>" + closeName + "</span>" +
            "</button>" +
            "</div>";
          $("#" + schNdt + " div").html(closeStr);

          if (schNdt == "2021-01-17") {
            var closeStr2 = "<div class='inner'>" +
              "<button type='button' class='closed_temporary' data-tooltip-text='임시휴관일'>" +
              "<strong>18</strong>" +
              "<span class='ir_text'>임시휴관일</span>" +
              "</button>" +
              "</div>";
            $("#2021-01-18 div").html(closeStr2);
          }
        }
      }
    }
  }

  //달력에 전시 일정 출력
  function initNlExhibitList(exhibitListMap, limit) {
    for (var i = 0; i < exhibitListMap.size(); i++) {
      var nlExhibitList = exhibitListMap.values()[i];
      var schNdt = exhibitListMap.keys()[i];
      var titleList = "";
      for (var j = 0; j < nlExhibitList.size(); j++) {
        var exhTitle = nlExhibitList.get(j).get("exhTitle");
        var exhibitDt = $("#" + schNdt + "").find("strong").text();
        if (nlExhibitList.size() > 1) otherClose = " 외 " + (nlExhibitList.size() - 1) + "건";
        var closeStr = "<div class='inner'>" +
          "<button type='button' class='educate' data-tooltip-text='" + exhTitle + "'>" +
          "<strong>" + exhibitDt + "</strong>" +
          "<span class='ir_text'>" + exhTitle + "</span>" +
          "</button>" +
          "</div>";
        $("#" + schNdt + " div").html(closeStr);
      }
    }
  }

  //달력에 교육 일정 출력
  function initNlEduList(eduListMap, limit) {
    for (var i = 0; i < eduListMap.size(); i++) {
      var nlEduList = eduListMap.values()[i];
      var schNdt = eduListMap.keys()[i];
      if (ItgJs.fn_isEmpty(limit)) limit = nlEduList.size();
      var titleList = "";
      for (var j = 0; j < nlEduList.size(); j++) {
        var eduTitle = nlEduList.get(j).get("eduTitle");
        if (ItgJs.fn_isEmpty(eduTitle)) eduTitle = nlEduList.get(j).get("eventTitle");
        if (ItgJs.fn_isEmpty(eduTitle)) eduTitle = "";
        var eduDt = $("#" + schNdt + "").find("strong").text();
        titleList += "-" + eduTitle.replace(/ /gi, "&nbsp;") + "&#10;";
        var closeStr = "<div class='inner'>" +
          "<button type='button' class='educate' data-tooltip-text='" + titleList + "'>" +
          "<strong>" + eduDt + "</strong>" +
          "<span class='ir_text'>" + eduTitle + "</span>" +
          "</button>" +
          "</div>";
        $("#" + schNdt + " div").html(closeStr);
      }
    }
  }
