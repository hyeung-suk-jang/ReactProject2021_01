# 국립중앙도서관 Clone
    20210126 모듈 설치해서 push했으니까 pull받으시고 꼭 npm install 해주세요!
## URL: https://www.nl.go.kr/

# 로그인 방식
    Firebase auth

# 기능
    책 정보
    대출하기


```javascript
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginRequestAction({ email, password }));

    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
      history.push("/");

    } catch (err) {
      setError(err.message);
    }
  };
// 파베로그인 로직
```
