# 2강 01 리액트 프로젝트 제이쿼리 구현
- 생성 
- 실행 
- 바벨 
- 컴포넌트 
- 탬플릿트 
- 빌드 
- 배포

# 2강 02 리액트 프로젝트 제이쿼리삭제 
- 상태관리(statement) : 모든 변수 관리, 구조 : 객체 구성 
- 프롭스 
- 이벤트

# 3강 상태관리_객체_프롭스_MVC_데이터_바인딩_마우스이벤트

# 3강 01 상태관리 객체 생성
01 헤더영역 
- 네비게이션(GNB/LNB)
- 4행 2열
const GNB = [
    {메인메뉴:'이벤트세일', 서브메뉴:''},
    {메인메뉴:'기획전', 서브메뉴:''},
    {메인메뉴:'푸른마을 레시피', 서브메뉴:''},
    {메인메뉴:'매장안내', 서브메뉴:''}
]

- sass 설치
npm i sass sass-loader
npm i sass 
npm i sass-loader

sass => scss

- 컴포넌트별 scss 스타일 import 적용하기
[components]
    [scss]
        WrapComonent.scss
        [wrap]
            [scss]
                HeaderComonent.scss
                MainComonent.scss
                FooterComonent.scss
                ModalComonent.scss
                [main]
                    [scss]
                        Section1Comonent.scss
                        Section2Comonent.scss
                        Section3Comonent.scss


