Must Have Git&Github Training.
<br>
<p align="center">
<img src="Image/Book.jpg" width="50%" height="50%">
</p>

## Git Bash(CLI) Command

1. git 생성 : git init<br/>
2. config 설정<br/>
   * git config [user.name](http://user.name) {”Name”}
   * git config [user.email](http://user.email) {”Email”}
3. git file 추가 : git add .(직접 입력 해도 됨)
4. git commit : git commit -m {”coment”}
5. git 원격 저장소 주소 추가 : git remote add origin (git-address)
6. git 상태 조회 : git status
7. commit log 조회 : git log
    * -p : path, 파일 단위 변경 내용 조회
    * -{숫자} : 최근 {숫자}개만큼 조회
    * —stat : 통계 정보 조회
    * —pretty : 로그를 보여주는 형식 지정
8. commit message 수정 : git commit —amend
9. Local → Remote 저장 : git push {저장소} {branch}
10. Remote → Local 가져오기 : git pull {저장소} {branch}
11. 저장소 복제 : git clone “원격 저장소 주소” “새로운 저장소 이름”
12. branch 명령어
    * 사용할 branch : git checkout {branch 명}
    * 일반 branch 생성 : git branch {branch 명}
    * 생성 및 사용 변경 : git checkout -b {branch 명}
    * 원격에서 생성 후 지역에서 사용 시 : git checkout -t {branch 명}
    * branch 삭제 : git branch -d {branch 명}
13. Git 고급
    * 다른 Branch Commit 을 작업 Branch 추가 : git cherry-pick “추가하려는 커밋 체크섬”
    * 이전 Commit 으로 작업 Branch의 최종 Commit 변경 : git rest “이전 커밋 체크섬”
    * 변경 사항 되돌리기 Commit 생성 : git revert “되돌리려는 커밋 체크섬”
    * Branch Commit History 재정렬 : git rebase “재정렬을 위한 기준 Branch”
