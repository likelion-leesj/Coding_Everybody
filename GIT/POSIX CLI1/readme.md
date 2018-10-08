GUI  VS  CLI

마치 윈도우와 리눅스의 느낌

POSIX는 서로 다른 운영체제를 같은 방법으로 조작하기 할 수 있도록 만들어진 표준입니다. 이 표준을 준수하는 운영체제로는 unix, macos가 있습니다.

portable operating system interface

윈도우(IOS, ANDROID)는 CMD 나 powershell 을 통해서... 

EMULATOR 를 사용하면 호환도 가능하다 혹은 POSIX 서버를 새로 만들어서 (Secure Shell 을 통해서) 사용할수도 있다. 

파일등의 처리방법 (CRUD)를 할줄알고있다면 그바닥을 알고있다고 본다 (egoing 曰)
파일 << 데이터... 도 포함해서 

디렉토리의 기본적인 사용법
현재 디렉토리 확인 : pwd  printing working directory
디렉토리 위치 변경 : CD change directory
    CD / 최상위 디렉토리로
    CD ~ 홈 디렉토리로
    
디렉토리의 상태 확인 : ls
    ls --help  or man ls
    ls -l   long format
    ls -la  숨김파일 포함 ( -l -a , -al)
    ls -a   모든 파일 포함
    touch 파일 만들기
     touch showfile.txt
     touch .hiddenfile.txt
     
디렉토리 만들기 
    mkdir posix
디렉토리 변경
    mv dummy2 dummy 앞에것을 뒤의 위치로 변경한다. 
    move 디렉토리의 이름을 변경하는 방법
    
    rm 파일 삭제
    rm -r dummy 디렉토리 삭제
    
    
    
    
    
    