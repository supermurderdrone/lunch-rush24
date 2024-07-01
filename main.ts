scene.onHitWall(SpriteKind.Food, function (sprite, location) {
    sprites.destroy(sprite)
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.gameOver(false)
    game.setGameOverPlayable(false, music.melodyPlayable(music.powerDown), false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
let burg: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
let bob = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f e e e e e e e f f . 
    f f e f e e e e e e f f 
    f f f e e e e e e e e f 
    f f f e e e e e e f e f 
    f f f f e e e e f f f f 
    f f f f f f f f f f f f 
    f f f f f f f f f f f f 
    . f f f f f f f f f f . 
    . e f f f f f f f f e . 
    e 4 f b b b b b b f 4 e 
    4 d f d d d d d d c d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
bob.setPosition(80, 91)
controller.moveSprite(bob, 150, 0)
info.setScore(0)
info.setLife(4)
game.onUpdateInterval(500, function () {
    burg = sprites.create(img`
        ...........ccccc66666...........
        ........ccc4444444444666........
        ......cc444444444bb4444466......
        .....cb4444bb4444b5b444444b.....
        ....eb4444b5b44444b44444444b....
        ...ebb44444b4444444444b444446...
        ..eb6bb444444444bb444b5b444446..
        ..e6bb5b44444444b5b444b44bb44e..
        .e66b4b4444444444b4444444b5b44e.
        .e6bb444444444444444444444bb44e.
        eb66b44444bb444444444444444444be
        eb66bb444b5b44444444bb44444444be
        fb666b444bb444444444b5b4444444bf
        fcb666b44444444444444bb444444bcf
        .fbb6666b44444444444444444444bf.
        .efbb66666bb4444444444444444bfe.
        .86fcbb66666bbb44444444444bcc688
        8772effcbbbbbbbbbbbbbbbbcfc22778
        87722222cccccccccccccccc22226678
        f866622222222222222222222276686f
        fef866677766667777776667777fffef
        fbff877768f86777777666776fffffbf
        fbeffeefffeff7766688effeeeefeb6f
        f6bfffeffeeeeeeeeeeeeefeeeeebb6e
        f66ddfffffeeeffeffeeeeeffeedb46e
        .c66ddd4effffffeeeeeffff4ddb46e.
        .fc6b4dddddddddddddddddddb444ee.
        ..ff6bb444444444444444444444ee..
        ....ffbbbb4444444444444444ee....
        ......ffebbbbbb44444444eee......
        .........fffffffcccccee.........
        ................................
        `, SpriteKind.Food)
    burg.setPosition(randint(10, 145), 18)
    burg.setVelocity(0, 45)
})
