import { useState, useRef, useEffect } from "react";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { idCheckRequestAction } from "../../reducers/user";

const useSignUp = (initValue) => {
  const [name, setName] = useState(initValue);
  const [birth, setBirth] = useState(initValue);
  const [gender, setGender] = useState(null);
  const [ID, setID] = useState(initValue);
  const [password, setPassword] = useState(initValue);
  const [passwordCheck, setPasswordCheck] = useState(initValue);
  const [address, setAddress] = useState(initValue);
  const [address_detail, setAddressDetail] = useState(initValue);
  const [address_detail2, setAddressDetail2] = useState(initValue);
  const [tel_first, setTelFirst] = useState(initValue);
  const [tel_middle, setTelMiddle] = useState(initValue);
  const [tel_last, setTelLast] = useState(initValue);
  const [email, setEmail] = useState(initValue);
  const [emailDomain, setEmailDomain] = useState(initValue);
  const [userType, setUserType] = useState(null);
  const [sms, setSMS] = useState(false);
  const [pwValidated, setPwValidated] = useState(null);
  const [birthValidated, setBirthValidated] = useState(null);
  const [idChecked, setIdChecked] = useState(null);

  const dispatch = useDispatch();

  console.log(
    name,
    birth,
    gender,
    ID,
    password,
    passwordCheck,
    address,
    address_detail,
    address_detail2,
    tel_first,
    tel_middle,
    tel_last,
    email,
    emailDomain,
    userType,
    sms,
    "passwordPassed :",
    pwValidated,
    birthValidated
  );

  const initIdChecked = debounce(() => {
    setIdChecked(null);
  }, 5000);

  const IdValidator = () => {
    if (ID) {
      dispatch(idCheckRequestAction(ID));
      setIdChecked(true);
    } else {
      setIdChecked(false);
    }
  };

  const passwordValidator = debounce((value) => {
    password && password === value
      ? setPwValidated(true)
      : setPwValidated(false);
  }, 1000);

  const birthValidator = debounce((val) => {
    if (val.length === 8) {
      const regex_date = /^\d{4}\d{1,2}\d{1,2}$/;
      // Check the pattern
      if (!regex_date.test(val)) {
        setBirthValidated(false);
      }
      const year = val[0] + val[1] + val[2] + val[3];
      const month = val[4] + val[5];
      const day = val[6] + val[7];
      var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      // Check the ranges of month and year
      if (year < 1000 || year > 3000 || month == 0 || month > 12) {
        setBirthValidated(false);
      }
      // Adjust for leap years
      if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        monthLength[1] = 29;
      }
      // Check the range of the day
      setBirthValidated(day > 0 && day <= monthLength[month - 1]);
    } else {
      setBirthValidated(false);
    }
  }, 500);

  const onChangeHandler = (e) => {
    const { value, name, checked } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "birth":
        setBirth(value);
        birthValidator(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "ID":
        setID(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "passwordCheck":
        setPasswordCheck(value);
        passwordCheck && passwordValidator(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "address_detail":
        setAddressDetail(value);
        break;
      case "address_detail2":
        setAddressDetail2(value);
        break;
      case "tel_first":
        setTelFirst(value);
        break;
      case "tel_middle":
        setTelMiddle(value);
        break;
      case "tel_last":
        setTelLast(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "emailDomain":
        setEmailDomain(value);
        break;
      case "userType":
        setUserType(value);
        break;
      case "sms":
        setSMS(checked);
        break;
      default:
        return "";
    }
  };

  const initInput = debounce((type) => {
    switch (type) {
      case "name":
        setName(initValue);
        break;
      case "birth":
        setBirth(initValue);
        break;
      case "gender":
        setGender(null);
        break;
      case "ID":
        setID(initValue);
        break;
      case "password":
        setPassword(initValue);
        break;
      case "passwordCheck":
        setPasswordCheck(initValue);
        break;
      case "address":
        setAddress(initValue);
        break;
      case "address_detail":
        setAddressDetail(initValue);
        break;
      case "address_detail2":
        setAddressDetail2(initValue);
        break;
      case "tel_first":
        setTelFirst(initValue);
        break;
      case "tel_middle":
        setTelMiddle(initValue);
        break;
      case "tel_last":
        setTelLast(initValue);
        break;
      case "email":
        setEmail(initValue);
        break;
      case "emailDomain":
        setEmailDomain(initValue);
        break;
      case "userType":
        setUserType(null);
        break;
      case "sms":
        setSMS(false);
        break;
      default:
        return "";
    }
  }, 500);

  return [
    {
      name: name,
      birth: birth,
      gender: gender,
      ID: ID,
      password: password,
      passwordCheck: passwordCheck,
      address: address,
      address_detail: address_detail,
      address_detail2: address_detail2,
      tel_first: tel_first,
      tel_middle: tel_middle,
      tel_last: tel_last,
      email: email,
      userType: userType,
      sms: sms,
      pwValidated: pwValidated,
      birthValidated: birthValidated,
      idChecked: idChecked,
    },
    onChangeHandler,
    IdValidator,
    initInput,
    initIdChecked,
  ];
};

export default useSignUp;
