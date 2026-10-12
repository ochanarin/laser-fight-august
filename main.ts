namespace SpriteKind {
    export const Item = SpriteKind.create()
    export const Inventory = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    August.vy = -200
})
let August: Sprite = null
August = sprites.create(img`
    3 f f f f f f 2 2 f f f f f f 3 
    9 3 f f f f f 2 2 f f f f f 3 9 
    9 9 3 f f f f 2 2 f f f f 3 9 9 
    9 9 9 3 f f f 2 2 f f f 3 9 9 9 
    9 9 9 9 3 f f 2 2 f f 3 9 9 9 9 
    9 9 9 9 9 3 f 2 2 f 3 9 9 9 9 9 
    9 9 9 9 9 9 3 2 2 3 9 9 9 9 9 9 
    2 2 2 2 2 2 2 5 5 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 5 5 2 2 2 2 2 2 2 
    9 9 9 9 9 9 3 2 2 3 9 9 9 9 9 9 
    9 9 9 9 9 3 f 2 2 f 3 9 9 9 9 9 
    9 9 9 9 3 f f 2 2 f f 3 9 9 9 9 
    9 9 9 3 f f f 2 2 f f f 3 9 9 9 
    9 9 3 f f f f 2 2 f f f f 3 9 9 
    9 3 f f f f f 2 2 f f f f f 3 9 
    3 f f f f f f 2 2 f f f f f f 3 
    `, SpriteKind.Player)
controller.moveSprite(August)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(August)
August.ay = 500
let Jam = sprites.create(img`
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    3 3 3 3 3 3 3 5 5 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 5 5 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    `, SpriteKind.Item)
let Infantry_Icon = sprites.create(img`
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    3 3 3 3 3 3 3 5 5 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 5 5 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    `, SpriteKind.Inventory)
