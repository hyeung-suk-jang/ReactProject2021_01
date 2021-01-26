import { useState } from "react";

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
  const [userType, setUserType] = useState(null);
  const [sms, setSMS] = useState(false);

  const onChangeHandler = (e) => {
    const { value, name, type } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "birth":
        setBirth(value);
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
      case "userType":
        setUserType(value);
        break;
      case "sms":
        setSMS(value);
        break;
      default:
        return "";
    }
  };

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
    },
    onChangeHandler,
  ];
};

export default useSignUp;
