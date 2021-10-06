# Quest 00. 형상관리 시스템

## Introduction
* git은 2021년 현재 개발 생태계에서 가장 각광받고 있는 버전 관리 시스템입니다. 이번 퀘스트를 통해 git의 기초적인 사용법을 알아볼 예정입니다.

## Topics
* git
  * `git clone`, `git add`, `git commit`, `git push`, `git pull`, `git branch`, `git stash` 명령
  * `.git` 폴더
* GitHub

## Resources
* [Resources to learn Git](https://try.github.io)
* [Learn Git Branching](https://learngitbranching.js.org/?locale=ko)
* [Inside Git: .Git directory](https://githowto.com/git_internals_git_directory)

## Checklist
* 형상관리 시스템은 왜 나오게 되었을까요? - 유지보수, 백업, 협업 ...
* git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?
  * git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요? - 중앙 집중형 시스템은 날아가면 그걸 참조하는 모든 클라이언트가 손상되지만, 분산 시스템에서는 각 클라이언트가 히스토리를 갖고 있기 때문에, 복구가 가능하다.
* git과 GitHub은 어떻게 다를까요? - git은 VCS 자체이다. git으로 버전을 관리하는 프로젝트를 Github이라는 서비스를 사용해 클라우드를 통한 버전관리 및 공유가 가능하다.
* git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
  * clone - 클라우드의 리포지토리를 로컬로 복사한다.
  * add - git이 추적하지 않고 있던 파일 또는 변경사항을 git이 추적하도록 한다.
  * commit - 하나의 버전을 남긴다. git이 추적하고 있던 파일들이 포함된다.
  * push - 로컬의 리포지토리를 원격 리포지토리로 밀어 넣는다.
  * pull - 원격 리포지토리의 히스토리를 로컬 리포지토리로 가져온다.
  * branch - 브랜치 정보를 확인.
  * stash - 현재 브랜치의 커밋하지 않은 변경사항을 저장해 놓는다.
* git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
  * Object - 파일과 폴더를 저장하는 단위
  * Commit - 여러 Object의 집합. 하나의 버전
  * Head - 현재 작업중인 커밋.
  * Branch - 한 프로젝트의 서로 다른 분기라고 볼 수 있다.
  * Tag - 커밋에 붙이는 별명
* 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요? - reset 또는 revert

## Quest
* GitHub에 가입한 뒤, [이 커리큘럼의 GitHub 저장소](https://github.com/KnowRe-Dev/WebDevCurriculum)의 우상단의 Fork 버튼을 눌러 자신의 저장소에 복사해 둡니다.
* Windows의 경우 같이 설치된 git shell을, MacOSX의 경우 터미널을 실행시켜 커맨드라인에 들어간 뒤, 명령어를 이용하여 복사한 저장소를 clone합니다.
  * 앞으로의 git 작업은 되도록 커맨드라인을 통해 하는 것을 권장합니다.
* 이 문서가 있는 폴더 바로 밑에 있는 sandbox 폴더에 파일을 추가한 후 커밋해 보기도 하고, 파일을 삭제해 보기도 하고, 수정해 보기도 하면서 각각의 단계에서 커밋했을 때 어떤 것들이 저장되는지를 확인합니다.
* `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령을 충분히 익혔다고 생각되면, 자신의 저장소에 이력을 push합니다.

## Advanced
* Mercurial은 어떤 형상관리 시스템일까요? 어떤 장점이 있을까요? - git보다 단순함. 초심자한테는 더 안전할 수 있음.
* 실리콘밸리의 테크 대기업들은 어떤 형상관리 시스템을 쓰고 있을까요?
