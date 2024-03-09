namespace SpriteKind {
    export const Projectile2 = SpriteKind.create()
    export const Gun = SpriteKind.create()
    export const rifle = SpriteKind.create()
    export const shotgun = SpriteKind.create()
    export const pistol = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    right = false
    DOWN = false
    UP = true
    LEFT = false
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (loaded == 1) {
        if (gun_type == 1) {
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
        if (gun_type == 2) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("Im reloading", 3000, true)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(2000)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(1000)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(100)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            AMMO_BRRRRRRRR = 5
        }
        if (gun_type == 3) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("Im reloading", 3000, true)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(2000)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(1000)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(100)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            AMMO_BRRRRRRRR = 32
        }
        if (gun_type == 4) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("Im reloading", 3000, true)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(2000)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(1000)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(100)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            AMMO_BRRRRRRRR = 16
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gun, function (sprite, otherSprite) {
    gun_type = 4
    AMMO_BRRRRRRRR = 16
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("revolver aquired")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pistol, function (sprite, otherSprite) {
    gun_type = 1
    AMMO_BRRRRRRRR = 10
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("magnum aquired")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (loaded == 1) {
        if (gun_type == 4) {
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
                music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                pause(500)
            }
        }
        if (gun_type == 1) {
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
                AMMO_BRRRRRRRR += -1
                music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            }
        }
        if (gun_type == 2) {
            if (0 < AMMO_BRRRRRRRR) {
                AMMO_BRRRRRRRR += -1
                if (right == true) {
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
                        . . . 5 4 . . . . . . . . . . . 
                        . . 5 4 e . . . . . . . . . . . 
                        . 5 4 e . . . . . . . . . . . . 
                        5 4 e . . . . . . . . . . . . . 
                        . e . . . . . . . . . . . . . . 
                        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, -100)
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
                        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
                    projectile = sprites.createProjectileFromSprite(img`
                        . 5 . . . . . . . . . . . . . . 
                        e 4 5 . . . . . . . . . . . . . 
                        . e 4 5 . . . . . . . . . . . . 
                        . . e 4 5 . . . . . . . . . . . 
                        . . . e 4 . . . . . . . . . . . 
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
                        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 100)
                } else if (LEFT == true) {
                    projectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . e . 
                        . . . . . . . . . . . . . e 4 5 
                        . . . . . . . . . . . . e 4 5 . 
                        . . . . . . . . . . . e 4 5 . . 
                        . . . . . . . . . . . 4 5 . . . 
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
                        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, 100)
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
                        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, 0)
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
                        . . . . . . . . . . . 4 e . . . 
                        . . . . . . . . . . . 5 4 e . . 
                        . . . . . . . . . . . . 5 4 e . 
                        . . . . . . . . . . . . . 5 4 e 
                        . . . . . . . . . . . . . . 5 . 
                        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, -100)
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
                        . . . . . . . . . . . 4 e . . . 
                        . . . . . . . . . . . 5 4 e . . 
                        . . . . . . . . . . . . 5 4 e . 
                        . . . . . . . . . . . . . 5 4 e 
                        . . . . . . . . . . . . . . 5 . 
                        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, -100)
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
                        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
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
                        . . . 5 4 . . . . . . . . . . . 
                        . . 5 4 e . . . . . . . . . . . 
                        . 5 4 e . . . . . . . . . . . . 
                        5 4 e . . . . . . . . . . . . . 
                        . e . . . . . . . . . . . . . . 
                        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, -100)
                } else if (DOWN == true) {
                    projectile = sprites.createProjectileFromSprite(img`
                        . 5 . . . . . . . . . . . . . . 
                        e 4 5 . . . . . . . . . . . . . 
                        . e 4 5 . . . . . . . . . . . . 
                        . . e 4 5 . . . . . . . . . . . 
                        . . . e 4 . . . . . . . . . . . 
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
                        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 100)
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
                        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 100)
                    projectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . e . 
                        . . . . . . . . . . . . . e 4 5 
                        . . . . . . . . . . . . e 4 5 . 
                        . . . . . . . . . . . e 4 5 . . 
                        . . . . . . . . . . . 4 5 . . . 
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
                        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, 100)
                } else {
                	
                }
                music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
                music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
                pause(1000)
            }
        }
        if (gun_type == 3) {
            if (right == true) {
                if (AMMO_BRRRRRRRR >= 5) {
                    for (let index = 0; index < 5; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                    if (AMMO_BRRRRRRRR == 4) {
                        for (let index = 0; index < 4; index++) {
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
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 3) {
                        for (let index = 0; index < 3; index++) {
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
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
                            AMMO_BRRRRRRRR += -1
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 2) {
                        for (let index = 0; index < 2; index++) {
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
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
                            AMMO_BRRRRRRRR += -1
                            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                        }
                    }
                    if (AMMO_BRRRRRRRR == 1) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
            } else if (LEFT == true) {
                if (AMMO_BRRRRRRRR >= 5) {
                    for (let index = 0; index < 5; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, 0)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                if (AMMO_BRRRRRRRR == 4) {
                    for (let index = 0; index < 4; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, 0)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                if (AMMO_BRRRRRRRR == 3) {
                    for (let index = 0; index < 3; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, 0)
                        AMMO_BRRRRRRRR += -1
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                if (AMMO_BRRRRRRRR == 2) {
                    for (let index = 0; index < 2; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, 0)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                if (AMMO_BRRRRRRRR == 1) {
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
                        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, 0)
                    AMMO_BRRRRRRRR += -1
                    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                }
            } else if (UP == true) {
                if (AMMO_BRRRRRRRR >= 5) {
                    for (let index = 0; index < 5; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                if (AMMO_BRRRRRRRR == 4) {
                    for (let index = 0; index < 4; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                if (AMMO_BRRRRRRRR == 3) {
                    for (let index = 0; index < 3; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                if (AMMO_BRRRRRRRR == 2) {
                    for (let index = 0; index < 2; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                if (AMMO_BRRRRRRRR == 1) {
                    for (let index = 0; index < 1; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
            } else if (DOWN == true) {
                if (AMMO_BRRRRRRRR >= 5) {
                    for (let index = 0; index < 5; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 100)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                if (AMMO_BRRRRRRRR == 4) {
                    for (let index = 0; index < 4; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                if (AMMO_BRRRRRRRR == 3) {
                    for (let index = 0; index < 3; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                        AMMO_BRRRRRRRR += -1
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                if (AMMO_BRRRRRRRR == 2) {
                    for (let index = 0; index < 2; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                if (AMMO_BRRRRRRRR == 1) {
                    for (let index = 0; index < 1; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                if (AMMO_BRRRRRRRR == 1) {
                    for (let index = 0; index < 1; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 100)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                if (AMMO_BRRRRRRRR == 2) {
                    for (let index = 0; index < 2; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 100)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                if (AMMO_BRRRRRRRR == 3) {
                    for (let index = 0; index < 3; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 100)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                if (AMMO_BRRRRRRRR == 3) {
                    for (let index = 0; index < 3; index++) {
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
                            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 100)
                        AMMO_BRRRRRRRR += -1
                        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
            } else {
            	
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rifle, function (sprite, otherSprite) {
    gun_type = 3
    AMMO_BRRRRRRRR = 32
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("assault rifle aquired")
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
    if (true) {
        info.changeLifeBy(-1)
        pause(2000)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    right = false
    DOWN = true
    UP = false
    LEFT = false
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (otherSprite == health_pack) {
        sprites.destroy(otherSprite, effects.halo, 1000)
        if (armor_status == 0) {
            info.setLife(5)
        }
        if (armor_status == 1) {
            info.setLife(8)
        }
        if (armor_status == 2) {
            info.setLife(11)
        }
        if (armor_status == 3) {
            info.setLife(14)
        }
        if (armor_status == 4) {
            info.setLife(17)
        }
        if (armor_status == 4) {
            info.setLife(20)
        }
    }
    if (otherSprite == Armor_upgrade) {
        sprites.destroy(otherSprite, effects.blizzard, 1000)
        if (armor_status < 5) {
            info.changeLifeBy(3)
            armor_status += 1
        } else {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("ammo level maxed out")
        }
    }
    if (otherSprite == ammopack) {
        sprites.destroy(otherSprite, effects.warmRadial, 1000)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("Im reloading", 3000, true)
        music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        pause(200)
        music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        pause(100)
        music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        pause(10)
        music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        AMMO_BRRRRRRRR = 20
    }
    if (otherSprite == christmas_powerup) {
        sprites.destroy(otherSprite, effects.blizzard, 1000)
        AMMO_BRRRRRRRR = 30
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("HOHOHO XMAS BOOST!")
    }
    if (otherSprite == summer_powerup) {
        sprites.destroy(otherSprite, effects.coolRadial, 1000)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        info.changeLifeBy(3)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("slurp")
    }
    if (otherSprite == halloween_powerup) {
        sprites.destroy(otherSprite, effects.disintegrate, 1000)
        music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
        armor_status += 1
        info.changeLifeBy(3)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("MUAHAHAHAHA!!!")
    }
    if (otherSprite == easter_powerup) {
        sprites.destroy(otherSprite, effects.coolRadial, 1000)
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("SUPRiSE!")
        info.changeLifeBy(5)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.ashes, 500)
    sprites.destroy(otherSprite, effects.disintegrate, 1000)
})
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.ashes, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.shotgun, function (sprite, otherSprite) {
    gun_type = 2
    AMMO_BRRRRRRRR = 5
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("shotgun aquired")
})
let revolver: Sprite = null
let assault_rifle: Sprite = null
let shotgun: Sprite = null
let magnum: Sprite = null
let next_gun_spawn = 0
let easter_powerup: Sprite = null
let halloween_powerup: Sprite = null
let summer_powerup: Sprite = null
let christmas_powerup: Sprite = null
let ammopack: Sprite = null
let Armor_upgrade: Sprite = null
let health_pack: Sprite = null
let LEFT = false
let UP = false
let DOWN = false
let right = false
let projectile: Sprite = null
let gun_type = 0
let armor_status = 0
let loaded = 0
let AMMO_BRRRRRRRR = 0
info.setScore(0)
let season = 0
tiles.setCurrentTilemap(tilemap`level4`)
if (season == 0) {
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
        9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
        9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
        9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
        9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
        9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
        9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
        9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
        9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
        9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
        9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
        9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
        9999999999999111111111111111111222111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
        9911199991111911111111111111222222111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
        9111119911111111111111111111222222111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
        9111119111111111111111111112222221111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
        9911111111111111111111111112222111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
        9111111111111111111111111112222111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
        1111111111111111111111111112222222111111111111119999999111111111111119999999999199122211111dd1111111111111111111111111111111111111999999911111111111111999999999
        1111111111111111111111111112222222221111111111111911199111111111111111111999999ddd122211111ddd111111111111111111111111111111111111191119911111111111111111199999
        1111111111111111111111111111122222222211111111111111111111111111111111111199991ddd122211111ddd111111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111222222111222111111222111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111112222111222dddddd222111122212222211111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        11111111111111111111111111111111111222111222dddddd222111122212222211111111111222dddd111111ddddd111111111111112222111111111111111111111111dddddddddd1111111111111
        1111111111111111111ddd1111111111111222111222dddddd222111222222222212221111112222dddd11111ddddddd11122221111222222222dd1111111111111111111dd1d1ddddd1111111111111
        111111111111111111ddddd122211111111222111222dddd1d222111222222221112221111122222ddd222111222dddd112222211112222222222dd111111111111111111dddddd11dd1111111111111
        11111111111111111dddddd1222222111222221112222dddd2222111222222211112222ddd22222dddd222111222dddd2222222111222222222222d111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d11222222222222221112222ddd22222111222222111112222dd222222dddd2221112222dd222222211112222111d2222111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd112222222222221111d2222d222222111222222111111222222222dddddd2221112222d2222221111112221111d2222d11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d1111122222222111111d2222222222dddd222221111111222222221dddddd222111d222222221111111d22222222222211111ddd11111111111dddddddddd1ddddddddd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111d2222222211d11d222221111111122222221dddddd2221ddd22222221dd1111dd222222222222d1111dddd1111111111dddddd11dd1d11dddddd111
        dddd11111d1dd1ddddddddd111ddddd1111111111dd222222d11dddd2222d11111111d2222d11dd1ddd2221ddd222222dddd1111dd22222222222dd1111dddd1111111111dddddddddd1dddd1dddd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddd222ddd11dddd2222d11111111d222dd11dddddd2221dddd2222ddd1d1111dd222211ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11d222dd11111111dddddd11dddddd2221dddd222dddddd1111dd22222ddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dd222222dddddddd11dddddd111dddddddddddddddd1ddddddddd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd12222222dddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
        ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1ddddd222222ddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
        ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1ddddddd2222ddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
        ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbdddd222bbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbdddd222bbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbdddd222bbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddd222bbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbddd2222bbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbddd2222bbbbbd22222ddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbddd222bbbbbbd22222222ddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
        dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbddd222bbbbbb22222222222ddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbddd222bbbbb2222222222222dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbddd222bbbbb2222bddd22222bbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbddd222bbbbb2222bdddd2222bbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbddd222bbbbb222dbddddb222dbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbd222bbbbbddd222bbbbb222bbddddb222bbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbd222bbbbbddd222bbbbb222dbddddb222bbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbd222bbbbbddd222bbbbb222bbbbdb2222bbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbb222bbbbd22222bbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbb222bbb222222bbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbb222222222222bbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbb22222222222bbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbb22222222bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
        bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
        bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
        bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
}
if (season == 1) {
    scene.setBackgroundImage(img`
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7778887777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777788888777777777777777777777777777777777777
        7788887777777777777777777777777777777777777777777777777777777777777777777777788877777777777777777777777777777777777888888888877777777777777777777777777777777777
        7788887777777777777777777777777777888777777777777777888877777777777777777788888877777777777777777777777777777777777888888888888777777777777777777777777777777777
        7888877777777777777788877777777778888777777777777788888877778888888888888888888877777777777777777777777777777777777888888788888877777777777777777777777777777777
        7888877777777777777888877777777778888777777777778888888877778888888888888888888877777777777777777777777777777777777777777778888888777777777777777777777777777777
        7888877777777777888888877777777778888877777777778888888777778888888888888888777777777777777777777777777777777777777777777777788888877777777777777777777777777777
        7888777777777788888888877777777788888877777777788888777777777777788877777777777777777777777777777777777777777777777777777777778888877777777777777777777777777777
        7888777777788888888887777777777788888877777777788887777777777777788877777777777777777777777777777777777777777777777777777777777788887777777777777777777777777777
        8888777777788888887777777777777888888877777777788888887777777777788887777777777777777777777777777777777777777777777777777777777788887777777777777777777777777777
        8888777777788877777777777777777888888887777777788888888887777777788887777777777888877777777777777777777777777777777778777777777778887777777777777777777777777777
        8887777777788877778888877777778888788887777777777888888888877777778887777777788888888888777777777777777777777777777778777777777778888777777777777777777777777777
        8887777777788877888888877777778888778888777777777777888888887777778887777777888888888888877777777777777778888888777778777777777778888777777777777777777777777777
        8887777777788878888888877777788887778888777777777777777888888777778887777778888888888888887777777788877888888888777778777777777777888877777777777777777777777777
        8887777777788878888877777777888887777888777777777777777778888777778887777888888777777788887777777788878888888888777778777777777777888887777777777777777777777777
        8887777777788878887777777777888888777888777777777777777778888777778887777888887777777788887777777788888888877777777778777777777777788887777777777777777777777777
        8887777777788877777777777778888888887888777777777777777778888777778887777888877777777888887777777788888887777777777778777777777777778888777777777777777777777777
        8886677777788867778888877778888888888888877667777777776788888777778887777888777777788888877777677788888877777777777778777776677777778888777777777777777777777777
        8888777777788888888888877778887888888888866677777777766888888777778887777888776788888888777776677788888877777777777778677666777777777888777777777777777777777767
        8888766777688888888888877777777777888888876776888888888888876677778887777888776688888887776677667788888777777777777778667767766777667888777766777777777777777766
        8888667767788888888866777777777777776688866666888888888888876677778887777888667688888677677667667788888777777777777768766666667767766888776766777777777777776676
        6888677766788886766667777777777777666688866667888888888888666777778887777888867766666777667666667688887777777777776666776666677766766888766667777777777777666677
        6888876666666676666677767777776667776688866667666666667666667776778887666888888766666766666666766688887677777766677766676666676666666888666677767777776667776667
        6888886666666776677666667766677766777688866666666666677667766666778887776688888866666666666667766788886677666777667776666666666666666888677666667766677766777666
        6688888666666766667766677677667766666688866666666666676666776667767766776668888888888886666667666688886776776677666666666666666666666888667766677677667766666666
        66b888888866666666666667667776676666666666b6666666666666666666676677766766668888888888866666666666888667667776676666666666b6666666666888666666676677766766666666
        66b8888888886666666666666b6776666666666666b6666666666666666666666b677666666666888888888666666666688886666b6776666666666666b6666666668888666666666b67766666666666
        66b6688888888666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666688886666bb676666666666666b6666666668888666666666bb6766666666666
        66b6666688888666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666688889966bbb66666666686666b6666666988886666669966bbb666666666666
        66b6666669888b666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666888999666bb66666666666666b66666698888866666999666bb666666666666
        6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb66696688888bb69666d9966bb666666666666
        6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d9888889bbb9966d9966bbb66666666666
        6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd98888996bb99ddd96666bb66666666666
        bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb66688888d996bb99dd99669dbbb6696666666
        bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbd8888888d999bbb9dd999996bbb6699966666
        bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666b8888888889d9999bb9dd9999d6bbb9699666666
        bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966b888888899d99999bbbdd9999d9bbb9999669966
        bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996b88888d999d999999bbdd9999d9bbbb9999d9996
        bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
        bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
        bb99dddd9998888888dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
        bb99ddd99888888888ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb988888bb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
        bb99ddd99888888888ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbb888888bb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
        b9999dd9888889999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddb88888888bbb999d99bb9998889999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
        b9999ddd888899999dd99999bbbbbbbbb999d99bb9999ddd988899999dd99988888bbbbbb999d99bb999888d999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
        b9999dd8888999999dd999999bbbbb888999d9bbb9999dddd88899999dd8888888bbbbbbb999d9bbb999888dd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
        b9999d8888899999ddd9999999bbbb888999dbbbb9999ddd88889999ddd8888889bbbbbbb999dbbbb9998888dd999999ddd9999999bbb888b999dbbbb8889ddddd999999ddd9999999bbbbbbb999dbbb
        dd99998888dd9999ddd999999999bb888999bbbbdd99999d88889999ddd888889999bbbbb999bbbbdd998888dddd9999ddd9999999988888b999bbbbd888999ddddd9999ddd999999999bbbbb999bbbb
        9d999988888ddd9ddd9999999999bb88899bbbb99d99999d888ddd9ddd9888899999bbbbb99bbbb99d999888dddddd9ddd99999988888888b99bbbb99888999ddddddd9ddd9999999999bbbbb99bbbb9
        9d9999988888dddddd9999999999bb88899bbb999d999999888ddddddd9888899999bbbbb99bbb999d999888dddddddddd9999888888888bb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
        9d9999998888888dd99999999999bb88899bb9999d999999888dddddd99888999999bbbbb99bb9999d999888ddddddddd999888888888bbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
        9dd99999d8888888889999999999bb88899bbd999dd99999888dddd9999888999999bbbbb99bbd999dd998888dddddd9988888888899bbbbb99bbd888dd99999ddddddd9999999999999bbbbb99bbd99
        99dd9999dd888888888888889999bb88889bbd9999dd9999888ddd99999888999999bbbbb99bbd9999dd98888ddddd88888888889999bbbbb99b888889dd9999dddddd99999999999999bbbbb99bbd99
        99ddd999ddddd888888888888999bb8888bbbdd999ddd999888ddd99999888999999bbbbb9bbbdd999ddd9888ddd8888888888999999bbbbb9b8888889ddd999dddddd99999999999999bbbbb9bbbdd9
        9999dddddddddd9988888888899bbbb8888bb9d99999dddd888ddd9999988899999bbbbbb9bbb9d99999dd888888888888899999999bbbbbb98888889999dddddddddd9999999999999bbbbbb9bbb9d9
        9999dddddddddd9999999888899bbbb8888b99d99999dddd888ddd9999988899999bbbbbbbbb99d99999dd888888888899999999999bbbbbb88888d99999dddddddddd9999999999999bbbbbbbbb99d9
        999999dddddddd9999999988899bbbbb888899dd999999dd888ddd9999988899999bbbbbbbbb99dd999999d88888889999999999999bbbbb888889dd999999dddddddd9999999999999bbbbbbbbb99dd
        d9999999dddddd999999988889bbbbbb88888888d9999888888ddd999999999999bbbbbbbbb9999dd99999988888dd999999999999bbbbb88888999dd9998889dddddd999999999999bbbbbbbbb9999d
        dd9999999ddddd999999888889bbbbbbb888888888888888888ddd999999999999bbbbbbbbb99999dd999999888ddd999999999999bbbb8888899999dd9988899ddddd999999999999bbbbbbbbb99999
        dd9999999ddddd999999888899bbbbbbbb88888888888888888ddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbb88888999999dd9888899ddddd999998888889bbbbbbbb999999
        9d9999999ddddd99988888889bbbbbbbbb999988888888899ddddd99999999999bbbbbbbbb9999999aaaaaa99ddddd99999999999bbbb8888b9999999d9888899ddddd99888888888bbbbbbbbb999999
        9d9999999dddd888888888899bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999aaaaaaa99ddddd99999999999bbbb888bb9999999d9888999ddd8888888888888bbbbbbbbb999999
        9d99999998888888888888999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999aaaaaaaa9ddddd99999999999bbbbbbbbb9999999d88889988888888888889999bbbbbbbbb999999
        9d99999998888888888999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb99999aaaaaaaaa9ddddd99999999999bbbbbbbbb9999999d88888888888888889999999bbbbbbbbb999999
        9dd9999998888889999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb999996667777aaaaddddd99999999999bbbbbbbb9999999988888888888889999999999888888bbb9999999
        9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999a6667766677666ddd99999999999bbbbbbbb99999999888888888dddd9999999998888888bbb9999999
        ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999a6667766677666ddd99999999999bbbbbbbb9999999d88888889ddddd99999999888888888bb9999999
        dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb999aaaaaa766677666add99999999999bbbbbbbb9999999d88899999ddddd99999888888888888889999999
        dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb99aaaaaaaaaaaaaaaaaadd9999999999bbbbbbbb9999999dd9999999dddddd9888888888bbb888888999999
        dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9aaaaaaaaaaaaaaaaaaaaa9999999999bbbbbbbb9999999dd9999999ddddd88888888889bbbb88888999999
        dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb9aaaaaaaaaaaaaaaaaaaaaa9999999999bbbbbbb99999999dd9999999ddddd88888888888bbbbbb888999999
        d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9aaaaaaaaaaaaaaaaaaa6666999999999bbbbbbb9999999dd99999999ddddd88889998888bbbbbbb9999999d
        d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbbaaaaaaaaaaaaaaaaaaa76666999999999bbbbbbb999999ddd99999999ddddd88889998888bbbbbbb999999dd
        d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb666777aaaaaaaaaaa7776666999999999bbbbbbb999999ddd99999999ddddd88889998888bbbbbbb999999dd
        999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb6667776667777766677777aa999999999bbbbbbb99999ddd999999999ddddd88888998888888bbbb99999ddd
        999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb666777666777776667777aaa999999999bbbbbbb99999ddd999999999dddddd8888898888888bbbb99999ddd
        999999999ddddddd999999999bbb888888999ddd999999999ddddddd999999999bbbbbbbaaa77766677777666777aaaa999999999bbbbbbb99999ddd999999999ddddddd888889988888bbbb99999ddd
        999999999dddddddd99999999bbb88888899dddd999999999dddddddd99999999bbbbbbbaaaaaaaaaaaaaaaaaaaaaaaad99999999bbbbbbb9999dddd999999999dddddddd88889999bbbbbbb9999dddd
        999999999dddddddd99999999bbb88888899dddd999999999dddddddd99999999bbbbbbbaaaaaaaaaaaaaaaaaaaaaaaad99999999bbbbbbb9999dddd999999999dddddddd98889999bbbbbbb9999dddd
        999999999dddddddd99999999bbb88888899ddd9999999999d888888888899999bbbbbbbaaaaaaaaaaaaaaaaaaaaaaaad99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
        9999999999dddddddd999999bbbb88888899ddd9999999988888888888888899bbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaadd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
        d999999999dddddddd999999bbb8888888ddddddd99999888888888888888899bbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaadd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
        ddddd99999dddddddd999999bbb8888888dddddddddd88888888d88888888899bbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaadd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
        dddddddd99ddddddddd999ddbbb8888888ddddddddd8888888ddddddddd888ddbbbbbbbb66667aaaaaaaaaaaaaaaaaaaddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
        ddddddddddddddddddd9ddddbbb8888888ddddddddd88888ddddddddddd888ddbbbbbbbb6666777aaaaaaaaaaaaaaaadddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
        ddddddddddddddddddddddddbbb888888bddddddddd8888dddddddddddd888ddbbbbbbbb66667777a666aaaaaa77666dddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
        ddddddddddddddddddddddddbbb888888bdddddddd8888ddddddddddddd888ddbbbbbbbb666677777666aaa66677666dddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
        dddddddddddddddddddddddbbbb888888bdddddddd8888ddddddddddddd888dbbbbbbbbb6666a777766677766677666ddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
        dddddddddddddddddddddddbbbb88888bbbddddddd888dddddddddddddd888dbbbbbbbbbbaaaaa777666777666777adddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbb88888bbbddddddd888ddddddddddddd8888dbbbbbbbbbbaaaaaaaa666777666aaaadddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbb88888bbbddddddd888ddddddddddddd8888dbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbb88888bbbddddddd888ddddddddddddd8888dbbbbbbbbbbbaaaaaaaaaaaaaaaaaadddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        ddddddddddddddddddd7777777888888bbbddddddd888dddddddddddd888877777777bbbbbaaaaaaaaaaaaaaaaadddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
        dddddddddddddd77777777777788888877bddddddd8888dddddddd77788887777777777777baaaaaaaaaaaaaaddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
        ddddddddddd7777777777777778888887777dddddd8888ddddd7777888887777777777777777daaaaaaaaaadddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
        dddddddd777777777777777777888888777777dddd888888777777888888777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
        ddddd77777777777777777777788888877777777ddd8888887777888888777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
        7777777777777777777777777788888877777777777788888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777788888888777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
}
if (season == 2) {
    scene.setBackgroundImage(img`
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555444444444444555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffff5555555555555544444444444444444444444444444455555555555555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffffff555554444444444444444444444444444444444444445555555555555555
        55555555555ffffff555555555555555555555555555555555555555555555555555555555555555555555555ffff555ffff444444422444444444444444444444444444444444445555555555555554
        444444444ffffffff555555555555555555555555555555555555555555555555555555555555555555fff555ffff554ffff444444422222222222222444444444444444444444444555555555554444
        444444444ffffffff455555555555555555555555555555555555555555555555555555555fff55555ffff544ffff444ffff44444442d111111111112244444444444444444444444444444444444444
        444444444ffff4444444444455555555555555555555555555555555555555555555555555ffff54ffffff444fffffffffff444222221111111111111224444444444444444444444444444444444444
        444444444ffffff4444444fff4444fff555555ffffff5555555555555555555555fff55555ffffffffffff444ffffffff444222dd1111111111111111122244444444444444444444444444444444444
        444444444ffffffff44444fff444ffff444fffffffff555fff5555555fff555555fff55444fffffffffff4444ffff444ffffd11111111111111111111111222222444444444444444444444444444444
        4444444444fffffff44444fff444ffff444fffffffff444ffff5555fffff555555fff444444fffffff4444444ffff42fffff111fff111111111111111111111112222222222444444444444444444444
        4444444444444ffff44444ffff44ffff444ffffff444444ffff444ffffff444444fff4444444fffff44444444fffffffffff111fff1111111111111111111111111111111d2222222244444444444444
        44444444fff4fffff44444fffffffff4444fffff44444444fffffffffff4444444fff4444444ffff4444444222fffffffff1111fff111111111111111111111111111111111111dd2222222244442222
        44444444fffffffff44444fffffffff44444fff444444444ffffffffff44444444fff4444444444444222222111fffffff111111111111111111111111111111d1111111111111111dddddd222222ddd
        44444444ffffffff4444444ffffffff44444fff4444444444fffffff4444444444fff44444444442222111111dddd11111111111111111111111111111111111111111111dd1111111ddddddddddddd1
        44444444fffffff444444444ffffff444444fff4444444444ffffff4444444444444444422222222d111111ddd111111111111111111111111111d11111111dd111dd11111111111111111111dddd111
        444444444444444444444444444444444444fff444444444444444444444444444444222211111111111111111111111111111111111111d111d1111ddddddddd111111111ddddd111ddddddddd11111
        44444444444222444444444444444444444444444444444444444444442222222222211111111111111d1111111111dddddd11111dddd1ddddddddddddddddddddd1111dd111111111ddddddd1111111
        444444422221d2244444444444444444444444444444444442222222221111111111d111d11111111111111111111111dddd1111dddddddddddddddddddddddddd111111111111dddddddddd11111111
        444442111111111222224444444444444444444422222222d1111dddd11111111111ddddd11111111111111111111111111111ddddddddddddddddddddddddddd111111dddddddddddddddd11111111b
        2222211111111111112222224444444422222222d111111d11111ddddddddddddddddddddddddddddddddddddd11111111111ddddddddddddddddddddddddddddd11ddddddddddddddddd11111bbbbbb
        1ddd1dd11111ddd11111112222222222d11111111111111dddddddddddd11111111ddddddddddddddddddddddddddd1111111dddddddddddddddddddddddddddddddddddddddddddddd11111bbbbbbbb
        ddddddddd11dddddd11111111111dd1111111111dddddddddddddd1111111111111111ddddddddddddddddddddddddddd111111ddddddddddddddddddddddddddddddddddddddddddbbb1bbbbbbbbbbb
        dddddddddddddddddddddd1111111d1dddddddddddddddddd1111111111111111111111111dddddddddddddddddddddddddd11111111ddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbb
        111111ddddddddddddddddddddddddddddddddddddddb111111111111111111111111111111111dddddddddddddddddddddddddd111111dddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb
        1111111111dddfffddddddffffffdddddddddddddb111111111111111111111111111111111b1111ddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb11b
        1111111111111fffdddddfffffffffddddddddb1111111111111111111111bbb11111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb1111111
        1111111bbb111fffddddfffffffffffdddddbb1111111111111111bbbbbb111ffffffffff1111111111111bbbddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbb1111111111111
        bbbb111bbbbbbfff11ddffffffffffffbbb11111111b111bbb11bbbbbbbbbffffffffffff11bb1111b111111111bbddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbb111111111111111
        bbbbbbbbbbbbbfff111fffffdddbffffbbb1111bbb111bbbbbbbbbbbbbbbbffffffffffffbbbbbb1111b1111111bbbbbbbbdddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb11111111111111111
        bbbbbbbbbbbbbfffbb1ffffbbbbbbffffbbbbbbbbb11bbbbbbbbbbbbbbbbbffffbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbdddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbc1111111111111111111
        bbbbbbbbbbbbbfffbbbffffbbbbbbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc1111111111111111111c11
        bbbbbbbb1b11bfffbbbffffbbbbbbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc11111111111111111111111111
        bbbbb11111111fffb11bffffbbbbbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc11111111111c11111111111111111111
        bbb1111111111fff1111ffffffbbfffffbbbbbbbbbbbbbbbbbbbb11111111111ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc11111111111c11111c111111cc11c11111c
        bb11111111111fff11111ffffffffffffbbbbbbbbbbbbbbbbb111111111111111bbfffbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111ccccccccccc1111c111c11111111c1111cccc11cc11111c
        bb11111111111fff11111fffffffffffbbbbbbbbbbbbbbcc1111111fff111111111fffbbbbfffbbbbbbbbbbbbbbbbbbfffbbbbb111111111111ccccccccccccc11111111c111c1111cccc11cc111111c
        b11111c111111fff1111111ffffffff111111bbbc11111111111111ffffff1cc111fffcbbffffbbbbbbbfffbbbbbbbbffffffffff111111111cc1ccccccccc11111cccccc111111ccccc11ccc11111cc
        b1111ccc1111111111111111111111cc111111ccccccccc11111111fffffffffffffff111ffffbbbbbbffffbbbbbbbfffffffffffffffff1ccccfffffffcccc1cccccccc11c111ccccc111cc11111ccc
        1111dccc111111111111111111111111cccc11cccccccccc11111ccfffffffffffffffc11fff1cccccfffffbccccccfffffffffffffffffccccffffffffccffffffcccc111111ccccccc1ccc11111ccc
        1cccc1111111111111111111c111111111cccccccccccccccccccccccccfffffffffffcccffffcccffffffcccccccfffffccccfffffffffcccffffffffffffffffffccffffffffffcccccccccccccccc
        cccc11111111111111111111111111111111cccccccccccccccccccccccccccccccccccccfffffffffffffccccccfffffccccfffffcffffccfffffcfffffffffffffcffffffffffffccccccccccccccc
        ccc111111111111111111111111111111c111cccccccccccccccccccccccccccccccccccccfffffffffffcccccccffffcccccffffcfffffccfffffcffffffffccfffcffffffffffffcccccccffffffcc
        11c11111c11111c1c1111cc1111111c111c11111cccccccccccccccccccccccccccccccccccfffffffccccccccccffffcccccffffcfffffcfffffccffffcccccffffcfffccccfffffcccffffffffffcc
        1111111ccc111cc1cc111cc111111111111cc111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccfffffccfffcccccfffffcfffffffffffccccffffffffffcc
        111c11ccc1111cc1cc11ccccc111ccc11111cccc1111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccffffcccccccccccffffccffffffffffcccccfffffffccccc
        11cccccccc11cc11cc11cccccc111ccccc11cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccfffffffffcccccffffffccccccc
        ccccccccccccccc1ccc11ccccccc11cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccccccccccfffffcccccccc
        ccccccccccccccc1cccc1cccccccc11cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffccccccfffffcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffccccccffffccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccfffcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffcccccccfffcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc7cccccccccccccccccccc
        cccccccccccccccccccccccccc77cccccccccccccccc7ccccccccccccccccccccccccccccccccccccccccccc777c7cccccccccccc77777ccccccccccccccccc7ccccccc7ccc77ccccc7ccccccccccccc
        7cc7c7777c7c7777c777cc77c777777777777777c777777cccc7777c77777777777777777777777cc7777777777777777777777777777777777777777777777777777cc777777777777777777777c777
        777777777777777777777777e7777777777777777777ee7777777777777777777777777777777777777777eeee777777777777777eeeee77777e77e77ee7777777e777e77777777eeee7777e77777777
        7777e77e7e7ee777e777777777777777777777777777777777777777777777777777777777e77ee7777777777777777777777eeee7e77ee77777777eeee77e77777777e777777777eeeee7777ee77777
        777e7777777777777777777777e7777777e77777777777777777777777777777777777777777777777777777777777777777799999977ee77777777eee777eeee7eee77799999977ee7e777ee7777777
        7777777e77777eee77777777777ee77777777777777777777777777777777777e777777777777777777777777777777777777999999999999999999999999999999999999999997777777777777e777e
        77777777777777e77777777777777eeeee777777777777777777777777777777e777777777777777777777777777777777779999999999999999999999999999999999999999999999777e777777777e
        77777777777777777e77777777777777777777777777777777777e7777777777e7777777777777777777777777777779999999999999999999999999999999999999999999999999997777e77777e77e
        77777777777e777777777777777777777777777777777777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999977777e777777
        7777e77ee777777ee799999999997777777777777777779999977777777e777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999777777e777
        777777777777ee999999999999699999959999999999999999997777777e777777777799999999999999999999999999999999999999999999999999999999999999999999996999999999999777777e
        77e7777777999999999999999999999999549999999999999999977777777777777999999999999999999999999999999999999999999999999999999999999999999999996669999999999999777777
        7e7777e779999999999999999999999999524999999999999999999777777777999999999999999999999999999999999999999999999999999999999999999999999666666666666999999999977777
        7e777e99999999999999999999999559495249999bbbbbbb999999999999999999999999999999999999999999999999999999999999999999999999999999999996666666666666666999999999977e
        77777e9999999999999999999999999554929cccbbbbbbbbbbbb999999999999999999999999999999999999999999999999999999999999966666666666666666666666666666666666699999999777
        777779999999999999999999999999999549ccccbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999999999966666666666666666666666666666666666666669999999777
        77779999999999999999666666666622222cccccbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999996666666666666666666666666666666666666666666999999777
        77e99999999999999966666666666644544ccccbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999996666666666666666666666666666666666666666666666999999777
        ee79999999996666666666666866665562ccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999996666666666666666666666666666666666666666666666666666666666666699999999e77
        7779999999996666666666668666556226ccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999966699996666666666666666666666666666666666666666666666666666666666669999999999777
        7779999999996666666666666666662666cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666666cccccc66666666666666666666666666666666666666666666699999999999999e77ee
        ee799999999996666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666cccccccccc666666666666666666666666666666666669999999999999999699777e77
        e7779999999999666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc6666666666666666666666666666666666999999999999999999977ee777
        e7779999999999999666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc666666666666666666666666666666669999999999999999999777777777
        777e7999999999999966666666666666666cccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666669999999999999999977777777e777
        77777789999999999996666666666666666cccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc6666666666666666666666666666699999999999977e777777eee77777
        77e777e7999999999999666666666666666cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc6666666666666666666666666666999999999777777ee777e777777777
        77e77777799999999999666666666666666666cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc6666666666666666666666666666999999977777777777777777777777
        7777777777e9999999999666666666666666666666cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc6666666666666666666666666666999996eee777777e77777777777777
        e77777e777777999999996666666666666666666666666ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc666666666666666666666666666999997e777e7777e777e77777777777
        ee77777777777799999999666666666666666666666666666cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc6666666666666666666666666669999977777ee777e777e77777777777
        77777777777777799999996666666666666666666666666666666cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc666666666666666666666666666999997ee777e7777e777e7777e7e77e
        7777777777e777799999996666666666666666666666666666666666cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc6666666666666666666666666669999977e777eee7777777e7e7777777
        7777777777e7777999999966666666666666666666666666666666666666cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666999999977eee77ee7777777e7777777
        e77e77777e777999999999666666666666666666666666666666666666666666ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666999999999777777eee7777eee777777
        e77777e777779999999999666666666666666666666666666666666666666666666cccccccccccccbbbbbbbbbbbbbbbbbbbbb666666666666666666666666666669999999999977777777ee777ee7777
        77777e77779999999999996666666666666666666666666666666666666666666666666cccccccccccccbbbbbbbbbbbbbbbbb6666666666666666666666666666669999999999999977777e777777777
        777e7779999999999999966666666666666666666666666666666666666666666666666666ccccccccccccbbbbbbbbbbbbbbbb666666666666666666666666666666999999999999999999999997777e
        e7e699999999999999996666666666666666666666666666666666666666666666666666666666ccccccccbbbbbbbbbbbbbbbb6666666666666666666666666666666699999999999999999999999996
        7799999999999999999966666666666666666666666666666666666666666666666666666666666666cccccbbbbbbbbbbbbbbb6666666666666666666666666666666669999999999999999999999999
        999999999999999999966666666666666666666666666666666666666666666666666666666666666666cccbbbbbbbbbbbbbbb6666666666666666666666666666666669999999999999999999999999
        999999999999999999666666666666666666666666666666666666666666666666666666666666666666cccbbbbbbbbbbbbbbb6666666666666666666666666666666666699999999999999999999999
        999999999999999966666666666666666666666666666666666666666666666666666666666666666666cccbbbbbbbbbbbbbbbb666666666666666666666666666666666666666666669999999999999
        999999999999999666666666666666666666666666666666666666666666666666666666666666666666ccccbbbbbbbbbbbbbbb666666666666666666666666666666666666666666666666666666666
        999999999996666666666666666666666666666666666666666666666666666666666666666666666666ccccbbbbbbbbbbbbbbb666666666666666666666666666666666666666666666666666666666
        9999999966666666666666666666666666666666666666666666666666666666666666666666666666666cccbbbbbbbbbbbbbbb666666666666666666666666666666666666666666666666666666666
        9999996666666666666666666666666666666666666666666666666666666666666666666666666666666cccbbbbbbbbbbbbbbb666666666666666666666666666666666666666666666666666666666
        9999966666666666666666666666666666666666666666666666666666666666666666666666666666666ccccbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666
        9999666666666666666666666666666666666666666666666666666666666666666666666666666666666ccccbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666
        99966666666666666666666666666666666666666666666666666666666666666666666666666666666666cccbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666ccccbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666ccccbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666cccbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666cccbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ccccbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ccccbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666cccbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666aaaaaa6666666666666666666666666666666666666666666666666666666666aaaaaaaaaaaaaaaaaaaaaa66666666666666666aaaaaaaaaaaaaaaaaaaa66666666666666666666
        6666666666666aaaaaaaaaaaaaa6666666aaaaaaaaaaaaaaaa666666666666666aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa666666666666666
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa666666
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa6
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa6
        `)
}
if (season == 3) {
    scene.setBackgroundImage(img`
        9966669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        6666699999666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        6666999966666999999999999966669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        6666999966666999999999999666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        6669999966666999999999999666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        6666999966699999999999999666669999999999999999999999999999999999999999999999999999999999996669999999999999999999999999999999999999999999999999999999999999999999
        6666999666699999999999999666666999999999999966669999999999999999999999999999999999999999996669999999999999999999999999999999999999999999999999999999999999999999
        6666699666699999999999996666666699999999996666669999999999999999999999999999999999999999996669999999999999999999999999999999999999999999999999999999999999999999
        6666669666999999999999996666666699999999666666669999999999999999999999999999999999999999996666999999999999999999999999999999999999999999999999999999999999999999
        6666666666999999999999996669966699999996666666669999999999999999999999999999999999999999996666699999999999999999999999999999999999999999999999999999999999999999
        6666666666966666666999966669966699999966666666669999999999999999999999999999999999999999999666699999999999999999999999999999999999999999999999999999999999999999
        6669666666966666666999966669966699999666669966699999966669999999999999999999999999999999999966669999999999999999999999999999999999999999999999999999999999999999
        6669666669966666666999966699966699996666699666699999966666669999999999999999999999999999999966666999999999999999999999999999999999999999999999999999999999999999
        6669966666999999999999666699966699996666699666699999666666666699999999999996666999999999999996666699999999999999999999999999999999999999999999999999999999999999
        6669966666699999999999666699966669966669999666999966666666666666699999999666666999999999999999666699999999999999999999999999999999999999999999999999999999999999
        6669666666699999999999666999966669666669999666999666666999666666699999996666666999999999999999966699999999999999999999999999999999999999999999999999999999999999
        6669666666669999999996666999996666666699996666996666669999999666699999966666699999999999999999966669999999999999999999999999999999999999999999999999999999999999
        6666666966666999999996666999996666666999996666996666999999999666699999666666999999999999999999966669999999999999999999999999999999999999999999999999999999999999
        6666666996666699999996669999996666669999966669996666999999966666699999666699999999999999999999996669999999999999999999999999999999999999999999999999999999999999
        6666669999666669999996669999996666699999966669996669999999966666699999666669999999999999999999996669999999999999999999999999999999999999999999999999999999999999
        6666699999966669999996669999999666699999966699996666999996666666699999666666666999999999999999996666999999999999999999999999999999999999999999999999999999999999
        6666699999996669999999999999999666699999966699996666999966666666699999666666666666999999999999996666999999999999999999999999999999999999999999999999999999999999
        6666699999999999999999999999999999999999966699999666699666666966669999999666666666699999999999999666999999999999999999999999999999999999999999999999999999999999
        6666999999999999999999999999999999999999966699999666666666699966669999999999966666699999999999999666999999999999999999999999999999999999999999999999999999999999
        6666999999999999999999999999999999999999966699999666666666999996669999999999999666699999999999999666999999999999999999999999999999999999999999999999999999999999
        9666699999999999999999999999999999999999999999999996666669999996666999999999999966699999999999999666999999999999999999999999999999999999999999999999999999999999
        9666669999999999999999999999999999999999999999999999999999999996666699999999999966699999999999999666999999999999999999999999999999999999999999999999999999999999
        9666669999999999999999999999999999999999999999999999999999999999666699999999999666699999999999999666999999999999999999999999999999999999999999999999999999999999
        9966669999999999999999999999999999999999999999999999999999999999966699999999966666699999999999996666999999999999999999999999999999999999999999999999999999999999
        9996669999999999999999999999999999999999fffff9999999999999999999999999999999966666999999999999966666999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999ffffffff999999999999999999999999999999966669999999999966666666999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999fffffffffff999999999999999999999999999999999999999999996666666669999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999ffffffffffff999999999999999999999999999999999999999999966666666999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999ffffffffffffff999999999999999999999999999999999999999996666666999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999ffffbbfffffffff999999999999999999999999999999999999999996666699999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999ffffbbbffffffff999999999999999999999999999999999999999996666699999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999ffffbbbfffffff999999999999999999999999999999999999999996669999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999ffffbbfffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999fffcbfffffff299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999bffffffffff22ff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999992effffff222ffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999ff22222222ffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999cffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999fbbfffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999fbbfffffffffff111999999999999999999999999999996669999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999fffff11111111111999999999999999999999999996666669999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999911111111111111199999999999999999999999996666669999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999991111ff111ff111199999999999999999999999996666699999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999ee99999999999991111ff111cf111199999999999999999999999996669999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999e999999999999911114444111111199999999999999999999999996666999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999eb999ee99999999999914444444111111199999999999999999eb9999996666699999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999eeeb9e999999999999111111111111119999999999999999ee999999999666669999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999beeeee99999999999111f1111111f11229999999999999ee9999999999966666999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999eee99999999999b2111f1f1f111122299999999999ee99999999999996666669966699999999999999999999999999999999999999666999999999999999999999999999999
        99999999999999999999999ee99999999922221111111111222299999999999eeeee99999999999666669966699999999666999999996666999999999999999666999999999999999999999999999999
        999999999999999999999999e99999999e2222b11111111222229999999999eee99999999999999966669966699999999666999999666666999999999999999666999999999999999999999999999999
        9999999999999999999999999ee999999e22222be222e222222e9999999eeec9999999999999999996669966699999999666999666666666999999999999999999999999999999999999999999999999
        99999999999999999999999999eee9999ee22222e222ee22222199999eeee999999999999666669666669966699999996666999666666699999999999966699999999999999999999999999999999999
        999999999999999999999999999eeeb991e2222222222e2222e1199eeee99999999999999666666666669966699999966666999666666999666999999666699999999999999999999999999999999999
        9999999999999999999999999999eeee111e222e22222e222e1119eee9999999999999999666666666699966669999666669996666669999666699999666699666999999999999999999999999999999
        999999999999999999999999999999eee111e22e22222e22ed1eeeee99999999999999999996666669999966669666666699996666669999666699996666996666999999999999999999999999999999
        9999999999999999999999999999999eee111e22e2222e2eee1bee9999999999999999999999999999999966666666666999996666699999666669966666996666999999999999996669999999999999
        99999999999999999999999999999991ee11e222ee22ee222e11e11999999999999999999999999999999996666666669999996666999999966669666669996669999966699999966669999999999999
        99999999999999999999999999999991e111e222221e22222e11111999999999999999999999999999999999666669999999996666999999996669666699996669999966699999666669999999999999
        999999999999999999999999999999911111e222221ee2222e11111999999999999999999999999999999999999999999999996666999999996666666999996669999966699999666669966666669999
        99999999999999999999999999999991111e22222e11e2222e11111999999999999999999999999999999999999999999999996669999999996666666999996669999966699996666699666666669999
        9999999999999999999999999999999111ee22222e1fe2222e11119999999999999999999999999999999999999999999999996669999999999666669999996669999966699966666996666666669999
        9999999999999999999999999999999113e222222e1fe2222e11119999999999999999999999999999999999999999999999999999999999999666699999996669999966669666669996666696669999
        999999999999999999999999999999991e222222ee11e2222e11119999999999999999999999999999999999999999999999999999999999999666699999996669999966666666699966669966669999
        999999999999999999999999999999991e222222e1112e222ee1199999999999999999999999999999999999999999999999999999999999999999999999996669999996666666999966666666669999
        99999999999999999999999999999999e2222222e111de2222e11bb999999999999999999999999999999999999999999999999999999999999999999999996669999996666669999966696666669999
        999999999999999999999999999999911e222212e11f1e22222e1bb999999999999999999999999999999999999999999999999999999999999999999999996669999996666699999966666666999999
        9999999999999999999999999999911bbeb21212e11c1e22222ebd1199999999999999999999999666999999999999999999999999999999999999999999999999999999666999999966666999999999
        99999999999999999999999999991111bebbbbb1e1111e12222e111119999999999999999999999666999999999999999999999999999999999999999999999999999999666999999966666666666999
        99999999999999999999999999991111111bbbb111111e12222e111111999999999999999999999666999999999999999999999999999999999999999999999999999999999999999999666666666999
        99999999999999999999999999911111111111bbbbbbb2b2eb2e111111999999999999999999999666999999999999999996666669999999999999999999999999999999999999999999966666666999
        999999999999999999999999999111111111111111bbb2b21121111111199999999999999999999666999999999999966666666666669999999999999999999999999999999999999999999999999999
        9999999999999999999999999991111111111111111111121111111111199999999999999999999666999999999999666666666666666699999999999999999999999999999999999999999999999999
        9999999999999999999999999991111111111111111111111111111111199999999999999999999666999999999996666666696666666669999999999999999999999999999999999999999999999999
        9999999999999999999999999911111111111111111111111111111111199999999999999999999666999999999996666999999999666666999999999999999999999999999999999999999999999999
        9999999999999999999999999911111111111111111111111111111111199999999999999999996666999999999996669999999999966666999999999999999999999999999999999999999999999999
        9999999999999999999999999911111111111111111111111111111111199999999999999999996666999999999966669999999999996666999999999999999999999999999999999999999999999999
        9999999999999999999999999911111111111111111111111111111111199999999999999999996669999999999966669999999999999666999999999999999999999999999999999999999999999999
        9999999999999999999999999911111111111111111111111111111111199999999999999999996669999999999966699999999999999666999999999999999999999999999999999999999999999999
        9999999999999999999999999991111111111111111111111111111111199999999999999999996669999999999966699999999999999666999999999999999999999999999999999999999999999999
        9999999999999999999999999991111111111111111111111111111111199999999999999999996669999999999966699999999999996666999999999999999999999999999999999999999999999999
        9999999999999999999999999999111111111111111111111111111111199999999999999999996669999999999966699999999999996666999999999999999999999999999999999999999999999999
        9999999999999999999999999999911111111111111111111111111111999999999999999999966669999999999966699999999999996666999999999999999999999999999999999999999999999999
        9999999999999999999999999999911111111111111111111111111111999999999999999999966669999999999966699999999999966669999999999999999999999999999999999999999999999999
        9999999999999999999999999999991111111111111111111111111118888888999999999999966699999999999966669999999996666669999999999999999999999999999999999999999999999999
        9999999999999999999999999999999111111111111111111111111188888888899999999999966699999999999966666699999666666699999999999999999999999999999999999999999999999999
        9999999999999999999999999999999111111111111111111111111888888888899999999999666699999999999996666666666666666999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999911111111111111111111188888888888899999999999666699999999999996666666666666669999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999991111111111111111111888888888888899999999999666999999999999999966666666669999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999911111111111111168888888888888999999999999999999999999999999999999999999999999666999999999999999999999999999999999999999999999
        9999999999999999999999999999999999998888868888888888888888888889999999999999999999999999999999999999999999999999666999999999999999999999999999999999999999666999
        9999999999999999999999999999999999998888888888888888888888888889999999999999999999999999999999999999999999999999666999999999999999999999999999999999999999666999
        9999999999999999999999999999999999999999888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996666999
        9999999999999999999999999999999999999999988888888888888888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996666999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996669999
        9999999999999999999999999999999999999999999999999999999999999999999999999996666666699999999999999999999999999999999999999999999999999999999999999999999996669999
        9999999999999999999999999999999999999999999999999999999999999999999999966666666666666699999999966666666999999999666999999999999999999999999999999999999996669999
        9999999999999999999999999999999999999999999999999999999999999999999999666666666666666699999999666666666999999999666999999999666666999966669999999999999996669999
        9999999999999999999999999999999999999999999999999999999999999999999996666666699996666699999996666666666999999999666999999966666666999966669999999999666996669999
        9999999999999999999999999999999999999999999999999999999999999999999996666999999999666699996666666999666999999999666999996666666666699966666999999996666996669999
        9999999999999999999999999999999999999999999999999999999999999999999996669999999966666699996666669999666999999999666999666666666666699996666999999666666996669999
        9999999999999999999999999999999999999999999999999999999999999999999996669999996666666999996666699999666699999999666666666666699966699999666699996666669996669999
        9999999999999999999999999999999999999999999999999999999999999999999996666996666666669999996666699999666669999999666666666669999966669999666666966666699999999999
        9999999999999999999999999999999999999999999999999999999999999999999996666996666666999999996666699999666669999966666666666669999966669999966666666666999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999666696666699999999996666999999996669966666666669996666999966669999996666666699999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999666699999999999999996666999999996669666666666999996666699666669999999666666699999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999966669999999999999996666999999999999666666666999999666666666669999999996666999999999666999
        9999999999999999999999999999999999999999999999999999999999999999999999966666999999999999996666999999999996666996666999999666666666699999999996666999999999666999
        9999999999999999999999999999999999999999999999999999999999999999999999996666666999999999999999999999999996666666666999999966666666999999999966669999999999666999
        9999999999999999999999999999999999999999999999999999999999999999999999999666666666999999999999999999999996666666669999999999999999999999999666669999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999966666666999999999999999999999999666666669999999999999999999999999666699999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999666666999999999999999999999999966666699999999999999999999999999666699999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `)
}
if (season == 4) {
    scene.setBackgroundImage(img`
        fffffffcbccffffffffffcfbddddddddddd111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffcddffffffcfcfffff
        fffffffccffffcffffffbfddddddddd11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccdbffffffffffffff
        fffffffcffffffbffffffddddddddd1111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffcbfffffffffffcdcf
        ffffffcffffffffbdffffddddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffdfbfffffff
        fcfffffffcdcdffdffffcdddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbffffffdffffffff
        fffffffffdbddcffffffddddd1111111111111111111111111111111111111111111dddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcfffffcfffbfff
        fcffffbffbffffffffffddddd111111111111111111111111111111111111111111d11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdcfffffffffbffff
        fcbffffffcffffffffffdd4444411111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffffffffff
        fdcccffffdbffcffffdddd444441111111444441cc1111111111111111111111111d111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffff
        fffffffffffffffffddd1144444111111144444cccc1111111111111111111111111144444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfcfffffffffffff
        fffffffffffffffffdd11144444111111144444cccc1111111111111111111111111144444dd1d44444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffffff
        fffffffddcffffffddd11144444111111144444ccccc11111111111111111111111114444411dd44444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffff
        fffffffdddbffffdd1111144444111111144444ccccc111111111111111111111111144444111d44444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffcffffffffff
        ffffffcbfcccfffdd1111144444444411444444cccccc11111111111111111111111144444111144444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfffffffffffff
        fffffffffcfffffd11111144444444444444444ccc44444444441111111111111111444444111144444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffff
        ffffffffdfcffff111111144444444444444444cc444444444444444111111111111444444111144444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfbfffcfffffff
        ffffffffcfbfff1111111144444444444444444cc444444444444444411111111111444444111144444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfffdffffffff
        fffffffcdcdfff1111111144444444444444444444444444444444444444111111cc444444111144444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffff
        fffffbfffcdfff11111111444444444444444444444444444444444444441c1111cc444441111444444ddddddd44444dddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
        fccffdcbfbdffff11111114444441111114444444444444c444444444444ccc111c4444441111444444dddd44444444dddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
        fffcffcdfbdfffff111111144444111111444444444444cccc1144444444ccc11cc44444411114444441dd4444444444444dddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
        ffddfffbbbddffff11111114444411111144444444444ccccc1114444444ccc11c144444411114444441d444444444444444ddd44444dddddddddddddddddddddddddddddddddddddddcfccfffffffff
        cfdffffbcdd11fff11111114444411111144444444444cccc44444444444ccccccc4444441111444441114444444444444444dd444444dddddddddddddddd444444ddddddddddddddddbfcdfffffffff
        ffffffccdd111fff11111114444411111144444444444444444444444444ccccccc4444411111444441114444444444444444dd444444dddddddddddddddd444444ddddddddddddddddccfbfffffffff
        ffcfffbdb1111ffff11111144444111111444444444444444444444444444cccccc4444411111444441114444444d44444444dd444444ddddddddddddddd4444444bbdddddddddddddddcfdbffffffff
        fffffcddddd11fffff111111111111111144444c444444444444444444444cccccc444441111444444111444444ddd4444444dd4444444ddd44444dddddd4444444bddddddddddddddddbfcfffffffff
        fffffbdddd1111fffff11111111111111144444c4444444444444444444444ccccc44444111144444411d44444dddd4444444ddd4444444d444444ddddd44444444bdddd4444ddddddddcfcfffffffff
        ffffcbddddd1111fffff1111111111111144444cc444444444444114444444ccccc44444111144444411d444444ddd4444444ddd444444444444444ddd44444444bddd44444444dddddbcfffffffffff
        fffccddddd111111ffff1111111111111111ccccccc4444444111114444444ccccc44444111144444411d4444444444444444ddd4444444444444444dd4444444dbd4444444444ddddbbffffffffffff
        ffdcbddddd1111111fff1111111111111111cccccccccccc11111111444444cccc111111111144444111d444444444444444ddddd444444444444444444444444db444444444444ddddbffffffffffcf
        ffccddddddd11111111111111111111111111cccccccccc111111111144444cccc1111111111444441111444444444444444dddddd4444444444444444444444dd444444dbb4444dddb4444444ffffff
        ffcbdddddd1111111111111111111111111111cccccccc11b11111111ccccccccc111111111111bb1111d44444444444444ddddddd444444444444444444444bdd44444ddbbd444ddd444444444fffff
        ffcbddddd111111111111111111111111111111cccccccbccccccc111ccccccccc1111111111111b1111dd444444444444dddddddd444444444444444444444bbd4444444444444dd4444444444fffff
        fcbbdddddd1111111111cccb1ccc1111cccc111ccccccccccccccccc1ccccccccc1111111111111b1111dddddddddddddddddddddd444444444d4444444444dbbb4444444444444dd4444ff4444fffff
        fcddddddd1111111111ccccb1cccc11ccccc111cccccccccbbccbbbccccccccccc1111111111111b111dddddddddddddddddddddddd44444444dd44444444ddddb444444444444db44444444444fffff
        ccddddddd1111111111cccccbcccc11ccccc111cccccccccbbcccbbccccccccccc111111111111111111ddddddddddddddddddddddd4444444dddd444444dddddd4444ddddbbddbb44444444444fffff
        ddddddddd1111111111ccc1ccccccccc1ccc111ccccccccccccccccccccccccccc1111111111111b111bdddddddddddddddddddddddd44444ddddd444444dddddd44444dddbddbbb444444444fffffff
        dddddddd111111144444441ccc11cccc1ccc111ccccccccc1111cccccccccccccc1111111111111b111bddd1dddddddddddddddddddddbdddbdddd44444dddddddd444444dbbbbbb4444444fffffffff
        dddddddd111111444444444444bcccccccccc11cccccccc1111111cccccccccccc1111111111111b111bddd1dddddddddddddddddddddbddbbdddddddddddddddddb44444bbbbbbb444fffffffffffff
        dddddddd111111444444444444444ccccccc111ccccccc1111b1111ccccccccccc1111111111111b1dbb1ddddddddddddddbbbbddddddbddbdddddddddddddddddddb4444bbbbbbb4444ffffffffffff
        dddddddddd111444411c444444444cccccc1bb1ccccccc1111bb111ccccccccccc11111b1111111b1dbbdddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbbbbb4444ffffffffffff
        dddddddddd1144444111cccc44444ccccccccccccccccc111111111cccccccccccbb11111111111b1db1dddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbbbbc44444fffffffffff
        dddddddddd11444411111cccccccccccccbccbbccccccc1111111b1cccccccccccbbbb111111111b1db1ddd1ddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbbbcbb4444fffffffffff
        ddddddddd1d14441111111ccccccccccccbbcbbccccccc1111111b1cccccccccccc1b1111111111bbbddddd1dddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbbccbc4444fffffffffff
        ddddddddd1d14444111111ccccccccccccbccbcccccccc111111bb1cccccccccccc111111111111bbbdddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbbbbbcffffffffffffffff
        ddddddddd1d14444441111cccccccccccccccccccccccc1111111bbcccccccccccc11111111111bbbdddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbccfffffffffffffffff
        ddddddddddddd444444111cccccccccccc111d1cccccccd1d1111bbcccccccccccc11111111111bbb1ddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbbccffff444fffffffff
        dddddddddddddb44444444ccccccccccccddbccccccccccc1ddddbccccccccccccc11111111bb1bb11dddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffff444fffffffff
        ddddddddddddddbd4444444cccccccccccccccccccccccccbcccccccccccccccccb1d111111bbbbbdddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffff444f444444ff
        ddddddddddddddbb14444444cccccccccccc444cccccccccccccccccccccccccccd1111b1111bbb11ddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbbbbcffffff44444444444f
        dddddddddddddddb1b1d44444cccccccccc4444ccccccccc444cccccccccccccccc1144444444bb11dddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbbbbbbcfffff44444444444f
        ddddddddddddddddbb1bb4444cccccccccc4444ccccccccc444ccccccc444cccc444444444444bbddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbbbbbcffffff444444444444
        ddddddddddddddddbb1bbd444cccccccccc4444ccccccccc444ccccccc4444444444444444444bbddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbbbbbcfcffff444444fff4444
        ddddddddddddddddbb1b11444cccccccccc4444ccccccccc444ccccccc444444444444411111bbbddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbccffffff44444fffff444
        ddddddd44444ddddbddbd1444cccccccccc44444ccccccc4444ccccccc444444444bb111d111bb444dddddddbbbdddddddbbd444bbbbbddddddddbdbbbbbbbbbbbbbbbbbbbbcfcfffff4444ffffff444
        ddddddd4444444ddbbb111444ccccccccccc44444cccccc4444ccccccc44444ccc1bb1111111bb444dddddddbbbdddddddbdd444bbbbbddddbdddbdbbbbbbbbbbbbbbbbbbbbffffffff4444fffff4444
        ddddddd444444444444444444ccccccccccc4444444cccc444ccccccc44444ccccd1bbb11111bb444ddddddddbbdd444dbbdd444bbbbbdddbbdddbbbbbbbbdbbbbbbbbbbbbcfffffffffffffffff4444
        ddddddddd4444444444444444cccccccccccc44444444c4444cccccc444444cccc111bb11111bb444ddd1ddddbb44444dbbdddddbbbbbdddbbddddddbdddddddddbbbbbbbbcfffffffcfffffffff4444
        dddddddbbdd44444444444444cccccccccccccc44444444444cccccc4444cccccc111bb1111bbb444dddddddd4444444dbbdddddbbbbbddddbdbdddddddddddddddddddddddfffffffffffffffff444f
        dbddddddddbbbbbbbbbbbbcccccccccccccccccc444444444ccccccc4444bcccccb11bb1111bbb444ddddd444444444ddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffff444f
        ddbddbddbbbbbbbbbbbbbbccccccccccccccccccccc444444ccbcccc4444ccccccd11b11111bbb444ddd444444444dd444bddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffff444f
        dbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccc444ccccccc111bb111bbbb444b444444444bbd4444bdddbbbbbbd444ddddddddddddddddddddddbbbcdfffffffffffffffffffff
        bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbb1bb1bbbbbb4444444444dbbbbd4444bddbbbbddbb444ddddddddd444ddddbddddbccfddfffffffffffffffffffff
        dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbb44444444bbbbbb44444bbbbbbbbdddd444dddddd444444ddddddddbcffffffffffffffffffffffffff
        bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbb444444bbbbbbbb44444bdbddddbdddd444dddd44444444444dddddccffffffffffffffffffffffffff
        bbbbbbbbddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb4444bbbbbbbbbd4444dddddbddddddd444dd444444444444444444bffbdfffffffffffffffffffffff
        bbbbbbbdddddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb444bbbbbbbbddddbddddddddbdddddd44444444444444444444444444bfdffffffffffffffffffffff
        bbbbddddddddddddddbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbddddddddddddddddddddddddddd4444444444d44444d44444444444fbcfffffffffffffffffffff
        bbbddddddddddddbbbbbbbccccccccccccc444cccccccccccccccccccccccccccccccccbbbdbbdbdddddddbddddbdddddddddddddddd44444444ddd444444ddddd444444444fffffffffffffcfffffff
        bbdddddddddddddbbbbbbbccccccccccccc444cccccccccccccccccccccccccccccbcccbbbbbddbddddddddddddddddddddddddddddd444444ddddd444444dddbcdff444444fffffffffffffffffffff
        bddddddddddddddbdbbbbcccccccccccccc444cccccccccccccccccccccccccbcbbbcbddddddddddddbddddddddddddddddddddddddd4444dddddbd44444444dbfcfff444444ffffffffffffffffffff
        ddddddddddddddddbdbbbcccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbdddddddddddbdddddddddddd444ddddbddd44444444444dfffff4444fbfffffcffffffffcbff
        dbdbddddddddbdbdbbbbccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddd444d444444444444f4444fffffffffffffcfffddf
        ddddddbddddddddbbbbbcccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbdddddddddddddddddddddddddddddddddddddddddd4444dd44444444444444fffffffffffffcdfffcff
        ddddddddddddbdbbbbbbcccccccccccccccccccccccccc4444444bbbdddddddbddddddddddddbdddddddddddddddddddddddddddddddddddddddddd4444ddddc44444444444ffffffffffffffffdffff
        dddddddddddddbbbbbbccccccccccccccc444cccccccc444444444444dbcdddcddddddddddddddddbdddbddddddddddbddddddddddddddddddddddd444444ddccffff444444fffffffffffffffffffff
        ddddddddddddbbbbbbbccccccccccccccc444cccccccc444444444444444dddbdddddddddddddddddddddddddbbbdddddddddddddddddddddddddddd44444444cffffffffffffffffcffffffffffffff
        bdbddddddbddbbbbbbcccccccccccccccc444ccccccc44444bb44444444444444dddddbddddddddddddddddddddddddddddbdbddddddddddddddddddd4444444444fffcffffffffffffffffcfcffffff
        dbddbdddddddbbbbcccccccccccccccccc444ccccccd4444ddddddd4444444444444ddbddddddddbdcbdddddddddddddddddddddddddddddddddddddddd44444444ffffffffffffffffffffffcffffff
        dddddddddddddddddbcbcccccccccccccc444ccccbdd444cdddbdddddd4444444444dddddddddddddddddddbdddddddddddddddddddddddddddddddddddddf44444ffffffffffffffffffffffffcffff
        ddddddddddddcddddddbbccccccccccccc444bcbcbd4444dbdbcddddddddddd44444ddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddcfff444fffffffffffffffffffffffffffff
        dddddddddddbcdddddbddcbbcccccccbc4444bbbccd4444ddbdbddddddddddd444dddddddddddddddddddddddddddddddddddddddddbbddddddddddddddbffffcfffffffffffffffffffffffffffffff
        bdddddddddcdddddddddbcbbbcbbbcbbb4444ddddbd444ddddddddddddbdddd444dddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbddfffffffffffcffffffffffffffffcccfff
        ddddddddddddbddddbdddbbdbcbddbdbd444dddddd4444ddddbdddddcdddddd444dddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcdfffffffffffffffffffffffffffffccfffc
        dddcdddddddddddddddddcdddddddbdbb444dbdddd4444ddddccdddddbddddd444cddddddddcddddddddddddddddddddddddddddddddddddddddcddddddcffffffffffffffffffffffffffffffffffff
        dddbdddddddddddddddddcdddddddcbdd444bddddd444bddbdddddddddddbcb444cbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddcfffffffffffffffcffffffffffffffffffff
        bdddddddddddddddddddddddddddbddbd444dbbddd444ddddddddddddbbbbbb444bbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddcffffbdcffffffffcffffffffffcfffffffff
        dddddddddddddddddddddddddddbbdddd444dddddd444dddcdbbdbbbbcccbbc444bcbcbbbbbbbbccbcbbbdbbbbddddddddddddddddddddddddddbbbbdddcffffcfbfffffffffffffffffffffffffffff
        dddddddddddddddddddbdddddcbbddddd444dddddd444ddddbbbbbccccccccc444ccccccccccccccccbccbcbbccbdbbdddddddddddddddddddbbbbbbddbccfddfffffffffffbbfffffffffffffffffff
        bbbdddddddbddddddddddddbddcddbddd444bddbcc444cbbcbbbcbccccccccc444ccccccccccccccbcccccccccccccbbbdddddddddddddbbbbccccbbddccfffffcffffffffffffffffffffffffffffff
        cccbddddddddddddddddddddddbdddddb444bccccc4444cccccccccccccccc4444ccccccccccccccccccccccccccccbccccbdbdddbdbbbcccbccbbbdddbfffffdfffffffffffffffffffffffffffffff
        ccccddbdddddddddddcddddccbbbccbbc444c444cb44444cccccccccccccc44444cccccccccccccccccccccccccccccccccccccccccccccccbcccbdddddfffffffffffffffcfffffffffffffffffffff
        ccbbbbbddddddddddbcdddcccccccccbc444c444ccc44444444ccccccccc44444cccccccccccccccccccccccccccccccbcccccccccccccccccbbddddddbfffffffffffffffffffffffffffffffffffff
        ccccccbcbbbdddddbcccbcccccccccccc444c444cccc44444444444444444444cccccccccccccccccccccccccccccccccccccccccccccccccbddddddddbfffffffffffffffffffffffffffffffffffff
        cccccccbccbbbcbcccccccccccccccccccccccccccccc444444444444444444cccc444cccccccccccccccccccccccccccccccccccccccbcbdddddddddbcffffffffffffffffcbfffffffffffffffffff
        cccccccccccbcbccccccccccccccccccccccccccccccccccc44444444444444cccc444cccccccccccccccccccccccbccccccccccccccccbbdddddbdddbcfffffffffffffffffffffffffffffffffffff
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444ccccccccccccccccccccbcbbcccccccccccccbbbbddddddddddbcffcffffffffffffffffffffffffffffffffff
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbcccccbbcccccccbbbbdddddddddddbccffffffffffffffffffffffffffffffffffff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbddddddbbcbbbdbccccbbdddddbdddddddddcffdffdffffffffffffffffffffffffffffffff
        cccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccbcccbbbbbbddddddddddddddbbbbbbdddddcdddddddddddbcfffffffffffffffffffffffffffffffffffffc
        cccccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccbdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcfffffffffffffffffffffffffffffffffffffff
        cccccccccccccccccccccccc4444bbcddbbcbbbbbccbbcccccccccccccccccccccbbbddddbbdddddbdccd444dddddddddddddddddddddddddddddd444fffffffffffffffffffcfffffffffffffffffff
        ccccccccccccccccccccccc44444dddddbbbbddbbbbdbccccccccccccccccccbcddddddddddbddcbdccbd444ddddddddddddddddddddddddddddcb444fffffffffffffffffffffffffffffffffffffff
        cccccccccccccccbcccccc444444dddddddbddddddbbbddbbbbccccccccccccdbdddddddddddbdddddddd444dddddddddddddddddddddddddddcfc444ffffffffffffffcbffffffffffffffcffffffff
        ccccccccccccccccccccc44444bddddddddddddddbcbcdddddbbbcccccbbbcdddddddbdddddddddddddd4444dddddddddddddddddddddddddcdff4444fffffffffffffffbffffffffffffcbcffffffff
        ccccccccccccccccccfcc4444ccbdddddddddddddddbdbddddddcdbcbddddddddddddddddddddddddddd4444ddddddddddddddddddddddddbcfff4444fffffbfffffffffdccfffffffffffffffffffff
        cccccccccccccccffcffc4444ffccdddddd444444dcccdddddbdbddbddddddddddddddddddddddddddd4444ddddddddddddddddddddddddbcffff444dfffffffffffffffddffffffffffffffffffffff
        cccccccfccffffcffffff44444ffcfdddd44444444bccbddddbdddddddddddddddddddddddddddddddd4444ddddddddddddddddddddddbcffffff444dfffffffffcffffffffffffffbffffffffffffff
        ccfcccfffffffffffffff444444cfccddd444444444cdddddddddddddddddddddddddddddddddddddd4444dddbccbbccbcbbbdbbbdbfffdffffff444fffffffcfffffffffffffddfffffffffffffffff
        cffcccffffffffffffffff444444bcfcd44444d4444bdb444444444ddddddddddddddddddddddddddd4444ddfccccbfcfffffcbcfffcffcffffff444fccfffcffffffffffffffdbfffffffffffffffff
        fcfffffffffffffffffffff44444fffb44444ddd444cdb444444444444ddd444444444444ddddddddd444cffffffffff444fffcbf44444fffffdffffcfffffffffffffffffffccffffffffffffffffff
        fffffffffffffffffffffffff444fffc44444cff444cf4444444444444ddd444444444444dddddddd4444ffff444ffff4444ffff444444fffffffffcdfdfffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff4444f4444ffff44444444444df4444ffffc4444ddd444444444444ddddddbd44444444444ffff44444f44444444ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff444444444ffd4444f4444444fb444ffffff4444cbc444dddddd444ddccccff44444444444fffff4444444444ffffffffffffffcfffffffccfffffffffffffffffffffffffffff
        fffffffffffffffffff44444444fccf4444f444444ffd444fffffd444cffc444ffbdb4444dcfdfff44444444444ffffff444444444ffffffffffffffffffffffffffffbfffffffffffffffffffffffff
        fffffffffffffffffffc4444444ffff444ff44444ffff4444fffd4444bfff444fffff4444ffcffff4444444ffffffffff44444444ffffffffffff444ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff4444fffff444fffffffffff444444444444ddf4444ffff4444fffbfff444444444ffffcfff4444444ffffffffffffff444fffffffffffffffffffffffffffffffcffcfffff
        ffffffffffffffffffffffdfffffffffcfffffffbfffff4444444444ffff44444fff4444ffffff44444f44444ffffff4444444fffffffffffffff444ffffffffffbdffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff44444444fffff444444444444ffffff4444fff4444ffffff4444ffffffffffffffffffffffffffbffffbffffdfffcddcfffffffffffffffff
        fffffffffffffffffffffffffffffffffbffffffbfffffffffffffffffff44444444444fffffff444ffff4444ffffff444fffffffffffffffffffffffffffffffffffffffffdddffffffffffccffffff
        `)
}
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
    9999999999999999999999999999999999999999999111111119955554444444444222444554444422444455544444444442229999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999991dddddddd115554444444444442224444554444442244444555444444444422299999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999ddddd1111d555544444444444422244445544444444224444455544444444442222999999999999999999999999999999991111111999999999999999
    9999999999999999999999999999999999999dddd111111155544444444444442244444455444444444224444445554444444444222dd111111111199999999999999111111111111111111111111999
    999999999999999999999999999999999999ddd111111155544444444444442224444445544444444442244444445554444444444422211111111111111ddddddddddddddddd11111dd1111111111199
    99999999999999991111119999999999999dd111111115554444444444444222444444455444444444442244444445554444444444422211111111111dddddddddddddddddd11111dddddddddd111199
    9999999999999911111111111199999999dd11111111555444444444444422244444445544444444444442244444444555444444444442211111111dddd11111111111111111111dd1111ddddd111999
    9999999999999111dddddddddd1119999dd11111111554444444444444422244444444554444444444444224444444445554444444444422dd1111ddd111111111111111111111dd1111111111119999
    9999999999911ddddddd1dddddddd111ddd111111155444444444444442224444444445444444444444442244444444445554444444444422d111ddd1111111111111111111111dd1111111111199999
    999999999911ddd111111111111dddd1dd1111111554444444444444442244444444455444444444444444224444444444554444444444442211ddd11111111111111111111111ddd111111119999999
    9999999991ddd1111111111111111dd1d1111111554444444444444442244444444445544444444444444422444444444445544444444444422dd11111111111111111111111111ddd11111199999999
    999999991ddd111111111111111111ddd1111115554444444444444422444444444445444444444444444442244444444444554444444444442211111111111111111111111111111111119999999999
    999999911dd11111111111111111111dd1111155544444444444444224444444444455444444444444444442244444444444455444444444442211111199999999999999999999999999999999999999
    99999991dd111111111111111111111111111155444444444444442224444444444455444444444444444442244444444444445544444444422229999999999999999999999999999999999999999999
    9999991dd1111111111111111111111111111554444444444444442244444444444455444444444444444444224444444444444554444444444422999999999999999999999999999999999999999999
    9999911d11111111111111111111111111115544444444444444422444444444444554444444444444444444224444444444444554444444444422999999999999999999999999999999999999999999
    999991dd11111111111111111111111111115544444444444444422444444444444554444444444444444444224444444444444455444444444222299999999999999999999999999999999999999999
    999911d11111111111111111ddddd11111155444444444444444224444444444444554444444444444444444422444444444444445544444444442299999999999999999999999999999999999999999
    99991dd1111111111111111dddddddd111155444444444444442244444444444444554444444444444444444422444444444444445554444444444229999999999999999999999999999999999999999
    99991dd111111111111111ddd1111dddd1554444444444444442244444444444444544444444444444444444422444444444444444554444444444229999999999999999999999999999999999999999
    99991dd11111dd1111111ddd1111111ddd554444444444444422444444444444445544444444444444444444442444444444444444455444444444222999999999999999999999999999999999999999
    99999dd11111dd1111111dd1111111111d554444444444444422444444444444445544444444444444444444442244444444444444455444444444222999999999999999999999999999999999999999
    99999dd11111dd111111dd111111111115544444444444444424444444444444445544444444444444444444442244444444444444445544444444242299999999999999999999999999999999999999
    99999dd11111dd111111dd111111111115544444444444444255554444444444445544444444444444444444442244444444555554445544444444442299999999999999999999999999999999999999
    99999dd111ddd111111ddd111111111115544444444444444255555444444444445544444444444444444444444244444445555554444554444444422299999999999999999999999999999999999999
    999999dddddd1111111dd1111d11111155444444444444442255555555544444445544444444444445554444444224444455555554444554444444422229999999999999999999999999999999999999
    999999dddd111111111dd111dd1111115544444444444444225555555554444444554444444444455555554444422444445555544444445544444442422ddddddd199999999999999999999999999999
    99999999999999999999ddddd11111115544444444444444255555555554444444554444444444555555554444422444445554444444445544444444422dddddddd11999999999999999999999999999
    999999999999999999999ddd1dd1111554444444444444422555544444444444445544444444555555555544444224444455554444444455444444444221111111d11111119999999999999999999999
    9999999999999999999999999ddd111554444444444444422555444444444444445444444444555555444444444224444455555544444445444444444222111111111111111199999999999999999999
    99999999999999999999999999ddd1155444444444444442555544444444444444544444444455555444444444442444445555555444444554444444222211111111dd11111111199999999999999999
    999999999999999999999999999ddd15544444444444442255554444444444444454444444445554444444444444244444445555554444455444444224221111111ddd11111111111111dd1111999999
    99999999999999999999999999999dd544444444444444255554444444444444445444444555555444444444444422444444455555544444544444442422111111dd1111111111ddddddddddddd99999
    9999999999999999999999999999995544444444444444255554444444444444445544444555555555444444444422444444444555544444554444444422111111dd1111111dddddd11111111dddd999
    999999999999999999999999999999554444444444444425555444444444444444554444455555555544444444442244444444455554444455444444422221111dd111111dddd11111111111111ddd99
    9999999999999999999999999999995544444444444444255544444444444444445544444455555555444444444422445555555555544444554444444222211111ddddddddd11111111111111111ddd9
    99999999999999999999999999999955444444444444422555554444444444444455444444445554444444444444424455555555554444444544444442422111111dddddd11111111111111111111dd9
    9999999999999999999999999999995544444444444442255555555555444444445544444444555444444444444442245555555555444444455444444442211111111111111111111111111111111119
    9999999999999999999999999999995544444444444442245555555555444444445544444444555444442222222222224444444444444444455444444422211111111111111111111111111111111199
    9999999999999999999999999999995544444444444442244555555555444444445544444444444422222222222222222222444444444444455444444422221111111111111111111111111111111199
    9999999999999999999999999999995544444444444422244445555554444444445544444444442222222222222222222222224444444444445444444422221111111111111111111111111111111999
    9999999999999999999999999999995444444444422222222222244444444444445544444444422222222222222222222222222244444444445544444424221111111111111111111111111111199999
    999999999999999999999999999999544444444222222222222222222444444444454444444222222222222222222221111111222224444444554444444422111d111111111111111111111111999999
    999999999999999999999999999999544444442222222222222222222222444444455444441111111222222222111111111111111224444444554444444422ddddd11111111111111111111119999999
    99999999999999999999999999999954444422222222222222222222222224444445544444111111111111222111111111111111111444444445444444222ddd11111111111111111111111119999999
    999999999999999999999999999999544442222222222222222222229999994444455444411111111111111ef11111111111111111114444444554444222411111111111111111111111111199999999
    999999999999999999999999999999554422999999922222222222999999999944445444111111111111dddeddddd11111111111111dd444444554442241111111111111111111111111111999999999
    99999999999999999999999999999955422999999999992222e99999999999999144554411111dddddddddeddddddd1111111111111dd114444554422411111111111111111111111111119999999999
    9999999999999999999999999999995522999999999999999ee99999999999999994444ddddddddddd999e9999999d9991111111111d1111444554224111111111111111111111111111199999999999
    99999999999999999999999999999942299999999999999999eee9999999999999999ef9dd999999999995999999999999999999991d1111144552241111119999999999111111111111999999999999
    9999999999999999999999999999999ff99999999999999999999eee9999999999999ff9999999999999e9999999999999999999999dd111114422411111199999999999999999999999999999999999
    9999999999999999999999999999999df99999999999999999999999ee999999999995e999999999999e99999999999999999999999ddd1eee1224111111999999999999999999999999999999999999
    99999999999999999999999999999999eee99999999999999999999999eee999999999e99999999999e9999999999999999999999999deeeeef221111119999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeeee999999999999999999eee99999999e999999999e99999999999999999999999eeeeddddff111111199999999999999999999999999999999999999
    999999999999999999999999999999999999999eeeeeeeeeee9999999999999eeee9999ee9999999e999999999999999999999eee999999dddddddd11999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999eeeeeee99999999999eee999ee99999e999999999999999999eeee9999999999999dddd99999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999eeeeeee9999999eeee9e9999e999999999999999eeee99999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999eeeeee99999ee9e99ee99999999eeeeeee999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999eeeee9eeee9e99999eeeee999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999eeeeeee9eeeee9999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999994444999999999999999999999999999999999999999999999999999999999999eeeee99999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999944444449999999999999999999999999999999999999999999999999999999999999ee9999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999944444449994449999999999999999944444444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999444444999994449999999999999999944444444444999944444449999999999999999999999999999999999999999999999999444999999999999999999999999999999999999999999999999
    9999999444499999994449999999999999999444444444444499444444444449999999999999999999999999999999999999999999944444999999999999999999999999999999999999999999999999
    9999999444999999994444444444449999999444499944444499444444444444999999999999999999999999999999999999999944444444999944499999999999999999999999999999999999999999
    9999999444999999994444444444449999999444999999444499444499444444999999999999999999999999999999999999994444444449999444499999999999999999999999999999999999999999
    9999999444999999944444444444449999994444999999444499444999999444999999999999999999994444444499999999444444444999994444499999999999999999999999999999999999999999
    9999999444999999944444499944449999994444444444444499444999944444999999444444499999944444444499999994444444999999994444999999999999999999999999999999999999999999
    9999999444499999944444999944449999994449444444444994444944444444999944444444499999444444444499999994444499999999994444999999999999999999999999999999999999999999
    9999999444444999944449999944499999994449444444449994444944444449994444444444499999444449944499999944449999999999994449999994449999999999999999999999999999999999
    9999999944444499944449999944499999994444999999999994449944444499944444449999999994444499944499999444449999999999944449999994449999999999999999999999999999999999
    9999999944444499944499999444499999994444999999999994449999999999944444999999999994444999444499999444499999999999444449999994449999999999999999999999999999999999
    9999999999444499944499999444499999994444449999999994444999999999944444499999999994444994444499994444999999999999444499999999999999999999999999999999999999999999
    9999999999999999999999999444999999999444444444999994444999999999944444444444449994449444444499994444999999999999444999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999944444444999994444999999999994444444444444994444444449994444449999999999994444999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999444444999999444499999999999994444444444444444444449994444444444449999994444999994449999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999444449999999999999999999444444444449999994444444444449999994449999994449999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999944444999999999999999999944444499999999999944444444449999994449999994449999944499999999999999999999999999999
    9999999999999999999999999999999999999999999999999999994444499999444999999999444444499999944499994449999999999944449999994449999944444444444999999999999999999999
    9999999999999999999999999999999999999999999999999999999444444999444999999999444444499999944499944449999999999944449999994449999944444444444999999999999999999999
    9999999999999999999999999999999999999999999999999999999944444444444999999944444944499999444499944449999999999444499999944449999444444444444499999999999999999999
    9999999999999999944444444999999999999999999999999999999994444444444999944444444944499994444499944499999999999444499999944449999444444999444499999999999999999999
    9999999999999999444444444999999999999999999999999999999999944444444999944444449944449944444499944499999999999444999999444499994444449999944499999999999999999999
    9999999999999994444444444999999999999999999999999999999999999999999999944444999944444444449999944499999999999444999994444499994444449999944499999999999999999999
    9999999999999994444999999999999999999999999994449999999999999999999999999999999994444444449999944499999999999444999994444999994444499999944499999999999999999999
    9999999999999994449999999999999999999999999994449999999999999999999999999999999999444444999999999999999999999999999944449999994444444499944499999999999999999999
    9999999999999994449999999999999999999999999994449999999999999999999999999999999999944449999999999999999999999999999944449999944444944449444499999999999999999999
    9999999999999994444999999999999999999999999944449999999999999999999999999999999999999999999444999999999999999999999944449999944449944444444499999999999999999999
    9999999999999994444999999999999999999999999944449999999999999999999999999999999999999999994444999999999999999999999999999999444499944444444499999999999999999999
    9999999999999999444499999999999999999999999944499999999999999999999999999999999999999999994444999999999999999999999999999999444499999444444999999999999999999999
    9999999999999999444449999999999999999999444444499999999999999999999999999999999999999999994444999944499999999999999999999999444999999999999999999999999999999999
    9999999999999999944444499999999999999999444444444444444449999999999999999999999999999999994449999944499999999999999999999999444999999999999999999999999999999999
    9999999999999999994444444999999999999999444444444444444449999999999999999999999999999999944449999944499999999999999999999999999999999999999999999999999999999999
    9999999999999999999444444449999999999999999444444444444449999999999999999999999999999999444449999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999994444444449999999999994444999999999999999999999999999999999999999999444499999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999944444449999999999994444999999999999999999999999999999444444499994444999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999444449999999999994449999999999999999999999999999999444444444444444999999999999999999999999999944444444499999999999999999999999999999999
    9999999999999944499999999994449999999999994449999999999999944499999999444999444444444444449999444999999999999999999999944444444444444499999999999999999999999999
    9999999999999944444999999444449999999999994449999999999999944499999994444999444944444444449999444999999999999999999999944444444444444444499999999999999999999999
    9999999999999944444444444444449999999999994449999999999999944499999944444999444999944444499994444999999444499999999999944449994444444444499999999999999999999999
    9999999999999994444444444444499999999999994449999999999999944499999944449999444999999444499994444994444444444444999999944449999999994444499999999999999999999999
    9999999999999999944444444444999999999999999999999999999999944499999944499999444999999444499944449444444444444444499999944444499999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999944499999444499999444499999444999944449444444494444444499999994444444999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999944499999444499999444499994444999444499444499999999444449999999444444444999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999944499994444499999944449994444999444494444999999999944449999999994444444499999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999444499994444999999944449944449994444994444999999999944449944449999944444499999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999444499994444999999994444944449994444994444444444444444449944444444444444499999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999444444444449999999994444444499994449994444444444444444449944444444444444499999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999444444444449999999999444444499994449999444444444444444499994444444444449999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999444444444449999999999444444999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
pause(2000)
info.setLife(5)
tiles.setCurrentTilemap(tilemap`level2`)
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
let enemy_status = 1
loaded = 1
let foodies = 0
let ghostenemy = sprites.create(img`
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
armor_status = 0
gun_type = 1
loaded = 1
projectile = sprites.createProjectileFromSide(img`
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
    `, 50, 50)
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
    tiles.placeOnRandomTile(ghostenemy, sprites.dungeon.collectibleInsignia)
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
    if (foodies == 1) {
        sprites.destroy(health_pack, effects.fire, 1000)
        health_pack = sprites.create(img`
            . 7 . 7 . 7 7 7 . 7 7 7 . 7 . . 
            . 7 . 7 . 7 . . . 7 . 7 . 7 . . 
            . 7 7 7 . 7 7 . . 7 7 7 . 7 . . 
            . 7 . 7 . 7 . . . 7 . 7 . 7 . . 
            . 7 . 7 . 7 7 7 . 7 . 7 . 7 7 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . b b b b b b b b b b b b b b . 
            b 7 7 7 1 1 1 6 6 1 1 1 7 7 7 b 
            b 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            b 7 7 7 1 6 6 6 6 6 6 1 7 7 7 c 
            c 7 7 7 1 6 6 6 6 6 6 1 7 7 7 c 
            c 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            c 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            . c c c c c c c c c c c c c c . 
            `, SpriteKind.Food)
        foodies = 0
        tiles.placeOnRandomTile(health_pack, sprites.dungeon.chestOpen)
    }
    if (foodies == 4) {
        sprites.destroy(health_pack, effects.fire, 1000)
        health_pack = sprites.create(img`
            . 7 . 7 . 7 7 7 . 7 7 7 . 7 . . 
            . 7 . 7 . 7 . . . 7 . 7 . 7 . . 
            . 7 7 7 . 7 7 . . 7 7 7 . 7 . . 
            . 7 . 7 . 7 . . . 7 . 7 . 7 . . 
            . 7 . 7 . 7 7 7 . 7 . 7 . 7 7 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . b b b b b b b b b b b b b b . 
            b 7 7 7 1 1 1 6 6 1 1 1 7 7 7 b 
            b 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            b 7 7 7 1 6 6 6 6 6 6 1 7 7 7 c 
            c 7 7 7 1 6 6 6 6 6 6 1 7 7 7 c 
            c 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            c 7 7 7 1 1 1 6 6 1 1 1 7 7 7 c 
            . c c c c c c c c c c c c c c . 
            `, SpriteKind.Food)
        foodies = 0
        tiles.placeOnRandomTile(health_pack, sprites.dungeon.chestOpen)
    }
    if (foodies == 2) {
        sprites.destroy(Armor_upgrade, effects.fire, 1000)
        Armor_upgrade = sprites.create(img`
            . . . . . 7 7 . 7 . . . . . 7 . 
            . 7 . . 7 . 7 . 7 . 7 . 7 . 7 . 
            7 7 7 . . . 7 . 7 . 7 . 7 . 7 . 
            . 7 . . . . 7 . 7 . . 7 . . 7 . 
            . . . c c c . . . . c c c . . . 
            . . . c b c . . . . c b c . . . 
            . . . c b b c . . c b b c . . . 
            . . c c c c c c c c c c c c . . 
            . . c a a a a a a a a a a c . . 
            . . c c c c c c c c c c c c . . 
            . . c b b b b b b b b b b c . . 
            . . c c c c c c c c c c c c . . 
            . . c a a a a a a a a a a c . . 
            . . c c c c c c c c c c c c . . 
            . . c b b b b b b b b b b c . . 
            . . . c c c c c c c c c c . . . 
            `, SpriteKind.Food)
        foodies = 0
        tiles.placeOnRandomTile(Armor_upgrade, sprites.dungeon.chestOpen)
    }
    if (foodies == 3) {
        sprites.destroy(ammopack, effects.fire, 1000)
        ammopack = sprites.create(img`
            . 5 . . . . . . . 7 7 . . . 7 . 
            5 4 e . . 7 . . 7 . . 7 . 7 . 7 
            5 4 e . 7 7 7 . . . 7 . . 7 . 7 
            5 4 e . . 7 . . . 7 . . . 7 . 7 
            5 4 e . . . . . 7 7 7 7 . . 7 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . c . . . . c . . . . . 
            . b b b b b b b b b b b b b b . 
            b d d 5 d d 5 d d 5 d d 5 d d b 
            b d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            b d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            . c c c c c c c c c c c c c c . 
            `, SpriteKind.Food)
        foodies = 0
        tiles.placeOnRandomTile(ammopack, sprites.dungeon.chestOpen)
    }
    if (foodies == 5) {
        sprites.destroy(ammopack, effects.fire, 1000)
        ammopack = sprites.create(img`
            . 5 . . . . . . . 7 7 . . . 7 . 
            5 4 e . . 7 . . 7 . . 7 . 7 . 7 
            5 4 e . 7 7 7 . . . 7 . . 7 . 7 
            5 4 e . . 7 . . . 7 . . . 7 . 7 
            5 4 e . . . . . 7 7 7 7 . . 7 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . c . . . . c . . . . . 
            . b b b b b b b b b b b b b b . 
            b d d 5 d d 5 d d 5 d d 5 d d b 
            b d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            b d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            c d 5 4 e 5 4 e 5 4 e 5 4 e d c 
            . c c c c c c c c c c c c c c . 
            `, SpriteKind.Food)
        foodies = 0
        tiles.placeOnRandomTile(ammopack, sprites.dungeon.chestOpen)
    }
    if (season == 2) {
        if (foodies == 6) {
            sprites.destroy(summer_powerup, effects.bubbles, 1000)
            summer_powerup = sprites.create(img`
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 5 5 5 3 4 . . . . . 
                . . . . . 4 5 2 2 3 4 . . . . . 
                . . . . . 4 5 2 2 3 4 . . . . . 
                . . . . . 4 5 2 2 3 4 . . . . . 
                . . . . . 4 5 2 2 3 4 . . . . . 
                . . . . . 4 5 2 2 3 4 . . . . . 
                . . . . . 4 5 2 2 3 4 . . . . . 
                . . . . . 4 5 2 2 3 4 . . . . . 
                . . . . . 4 5 2 2 3 4 . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            foodies = 0
            tiles.placeOnRandomTile(summer_powerup, sprites.dungeon.chestOpen)
        }
    }
    if (season == 1) {
        if (foodies == 6) {
            sprites.destroy(easter_powerup, effects.fire, 1000)
            easter_powerup = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 7 . . 7 . . 7 . . . . . 
                . . . 7 6 6 7 6 6 7 6 6 . . . . 
                . . c b b b b b b b b b . b . . 
                . . c e 4 e 4 e 4 e 4 b b . e . 
                . . c e 4 e 4 e 4 e 4 b . . b . 
                . . c e 4 e 4 e 4 e 4 b . . b . 
                . . c e 4 e 4 e 4 e 4 b . . b . 
                . . c e 4 e 4 e 4 e 4 b . . e . 
                . . c e 4 e 4 e 4 e 4 b . . e . 
                . . c e 4 e 4 e 4 e 4 b . . e . 
                . . c e 4 e 4 e 4 e 4 b . e . . 
                . . c e 4 e 4 e 4 e 4 b e . . . 
                . . c e 4 e 4 e 4 e 4 b . . . . 
                . . . b b b b b b b b b . . . . 
                `, SpriteKind.Food)
            foodies = 0
            tiles.placeOnRandomTile(easter_powerup, sprites.dungeon.chestOpen)
        }
    }
    if (season == 3) {
        if (foodies == 6) {
            sprites.destroy(halloween_powerup, effects.fire, 1000)
            halloween_powerup = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . e . . . . . . . 
                . . . . . . . e b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . 4 4 4 4 4 4 4 4 5 e e e . . 
                . 4 4 4 4 4 4 4 4 4 4 5 5 5 e . 
                4 4 4 4 f 4 4 4 4 4 f 4 4 4 5 e 
                4 4 4 4 f f 4 4 4 f f 4 4 4 5 e 
                5 4 4 4 4 4 4 4 4 4 4 4 4 4 5 e 
                e 5 4 4 4 f 4 f 4 f 4 4 4 4 5 e 
                e 5 4 4 4 4 f 4 f 4 4 4 4 4 5 e 
                e 5 4 4 4 4 4 4 4 4 4 4 4 4 5 e 
                e 5 5 4 4 4 4 5 5 5 4 4 4 4 5 e 
                . e e 5 5 5 5 e e e 5 5 5 5 e . 
                . . e e e e e . . . e e e e . . 
                `, SpriteKind.Food)
            foodies = 0
            tiles.placeOnRandomTile(halloween_powerup, sprites.dungeon.chestOpen)
        }
    }
    if (season == 4) {
        if (foodies == 6) {
            sprites.destroy(christmas_powerup, effects.fire, 1000)
            christmas_powerup = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 9 1 . . . . . . 
                . . . . . . 9 9 6 6 1 1 . . . . 
                . . . . . 9 1 6 6 6 6 6 1 . . . 
                . . . . 9 6 6 6 1 6 6 6 6 1 . . 
                . . . . 9 6 1 6 6 6 1 6 6 1 . . 
                . . . . 9 6 6 1 b b 6 6 6 1 . . 
                . . . . 9 6 6 b e e b 6 6 9 . . 
                . . . . 9 1 1 6 e e 6 1 6 9 . . 
                . . . . 9 1 1 1 1 1 1 1 1 9 . . 
                . . . . . 9 9 9 9 9 9 9 9 . . . 
                . . . . . b b b b b b b b . . . 
                . . . . c c c c c c c c c c . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            foodies = 0
            tiles.placeOnRandomTile(christmas_powerup, sprites.dungeon.chestOpen)
        }
    }
})
forever(function () {
    if (0 < loaded) {
        info.changeScoreBy(1)
        pause(1000)
    }
})
forever(function () {
    if (AMMO_BRRRRRRRR == 0) {
        if (gun_type == 1) {
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
        if (gun_type == 2) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("Im reloading", 3000, true)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(2000)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(1000)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(100)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            AMMO_BRRRRRRRR = 5
        }
        if (gun_type == 3) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("Im reloading", 3000, true)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(2000)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(1000)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(100)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            AMMO_BRRRRRRRR = 32
        }
        if (gun_type == 4) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("Im reloading", 3000, true)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(2000)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(1000)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pause(100)
            music.play(music.createSoundEffect(WaveShape.Noise, 2349, 2438, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            AMMO_BRRRRRRRR = 16
        }
    }
})
forever(function () {
    if (AMMO_BRRRRRRRR == 5) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("only 5 ammo remaining", 500, false)
    }
    if (AMMO_BRRRRRRRR == 1) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("only 1 ammo remaining", 500, false)
    }
    if (AMMO_BRRRRRRRR == 10) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("only 10 ammo remaining", 500, false)
    }
    if (AMMO_BRRRRRRRR == 20) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("only 20 ammo remaining", 500, false)
    }
})
forever(function () {
    if (next_gun_spawn == 1) {
        magnum = sprites.create(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ..........fc....................
            .........fbbc...................
            .........cbbbc..................
            .........ccbbbc.................
            ..........ccbbbc................
            ...........ccbbbc...............
            ............ccbbbc..............
            .............ccbbbc.............
            .............cbcbbbc............
            ..............cbcbbbc...........
            ...............cbcbbbc..........
            ................cbcbbbc.........
            .................cbcbbbc........
            .................ddbcbbcc.......
            .................ddeecc.........
            ................ddeeee..........
            ................deeeee..........
            ...............ddeeee...........
            ..............cdeeee............
            ...............ceeee............
            ................ceee............
            .................cc.............
            ................................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.pistol)
        scaling.scaleToPercent(magnum, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        tiles.placeOnRandomTile(magnum, sprites.dungeon.floorDarkDiamond)
    }
    if (next_gun_spawn == 2) {
        shotgun = sprites.create(img`
            ..cbcc..........................
            .cbcbccc........................
            ..cbcbcbc.......................
            ...cbcbcbc......................
            ....ebcbcbcc....................
            ....debcbcbcc...f...............
            .....debcbcbbccf................
            ......debcbbbbbcf...............
            .......decbbbcbbcf..............
            ..........cbcccbbbc.............
            ...........cbcccbbbc............
            ............cbcccbbbcc..........
            .............cbcccbbbbc.........
            ..............cbcbbbbbbcc.......
            ...............cbbbbbbbbbc......
            ................cbebbbbbbbc.....
            .................deecbbbbbbcc...
            .................dee.cbbbbbbbc..
            .................dee..cbbbbbbbbc
            .................dee...cbbbbccbc
            .................dee...cbbbc.cbc
            .................dee...cbbc..cbc
            .................dee....cbc.cbc.
            ..................d.....cbccbc..
            ........................cbccc...
            ........................cccc....
            .......................cbcbc....
            ........................cbc.....
            .........................c......
            ................................
            ................................
            ................................
            `, SpriteKind.shotgun)
        tiles.placeOnRandomTile(shotgun, sprites.dungeon.floorDarkDiamond)
        scaling.scaleToPercent(shotgun, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
    if (next_gun_spawn == 3) {
        assault_rifle = sprites.create(img`
            ...a............................
            ..6ca...........................
            ..cfbaa.........................
            ...cfbba........................
            ....cfbba.......................
            .....cfbba......................
            ......cfbba.....................
            ......ccbbbaa...................
            ......cfcbbbba..................
            ......ecfcbbbbacc...............
            ......decfcbfbbacd..............
            .......decfcbcbbaac.............
            ........deccbbcbbba.............
            ..........dccbbcbbba............
            .........dbbccbbcbbba...........
            ........dbbabccbbbbbba..........
            ......cdbbababccbbbbbbaa........
            .....cbbbababdcccbbbbbbba.......
            .....cbbababdccdacbbbbbbba......
            ......cababdc..deacbbbbbbba.....
            ......cbaddc...dee.cbbbbbcca....
            ......cddcc....dee..cbbbccccaa..
            .......cc......dee...cbcbbbbbca.
            ...............dee....cbcccccbc.
            ...............dee....cbc..cbc..
            ................e.....cbc.cbc...
            ......................cbccbc....
            ......................cbcbc.....
            ......................cbbc......
            ......................cbc.......
            .......................c........
            ................................
            `, SpriteKind.rifle)
        tiles.placeOnRandomTile(assault_rifle, sprites.dungeon.floorDarkDiamond)
        scaling.scaleToPercent(assault_rifle, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
    if (next_gun_spawn == 4) {
        revolver = sprites.create(img`
            ................................
            ................................
            ......................c.........
            ..aaaaaaaaaaaaaaaaaaccc.........
            ...ccbbbbbbbbffffbbbbc..........
            .....cccbbbbbccccbbbba..........
            ........cccccffffbbbbd..........
            .............ccccbbbbdd.........
            .................cceeed.........
            ...................eeedd........
            ....................eeedd.......
            .....................eeedd......
            .....................eeee.......
            ......................e.........
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.Gun)
        tiles.placeOnRandomTile(revolver, sprites.dungeon.floorDarkDiamond)
        scaling.scaleToPercent(revolver, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
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
})
forever(function () {
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
})
forever(function () {
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
})
forever(function () {
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
})
game.onUpdateInterval(randint(10000, 20000), function () {
    if (loaded > 0) {
        foodies = randint(1, 6)
        next_gun_spawn = randint(1, 4)
    }
})
