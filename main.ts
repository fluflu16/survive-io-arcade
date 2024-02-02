namespace SpriteKind {
    export const Projectile2 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    right = false
    DOWN = false
    UP = true
    LEFT = false
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (loaded == 1) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("Im reloading", 3000, true)
        music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        pause(2000)
        music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        pause(1000)
        music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        pause(100)
        music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        AMMO_BRRRRRRRR = 10
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (loaded == 1) {
        if (0 < AMMO_BRRRRRRRR) {
            if (right == true) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    5 5 5 5 . . . . . . . . . . . . 
                    4 4 4 4 5 . . . . . . . . . . . 
                    e e e e . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 200, 0)
            } else if (LEFT == true) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . e e e e 
                    . . . . . . . . . . . 5 4 4 4 4 
                    . . . . . . . . . . . . 5 5 5 5 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -200, 0)
            } else if (UP == true) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . 5 4 e . . . . . . . 
                    . . . . . . 5 4 e . . . . . . . 
                    . . . . . . 5 4 e . . . . . . . 
                    . . . . . . 5 4 e . . . . . . . 
                    `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -200)
            } else if (DOWN == true) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . e 4 5 . . . . . . 
                    . . . . . . . e 4 5 . . . . . . 
                    . . . . . . . e 4 5 . . . . . . 
                    . . . . . . . e 4 5 . . . . . . 
                    . . . . . . . . 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 200)
            } else {
            	
            }
            projectile.setKind(SpriteKind.Projectile)
            projectile.startEffect(effects.warmRadial)
            AMMO_BRRRRRRRR += -1
            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    right = false
    DOWN = false
    UP = false
    LEFT = true
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    right = true
    DOWN = false
    UP = false
    LEFT = false
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    enemy_status = 0
    if (true) {
        info.changeLifeBy(-1)
        pause(2000)
    }
    characterAnimations.loopFrames(
    ghostenemy,
    [img`
        ....................
        .......bb...........
        ......4.bb..........
        .....5...bb.c.......
        ....4...4..c........
        .......4..c1c.......
        ...........1........
        .....ccbbbb1........
        ....c111111b........
        ...c11111111b.......
        ...d11122111b.......
        ...d11111111b.......
        ...d11111121b.......
        ...d11122111b.......
        ...d11221111b.......
        ....d111111b........
        .....dddbbb.........
        ....................
        ....................
        ....................
        `,img`
        .......bb...........
        ......45bb..........
        ......4..bb.........
        .....5..45b.c.......
        ....4...4..c........
        .......5..c1c.......
        ...........1........
        ....1ccbbbb1........
        ....c111111b........
        ...c11111111b.......
        ...d11122111b.......
        ...d11111111b.......
        ...d11111121b.......
        ...d11122111b.......
        ...d11221111b.......
        ....d111111b........
        .....dddbbb.........
        ....................
        ....................
        ....................
        `,img`
        .......bbb..........
        ......45.bb.........
        ......4...bb.c......
        .....5..45..c.......
        ....4...4..c.c......
        .......5.....1......
        ....1.......1.......
        ....1ccbbbb1........
        ....c111111b........
        ...c11111111b.......
        ...d11122111b.......
        ...d11111111b.......
        ...d11111121b.......
        ...d11122111b.......
        ...d11221111b.......
        ....d111111b........
        .....dddbbb.........
        ....................
        ....................
        ....................
        `,img`
        ...........4b.......
        ..........5.b.......
        .........5..b.......
        ...........4b.......
        ..........5ccc......
        ............c.......
        ....1.......1.......
        ....1ccbbbb1........
        ....c111111b........
        ...c11111111b.......
        ...d11122111b.......
        ...d11111111b.......
        ...d11111121b.......
        ...d11122111b.......
        ...d11221111b.......
        ....d111111b........
        .....dddbbb.........
        ....................
        ....................
        ....................
        `],
    100,
    characterAnimations.rule(Predicate.FacingUp)
    )
    characterAnimations.loopFrames(
    ghostenemy,
    [img`
        ....................
        ....................
        ....................
        .....dddddc.........
        ....d111111c...4....
        ...d11111111c...5...
        ...d12111111c....4..
        ...d12211211b.4...b.
        ...b11211211b..4.bb.
        ...b11111111b...bb..
        ...b11121111b.c.b...
        ....b111111b111c....
        .....bbbbbb...c.c...
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `,img`
        ....................
        ....................
        ....................
        .....dddddc.........
        ....d111111c1..4....
        ...d11111111c...5...
        ...d12111111c....44.
        ...d12211211b.5...5b
        ...b11211211b..44.bb
        ...b11111111b...5bb.
        ...b11121111b.c.bb..
        ....b111111b111c....
        .....bbbbbb...c.c...
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `,img`
        ....................
        ....................
        ....................
        .....dddddc.........
        ....d111111c11.4....
        ...d11111111c...5...
        ...d12111111c....44.
        ...d12211211b.5...5b
        ...b11211211b..44..b
        ...b11111111b...5.bb
        ...b11121111b....bb.
        ....b111111b1..c.b..
        .....bbbbbb..1..c...
        ..............1c.c..
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `,img`
        ....................
        ....................
        ....................
        .....dddddc.........
        ....d111111c11......
        ...d11111111c.......
        ...d12111111c.......
        ...d12211211b.......
        ...b11211211b.......
        ...b11111111b....5..
        ...b11121111b..5..5.
        ....b111111b1..c4..4
        .....bbbbbb..1ccbbbb
        ...............c....
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `],
    100,
    characterAnimations.rule(Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    ghostenemy,
    [img`
        ....................
        ....................
        ....................
        .........bbbddd.....
        ........b111111d....
        .......b11112211d...
        .......b11122111d...
        .......b12111111d...
        .......b11111111d...
        .......b11122111d...
        .......b11111111c...
        ........b111111c....
        ........1bbbbcc.....
        ........1...........
        .......c1c..4.......
        ........c..4...4....
        .......c.bb...5.....
        ..........bb.4......
        ...........bb.......
        ....................
        `,img`
        ....................
        ....................
        ....................
        .........bbbddd.....
        ........b111111d....
        .......b11112211d...
        .......b11122111d...
        .......b12111111d...
        .......b11111111d...
        .......b11122111d...
        .......b11111111c...
        ........b111111c....
        ........1bbbbcc1....
        ........1...........
        .......c1c..5.......
        ........c..4...4....
        .......c.b54..5.....
        .........bb..4......
        ..........bb54......
        ...........bb.......
        `,img`
        ....................
        ....................
        ....................
        .........bbbddd.....
        ........b111111d....
        .......b11112211d...
        .......b11122111d...
        .......b12111111d...
        .......b11111111d...
        .......b11122111d...
        .......b11111111c...
        ........b111111c....
        ........1bbbbcc1....
        .......1.......1....
        ......1.....5.......
        ......c.c..4...4....
        .......c..54..5.....
        ......c.bb...4......
        .........bb.54......
        ..........bbb.......
        `,img`
        ....................
        ....................
        ....................
        .........bbbddd.....
        ........b111111d....
        .......b11112211d...
        .......b11122111d...
        .......b12111111d...
        .......b11111111d...
        .......b11122111d...
        .......b11111111c...
        ........b111111c....
        ........1bbbbcc1....
        .......1.......1....
        .......c............
        ......ccc5..........
        .......b4...........
        .......b..5.........
        .......b.5..........
        .......b4...........
        `],
    100,
    characterAnimations.rule(Predicate.FacingDown)
    )
    characterAnimations.loopFrames(
    ghostenemy,
    [img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ...c.c...bbbbbb.....
        ....c111b111111b....
        ...b.c.b11112111b...
        ..bb...b11111111b...
        .bb.4..b11211211b...
        .b...4.b11211221d...
        ..4....c11111121d...
        ...5...c11111111d...
        ....4...c111111d....
        .........cddddd.....
        ....................
        ....................
        ....................
        `,img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ...c.c...bbbbbb.....
        ....c111b111111b....
        ..bb.c.b11112111b...
        .bb5...b11111111b...
        bb.44..b11211211b...
        b5...5.b11211221d...
        .44....c11111121d...
        ...5...c11111111d...
        ....4..1c111111d....
        .........cddddd.....
        ....................
        ....................
        ....................
        `,img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ..c.c1..............
        ...c..1..bbbbbb.....
        ..b.c..1b111111b....
        .bb....b11112111b...
        bb.5...b11111111b...
        b..44..b11211211b...
        b5...5.b11211221d...
        .44....c11111121d...
        ...5...c11111111d...
        ....4.11c111111d....
        .........cddddd.....
        ....................
        ....................
        ....................
        `,img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....c...............
        bbbbcc1..bbbbbb.....
        4..4c..1b111111b....
        .5..5..b11112111b...
        ..5....b11111111b...
        .......b11211211b...
        .......b11211221d...
        .......c11111121d...
        .......c11111111d...
        ......11c111111d....
        .........cddddd.....
        ....................
        ....................
        ....................
        `],
    100,
    characterAnimations.rule(Predicate.FacingLeft)
    )
    enemy_status = 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    right = false
    DOWN = true
    UP = false
    LEFT = false
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.ashes, 500)
    sprites.destroy(otherSprite, effects.disintegrate, 1000)
})
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.ashes, 500)
})
let LEFT = false
let UP = false
let DOWN = false
let right = false
let enemy_status = 0
let ghostenemy: Sprite = null
let AMMO_BRRRRRRRR = 0
let projectile: Sprite = null
let loaded = 0
loaded = 0
tiles.setCurrentTilemap(tilemap`level4`)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666699969999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999969999999999999999999999999966999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999999999999996666669
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999969999999999999999999999996669
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
    9999999944444444444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
    9999944444444444444444999999999999999999dd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999444444444444444444999999999999999999dcb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
    999944444444444444444499999999999999999ddcb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999669999
    999444444444444444444499999999999999999dbcbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999969999999999996999699996
    999444444444999994444499664444499999999dcccc99999999999699999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999996999
    99944444449999999999999994444449999999dbccccb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
    99944444499999999999999994444449999999dbbccbb9999999699999999999999999999999999999999999999999999999999999999999999999969999999999999999969999999999999969999966
    9994444499999999966999994444444999999ddcbcccbb999996999999999999999996999999999999999999999999999999999999999999999999999999699999999999999999999999699999999969
    9994444499999999969999994444444999999dbcccccb4444449999999999999999999999699969999999999999999999999999999999999999999999999999999999999999999999669699969999966
    699444444999999999999999444444466699cdccbcbcc44444499ddddd9969999db444444444449999999999969999999999999999999999999999999999999999999999999696999999969999999996
    999444444449999999999994444444666696dcbbbcbb444444499dbbdb99dd44444444444444444999999999999996999999999999999999999999999969669999999999999999699999969999999999
    696444444444499999969994444449999996dccccccc444444469dcccb444444444444444444444499999999969999999996999999999999999999999666669999999999999999966669696999699999
    69944444444444499999999444444999669dccccbbb4444444466dbcb4444444444444444444444499999994444499999999999999999999966669966699669999999699999696969996669666669996
    6999444444444449999969944444499966bdbbbbbbb4444444966dbcc4444444444444444444444466999994444499999999996999999669966699669996969999999999996666999996699966666666
    9999444444444444999999944444999999dbbccccc44444444666dcc44444444444444469644444466999964444499999699996999999999966996969996969996999996666666669666666666666666
    9999999444444444999699944444999999bccccccc4444444b6666bc4444444444cbb6666664444446666994444496669999699999999999999999996999699969966699999999666666666666666666
    999999994444444449999664444499999999ccccc4444444666666b4444444cccccbb66966644444466669644444466969996999999999999999999999996999669ff6999996996666666666666666ff
    999999999944444449966694444499999999ccbbb4444444666666c4444444bcccccc66966944444496669944444499999966996969999444444669999996696999f969966666666666666666666ffff
    999999999994444446966994444499999999bbcb4444444b6666666444444bccbbbb66666644444449966664444449999966699666999444444466999699669966ff96666669666666666666666fffff
    444996699694444446999994444499999999bbc44444444b6666666444444ccccbb666666444444446966964444449666966696699644444444469644444666666f6666666666666666666666fffffff
    444446666664444446999994444449999999bb44444444bb666666444444cccccc6666644444444446666666444446666666666664444444444466444444666666f666666666666666666666ffffffff
    444444466664444446696694444446999999b444444444cb666664444444bbbb444444444444444466666666444444666666696644444444444466444444666666f66666666666666666666fffffffff
    444444446644444446666964444444499999444444444cc9666664444444bccb4444444444444446666666664444446666666664444444444466644444446666644444666ff66666666666ffffffffff
    44444444444444444666b96444444444444444444444ccb6f66664444444bbcc44444444444444ff6666666644444446666664444444444446664444444466ff644444666ff6666644444fffffffffff
    444444444444444466dddbbb4444444444444444444bbbfbbdddd444444ccbbb444444444444466f66666666444444466666444444444446666644444444666ff444446666f6644444444fffffffffff
    444444444444444466dbbbbf4444444444444444444bbccdddbb444444bbbbbb444444444446666f69666666644444466664444444444666666444444446666ff444446666f4444444444fffffffffff
    b64444444444444666dbbbbfb4444444444444444bbbbccbbcbb444444bbbccb444444b44466666f66666666644444466664444444446f666644444444666666644444666644444444444fffffffffff
    b664444444444466b6dccccbfc44444444444444bcbccbcbbbb4444444bbbccb4444446bbb444b6666666666664444466644444444466ff66644444444666666644444666644444444444fffffffffff
    bb6b66bb64bb64bb66dbbbbbbbbbb4444444444bccbbbccbbcc4444444bbbbbb4444444444bb4b6f66bf6666664444466444444446666ff6644444444666666664444466644444444444ffffffffffff
    444466bb44464446b6bccbbbbcbcccbbccbc444bbbbbbcccccc444444cbbbbcc44444444bb44bbbfbb6f6666664444464444444466666f66444444446666666664444466444444444fffffffffffffff
    44b6b4b4b4b6b4444b4bcccccccccccccccc44bcbbbbbcccc4b444444bbcbbccc44444446644444fbb6f6bbb664444444444444466666f664444444666666666644444644444444fffffffffffffffff
    444444b4444444444464cbbbbbbcbbbbbbcb444ccbbbbccc44f44444bcbbbbbbc4444444b444464f44ffbbbbbb4444444444444666666f644444444666666666644444644444444fffffffffffffffff
    4444446444444444446bccbccbbccbbbccc4ff4ccbccbcc444f44444bcbbbbbbc44444444444446f44ff46bbbb444444444444fff6666f644444446666666666b4444444444444ffffffffffffffffff
    4444b66b4444446664644ccbbbbbbbbccc4ff46ccbbbbcc444444444bccbbcbbc44444444444444f44f44466bb444444444444bff6bbbf444444466666666666b444444444444fffff4444444444ffff
    4444466b44444466644444cccccccccccddddbbccbbbbcc44444dfdbbccbbcbbcc4444444464644f44f4b4bbbb4444444444444fff44ff44444446666ff66b6bb44444444444ffff44444444444444ff
    4444446644444444464464cccccccccccddbbbbccbbbbcc44bb4dfdbbccbbbbbcc4444444444644fff4444b4b6644444444646b4ff4ff444444466666f666b44b44444444444ffff444444444444444f
    4444444444444f44444466ddbbbbbbbbcbbccccccbbbbbcd44ddffdbbccbbbbbcc444444d44db44fff444444bb64444444f44444fffff44444444b6b6fb6bbdbd4444444444ffff4444444444444444c
    4444464444444f444d4444dbbbccbbbbcbcccccccccbbccd3ddd4ffbbccccccbccd44444dd3443fff34444bb6bd44444444444ddffff44444444dd6dff6666dfb444444444fffff4444444444444444c
    4444464444444ff44ff4b4dccbccbbcccbcc44ccbbbbbbccdccccccccccbcbbbccddddd4ddd4ddfffbdddd4dd3d444444bd446ddffff4444444dddddff4669dfd44444444fffff44444444ff4444444c
    4444446444444ffddfd344dbcbbbbbcbbbcc4cccbbccbbcbbcccccccccbbbcbcccdd434ddddffdffdddddfddddd3dddddbddddddffff44444444ddddffd9dddfd4444444ffffff4444444fffff44444c
    44444444444444f3bf44ffdbbbbbcbbbbbbccbbbcbccbbcbbbbcbbbcbbccccccccdddddddddfffffdddddffdddddddddddd444ddffffd44444ddddddffd66ddfd444444ffffff4444444fffff444444c
    44444444ddd444ff4f33ffcbbbbbccbbccbccbbbcbbbbbcbbcccbccccbccbbbbccdddd44ddd4fffdd4dddffd4dddddddddddddddffffd444444dddddffdddddff444444ffffff4444444ffff4444444c
    44444444dddddddfdf44f4bbccbbbbbbccbbbbbbbbbbbbbbbbccbbbcbbbbbbcbccd4ddddddddfffd4dddddffddddddddddddd6bdfffffdd44444dd4ddfdddddfffffffffffff4444444ffff44444444c
    44444444ddddddd4ff4ff4bbbbbbbcccbbbbbbbbccbbcccbbbbbbbbbcccbbccbccdd4dddddddfffddddddddfddd4ddddddddddddeeeeedd44b4ddddddffdddffffffffffffff4444444444444444444c
    6444444ddd3dd44dff6ff4bbbcbbcccccbbcccbbccbbccbbbcccbbbcc44444cbccddfdddddddfffdddd4dddffdffddddddddddddeeeeeddddddddddddffddfffffffffffffff444444444444444444cc
    4344ddddddddd4ddff4fddcbbcbbccbccbbbcbbbbbbbbbbbbcccbccc444444bbccdfffddddddfffddddddddffdfdddddddffddddeeeeedddddddddddffffffffffffffffffff444444444444444444cc
    4444ddddb4ddddddfddfd4ccbcbbcccccbbbbbbbbbbbcccbbbbbbccc444444cbccdffdddddddffffddddddddfffddddd4dffddddeeeeeddddddddfdfffffffffffffffffffff4444444444444444cccc
    4444deedebd4434efffdd4ccbbbbcccccbbbcccccbccccccbbbbbbbc444444bcccdffdddddddffffddddddddfffdddddddfdddddeeeeeddddfdddfdfffffffffffffffffffff444444444444444ccccc
    4444befeebe4d4beff4444ccbcbbcccccbbccbbbbcccbcbccbbbbbbc444444ccccddfffdddddffffdddddddddffddddddffdddddeeeeedddffdddfffffffffffffffffffffff4444444444444ffccccc
    444eeeefeeeed4e4ff4444ccccbbcccccbbbbbbbccbcbcbcccbccbb444444cbbcc44dffdddddffffdddd44dddffddddddffdddddeeeeedddffdddfffffffffffffffffffffff4444444fffffffdccccc
    fffeeffffeeeeeffffeffeccbbbbcccccbbbccbcccbcbcbccccccbb444444ccbccdddffd4444444444444444dfffdddddffdddddeeeeedddffdfffffffffffffffffffffffff444444444fffffdccccf
    effeffedeeffffffffffffccbccbcccccbbbbbbcccbcbcbcbccbcb4444444ccbccdddf444444444444444444dfffdddbdffd4dddeeeeefddffffffffffffffffffffffffffff444444444444444ccccc
    beffffedffffffffffffffccbccbbbbbbcccbbccbcbcbcbcbccbbb4444444bbbbcddd44444444444444444444fffdddbcffddddfeeeeefdffffffffffffffffffffffffffffff4444444444444444ccc
    dfffffffffffffffffffffccbbbbbbbbbccbbbccbcbcbcbcbccbb4444444bbbbccdd44444444444444444444444ffddddffdddfffffffffffffffffffffffffffffffffffffff4444444444444444ccc
    ffffffffffffffffffffffccbbbbbccbbbbbbbccbcbcbcbcbccbb4444444cbbcccff444444444444444444444444fdbddffd4fffffffffffffffffffffffffffffffffffffffff444444444444444ccc
    efffffffffffffffffffffccbcbbcccbbbbbbcccbcbcbcbcbcccb444444bccbcccff44444444ffffffff444444444ffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444bbc
    ffffffffffffffffffffffccbccbccbbbbbcbcccbcbcbcbcbcccb444444cbccbbcc4444444ffffffffff444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc444444bbb
    ffffffffffffffffffffffccccb4444444444cccbcbcbcbcbccc444444ccbbcbbc4444444ffffffffffff44444444fffffffffffffffffffffffffffffffffffffffffffffffffffffcddbbcccbbbccc
    ffffffffffffffffffffffcccc4444444444444cbcbcbcbcbccc444444bbbbbbbc4444444fffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffccbcbbbbccccbbccc
    fffffffffffffffffffffccccc44444444444444bcbcbcbcbccc444444cbbbbcc44444444ffffffffffffff444444ffffffffffffffffffffffffffffffffffffffffffffffffdbccccbbbbccccbcccc
    ffffffffffffffffffffffccc4444444444444444cbcbcbcbccc444444cbbcccb4444444fffffffffffffff444444ffffffffffffffffffffffffffffffffffffffffffffffcccbbcccbbbbbcccbbccc
    fffffffffffffffffffffbccb4444444444444444cbcbcbcbcc444444bbbbbbbb444444cccfffffffffffff444444ffffffffffffffffffffffffffffffffffffffffffffccfccbbbbbccccbbccbbbcc
    fffffffffffffffffffffbcbb4444444444444444cbcbcbcbcc444444bbbbbbbb444444bccfffffffffffff444444fffffffffffffffffffffffffffffffffffffffffccbbcccccbbbbbbccbbccbbccc
    ffffffffffffffffffffccbbb4444444444444444cbcbcbcbc4444444bcccbbbb44444bbbcfcbcccfffffff444444fffffffffffffffffffffffffffffffffffffffffcdbbcccccbbbbbbcccccbbbccc
    fffffffffcfffffffffcccccc4444444444444444cbcbcbcbc4444444cccbbbbb44444ccbbcccccbcfffccc444444ffffffffffffffffffffffffffffffffffffffffcdcbbbcccbbbbbbbbcccbbbbbcc
    ddcccffffffffffffcccccbcc4444444444444444cbcbcbcbc444444bbbbbbbbb444444cbbcccccccccccbb44444ffffffffffffffffffffffffffffffffffffffffcdbbbbbcccbbbbbbccbccccbbbbc
    bdddfcbffffffffcccccccbbb4444444444444444cbcbcbcbc444444bbbbbbbcc444444ccbcbbcccccccbbb44444ffffffffffffffffffffffffffffffffffffffffcdbbbcccccbbbbbbcbcccccbbbbc
    bbbddbbcffffccccccccccbbc4444444444444444cbcbcbcb444444bbbbbbbbcc4444444cccccccccccccc444444bcffffffffffffffffffffffffffffffffffffffcbbbcbccccbbbbbccbccccccbbbc
    bbbbdbbbbcccccccbccbccccc4444444444444444cbcbcbcb444444bbbbbbcccc4444444ccccccccccccc4444444cccffffffffffffffffffffffffffffffffffffffcbccbccccbbbbccbbcccbbccccc
    bbbbccccccccccbbbcccccccc444444444444444bbbbbbbbb444444bbbcccccccc444444444ccccccccc44444444bcbccbccccfffffffffffffffffffffffffffccffbbcbbcccccbbbccbccccbbbccbc
    bbbbbbbbccccccbbcccccbcccc44444444444444cccccccc4444444cbbcccccccc4444444444444cccc444444444bbbccccbbbbbfccccccffffffffffffffffcfccccbbbbbbbcccbbccbbccbbbbbbccc
    bbbccccccbcccccccccbbbbbccc444444444444ccccccccc4444444ccccccccccc44444444444444444444444444bbbbbccccbcbbbbbbbcccccffffffffcfcccfccccccbcccccccbccbbbbcbbbbbcccb
    bbccccccbbbbbcccccbbccbbbcccc444444444bbbbbbbbbb444444ccccccccccccc444444444444444444444444cccbbcccccbccbbbbbbbdbbbcfcccffcbbbbbbccccccbbcccccbbbbbbbccbbbbcccbb
    ccbddddbbbbbbbcccccbcccccccbccbcbccccccccccccccc444444ccccbbcccccccc4444444444444444444444bbbccccccbbbcccccccbdbbbbcccccccbbbbbbbbbcccbbbbbbbbbbbbbbccbbbbbbbbbb
    ddbbbbccbbbbbbbbbbcccbbcccccccccbccccccccccccccc444444ccccbccccccccccc4444444444444444444ccccccccbbbbbbbcccccbbbcccccccbccccbbbbbbcccccbbbbbbbbbbbbbbcccbbbbbbbb
    cbbbbbbbbbbbbbbbbbbcccbbbbcccccccccccccccccccccc44444cccccccccccccccccccccc444444444444ccccccccccccbbbbbbcccccccccbbbbbbbbccbbbbbbccccccccccbbbbbbbbbbcccccbbbbb
    cbbbccccccccccccbbbbbcbcccccbbccccccccccccbbbbbccccccccccccccccccccccccccccccbbcccbccccccccccccccccbbbbbcccccbbbbbbbbbbbbbbbccccbbbcccccccccccbbbbbbbcccccccbbbb
    bbbbccccccccbbbbbbbbbbbccbbbbbbbbccccccccbbbcccccbcccccccccccccbbccccccccccccccccccccccccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbcccccbbbbbccccccccbbcc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbccccccccccccbbccccccccccccccccccccccbbbbbbbbbccccbbbccbbbbbbbbbccccccbbbbbbbbbbbbbbbbcbbbbbcccbcc
    bbbbbbccccccc444444bbbbbcccccccccccccccccccccccccccccccccccccccccccccc44444ccccccbbcccbcccccccccccbccccccbcccccccccccbbbbbbbbbbccccccccbbbbbbbbbbbbcccbbccccccbc
    bbbccbbbccccc444444444444444cccccccccccccccccccccccccccccccccccccccccc444444cccccbbbc44444ccccbbbbbcccccccbbccccccbbbbbbbbccccccccbccccccbbbbbbbbbbbccbbcccbbbbc
    bbbcdddddbbbb444444444444444444444cbbcbccccccccccccbccccccccccccccccc4444444bbbbbbccc44444cccccccccbbbbbbcccccbbbbbb44444ccccccccccccccccccbbbbbbbbbbbbbbbbbbbbb
    bbbdcbbbbbbbb444444444444444444444c44444cccccccccccccccccbbbbbbcccbcc4444444ccccbcccc44444ccccccccbbbbbbbbcbbbbbbbbc44444cbcccccccccbbccccccccbbbbbbbbbbbbbbbbbb
    bdbbbbbbbbbbb444444444444444444444444444cccccccccccccccccccccccccccc44444444ccccccccc44444ccccccccbbbbbbbbbbbbbbcccc44444bbbbbccccccbbbbbbbccccbbbbbbbbbbbbbbbbb
    cddbccccbbbbbbb4444444444444444444444444ccccccccccbccccccccccccccccc44444444ccccccccc44444ccccccccccccbbbbbbbbcccccc44444ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cdcccbcccbbbbbbbbb4444444444444444444444cccccccccccbbbbbbbbbcccccccc444444444cccccccc44444bbbbbbcccccccccccccccccccc44444ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dcbbbbbbbbbbbbbbbb444444ccbbbbbcc4444444cccccccccccccccccccccccccccc444444444cccccccc44444cccccccccccccccccccccccccc44444cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dbbbbbbbbbbbcccccc444444ccbbbbcc4444444ccccccccccbcccccccccccccccccc444444444cccccccc44444ccccccbbbbbbbbbbbbbbbbbbbb44444ccccbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbcccbbcbbbb4444444cccbbccc4444444cccccccccccccccccccccccccccc4444444444ccccccc444444bbbbbbbbbbbbbbbbbbbbbbbbbb44444bcccccccccbcccccccccccccccccccccccccccc
    bbbbbbbccbbbbbbbb444444bbbbbbccc444444cbbbbbbbccccccccccccbbbbbbbbb4444444444bbbbbbb444444bbbbbbbbbbbbbbbbbbbbbbbbbb44444bbbbbbbcccbccccccccccbbbccccccccccccccc
    bbbbbbbbbbbbbbbbb444444bbbbbbbb44444444444bbbbb444444444ccccccccccc44444444444cccbbb444444bbbbbbbbbbbbbbbbbbbbbbbbbb44444bbbbbbbbbbbbbbbbbcccbbbbccbbbbbbbbbbbbb
    bbbbbbbbcbbbbbbb4444444bbbbbbbb444444444444ccc44444444444cccccccccc44444444444ccbbbb444444bbb44444ccccccccccccccbbbb44444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbb444444bbbbbbbb44444444444444cc4444444444444bbbbbbb4444444444444bbbbb44444cccc44444c4444444444cccccc444444cccbbbbbbbbbbbbbb444444444bbbbbbbbbbbbb
    bbbbbbbbbbbbbbbb444444bbbbbbbb44444444444444b444444444444444bbbbbb4444444444444bbbcc44444cccc44444444444444444ccccc44444444444444bbbbbbbb444444444444bbbbbbbbbbb
    bbbbbbbbbbbbbbbb444444bbbbbbbb444444444444444444444444444444bbbbbb444444b444444ccccc44444bbbb44444444444444444ccccc444444444444444bbbbb444444444444444444bbbbbbb
    bbbcccccbbbbbbbb44444bbbbbbbb4444444444444444444444b44444444bbbbbb444444c444444cccbb44444bbbb444444444444444444bbbb444444444444444bbbbb4444444444444444444bbbccc
    ccccccccccccbbbb44444bbbbbbbd44444444b4444444444444444444444bbbbbc44444bbb44444bbbb444444bbbb444444444444444444bbbb4444444444444444bbbb4444444444444444444cccccc
    cccccccccccccccc44444bdddddcc44444444b4444444444444444444444cccccc44444444444444ccc444444bbbb4444444444bb444444bbb44444444444444444bbb44444444b444444444444cbccc
    cccccccccbbbbbcc44444cccccccc4444444b44444444444444444444444ccbbbb44444444444444ccc444444bbbb44444444bbbb444444bbc444444444b4444444bbb4444444bbbb4444444444ccccc
    ccccccccccccbbcc44444cccccbbb444444bb4444444444444444444444bbbbbb444444444444444bbb444444bbbb44444444bbb4444444ccc44444444bbb444444bbb444444bbbbb4444444444ccccc
    bccccccccccccccc44444cccbbbbb44444bcc44444444444444444444bbbbbbbb444444444444444bbb44444bbbbb444444444444444444bcc4444444bbbcc44444bbb444444bbb444444444444ccccc
    bccccccccccccccc44444bbbbbbbb44444ccc44444444444444bbbbbbbbbbbbbb4444444444444444bb44444bbbbb444444444444444444ccc444444cccccc44444bbc444444444444444444444bbbbb
    cccccccccccbbbbbbbbbbbbbbbbbbbbbbeecc44444d444444444444ddd444bbb3444444b4444444444444444b4444444444444444444444ccc444444cccccc44444ccc444444444444444444444bbbbb
    bddddcbbbbbbbb444b4bbb44bb4b4bb4444dd44444d44444444444444d444dddd44444ddddb444444444444434444444444444444444444ccb44444ccccccc44444ccc4444444444444444444444bbbb
    ddbbdd44b44b444444b444b444443444dddddddd4ddd4444444444444dddddddb44444ddddd444444d444444dd44d4444444444444444bbdddccccccbbcccc44444cccb44444444444444c444444bbbb
    bbeee4b44444444dd4d33ddddddddde4ddddddddddddd444444444444ddddddd4d4ddd4ddddd44444d444444ddddd444444ddddddddd3dddbbbdbbdddbbbbb44444cbbbb444444444444bb444444bbbb
    b4b43dd44db4ddddd4d44dddddddddbd4ddddddddddddd44444444444d4ddddddd4ddddddddd44444d444444ddddd44444dddddddd4ddddd44dddddddddbdbddddbdbbddd44444444bbbbb444444cbbb
    dddd3ddddd4ddddd44dddd4dddddddddddddddddddddddddd44444444dd3dddddd4ddddddddd44444d44444dddddd44444dddddddddddddddd4dddddddddddddddddd334db4d3dd4bbd44b444444bbbb
    d4dddbddddddddddd4dddd4ddddddddddddddd3dddddddddd444ddddddd4dddddddddddddddddddddddddddddddd444444dddddddddddddddd4ddddddddddddddddddddd3bd4ddd4dddd44444444dddd
    ddddddddddddddddd4ddddddddddddddddddd4ddddddddddddd4ddddddddddddddddddddddddddddddddddddd4ddd44444dddddddddd4ddddddddddd4ddddddddddddddddddd4d44ddddd4dd44dddddd
    4ddddddd4d444dd4dd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddd4ddddddddd
    dddddddddd444ddddd3ddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44dddddddddddddddddddddddddddddddddd4ddddddddd
    `)
pause(2000)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999559999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999995555555555555442222222999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999995555555544424555522222222222222999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999995555554444442222542255554444422222222999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999995555554444444222255542224555544444444222229999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999555544444444442224455444222445555444444444222299999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999911111111995555444444444422244455bbbbb22444455544444444442229999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999991dddddddd11555444444444444222444455bbbbbbb244444555444444444422299999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999ddddd1111d5555444444444444222444455bbbbbbbb224444455544444444442222999999999999999999999999999999991111111999999999999999
    9999999999999999999999999999999999999dddd111111155544444444444442244444455bbbbbbbbb224444445554444444444222dd111111111199999999999999111111111111111111111111999
    999999999999999999999999999999999999ddd1111111555444444444444422244444455bbbbbbbbbb2244444445554444444444422211111111111111ddddddddddddddddd11111dd1111111111199
    99999999999999991111119999999999999dd111111115554444444444444222444444455bbbbbbbbbbb2244444445554444444444422211111111111dddddddddddddddddd11111dddddddddd111199
    9999999999999911111111111199999999dd111111115554444444444444222444444455bbbbbbbbbbbbb2244444444555444444444442211111111dddd11111111111111111111dd1111ddddd111999
    9999999999999111dddddddddd1119999dd1111111155444444444444442224444444455bbbbbbbbbbbbb224444444445554444444444422dd1111ddd111111111111111111111dd1111111111119999
    9999999999911ddddddd1dddddddd111ddd111111155444444444444442224444444445bbb55bbbbbbbbbb244444444445554444444444422d111ddd1111111111111111111111dd1111111111199999
    999999999911ddd111111111111dddd1dd1111111554444444444444442244444444455bb55bbbb55bbbbb224444444444554444444444442211ddd11111111111111111111111ddd111111119999999
    9999999991ddd1111111111111111dd1d11111115544444444444444422444444444455bb5bbbb5555bbbbb2444444444445544444444444422dd11111111111111111111111111ddd11111199999999
    999999991ddd111111111111111111ddd1111115554444444444444422444444444445bbb5bbbb5bbbbbbbb2244444444444554444444444442211111111111111111111111111111111119999999999
    999999911dd11111111111111111111dd1111155544444444444444224444444444455bbb55bbb555bbbbbb2244444444444455444444444442211111199999999999999999999999999999999999999
    99999991dd111111111111111111111111111155444444444444442224444444444455bbbb555b5bbbbbbbb2244444444444445544444444422229999999999999999999999999999999999999999999
    9999991dd111111111111111111111111111155444444444444444224444444444445bbbbbbbbb5bbbbbbbbb224444444444444554444444444422999999999999999999999999999999999999999999
    9999911d1111111111111111111111111111554444444444444442244444444444455bbbbbbbbbbbbbbbbbbb224444444444444554444444444422999999999999999999999999999999999999999999
    999991dd1111111111111111111111111111554444444444444442244444444444455bbbbbbbbbbbbbbbbbbbb24444444444444455444444444222299999999999999999999999999999999999999999
    999911d11111111111111111ddddd1111115544444444444444422444444444444455bbbbbbbbbbbbbbbbbbbb22444444444444445544444444442299999999999999999999999999999999999999999
    99991dd1111111111111111dddddddd11115544444444444444224444444444444455bbbbbbbbbbbbbbbbbbbb22444444444444445554444444444229999999999999999999999999999999999999999
    99991dd111111111111111ddd1111dddd15544444444444444422444444444444445bbbbbbbbbbbbbbbbbbbbbb2444444444444444554444444444229999999999999999999999999999999999999999
    99991dd11111dd1111111ddd1111111ddd5544444444444444224444444444444455bbbbbbbbbbbbbbbbbbbbbb2444444444444444455444444444222999999999999999999999999999999999999999
    99999dd11111dd1111111dd1111111111d5544444444444444224444444444444455bbbbbbb444444444444bbb2244444444444444455444444444222999999999999999999999999999999999999999
    99999dd11111dd111111dd1111111111155444444444444444244444444444444455bbbbb444454444544444bb2244444444444444445544444444242299999999999999999999999999999999999999
    99999dd11111dd111111dd1111111111155444444444444442244444444444444455bbbb45444444444444444b2244444444444444445544444444442299999999999999999999999999999999999999
    99999dd111ddd111111ddd1111111111155444444444444442244444444444444455bbb4444444454444544445b244444444444444444554444444422299999999999999999999999999999999999999
    999999dddddd1111111dd1111d111111554444444444444422444444444444444455bb44444444444544444445b224444444444444444554444444422229999999999999999999999999999999999999
    999999dddd111111111dd111dd111111554444444444444422444444444444444455b444444544444444444455b22444444444444444445544444442422ddddddd199999999999999999999999999999
    99999999999999999999ddddd1111111554444444444444422444444444444444455b4454444445444555555bbb22444444444444444445544444444422dddddddd11999999999999999999999999999
    999999999999999999999ddd1dd11115544444444444444224444444444444444455b44444444445555bbbbbbbb224444444444444444455444444444221111111d11111119999999999999999999999
    9999999999999999999999999ddd1115544444444444444224444444444444444455444454444455bbbbbbbbbbb224444444444444444445444444444222111111111111111199999999999999999999
    99999999999999999999999999ddd1155444444444444442244444444444444444554444544555bbbbbbbbbbbbbbb444444444444444444554444444222211111111dd11111111199999999999999999
    999999999999999999999999999ddd1554444444444444224444444444444444445544444445bbbbbbbbbbbbbbbbb44444444444444444455444444224221111111ddd11111111111111dd1111999999
    99999999999999999999999999999dd544444444444444224444444444444444445444544445bbbbbbbbbbbbbbbbb2444444444444444444544444442422111111dd1111111111ddddddddddddd99999
    9999999999999999999999999999995544444444444444224444444444444444445544444445bbbbbbbbbbbbbbbbb2444444444444444444554444444422111111dd1111111dddddd11111111dddd999
    9999999999999999999999999999995544444444444444224444444444444444445544444445bbbbbbbbbbbbbbbbb244444444444444444455444444422221111dd111111dddd11111111111111ddd99
    9999999999999999999999999999995544444444444444244444444444444444445544454445bbbbbbbbbbbbbbbbb2444444444444444444554444444222211111ddddddddd11111111111111111ddd9
    99999999999999999999999999999955444444444444422444444444444444444455b4454445bbbbbbbbbbbbbbbbb24444444444444444444544444442422111111dddddd11111111111111111111dd9
    99999999999999999999999999999955444444444444422444444444444444444455b4444445bbbbbbbbbbbbbbbbb2244444444444444444455444444442211111111111111111111111111111111119
    99999999999999999999999999999955444444444444422444444444444444444455bb44455bbbbbbbbb2222222222224444444444444444455444444422211111111111111111111111111111111199
    99999999999999999999999999999955444444444444422444444444444444444455bb5555bbbbbb22222222222222222222444444444444455444444422221111111111111111111111111111111199
    99999999999999999999999999999955444444444444222444444444444444444455bbbbbbbbbb2222222222222222222222224444444444445444444422221111111111111111111111111111111999
    99999999999999999999999999999954444444444222222222222444444444444455bbbbbbbbb22222222222222222222222222244444444445544444424221111111111111111111111111111199999
    99999999999999999999999999999954444444422222222222222222244444444445bbbbbbbb22222222222222222221111111222224444444554444444422111d111111111111111111111111999999
    999999999999999999999999999999544444442222222222222222222222444444455444441111111222222222111111111111111224444444554444444422ddddd11111111111111111111119999999
    99999999999999999999999999999954444422222222222222222222222224444445544444111111111111222111111111111111111444444445444444222ddd11111111111111111111111119999999
    999999999999999999999999999999544442222222222222222222229999994444455444411111111111111ef11111111111111111114444444554444222411111111111111111111111111199999999
    999999999999999999999999999999554422999999922222222222999999999944445444111111111111dddeddddd11111111111111dd444444554442241111111111111111111111111111999999999
    99999999999999999999999999999955422999999999992222e99999999999999144554411111dddddddddeddddddd1111111111111dd114444554422411111111111111111111111111119999999999
    9999999999999999999999999999995522999999999999999ee99999999999999994444ddddddddddd999e9999999d9991111111111d1111444554224111111111111111111111111111199999999999
    99999999999999999999999999999942299999999999999999eee9999999999999999ef9dd999999999995999999999999999999991d1111144552241111119999999999111111111111999999999999
    9999444444499999999999999999999ff99999999999999999999eee9999999999999ff9999999999999e9999999999999999999999dd111114422411111199999999999999999999999999999999999
    9944444444499999999999999999999df99999999999999999999999ee999999999995e999999999999e99999999999999999999999ddd1eee1224111111999999999999999999999999999999999999
    94444444444999999999444449999999eee99999999999999999999999eee999999999e99999999999e9999999999999999999999999deeeeef221111119999999999999999999999999999999999999
    4444444444499999999944444999999999eeeeeeee999999999999999999eee99999999e999999999e99999999999999999999999eeeeddddff111111199999999999999999999999999999999999999
    444444444449999999994444499999999999999eeeeeeeeeee9999999999999eeee9999ee9999999e999999999999999999999eee999999dddddddd11999999999999999999999999999999999999999
    444444449999999999994444499999999999999999999999eeeeeee99999999999eee999ee99999e999999999999999999eeee9999999999999dddd99999999999994444499999999999999999999999
    444444499999999999944444499999999999999999999999999999eeeeeee9999999eeee9e9999e999999999999999eeee99999999999999999999999999999999994444499999999999999999999999
    444444999999999999944444499999999999999999999999999999999999eeeeee99999ee9e99ee99999999eeeeeee999999994444499999999999999999999999994444499999999999999999999999
    444449999999999999944444499999999999999999444444444444999999999999eeeee9eeee9e99999eeeee999999999999444444499999999999999999999999994444499999999999999999999999
    44449999999999999994444449999999999999999444444444444449999999999999999eeeeeee9eeeee9999999999999994444444499999944444999999999999994444499999999999999999999999
    444499999999999999444444999999999999999944444444444444444999999999999999999eeeee99999999999999999994444444499999944444999999999999999999999999999999999999999999
    4444999999999999994444449999999999999999444444444444444444999999999999999999ee9999999999999999999944444444499999944444999999999999999999999999999999999999999999
    4444999999999999994444444444444499999999444444444444444444999999999999944444444449999999999999999944444444999999944444999999999999999999999999999999999999999999
    4444499999999999994444444444444444999999444444499944444444499999999999444444444449999999999999999444444449999999944444999999999999999999999999999999999999999999
    4444499999999999994444444444444444499999444449999994444444499999999944444444444444444999999999999444444499999999944444999999999999999999999999999999999999999999
    4444449999999999994444444444444444449999444449999999944444499999999944444444444444444449999999994444444999999999944444999999999999999999999999999999999999999999
    4444444444499999994444444444444444449999444449999999944444499999999944444444444444444449999999994444444999999999944444999999999999999999999999999999999999999999
    4444444444499999994444444449444444449999444444444449444444499999999944444444444444444449999999944444449999999999944444999999999999999999999999999999999999999999
    4444444444499999944444444499944444449999444444444444444444499999999944444499999944444449999999944444449999999999944444999999999999999444449999944444999999999999
    9444444444499999944444444999999444449999444444444444444444499999999944444999999994444449999999944444499999999999944444999999999999999444449999944444999999999999
    9444444444499999944444444999999444449999444444444444444444999999999944444999999994444449999999944444499999999999944444999999999999999444449999944444944444449999
    9999999999999999944444449999999444449999944444444444444444999999999944444999999444444449999994444444444444449999944444999999999999994444449999944444444444444999
    9999999999999999944444499999999444449999944444444444444449999999999944444449994444444449999994444444444444449999944444999999999999994444449999944444444444444499
    9999999999999999944444999999994444449999994444449999999999999999999944444444444444444449999994444444444444449999944444999999999999994444449999944444444444444449
    9999999999999999999999999999994444449999994444444499999999999999999944444444444444444449999994444444444444449999444444999999999999994444449999944444444444444444
    9999999999999999999999999999994444449999999444444499999999999999999944444444444444444999999994444444444444449999444444999944444499994444499999944444444444444444
    9999999999999999999999999999994444449999999444444449999999999999999944444444444444449999999999944444999999999999444444999444444499994444499999944444444444444444
    9999999999999999999999999999994444449999999444444444444449999999999944444444444444499999999999944444999999999999444444944444444499994444499999444444444499444444
    9999999999999999999999999999994444499999999944444444444449999999999944444449999999999999999999944444999999999999444444444444444499994444499999444444444499944444
    9999999999999999999999999999999999999999999994444444444449999999999944444444444444444499999999944444999999999999444444444444444499994444499999444444444999944444
    9999999999999999999999999999999999999999999999444444444449999999999944444444444444444499999999944444999999999999444444444444444999994444499999444444444999944444
    9999999999999999999999999999999999999999999999944444444449999999999944444444444444444499999999944444999999999999444444444444499999994444499999444444444444444444
    9999999999999999999999999999999999999999999999999999999999999999999994444444444444444499999999944444999999999999944444444444999999994444449999444444444444444444
    9999999999999999999999999999999999999999999999999999999999999999999999444444444444444499999999944444999999999999944444444449999999994444449999444444444444444444
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994444449994444444444444444444
    9999999999999999999944444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994444449994444444494444444444
    9999999999999999994444444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999444449994444444494444444444
    9999999999999999944444444449999999999944444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994444444499444444449
    9999999999999999444444444449999999999944444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994444444999999999999
    9999999999999999444444444449999999999944444999999999999999999999999999999999999999999999999944444999999999999999999999999999999999999999999994444444999999999999
    9999999999999994444444444449999999999444444999999999999999999999999999999999999999944444999944444999999994444444444499999999999999999999999994444444999999999999
    9999999999999994444444999999999999999444444999999999999999999999999999999999999999444444999944444999999444444444444499999999999999999999999994444449999999999999
    9999999999999994444449999999999999999444444999999999999999999999999999999999999999444444999944444999994444444444444444999999999999444444444444444499999999999999
    9999999999999994444449999999999999999444444999999999999999999999999999999999999999444444999944444999444444444444444444449999999994444444444449999999999999999999
    9999999999999994444449999999999944444444444444999999999999999999999999999999999999444444999999999999444444444444444444449999999944444444444449999999999999999999
    9999999999999994444444999999999944444444444444999994444499999444449999999999999999444444999999999999444444444499444444449999999944444444444449999999999999999999
    9999999999999994444444499999999944444444444444999994444499994444449999999999999999444444999999999999444444449999444444449999999944444444444449999999999999999999
    9999999999999994444444449999999944444444444444999994444499994444449999999999999999444444999999999999444444999999944444449999999944444449999999999999999999999999
    9999999999999999444444444999999944444444444444999994444499994444449999994444444444444444999444449999444449999999999444449999999944444449999999999999999999999999
    9999999999999999944444444499999999994444499999999994444499994444449999944444444444444444999444449999444449999999999444449999999944444444449999999999999999999999
    9999999999999999994444444449999999994444499999999994444499944444449999444444444444444444999444449999444444999999999444449999999944444444444499999999999999999999
    9999999999944444499444444444999999944444499999999994444449944444499999444444444444444444999444449999444444499999994444449999999944444444444449999999999999999999
    9999999999944444444944444444999999944444499999999994444444944444499999444444444444444444999444449999444444449999944444449999999994444444444444999999999999999999
    9999999999944444444444444444999999944444499999999994444444444444499999444444499944444444999444449999444444444499444444449999999999444444444444999999999999999999
    9999999999944444444444444444999999944444499999999994444444444444999999444444499444444444999444449999444444444444444444449999999999999944444444999999999999999999
    9999999999944444444444444444999999944444999999999994444444444444999999444444444444444444999444449999944444444444444444499999999999999999444444999999999999999999
    9999999999994444444444444444999999944444999999999999944444444444999999444444444444444444999444449999994444444444444444499999444444499994444444999999999999999999
    9999999999999944444444444449999999944444999999999999944444444449999999444444444444444444999444449999999944444444444444999999444444444444444444999999999999999999
    9999999999999999444444444999999999944444999999999999994444444449999999944444444444444444999999999999999994444444444449999999444444444444444444999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999444444444444444999999999999999999999999999999999999444444444444444444999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999944444499999999999999999999999999999999999999999444444444444444449999999999999999999
    `)
pause(2000)
info.setLife(5)
projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
AMMO_BRRRRRRRR = 10
controller.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 100)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . . . d b . . . . . . 
    . . . . . . . a . c . . . . . . 
    . . . . . . c . . c d . . . . . 
    . . . . . d d d d d d a . . . . 
    . . . . d d d d d d d d a . . . 
    . . . d d e e e d d d d d . . . 
    . . . d e e e e e e e d d . . . 
    . . . e c c c c c c c c e . . . 
    . . . c c c c c c c c c c . . . 
    . . . a c c c c c c c c c . . . 
    . . . a c c c c c c c c c . . . 
    . . . . a c c c c c c c . . . . 
    . . . . b a a a a a a b . . . . 
    . . . . . 6 7 7 7 7 6 . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666.
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
game.showLongText("walk to walk", DialogLayout.Bottom)
game.showLongText("press a to shoot", DialogLayout.Bottom)
game.showLongText("you have 10 bullets that reload automatically if your mag is empty or if you press b", DialogLayout.Bottom)
game.showLongText("pro tipp: the enemys are not that intelligent because they are zombies try to be in a area without much free space", DialogLayout.Bottom)
game.showLongText("there are enemys that want to kill you, try to survive!", DialogLayout.Bottom)
game.showLongText("welcome to the live of a survior", DialogLayout.Bottom)
game.showLongText("Oh no enemys are coming REPOSITION NOW!", DialogLayout.Bottom)
ghostenemy = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    .....dddddc.........
    ....d211111c1111....
    ...d11211121c.......
    ...d11111211c.......
    ...b11111211d.......
    ...b21111121d.....b.
    ...b12211111d....bb.
    ...b11111111b.b.bb..
    ....b121111b111b....
    .....bbbbbb...b.b...
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Enemy)
sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
enemy_status = 1
loaded = 1
game.onUpdateInterval(randint(2000, 5000), function () {
    ghostenemy = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        .....dddddc.........
        ....d211111c1111....
        ...d11211121c.......
        ...d11111211c.......
        ...b11111211d.......
        ...b21111121d.....b.
        ...b12211111d....bb.
        ...b11111111b.b.bb..
        ....b121111b111b....
        .....bbbbbb...b.b...
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(ghostenemy, sprites.castle.rock2)
})
forever(function () {
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
})
forever(function () {
    ghostenemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 60)
})
forever(function () {
    if (AMMO_BRRRRRRRR == 0) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("Im reloading", 3000, true)
        music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        pause(2000)
        music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        pause(1000)
        music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        pause(100)
        music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        AMMO_BRRRRRRRR = 10
    }
})
forever(function () {
    if (AMMO_BRRRRRRRR == 5) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("only 5 ammo remaining")
    }
    if (AMMO_BRRRRRRRR == 1) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("only 1 ammo remaining")
    }
})
forever(function () {
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . d d e c c c . . . . . 
        . . . . d d d c c c c c b . . . 
        . . d d d d e c c c c c a 6 . . 
        . b . d d d e c c c c c a 7 6 . 
        . b . d d d e c c c c c a 7 6 . 
        . b . d d e e c c c c c a 7 6 . 
        . d . d d e e c c c c c a 7 6 . 
        . . c d d e e c c c c c a 6 . . 
        . . . . d d e c c c c a b . . . 
        . . . . . d d e c a a . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . d d e c c c . . . . . 
        . . . . d d d c c c c c b . . . 
        . . . d d d e c c c c c a 6 . . 
        . . d d d d e c c c c c a 7 6 . 
        . b . d d d e c c c c c a 7 6 . 
        . b . d d e e c c c c c a 7 6 . 
        . b . d d e e c c c c c a 7 6 . 
        . d c d d e e c c c c c a 6 . . 
        . . . . d d e c c c c a a . . . 
        . . . . . d d e c a a a b . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . d d e c c c . . . . . 
        . . . . d d d c c c c c b . . . 
        . . d d d d e c c c c c a 6 . . 
        . b . d d d e c c c c c a 7 6 . 
        . b . d d d e c c c c c a 7 6 . 
        . b . d d e e c c c c c a 7 6 . 
        . d . d d e e c c c c c a 7 6 . 
        . . c d d e e c c c c c a 6 . . 
        . . . . d d e c c c c a b . . . 
        . . . . . d d e c a a . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . d b b b . . . . . . 
        . . . . . c . . . . d . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . d d e e e d d d d d . . . 
        . . . d e e e e e e e d d . . . 
        . . . e c c c c c c c c e . . . 
        . . . c c c c c c c c c c . . . 
        . . . a c c c c c c c c c . . . 
        . . . a c c c c c c c c c . . . 
        . . . . a c c c c c c c . . . . 
        . . . . b a a a a a a b . . . . 
        . . . . . 6 7 7 7 7 6 . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . d b b b . . . . . . 
        . . . . . . c . . . d . . . . . 
        . . . . . . d d d d d d . . . . 
        . . . . . d d d d d d d d . . . 
        . . . . d d e e e d d d d d . . 
        . . . . d e e e e e e e d d . . 
        . . . . e c c c c c c c c e . . 
        . . . . c c c c c c c c c c . . 
        . . . . a c c c c c c c c c . . 
        . . . . a c c c c c c c c c . . 
        . . . . a a c c c c c c c . . . 
        . . . . b a a a a a a a b . . . 
        . . . . . . 6 7 7 7 7 6 . . . . 
        . . . . . . . 6 6 6 6 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . d b b b . . . . . . 
        . . . . . c . . . . d . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . d d e e e d d d d d . . . 
        . . . d e e e e e e e d d . . . 
        . . . e c c c c c c c c e . . . 
        . . . c c c c c c c c c c . . . 
        . . . a c c c c c c c c c . . . 
        . . . a c c c c c c c c c . . . 
        . . . . a c c c c c c c . . . . 
        . . . . b a a a a a a b . . . . 
        . . . . . 6 7 7 7 7 6 . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a c e d d . . . . . 
        . . . b a c c c c e d d . . . . 
        . . 6 a c c c c c e e d d c . . 
        . 6 7 a c c c c c e e d d . d . 
        . 6 7 a c c c c c e e d d . b . 
        . 6 7 a c c c c c e d d d . b . 
        . 6 7 a c c c c c e d d d . b . 
        . . 6 a c c c c c e d d d d . . 
        . . . b c c c c c d d d . . . . 
        . . . . . c c c e d d . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . b a a a c e d d . . . . . 
        . . . a a c c c c e d d . . . . 
        . . 6 a c c c c c e e d d c d . 
        . 6 7 a c c c c c e e d d . b . 
        . 6 7 a c c c c c e e d d . b . 
        . 6 7 a c c c c c e d d d . b . 
        . 6 7 a c c c c c e d d d d . . 
        . . 6 a c c c c c e d d d . . . 
        . . . b c c c c c d d d . . . . 
        . . . . . c c c e d d . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a c e d d . . . . . 
        . . . b a c c c c e d d . . . . 
        . . 6 a c c c c c e e d d c . . 
        . 6 7 a c c c c c e e d d . d . 
        . 6 7 a c c c c c e e d d . b . 
        . 6 7 a c c c c c e d d d . b . 
        . 6 7 a c c c c c e d d d . b . 
        . . 6 a c c c c c e d d d d . . 
        . . . b c c c c c d d d . . . . 
        . . . . . c c c e d d . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . d d e c c c . . . . . 
        . . . . d d d c c c c c b . . . 
        . . . d d d e c c c c c a 6 . . 
        . . d d d d e c c c c c a 7 6 . 
        . b . d d d e c c c c c a 7 6 . 
        . b . d d e e c c c c c a 7 6 . 
        . b . d d e e c c c c c a 7 6 . 
        . d c d d e e c c c c c a 6 . . 
        . . . . d d e c c c c a a . . . 
        . . . . . d d e c a a a b . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . d d e c c c . . . . . 
        . . . . d d d c c c c c b . . . 
        . . d d d d e c c c c c a 6 . . 
        . b . d d d e c c c c c a 7 6 . 
        . b . d d d e c c c c c a 7 6 . 
        . b . d d e e c c c c c a 7 6 . 
        . d . d d e e c c c c c a 7 6 . 
        . . c d d e e c c c c c a 6 . . 
        . . . . d d e c c c c a b . . . 
        . . . . . d d e c a a . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . 6 7 7 7 7 6 . . . . . 
        . . . . b a a a a a a b . . . . 
        . . . . c c c c c c c a . . . . 
        . . . c c c c c c c c c a . . . 
        . . . c c c c c c c c c a . . . 
        . . . c c c c c c c c c c . . . 
        . . . e c c c c c c c c e . . . 
        . . . d d e e e e e e e d . . . 
        . . . d d d d d e e e d d . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . d . . . . c . . . . . 
        . . . . . . b b b d . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 6 . . . . . . . 
        . . . . 6 7 7 7 7 6 . . . . . . 
        . . . b a a a a a a a b . . . . 
        . . . c c c c c c c a a . . . . 
        . . c c c c c c c c c a . . . . 
        . . c c c c c c c c c a . . . . 
        . . c c c c c c c c c c . . . . 
        . . e c c c c c c c c e . . . . 
        . . d d e e e e e e e d . . . . 
        . . d d d d d e e e d d . . . . 
        . . . d d d d d d d d . . . . . 
        . . . . d d d d d d . . . . . . 
        . . . . . d . . . c . . . . . . 
        . . . . . . b b b d . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . 6 7 7 7 7 6 . . . . . 
        . . . . b a a a a a a b . . . . 
        . . . . c c c c c c c a . . . . 
        . . . c c c c c c c c c a . . . 
        . . . c c c c c c c c c a . . . 
        . . . c c c c c c c c c c . . . 
        . . . e c c c c c c c c e . . . 
        . . . d d e e e e e e e d . . . 
        . . . d d d d d e e e d d . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . d . . . . c . . . . . 
        . . . . . . b b b d . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a c e d d . . . . . 
        . . . b a c c c c e d d . . . . 
        . . 6 a c c c c c e e d d . . . 
        . 6 7 a c c c c c e e d d c . . 
        . 6 7 a c c c c c e e d d . c . 
        . 6 7 a c c c c c e d d d . . d 
        . 6 7 a c c c c c e d d d b b b 
        . . 6 a c c c c c e d d d d . . 
        . . . b c c c c c d d d . . . . 
        . . . . . c c c e d d . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . d b . . . . . . 
        . . . . . . . c . b . . . . . . 
        . . . . . . c . . b d . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . d d e e e d d d d d . . . 
        . . . d e e e e e e e d d . . . 
        . . . e c c c c c c c c e . . . 
        . . . c c c c c c c c c c . . . 
        . . . a c c c c c c c c c . . . 
        . . . a c c c c c c c c c . . . 
        . . . . a c c c c c c c . . . . 
        . . . . b a a a a a a b . . . . 
        . . . . . 6 7 7 7 7 6 . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingUp)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . 6 7 7 7 7 6 . . . . . 
        . . . . b a a a a a a b . . . . 
        . . . . c c c c c c c a . . . . 
        . . . c c c c c c c c c a . . . 
        . . . c c c c c c c c c a . . . 
        . . . c c c c c c c c c c . . . 
        . . . e c c c c c c c c e . . . 
        . . . d d e e e e e e e d . . . 
        . . . d d d d d e e e d d . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . d b . . c . . . . . . 
        . . . . . . b . c . . . . . . . 
        . . . . . . b d . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingDown)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . d d e c c c . . . . . 
        . . . . d d d c c c c c b . . . 
        . . d d d d e c c c c c a 6 . . 
        b b b d d d e c c c c c a 7 6 . 
        d . . d d d e c c c c c a 7 6 . 
        . c . d d e e c c c c c a 7 6 . 
        . . c d d e e c c c c c a 7 6 . 
        . . . d d e e c c c c c a 6 . . 
        . . . . d d e c c c c a b . . . 
        . . . . . d d e c a a . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
})
forever(function () {
    if (enemy_status == 1) {
        characterAnimations.loopFrames(
        ghostenemy,
        [img`
            ....................
            ....................
            ....................
            .....dddddc.........
            ....d111111c111.....
            ...d11111111c.......
            ...d12111111c.......
            ...d12211211b.....b.
            ...b11211211b....bb.
            ...b11111111b...bb..
            ...b11121111b.c.b...
            ....b111111b111c....
            .....bbbbbb...c.c...
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            `,img`
            ....................
            ....................
            ....................
            .....dddddc.........
            ....d111111c1111....
            ...d11111111c.......
            ...d12111111c.......
            ...d12211211b.....b.
            ...b11211211b....bb.
            ...b11111111b...bb..
            ...b11121111bc.bb...
            ....b111111b11c.....
            .....bbbbbb..c.c....
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            `],
        100,
        characterAnimations.rule(Predicate.MovingRight)
        )
    }
})
forever(function () {
    if (enemy_status == 1) {
        characterAnimations.loopFrames(
        ghostenemy,
        [img`
            . . c . c . . . b b b b b b . . . . . 
            . . . c 1 1 1 b 1 1 1 1 1 1 b . . . . 
            . . b . c . b 1 1 1 1 2 1 1 1 b . . . 
            . b b . . . b 1 1 1 1 1 1 1 1 b . . . 
            b b . . . . b 1 1 2 1 1 2 1 1 b . . . 
            b . . . . . b 1 1 2 1 1 2 2 1 d . . . 
            . . . . . . c 1 1 1 1 1 1 2 1 d . . . 
            . . . . . . c 1 1 1 1 1 1 1 1 d . . . 
            . . . . 1 1 1 c 1 1 1 1 1 1 d . . . . 
            . . . . . . . . c d d d d d . . . . . 
            . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . 
            `,img`
            . . . c . c . . b b b b b b . . . . . 
            . . . . c 1 1 b 1 1 1 1 1 1 b . . . . 
            . . b b . c b 1 1 1 1 2 1 1 1 b . . . 
            . b b . . . b 1 1 1 1 1 1 1 1 b . . . 
            b b . . . . b 1 1 2 1 1 2 1 1 b . . . 
            b . . . . . b 1 1 2 1 1 2 2 1 d . . . 
            . . . . . . c 1 1 1 1 1 1 2 1 d . . . 
            . . . . . . c 1 1 1 1 1 1 1 1 d . . . 
            . . . 1 1 1 1 c 1 1 1 1 1 1 d . . . . 
            . . . . . . . . c d d d d d . . . . . 
            . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft)
        )
    }
})
forever(function () {
    if (enemy_status == 1) {
        characterAnimations.loopFrames(
        ghostenemy,
        [img`
            ................
            ................
            ................
            ................
            ........bbbddd..
            .......b111111d.
            ......b11112211d
            ......b11122111d
            ......b12111111d
            ......b11111111d
            ......b11122111d
            ......b11111111c
            .......b111111c.
            .......1bbbbcc1.
            .......1......1.
            ......c1c.....1.
            .......c........
            ......c.bb......
            .........bb.....
            ..........bb....
            `,img`
            ................
            ................
            ................
            ................
            ................
            .......bbbddd...
            ......b111111d..
            .....b11112211d.
            .....b11122111d.
            .....b12111111d.
            .....b11111111d.
            .....b11122111d.
            .....b11111111c.
            ......b111111c..
            ......1bbbbcc1..
            .....c1c.....1..
            ......c......1..
            .....c.bb....1..
            ........bb......
            .........bb.....
            `],
        100,
        characterAnimations.rule(Predicate.MovingDown)
        )
    }
})
forever(function () {
    if (enemy_status == 1) {
        characterAnimations.loopFrames(
        ghostenemy,
        [img`
            ....bb..........
            .....bb.........
            ......bb.c......
            ........c.......
            .1.....c1c......
            .1......1.......
            .1ccbbbb1.......
            .c111111b.......
            c11111111b......
            d11122111b......
            d11111111b......
            d11111121b......
            d11122111b......
            d11221111b......
            .d111111b.......
            ..dddbbb........
            ................
            ................
            ................
            ................
            `,img`
            .....bb.........
            ......bb........
            ..1....bb.c.....
            ..1......c......
            ..1.....c1c.....
            ..1ccbbbb1......
            ..c111111b......
            .c11111111b.....
            .d11122111b.....
            .d11111111b.....
            .d11111121b.....
            .d11122111b.....
            .d11221111b.....
            ..d111111b......
            ...dddbbb.......
            ................
            ................
            ................
            ................
            ................
            `],
        100,
        characterAnimations.rule(Predicate.MovingUp)
        )
    }
})
