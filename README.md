# HelloCFR

## Finding NE with Regret Matching
```
using HelloCFR
using Plots

RPS = MatrixGame([
    (0,0) (-1,1) (1,-1);
    (1,-1) (0,0) (-1,1);
    (-1,1) (1,-1) (0,0)
])

init_strategy = [0.1,0.2,0.7]

p1 = MatrixPlayer(RPS, 1, copy(init_strategy))
p2 = MatrixPlayer(RPS, 2, copy(init_strategy))

train_both!(p1, p2, 100_000)
plot(p1,p2)
```
<img src="./img/RPS_regret_match.svg">

## Finding NE with CFR
```
game = SimpleIOGame([
    (0,0) (-1,1) (1,-1);
    (1,-1) (0,0) (-1,1);
    (-1,1) (1,-1) (0,0)
])

p1 = SimpleIOPlayer(game,1, [0.1,0.2,0.7])
p2 = SimpleIOPlayer(game,2, [0.1,0.2,0.7])

train_both!(p1,p2,1000)
plot(p1, p2)
```
<img src="./img/RPS_CFR.svg">

## Exploiting static opponent with CFR
```
p1 = SimpleIOPlayer(game,1, [0.1,0.2,0.7])
p2 = SimpleIOPlayer(game,2, [0.1,0.2,0.7])
train_one!(p1,p2,100)
p = plot(p1, p2)
```
<img src="./img/RPS_CFR_exploit.svg">
