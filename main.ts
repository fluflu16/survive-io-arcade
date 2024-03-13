namespace SpriteKind {
    export const Projectile2 = SpriteKind.create()
    export const Gun = SpriteKind.create()
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
    if (otherSprite == revolver) {
        gun_type = 4
        AMMO_BRRRRRRRR = 16
    }
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("revolver aquired")
    if (otherSprite == magnum) {
        gun_type = 1
        AMMO_BRRRRRRRR = 10
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("magnum aquired")
    }
    if (otherSprite == shotgun) {
        gun_type = 2
        AMMO_BRRRRRRRR = 5
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("shotgun aquired")
    }
    if (otherSprite == assault_rifle) {
        gun_type = 3
        AMMO_BRRRRRRRR = 32
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("assault rifle aquired")
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Gun)
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
    let easter_powerup: Sprite = null
    let halloween_powerup: Sprite = null
    let summer_powerup: Sprite = null
    let christmas_powerup: Sprite = null
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
let next_gun_spawn = 0
let ammopack: Sprite = null
let Armor_upgrade: Sprite = null
let health_pack: Sprite = null
let assault_rifle: Sprite = null
let shotgun: Sprite = null
let magnum: Sprite = null
let revolver: Sprite = null
let LEFT = false
let UP = false
let DOWN = false
let right = false
let armor_status = 0
let AMMO_BRRRRRRRR = 0
let gun_type = 0
let projectile: Sprite = null
let loaded = 0
info.setScore(0)
loaded = 0
tiles.setCurrentTilemap(tilemap`level4`)
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
    7777777777777777777777722277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777722277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777722277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777722277777222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777722277777222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777722277777222777777777777777777772227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777722277777222777777777777777777772227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777722277777222777777777777777777772227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777722277772222722227777777777777772227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777722222272222722222277777777777772227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777722222222227722222227777777777772227777777777777777777777777777777777777777777777722277777777777777777777777777777777777777777777777777777
    7777777777777777777777722222222227222222227777777777772227777777777777777777777777777777777777777777772222277777777777777777777777777777777777777777777777777777
    7777777777777777777777722272222222222272222222777777772227777777777777777777777777777777777777777772222222277777777777777777777777777777777777777777777777777777
    7777777777777777777777722277722222222777772222227777772227222227777777222777777777777777777777777772222222777777777777777777777777777777777777777777777777777777
    7777777777777777777777722277772222227777772222227777772222222222277722222227777777777777777777777722222277777777777777777777777777777777777777777777777777777777
    7777777777777777777777722277772222227777772222227777772222222222272222222222277777777777777777722222227777777777777777777777777777777777777777777777777777777777
    7777777777777777777777722277772222277777722222222777722222227222222222222222277777777777777777722222277777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777772222277777222222222777722222277722222222277222227777777777777777722222227777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777772222277777222277222777722222777722222227777222227777777777777777772222227777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777772222222722222777222277722227777722222277777222227777777777777777777222227772227777777777777777777777777777777777777777777777777777
    7777777777777777777777777777772222222222222777222277722277777722222227772222227777777777777777777222777772227777722277777722277777777772222222772222777722277777
    7777777777777777777777777777777772222222227777722277722277777777722222222222222777777777777777777222777722227777222277722222222777722222222222772222777222277777
    7777777777777777777777777777777777222222777777722277777777777777772222222222222277777777777777777222777722227777222272222222222777722222222222772222272222277777
    7777777777777777777777777777777777777777777777777777777777777777772222222277222277777777777777777222777722277722222722222272222777722222277222777222222222277777
    7777777777777777777777777777777777777777777777777777777777777777777777222777222277777777777777777222777722222222277722222777222777722222777222777722222227777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777722277777777777777777222777722222222277222222777222777722222777222777722222227777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777222777722222277777222277777222777722222777222777772222227777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722222777777222777777222777722277777222777772222777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722277777222777722222777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722227777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722277777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
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
gun_type = 1
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
game.onUpdateInterval(5000, function () {
	
})
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
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("only 5 ammo remaining")
    }
    if (AMMO_BRRRRRRRR == 1) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("only 1 ammo remaining")
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
            `, SpriteKind.Gun)
        tiles.placeOnRandomTile(magnum, sprites.dungeon.floorDarkDiamond)
        sprites.destroyAllSpritesOfKind(SpriteKind.Gun)
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
            `, SpriteKind.Gun)
        tiles.placeOnRandomTile(shotgun, sprites.dungeon.floorDarkDiamond)
        sprites.destroyAllSpritesOfKind(SpriteKind.Gun)
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
            `, SpriteKind.Gun)
        tiles.placeOnRandomTile(assault_rifle, sprites.dungeon.floorDarkDiamond)
        sprites.destroyAllSpritesOfKind(SpriteKind.Gun)
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
        sprites.destroyAllSpritesOfKind(SpriteKind.Gun)
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
