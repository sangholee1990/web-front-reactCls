# NVM(Node Version Manager) Quick Start
맥OS에서 NVM 사용하기


## NVM 설치

### 1. 설치
```sh
$ sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```
nvm 설치

### 2. 확인
```sh
$ nvm ls

-bash: nvm: command not found
```

### 3. 당황하지 않고
```sh
# zsh를 사용한다면
$ vi ~/.zshrc 

# 또는
$ vi ~/.bashrc

# 또는
$ vi ~/.profile
```

vi 에디터로

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
위 코드가 있는지 확인하고 없으면 추가

### 4. 재시작
```sh
$ source ~/.bash_profile
# 뒤에 경로는 위 코드를 추가한 파일의 경로입니다.
# e.g. $ source ~/.zshrc
```

### 5. 확인
```sh
$ nvm ls
```

```sh
->       system
node -> stable (-> N/A) (default)
iojs -> N/A (default)
```

## Node 설치

### 1. 설치
```sh
$ nvm install 20.18.0
```
최신 안정화 버전인 20.18.0 설치

### 2. 확인
```sh
$ nvm ls
```

```sh
->      v20.18.0
         system
default -> 20.18.0 (-> v20.18.0)
node -> stable (-> v6.10.1) (default)
stable -> 6.10 (-> v6.10.1) (default)
iojs -> N/A (default)
lts/* -> lts/boron (-> v6.10.1)
lts/argon -> v4.8.1 (-> N/A)
lts/boron -> v6.10.1
```

```sh
$ node -v
```

```sh
v20.18.0
```

## 다른 버전의 노드 설치 및 버전 변경

### 1. 설치
```sh
$ nvm install 22.9.0
```
가장 최신 버전인 22.9.0 설치

### 2. 확인
```sh
$ nvm ls
```

```sh
        v20.18.0
->       v22.9.0
         system
default -> 6.10.1 (-> v6.10.1)
node -> stable (-> v7.7.4) (default)
stable -> 7.7 (-> v7.7.4) (default)
iojs -> N/A (default)
lts/* -> lts/boron (-> v6.10.1)
lts/argon -> v4.8.1 (-> N/A)
lts/boron -> v6.10.1
```

```sh
$node -v
```

```sh
v22.9.0
```

### 3. node 버전 변경 및 확인

```sh
$ nvm use 20.18.0
```
다시 20.18.0 버전으로 변경

```sh
$ node -v
```

```sh
v20.18.0
```

## 그밖의 자세한 정보는
[NVM](https://github.com/creationix/nvm) 에서 확인할 수 있습니다.