// it shows the birdie and uses the ay
function birdie () {
    mySprite = sprites.create(img`
. . . . . . f f f f f f f . . . . . . . 
. . . . . f b b b b b b b f . . . . . . 
. . . . f b b 9 b 9 b 9 b b f . . . . . 
. . . . f b b b b b b b b b f . . . . . 
. . . . f b b 9 b 9 b 9 b b f . . . . . 
. . . . f b b b b b b b b b f . . . . . 
. . . . f b b 9 b 9 b 9 b b f . . . . . 
. . . 5 f b b b b b b b b b f 5 . . . . 
. . . . f b f f b b b f f b f . . . . . 
. . 5 . . f b b 5 5 5 b b f . . 5 . . . 
. . . . . . f f f f f f f . . . . . . . 
. . 5 . . . . f b b b f . . . . 5 . . . 
. . . . 5 . f b b 5 b b f . 5 . . . . . 
. . . . . f b f b b b f b f . . . . . . 
. . . . . . f f 4 4 4 f f . . . . . . . 
. . . . . . f 5 5 4 5 5 f . . . . . . . 
. . . . . . . f f 4 f f . . . . . . . . 
. . . . . . . . . f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    mySprite.ay = 300
}
// when something overlaps the game ends
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
// it makes every button pressed make the sprite jump
// -100 in vy
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
})
function splash () {
    game.splash("Level 1:", "")
}
function backgroudn () {
    scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f 1 1 f f f 1 f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f 1 f f f f f f f f 1 f f f f f 1 1 1 f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f 1 f f f f f f f f 1 f f f f 1 f f f 1 1 f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f 1 f f f f f f f f f f 
f f 1 f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f 1 f f f f f f f f f f 1 f f 1 f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f 1 f f f f f f f f f f 
f 1 f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f 1 f f f f f f f f f f f 1 f 1 f f f f f f f f 1 f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f 1 f f f f f f f f f f 
f 1 f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f 1 f f f f f f f f f f f f 1 f 1 f f f f f f f f f 1 f f 1 f 1 f f f f 1 f f f f f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f 1 f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f 1 f f f f f f f f f f 
f 1 f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f 1 f f f f f f f f f f f f 1 f 1 f f f f f f f f f f 1 f 1 f 1 f f f f 1 f f f f f f 1 f f f f f f f f 1 1 1 f f f f f 1 f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f 1 f f f f f f f f f f f 
f 1 f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f 1 f f f f f f f f f f f f 1 f 1 f f f f f f f f f f 1 f 1 f 1 f f f f f 1 f f f f f 1 f f f f f f f f f f 1 f f f f 1 f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f 1 f f f f f f f f f f f 
f 1 f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f 1 f f f f f f f f f f f f 1 f 1 f f f f f f f f f f 1 f f 1 1 1 1 f f f 1 f f f f f 1 f f f f f f f f f f 1 f f f 1 f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f 1 f f f f f f f f f f f 
f 1 f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f 1 f f f f f f f f f f f f 1 f 1 f f f f f f f f f f 1 f f 1 1 f f 1 1 1 1 f f f f f 1 f f f f f f f f f 1 1 f f 1 f 1 1 1 1 1 1 f f f f f f f f 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f 1 f f f f f f f f f f f f 
f 1 f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f 1 f f f f f f f f f f f 1 f 1 f f f f f f f f f f 1 f f 1 1 f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 f f f f 1 f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f 1 f f f f f f f f f f f f 
f 1 f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f 1 f f f f f f f f f f 1 f f 1 f f f f f f f f f f 1 f f 1 1 f f f f f f f f f f f 1 f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f 1 f f f f f f f f f f f f 
f 1 f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f 1 f f f f f f f f f f 1 f f f 1 f f f f f f f f f 1 f f 1 f 1 f f f f f f f f f f 1 f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f 1 f f f f f f f f f f f f 
f 1 f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f 1 f f f f f f f f f 1 f f f 1 f f f f f f f f f 1 f f 1 f 1 f f f f f f f f f f 1 f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f 1 f f f f f f f f f f f f f 
f 1 f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 f f f f f f 1 f f f f f f f f 1 f f f f f 1 f f f f f f f 1 f f f 1 f 1 f f f f f f f f f f 1 f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f 1 f f f f f f f f f f f f f 
1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f 1 f f f f f f f 1 f f f f f f 1 1 f f f 1 1 1 f f f f 1 1 f f f f f f f f f f 1 f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f 
1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f 1 1 f f f f f f f f 1 1 1 f f f f f f f 1 1 f f f f f f f f f f f 1 f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f 
1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f 1 f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f 
1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f 1 f f f f f f f f f f f f f f f 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f 
1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f 
1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f 1 1 1 1 1 1 f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f f f f 1 f f f f f 1 f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f 1 f f f f f f f f f f f 1 f f f f f f f f f f f 1 f f f f f f 1 f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f 1 f f f f f f 1 f f f f f f f f 1 1 f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f 1 f f f f f f f f f f f 1 f f f f f f f f f f f 1 f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f 1 f f f f f 1 f f f f f f f 1 f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f 1 f f f f f f f f f f f 1 f f f f f f f f f f f 1 f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f 1 f f f f f 1 f f f f f f 1 f f f f f f f f f f f f f f f f f 1 f f f f f f 1 f f f f f f f f f f f 1 f f f f f f f f f f f f f f 1 f f f f f f f f f f f f 1 f f f f f f f f f f 1 f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f 1 f f f f 1 f f f f f f 1 f f f f f f f f f f f f f 1 1 1 1 1 f f f f f f 1 f f f f f f f f f f 1 f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f 1 f f f f f f f f f 1 f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f 1 f f f f 1 f f f f f f 1 f f f f f f f f f f f f 1 f f f f 1 f f f f f f 1 f f f f f f f f f f 1 f f f f f f f f f f f f f 1 1 1 f f f f f f f f f f f f 1 f f f f f f f f f 1 f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f 1 f f f f 1 f f f f f f 1 f f f f f f f f f f f 1 f f f f f f 1 f f f f f 1 f f f f f f f f f 1 f f f f f f f f f f 1 1 1 1 f f f f f f f f f f f f f f f f 1 f f f f f f f f 1 f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f 1 f f f f f f 1 f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f 1 f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f 1 f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f 1 f f f f f f 1 f f f f f f f f f f f f f f f f f f 1 f f f f f 1 f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f 1 f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f f 1 f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f 1 f f f f f f f f f f 1 f f f f f f f f f f f f f f 1 f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f 1 1 1 1 1 1 f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f 1 f f f f f f f f f 1 f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f 
f f f f f f f f f f f 1 f 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f 1 f f f f f f f f f 1 f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f 
f f f f f f f f f 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f 1 f f f f f f f f f 1 f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f 1 f f f f f f f f f 1 f f f f f f f f f 1 1 1 f f f f f f f f f 1 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f 1 f f f f f f f f 1 f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f 1 f f f 1 f f f f f f f f 1 f f f 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 1 f f 1 f f f f f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 
f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 1 8 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 8 1 8 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 8 1 8 1 8 1 8 1 8 1 8 7 7 7 7 7 7 1 1 1 1 1 1 8 1 1 1 1 1 1 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 1 1 1 1 8 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 1 8 1 1 1 1 1 1 8 1 8 8 8 8 8 8 8 8 8 8 1 8 1 8 1 8 8 8 8 8 8 8 8 1 8 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 7 7 7 7 7 7 7 8 8 8 8 1 8 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 8 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 8 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 1 8 8 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 8 1 8 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 8 1 8 1 8 1 8 1 8 1 8 7 7 7 7 7 7 7 7 7 1 1 1 8 1 1 1 1 1 1 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 1 1 1 1 8 1 8 1 8 1 1 1 1 1 1 1 1 1 1 1 1 8 1 8 1 8 1 8 1 8 8 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 8 1 8 1 8 1 8 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 1 8 1 1 8 1 1 1 1 1 8 1 8 8 8 8 8 8 8 8 8 8 1 8 1 8 1 8 8 8 8 8 8 8 8 1 8 1 1 1 1 1 1 8 1 8 1 8 1 8 1 8 1 8 7 7 7 7 7 7 7 7 7 7 8 1 8 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 8 1 8 1 8 1 1 1 1 1 1 1 1 1 1 1 1 8 1 8 1 8 1 8 1 8 8 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 8 1 8 1 8 1 8 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 1 8 1 1 8 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 8 1 8 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 7 7 7 7 7 7 7 7 7 7 7 1 8 1 1 1 1 1 1 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 1 1 1 1 8 1 1 1 8 1 1 1 1 1 1 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 8 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 8 1 1 1 1 1 8 1 8 8 8 8 8 8 8 8 8 8 1 8 1 8 1 8 8 8 8 8 8 8 8 1 8 1 1 1 1 1 1 8 1 8 1 8 1 8 1 8 1 8 7 7 7 7 7 7 7 7 7 7 7 7 8 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 1 1 1 7 7 7 7 7 7 7 7 7 1 1 1 8 1 1 1 1 1 8 1 8 1 8 1 8 1 8 8 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 8 1 8 1 8 1 8 1 8 8 1 1 8 1 1 1 1 1 1 1 1 1 1 1 8 8 1 8 1 8 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 8 1 8 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 8 1 8 1 8 1 8 1 8 1 8 7 7 7 7 7 7 7 7 7 7 7 7 8 1 1 1 1 1 1 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 1 7 7 7 7 7 7 7 7 7 7 7 7 7 1 8 1 8 1 8 1 8 1 8 1 8 1 8 1 8 8 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 8 1 8 1 8 1 8 1 8 8 8 1 8 1 1 1 1 1 1 1 1 1 1 1 8 8 1 8 7 7 7 7 7 1 1 8 1 1 7 7 7 7 7 7 7 7 7 1 8 1 8 1 8 8 8 8 8 8 8 7 7 7 7 7 7 1 1 1 8 1 1 1 1 1 1 1 1 1 8 7 7 7 7 7 7 7 7 7 7 7 7 8 1 1 1 1 1 1 8 1 1 1 7 7 7 7 7 7 7 7 7 7 . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 8 1 8 1 8 1 1 1 1 1 1 1 1 8 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 8 8 8 1 8 1 1 1 1 1 1 1 1 1 1 1 8 8 1 7 7 7 7 7 7 7 7 8 1 7 7 7 7 7 7 7 7 7 7 7 8 1 8 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 8 1 8 1 8 1 8 1 8 1 8 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 8 1 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 7 7 7 7 7 7 7 7 7 7 8 1 1 1 1 1 
1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 8 8 1 1 8 1 1 1 1 1 1 1 1 1 1 1 8 . 7 7 7 7 7 7 7 7 7 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 1 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 8 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 
1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 
1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 
1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`)
    effects.confetti.startScreenEffect()
}
let projectile: Sprite = null
let bottomImage: Image = null
let topImage: Image = null
let gap = 0
let mySprite: Sprite = null
birdie()
splash()
backgroudn()
// on game update by every 1550 seconds it makes more
// code
game.onUpdateInterval(1550, function () {
    info.changeScoreBy(1)
    gap = Math.randomRange(0, 3)
    if (gap == 0) {
        topImage = img`
. . . . . 6 f f f f f f f f f f c f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 f f f f 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 f f 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c f 7 7 6 f f 6 7 7 8 8 6 6 6 . . . 
. . . . . . c f 7 7 f f f f 6 7 f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . 1 1 f f f f f f f f 1 1 . . . . . . 
. . . . . . . 1 1 f f f f f f 1 1 . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . 
. . . . . . . . b b d d d d b b . . . . . . . . 
. . . . . . . b d d b b b b d d b . . . . . . . 
. . . . . . b d b b d d d d b b d b . . . . . . 
. . . . . b d b b d b b b b d b b d b . . . . . 
. . . . . b d b d b d d d d b d b d b . . . . . 
. . . . . c d b b d b b b b d b b d c . . . . . 
. . . . . c b d b b d d d d b b d b c . . . . . 
. . . . . f f b d d b b b b d d b c f . . . . . 
. . . . . f f f f b d d d d b c c f f . . . . . 
. . . . . f f f f f f c c c c f f f . . . . . . 
. . . . . c f f f f f f f f f f f f . . . . . . 
. . . . . c f f f f f f f f f f f f . . . . . . 
. . . . . f f f f f f f f f f f f f . . . . . . 
. . . . . c c f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . 6 f c f f f f f f f f f f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 f f f f 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 f 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 f f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . f f 7 7 f f f f 7 7 f c f f . . . . 
. . . . . . f f 6 f f f f f f 6 f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f c f . . . . . 
. . . . . . c f f f f f f f f f f c f . . . . . 
. . . . . . c f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . 6 f f f f f f f f f f f f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 f f f f 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 f f 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 f f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . f f 7 7 f f f f 6 7 f f . . . . . . 
. . . . . . f f 6 f f f f f f 6 c f . . . . . . 
. . . . . . f f f f f f f f f f c f . . . . . . 
. . . . . . f f c f f f f f f f c f . . . . . . 
. . . . . . f f c f f f f f f f f f . . . . . . 
. . . . . . f f c f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f c f . . . . . . 
. . . . . 6 f f f f f f f f f f c f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 f f f f 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 f f 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c f 7 7 f f f f 6 7 f f . . . . . . 
. . . . . . c f 6 f f f f f f 6 f f . . . . . . 
. . . . . . c f f f f f f f f f f f . . . . . . 
. . . . . . f c c f f f f f f c f f . . . . . . 
. . . . . . f c c c f f f c f c c f . . . . . . 
. . . . . . f c c f f f c c f c c c . . . . . . 
. . . . . . f c c c f f c c f c c c . . . . . . 
. . . . . . f c c c c c f c f f f f . . . . . . 
. . . . . 6 f f f c c c c c c c f f 6 . . . . . 
. . . . 6 7 7 6 f f f c c f f f f 6 7 6 . . . . 
. . . 6 7 7 6 6 7 6 f f f f 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 f f 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c f 7 7 f f f f 6 7 f f . . . . . . 
. . . . . . c f 6 f f c c f f 6 f f . . . . . . 
`
    } else if (gap == 1) {
        topImage = img`
. . . . . 6 f f f f f f f f f f f f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 f f f f 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 f f 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 f f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . f f 7 7 f f f f 6 7 f f . . . . . . 
. . . . . . f f 6 f f f f f f 6 c f . . . . . . 
. . . . . . f f f f f f f f f f c f . . . . . . 
. . . . . . f f c f f f f f f f c f . . . . . . 
. . . . . . f f c f f f f f f f f f . . . . . . 
. . . . . . f f c f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f c f . . . . . . 
. . . . . 6 f f f f f f f f f f c f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 f f f f 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 f f 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c f 7 7 f f f f 6 7 f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . 1 1 f f f f f f f f 1 1 . . . . . . 
. . . . . . . 1 1 f f f f f f 1 1 . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . 
. . . . . . . . b b d d d d b b . . . . . . . . 
. . . . . . . b d d b b b b d d b . . . . . . . 
. . . . . . b d b b d d d d b b d b . . . . . . 
. . . . . b d b b d b b b b d b b d b . . . . . 
. . . . . b d b d b d d d d b d b d b . . . . . 
. . . . . c d b b d b b b b d b b d c . . . . . 
. . . . . c b d b b d d d d b b d b c . . . . . 
. . . . . f f b d d b b b b d d b c f . . . . . 
. . . . . f f f f b d d d d b c c f f . . . . . 
. . . . . f f f f f f c c c c f f f . . . . . . 
. . . . . c f f f f f f f f f f f f . . . . . . 
. . . . . c f f f f f f f f f f f f . . . . . . 
. . . . . f f f f f f f f f f f f f . . . . . . 
. . . . . c c f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . 6 f c f f f f f f f f f f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 f f f f 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 f 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 f f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . f f 7 7 f f f f 7 7 f c f f . . . . 
. . . . . . f f 6 f f f f f f 6 f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f c f . . . . . 
. . . . . . c f f f f f f f f f f c f . . . . . 
. . . . . . c f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . 6 f f f f f f f f f f f f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 f f f f 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 f f 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 f f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . f f 7 7 f f f f 6 7 f f . . . . . . 
. . . . . . f f 6 f f f f f f 6 c f . . . . . . 
. . . . . . f f f f f f f f f f c f . . . . . . 
. . . . . . f f c f f f f f f f c f . . . . . . 
. . . . . . f f c f f f f f f f f f . . . . . . 
. . . . . . f f c f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f c f . . . . . . 
. . . . . 6 f f f f f f f f f f c f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 f f f f 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 f f 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c f 7 7 f f f f 6 7 f f . . . . . . 
. . . . . . c f 6 f f f f f f 6 f f . . . . . . 
`
    } else if (gap == 2) {
        topImage = img`
. . . . . 6 f f f f f f f f f f f f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 f f f f 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 f f 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 f f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . f f 7 7 f f f f 6 7 f f f f . . . . 
. . . . . . f f 6 f f f f f f 6 c f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f c f . . . . . 
. . . . . . f f f f f f f f f f f c f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . 6 f f f f f f f f f f f f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 f f f f 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 f f 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 f f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . f f 7 7 f f f f 6 7 f f . . . . . . 
. . . . . . f f 6 f f f f f f 6 c f . . . . . . 
. . . . . . f f f f f f f f f f c f . . . . . . 
. . . . . . f f c f f f f f f f c f . . . . . . 
. . . . . . f f c f f f f f f f f f . . . . . . 
. . . . . . f f c f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f c f . . . . . . 
. . . . . 6 f f f f f f f f f f c f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 f f f f 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 f f 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c f 7 7 f f f f 6 7 f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . 1 1 f f f f f f f f 1 1 . . . . . . 
. . . . . . . 1 1 f f f f f f 1 1 . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . 
. . . . . . . . b b d d d d b b . . . . . . . . 
. . . . . . . b d d b b b b d d b . . . . . . . 
. . . . . . b d b b d d d d b b d b . . . . . . 
. . . . . b d b b d b b b b d b b d b . . . . . 
. . . . . b d b d b d d d d b d b d b . . . . . 
. . . . . c d b b d b b b b d b b d c . . . . . 
. . . . . c b d b b d d d d b b d b c . . . . . 
. . . . . f f b d d b b b b d d b c f . . . . . 
. . . . . f f f f b d d d d b c c f f . . . . . 
. . . . . f f f f f f c c c c f f f . . . . . . 
. . . . . c f f f f f f f f f f f f . . . . . . 
. . . . . c f f f f f f f f f f f f . . . . . . 
. . . . . f f f f f f f f f f f f f . . . . . . 
. . . . . c c f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . 6 f c f f f f f f f f f f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 f f f f 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 f 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 f f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . f f 7 7 f f f f 7 7 f c f f . . . . 
. . . . . . f f 6 f f f f f f 6 f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f c f . . . . . 
. . . . . . c f f f f f f f f f f c f . . . . . 
. . . . . . c f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . 6 f f f f f f f f f f f f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 f f f f 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 f f 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 f f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . f f 7 7 f f f f 6 7 f f . . . . . . 
. . . . . . f f 6 f f f f f f 6 c f . . . . . . 
`
    } else {
        topImage = img`
. . . . . 6 f c f f f f f f f f f f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 f f f f 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 f 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 f f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . f f 7 7 f f f f 7 7 f c f f . . . . 
. . . . . . f f 6 f f f f f f 6 f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f c f . . . . . 
. . . . . . c f f f f f f f f f f c f . . . . . 
. . . . . . c f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . 6 f f f f f f f f f f f f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 f f f f 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 f f 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 f f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . f f 7 7 f f f f 6 7 f f f f . . . . 
. . . . . . f f 6 f f f f f f 6 c f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f c f . . . . . 
. . . . . . f f f f f f f f f f f c f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . 6 f f f f f f f f f f f f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 f f f f 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 f f 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 f f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . f f 7 7 f f f f 6 7 f f . . . . . . 
. . . . . . f f 6 f f f f f f 6 c f . . . . . . 
. . . . . . f f f f f f f f f f c f . . . . . . 
. . . . . . f f c f f f f f f f c f . . . . . . 
. . . . . . f f c f f f f f f f f f . . . . . . 
. . . . . . f f c f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f c f . . . . . . 
. . . . . 6 f f f f f f f f f f c f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 f f f f 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 f f 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c f 7 7 f f f f 6 7 f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . 1 1 f f f f f f f f 1 1 . . . . . . 
. . . . . . . 1 1 f f f f f f 1 1 . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . 
. . . . . . . . b b d d d d b b . . . . . . . . 
. . . . . . . b d d b b b b d d b . . . . . . . 
. . . . . . b d b b d d d d b b d b . . . . . . 
. . . . . b d b b d b b b b d b b d b . . . . . 
. . . . . b d b d b d d d d b d b d b . . . . . 
. . . . . c d b b d b b b b d b b d c . . . . . 
. . . . . c b d b b d d d d b b d b c . . . . . 
. . . . . f f b d d b b b b d d b c f . . . . . 
. . . . . f f f f b d d d d b c c f f . . . . . 
. . . . . f f f f f f c c c c f f f . . . . . . 
. . . . . c f f f f f f f f f f f f . . . . . . 
. . . . . c f f f f f f f f f f f f . . . . . . 
. . . . . f f f f f f f f f f f f f . . . . . . 
. . . . . c c f f f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . 6 f c f f f f f f f f f f 6 . . . . . 
. . . . 6 7 7 6 f f f f f f f f f 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 f f f f 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 f 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 f f 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . f f 7 7 f f f f 7 7 f c f f . . . . 
. . . . . . f f 6 f f f f f f 6 f f f . . . . . 
`
    }
    projectile = sprites.createProjectileFromSide(topImage, -45, 0)
    projectile.top = 0
    projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
    projectile.bottom = scene.screenHeight()
})
game.onUpdateInterval(15000, function () {
    // the camera shakes every 15000 seconds by 8 pixels
    scene.cameraShake(8, 500)
})
