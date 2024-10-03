## Docker Machine 
+ 가상 호스트에 Docker Engine을 설치하고, 호스트를 관리할 수 있는 도구

## Docker Machine 명령어
+ create : 실행 환경 작성
  ```
  docker-machine create --driver {driver-mane} {write docker-machine-name}
+ ls : 실행 환경 목록 표시
  ```
  docker-machine ls [option]
    * option
          --quiet, -q : 머신명만 표시
          --filter : 표시할 머신을 필터링
+ status : 실행 환경 상태 표시
   ```
    docker-machine status 
+ url : 실행 환경 URL 표시
  ```
   docker-machine url
+ ssh : 실행 환경에 대한 SSH 연결
  ```
  docker-machine ssh {machine-name}
+ start : 실행 환경 시작   
   ```
   docker-machine start
+ stop : 실행 환경 정지
  ```
  docker-machine stop
+ restart : 실행 환경 재시작
  ```
  docker-machine restart
+ scp : 실행 환경에서 파일 다운로드
   ```
   docker-machine scp
+ rm  : 실행 환경삭제
   ```
   docker-machine rm
+ kill : 실행 환경 강제 정지
   ```
   docker-machine kill
+ ip : 실행 환경 IP 주소 확인
   ```
   docker-machine ip
+ inspect : 실행 환경 정보 확인
   ```
   docker-machine inspect [option] {machine-name}
