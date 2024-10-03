## Docker Compose 
+ 'docker-compose.yml' 파일로 컨테이너 구성 정보를 정의함으로써 동일 호스트 상의 여러 컨테이너를 일괄적으로 관리

## Docker Compose 주요 명령어
+ up : 컨테이너 생성/시작
  ```
  docker-compose up [option] {service-name}
  option
   -d : 백그라운드에서 실행
   --no-deps : 링크 서비스를 시작하지 않는다.
   --build : 이미지를 빌드
   --no-build : 이미지 빌드 하지 않는다.
   -t,--timeout : 컨테이너의 타임아웃을 초로 지정(default 10s)
   --scale SERVICE = 서비스 수 : 서비스 수를 지정
+ ps : 컨테이너 목록 표시
   ```
   docker-compose ps
+ logs : 컨테이너 로그 출력
   ```
   docker-compose logs
+ run : 컨테이너 실행
   ```
   docker-compose run {service-name} {path}
+ start : 컨테이너 시작
   ```
   docker-compose start
+ stop : 컨테이너 정지
   ```
   docker-compose stop
+ restart : 컨테이너 재시작
   ```
    docker-compose restart
+ pause : 컨테이너 일시 정지
   ```
   docker-compose pause
+ unpause : 컨테이너 재개
   ```
   docker-compose unpause
+ port : 공개 포트 번호 표시
   ```
   docker-compose port [option] {service-name} {private port}
    option
    --protocol=proto : 프로토콜. tcp or udp
    --index=index : 컨테이너의 인덱스 수
+ config : 구성 확인
   ```
   docker-compose config
+ kill : 실행중인 컨테이너 강제 정지
   ```
    docker-compose kill
+ rm  : 컨테이너 삭제
   ```
   docker-compose rm
+ down : 리소스 삭제
   ```
   docker-compose down
