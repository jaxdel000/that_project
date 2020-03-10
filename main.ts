function Objects () {
    if (level == 1) {
        if (gap == 0) {
            topImage = img`
. . . . . 6 c c c c c c c c c c c f 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 c c c c 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 c c 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . 1 1 c c c c c c c c 1 1 . . . . . . 
. . . . . . . 1 1 c c c c c c 1 1 . . . . . . . 
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
. . . . . c c b d d b b b b d d b c c . . . . . 
. . . . . c c c c b d d d d b c c c c . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 c 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 7 7 c c c c . . . . 
. . . . . . c c 6 c c c c c c 6 c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 c c c c 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 6 6 7 6 c c c c 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
`
        } else if (gap == 1) {
            topImage = img`
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 c c c c 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . 1 1 c c c c c c c c 1 1 . . . . . . 
. . . . . . . 1 1 c c c c c c 1 1 . . . . . . . 
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
. . . . . c c b d d b b b b d d b c c . . . . . 
. . . . . c c c c b d d d d b c c c c . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 c 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 7 7 c c c c . . . . 
. . . . . . c c 6 c c c c c c 6 c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 c c c c 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
`
        } else if (gap == 2) {
            topImage = img`
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c c c . . . . 
. . . . . . c c 6 c c c c c c 6 c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 c c c c 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . 1 1 c c c c c c c c 1 1 . . . . . . 
. . . . . . . 1 1 c c c c c c 1 1 . . . . . . . 
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
. . . . . c c b d d b b b b d d b c c . . . . . 
. . . . . c c c c b d d d d b c c c c . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 c 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 7 7 c c c c . . . . 
. . . . . . c c 6 c c c c c c 6 c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
`
        } else {
            topImage = img`
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 c 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 7 7 c c c c . . . . 
. . . . . . c c 6 c c c c c c 6 c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c c c . . . . 
. . . . . . c c 6 c c c c c c 6 c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 c c c c 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . 1 1 c c c c c c c c 1 1 . . . . . . 
. . . . . . . 1 1 c c c c c c 1 1 . . . . . . . 
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
. . . . . c c b d d b b b b d d b c c . . . . . 
. . . . . c c c c b d d d d b c c c c . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 c 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 7 7 c c c c . . . . 
. . . . . . c c 6 c c c c c c 6 c c c . . . . . 
`
        }
        projectile = sprites.createProjectileFromSide(topImage, -45, 0)
        projectile.top = 0
        projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
        projectile.bottom = scene.screenHeight()
    }
    gap = Math.randomRange(0, 3)
    if (level == 2) {
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
    }
    if (level == 3) {
        if (gap == 0) {
            topImage = img`
. . . . . 6 2 2 2 2 2 2 2 2 2 2 c f 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 2 2 2 2 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 2 2 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c 2 7 7 6 2 2 6 7 7 8 8 6 6 6 . . . 
. . . . . . c 2 7 7 2 2 2 2 6 7 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 1 1 2 2 2 2 2 2 2 2 1 1 . . . . . . 
. . . . . . . 1 1 2 2 2 2 2 2 1 1 . . . . . . . 
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
. . . . . 2 2 b d d b b b b d d b c 2 . . . . . 
. . . . . 2 2 2 2 b d d d d b c c 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 c c c c 2 2 2 . . . . . . 
. . . . . c 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . c 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . c c 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . 6 2 c 2 2 2 2 2 2 2 2 2 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 2 2 2 2 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 2 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 2 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . 2 2 7 7 2 2 2 2 7 7 2 c 2 2 . . . . 
. . . . . . 2 2 6 2 2 2 2 2 2 6 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . 
. . . . . . c 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . 
. . . . . . c 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . 6 2 2 2 2 2 2 2 2 2 2 2 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 2 2 2 2 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 2 2 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 2 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . 2 2 7 7 2 2 2 2 6 7 2 2 . . . . . . 
. . . . . . 2 2 6 2 2 2 2 2 2 6 c 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . . 
. . . . . . 2 2 c 2 2 2 2 2 2 2 c 2 . . . . . . 
. . . . . . 2 2 c 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 c 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . . 
. . . . . 6 2 2 2 2 2 2 2 2 2 2 c 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 2 2 2 2 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 2 2 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c 2 7 7 2 2 2 2 6 7 2 2 . . . . . . 
. . . . . . c 2 6 2 2 2 2 2 2 6 2 2 . . . . . . 
. . . . . . c 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 c c 2 2 2 2 2 2 c 2 2 . . . . . . 
. . . . . . 2 c c c 2 2 2 c 2 c c 2 . . . . . . 
. . . . . . 2 c c 2 2 2 c c 2 c c c . . . . . . 
. . . . . . 2 c c c 2 2 c c 2 c c c . . . . . . 
. . . . . . 2 c c c c c f c 2 2 2 2 . . . . . . 
. . . . . 6 2 2 2 c c c c c c c 2 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 c c 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 6 6 7 6 2 2 2 2 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 2 2 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c 2 7 7 2 2 2 2 6 7 2 2 . . . . . . 
. . . . . . c 2 6 2 2 c c 2 2 6 2 2 . . . . . . 
`
        } else if (gap == 1) {
            topImage = img`
. . . . . 6 2 2 2 2 2 2 2 2 2 2 2 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 2 2 2 2 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 2 2 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 2 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . 2 2 7 7 2 2 2 2 6 7 2 2 . . . . . . 
. . . . . . 2 2 6 2 2 2 2 2 2 6 c 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . . 
. . . . . . 2 2 c 2 2 2 2 2 2 2 c 2 . . . . . . 
. . . . . . 2 2 c 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 c 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . . 
. . . . . 6 2 2 2 2 2 2 2 2 2 2 c 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 2 2 2 2 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 2 2 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c 2 7 7 2 2 2 2 6 7 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 1 1 2 2 2 2 2 2 2 2 1 1 . . . . . . 
. . . . . . . 1 1 2 2 2 2 2 2 1 1 . . . . . . . 
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
. . . . . 2 2 b d d b b b b d d b c 2 . . . . . 
. . . . . 2 2 2 2 b d d d d b c c 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 c c c c 2 2 2 . . . . . . 
. . . . . c 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . c 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . c c 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . 6 2 c 2 2 2 2 2 2 2 2 2 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 2 2 2 2 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 2 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 2 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . 2 2 7 7 2 2 2 2 7 7 2 c 2 2 . . . . 
. . . . . . 2 2 6 2 2 2 2 2 2 6 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . 
. . . . . . c 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . 
. . . . . . c 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . 6 2 2 2 2 2 2 2 2 2 2 2 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 2 2 2 2 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 2 2 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 2 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . 2 2 7 7 2 2 2 2 6 7 2 2 . . . . . . 
. . . . . . 2 2 6 2 2 2 2 2 2 6 c 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . . 
. . . . . . 2 2 c 2 2 2 2 2 2 2 c 2 . . . . . . 
. . . . . . 2 2 c 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 c 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . . 
. . . . . 6 2 2 2 2 2 2 2 2 2 2 c 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 2 2 2 2 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 2 2 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c 2 7 7 2 2 2 2 6 7 2 2 . . . . . . 
. . . . . . c 2 6 2 2 2 2 2 2 6 2 2 . . . . . . 
`
        } else if (gap == 2) {
            topImage = img`
. . . . . 6 2 2 2 2 2 2 2 2 2 2 2 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 2 2 2 2 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 2 2 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 2 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . 2 2 7 7 2 2 2 2 6 7 2 2 2 2 . . . . 
. . . . . . 2 2 6 2 2 2 2 2 2 6 c 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . 6 2 2 2 2 2 2 2 2 2 2 2 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 2 2 2 2 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 2 2 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 2 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . 2 2 7 7 2 2 2 2 6 7 2 2 . . . . . . 
. . . . . . 2 2 6 2 2 2 2 2 2 6 c 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . . 
. . . . . . 2 2 c 2 2 2 2 2 2 2 c 2 . . . . . . 
. . . . . . 2 2 c 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 c 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . . 
. . . . . 6 2 2 2 2 2 2 2 2 2 2 c 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 2 2 2 2 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 2 2 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c 2 7 7 2 2 2 2 6 7 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 1 1 2 2 2 2 2 2 2 2 1 1 . . . . . . 
. . . . . . . 1 1 2 2 2 2 2 2 1 1 . . . . . . . 
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
. . . . . 2 2 b d d b b b b d d b c 2 . . . . . 
. . . . . 2 2 2 2 b d d d d b c c 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 c c c c 2 2 2 . . . . . . 
. . . . . c 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . c 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . c c 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . 6 2 c 2 2 2 2 2 2 2 2 2 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 2 2 2 2 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 2 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 2 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . 2 2 7 7 2 2 2 2 7 7 2 c 2 2 . . . . 
. . . . . . 2 2 6 2 2 2 2 2 2 6 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . 
. . . . . . c 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . 
. . . . . . c 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . 6 2 2 2 2 2 2 2 2 2 2 2 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 2 2 2 2 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 2 2 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 2 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . 2 2 7 7 2 2 2 2 6 7 2 2 . . . . . . 
. . . . . . 2 2 6 2 2 2 2 2 2 6 c 2 . . . . . . 
`
        } else {
            topImage = img`
. . . . . 6 f c 2 2 2 2 2 2 2 2 2 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 2 2 2 2 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 2 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 2 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . 2 2 7 7 2 2 2 2 7 7 2 c 2 2 . . . . 
. . . . . . 2 2 6 2 2 2 2 2 2 6 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . 
. . . . . . c 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . 
. . . . . . c 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . 6 2 2 2 2 2 2 2 2 2 2 2 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 2 2 2 2 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 2 2 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 2 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . 2 2 7 7 2 2 2 2 6 7 2 2 2 2 . . . . 
. . . . . . 2 2 6 2 2 2 2 2 2 6 c 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . 6 2 2 2 2 2 2 2 2 2 2 2 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 2 2 2 2 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 2 2 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 2 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . 2 2 7 7 2 2 2 2 6 7 2 2 . . . . . . 
. . . . . . 2 2 6 2 2 2 2 2 2 6 c 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . . 
. . . . . . 2 2 c 2 2 2 2 2 2 2 c 2 . . . . . . 
. . . . . . 2 2 c 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 c 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 c 2 . . . . . . 
. . . . . 6 2 2 2 2 2 2 2 2 2 2 c 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 2 2 2 2 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 2 2 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c 2 7 7 2 2 2 2 6 7 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 1 1 2 2 2 2 2 2 2 2 1 1 . . . . . . 
. . . . . . . 1 1 2 2 2 2 2 2 1 1 . . . . . . . 
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
. . . . . 2 2 b d d b b b b d d b c 2 . . . . . 
. . . . . 2 2 2 2 b d d d d b c c 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 c c c c 2 2 2 . . . . . . 
. . . . . c 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . c 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . c c 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . 6 2 c 2 2 2 2 2 2 2 2 2 2 6 . . . . . 
. . . . 6 7 7 6 2 2 2 2 2 2 2 2 2 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 2 2 2 2 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 2 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 2 2 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . 2 2 7 7 2 2 2 2 7 7 2 c 2 2 . . . . 
. . . . . . 2 2 6 2 2 2 2 2 2 6 2 2 2 . . . . . 
`
        }
        projectile = sprites.createProjectileFromSide(topImage, -45, 0)
        projectile.top = 0
        projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
        projectile.bottom = scene.screenHeight()
    }
    if (level == 4) {
        if (gap == 0) {
            topImage = img`
. . . . . 6 c c c c c c c c c c c f 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 c c c c 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 c c 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . 1 1 c c c c c c c c 1 1 . . . . . . 
. . . . . . . 1 1 c c c c c c 1 1 . . . . . . . 
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
. . . . . c c b d d b b b b d d b c c . . . . . 
. . . . . c c c c b d d d d b c c c c . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 c 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 7 7 c c c c . . . . 
. . . . . . c c 6 c c c c c c 6 c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 c c c c 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c f c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 6 6 7 6 c c c c 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
`
        } else if (gap == 1) {
            topImage = img`
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 c c c c 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . 1 1 c c c c c c c c 1 1 . . . . . . 
. . . . . . . 1 1 c c c c c c 1 1 . . . . . . . 
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
. . . . . c c b d d b b b b d d b c c . . . . . 
. . . . . c c c c b d d d d b c c c c . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 c 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 7 7 c c c c . . . . 
. . . . . . c c 6 c c c c c c 6 c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 c c c c 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
`
        } else if (gap == 2) {
            topImage = img`
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c c c . . . . 
. . . . . . c c 6 c c c c c c 6 c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 c c c c 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . 1 1 c c c c c c c c 1 1 . . . . . . 
. . . . . . . 1 1 c c c c c c 1 1 . . . . . . . 
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
. . . . . c c b d d b b b b d d b c c . . . . . 
. . . . . c c c c b d d d d b c c c c . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 c 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 7 7 c c c c . . . . 
. . . . . . c c 6 c c c c c c 6 c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
`
        } else {
            topImage = img`
. . . . . 6 f c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 c 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 7 7 c c c c . . . . 
. . . . . . c c 6 c c c c c c 6 c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c c c . . . . 
. . . . . . c c 6 c c c c c c 6 c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . . c c c c c c c c c c c c c . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 c c c c 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . 1 1 c c c c c c c c 1 1 . . . . . . 
. . . . . . . 1 1 c c c c c c 1 1 . . . . . . . 
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
. . . . . c c b d d b b b b d d b c c . . . . . 
. . . . . c c c c b d d d d b c c c c . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 c 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 7 7 c c c c . . . . 
. . . . . . c c 6 c c c c c c 6 c c c . . . . . 
`
        }
        projectile = sprites.createProjectileFromSide(topImage, -45, 0)
        projectile.top = 0
        projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
        projectile.bottom = scene.screenHeight()
    }
}
function Level2background () {
    if (level == 2) {
        scene.setBackgroundImage(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e e e 
1 1 e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e 1 1 
1 1 e e e e e e b c c c b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b c c c b e e e e e e e e e e e e e e e 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 
1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 
1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 5 5 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 5 5 5 5 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 5 5 5 5 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 5 5 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 5 5 5 5 5 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 5 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 5 5 5 5 5 5 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 5 5 5 5 8 8 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 8 8 8 8 8 8 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 1 8 5 5 5 5 5 5 8 1 1 1 1 1 1 1 1 1 1 1 1 8 5 8 1 1 1 1 1 1 1 1 1 1 8 5 5 5 5 5 5 8 1 8 1 8 1 8 1 8 1 8 7 7 7 7 7 7 1 1 1 1 1 1 8 5 5 5 5 5 5 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 5 5 5 5 8 1 1 1 8 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 8 8 8 8 8 8 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 8 1 1 1 1 1 1 1 1 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 1 8 5 5 5 5 5 5 8 1 8 8 8 8 8 8 8 8 8 8 1 8 5 8 1 8 8 8 8 8 8 8 8 1 8 5 5 5 5 5 5 8 1 1 1 1 1 1 1 1 1 8 7 7 7 7 7 7 7 8 8 8 8 1 8 5 5 5 5 5 5 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 5 5 5 5 8 1 1 1 8 5 5 5 5 5 5 5 5 5 5 5 5 8 1 1 1 1 1 1 1 1 8 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 8 1 1 1 1 1 1 1 1 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 1 8 8 5 5 5 5 5 8 1 1 1 1 1 1 1 1 1 1 1 1 8 5 8 1 1 1 1 1 1 1 1 1 1 8 5 5 5 5 5 5 8 1 8 1 8 1 8 1 8 1 8 7 7 7 7 7 7 7 7 7 1 1 1 8 5 5 5 5 5 5 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 5 5 5 5 8 1 8 1 8 5 5 5 5 5 5 5 5 5 5 5 5 8 1 8 1 8 1 8 1 8 8 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 8 1 8 1 8 1 8 1 1 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 1 8 1 1 8 5 5 5 5 5 8 1 8 8 8 8 8 8 8 8 8 8 1 8 5 8 1 8 8 8 8 8 8 8 8 1 8 5 5 5 5 5 5 8 1 8 1 8 1 8 1 8 1 8 7 7 7 7 7 7 7 7 7 7 8 1 8 5 5 5 5 5 5 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 5 5 5 5 8 1 8 1 8 5 5 5 5 5 5 5 5 5 5 5 5 8 1 8 1 8 1 8 1 8 8 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 8 1 8 1 8 1 8 1 1 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 1 8 1 1 8 5 5 5 5 5 8 1 1 1 1 1 1 1 1 1 1 1 1 8 5 8 1 1 1 1 1 1 1 1 1 1 8 5 5 5 5 5 5 8 1 1 1 1 1 1 1 1 1 8 7 7 7 7 7 7 7 7 7 7 7 1 8 5 5 5 5 5 5 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 5 5 5 5 8 1 1 1 8 5 5 5 5 5 5 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 8 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 8 1 1 1 1 1 1 1 8 8 8 8 8 5 5 5 5 5 5 5 5 5 5 5 8 1 1 1 1 8 5 5 5 5 5 8 1 8 8 8 8 8 8 8 8 8 8 1 8 5 8 1 8 8 8 8 8 8 8 8 1 8 5 5 5 5 5 5 8 1 8 1 8 1 8 1 8 1 8 7 7 7 7 7 7 7 7 7 7 7 7 8 5 5 5 5 5 5 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 5 5 5 7 7 7 7 7 7 7 7 7 5 5 5 8 1 1 1 1 1 8 1 8 1 8 1 8 1 8 8 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 8 1 8 1 8 1 8 1 8 8 1 1 8 5 5 5 5 5 5 5 5 5 5 5 8 8 1 8 1 8 5 5 5 5 5 8 1 1 1 1 1 1 1 1 1 1 1 1 8 5 8 1 1 1 1 1 1 1 1 1 1 8 5 5 5 5 5 5 8 1 8 1 8 1 8 1 8 1 8 7 7 7 7 7 7 7 7 7 7 7 7 8 5 5 5 5 5 5 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 5 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 1 8 1 8 1 8 1 8 1 8 1 8 1 8 8 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 8 1 8 1 8 1 8 1 8 8 8 1 8 5 5 5 5 5 5 5 5 5 5 5 8 8 1 8 7 7 7 7 7 5 5 8 1 1 7 7 7 7 7 7 7 7 7 1 8 5 8 1 8 8 8 8 8 8 8 7 7 7 7 7 7 5 5 5 8 1 1 1 1 1 1 1 1 1 8 7 7 7 7 7 7 7 7 7 7 7 7 8 5 5 5 5 5 5 8 1 1 1 7 7 7 7 7 7 7 7 7 7 . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 8 1 8 1 8 1 1 1 1 1 1 1 1 8 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 8 1 1 1 1 1 1 1 8 8 8 1 8 5 5 5 5 5 5 5 5 5 5 5 8 8 1 7 7 7 7 7 7 7 7 8 1 7 7 7 7 7 7 7 7 7 7 7 8 5 8 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 8 1 8 1 8 1 8 1 8 1 8 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 5 5 5 5 8 1 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 7 7 7 7 7 7 7 7 7 7 8 5 5 5 5 5 
5 5 5 7 7 7 7 7 7 7 7 7 7 1 1 1 1 8 8 1 1 8 5 5 5 5 5 5 5 5 5 5 5 8 . 7 7 7 7 7 7 7 7 7 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 1 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 5 5 5 5 8 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 5 
5 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 5 5 5 5 5 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 5 5 5 5 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 5 
5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 5 5 5 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 
5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`)
    }
}
function Level2 () {
    if (info.score() == 10) {
        game.splash("Level 2: ", "Business")
        level = 2
        info.changeScoreBy(1)
        effects.blizzard.startScreenEffect(7500)
    }
}
function win () {
    if (info.score() == 35) {
        game.splash("Congratulations", "you beat FBLA!!!")
        game.over(true, effects.hearts)
    }
}
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
function level_1 () {
    level = 1
    scene.setBackgroundImage(img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 5 5 5 5 5 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 4 4 4 4 4 4 4 4 5 5 4 4 4 4 4 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 5 5 5 5 5 5 5 4 4 4 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 4 4 4 4 4 5 5 4 4 4 4 4 4 4 4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 4 4 4 4 4 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 2 2 2 2 2 2 2 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 
4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 
4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 
4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 5 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 2 2 2 2 2 
2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
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
    effects.clouds.startScreenEffect(14500)
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
function Level_4 () {
    if (info.score() == 25) {
        game.splash("Level 4: ", "A('merica)")
        level = 4
        effects.bubbles.startScreenEffect(14500)
        info.changeScoreBy(1)
    }
}
function splash () {
    game.splash("Level 1:", "Future")
}
function Level_3_background () {
    if (level == 3) {
        scene.setBackgroundImage(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f 1 f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 5 f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 f f f f f 
f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
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
    }
}
function Level_4_background () {
    if (level == 4) {
        scene.setBackgroundImage(img`
8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 1 1 1 8 8 1 1 1 8 8 1 1 1 8 8 1 1 1 8 8 1 1 1 8 8 1 1 1 8 8 1 1 1 8 8 1 1 1 8 8 1 1 1 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 1 1 1 8 1 1 1 8 8 8 1 1 1 8 1 1 1 8 8 8 1 1 1 8 1 1 1 8 8 8 1 1 1 8 1 1 1 8 8 8 1 1 1 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
8 8 8 8 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 
2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
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
    }
}
function Level_3 () {
    if (info.score() == 15) {
        game.splash("Level 3: ", "Leader")
        level = 3
        effects.confetti.startScreenEffect(14500)
        info.changeScoreBy(1)
    }
}
let mySprite: Sprite = null
let projectile: Sprite = null
let bottomImage: Image = null
let topImage: Image = null
let gap = 0
let level = 0
level_1()
birdie()
splash()
game.onUpdateInterval(15500, function () {
    // the camera shakes every 15000 seconds by 8 pixels
    scene.cameraShake(8, 500)
})
game.onUpdate(function () {
    win()
})
game.onUpdate(function () {
    Level_4()
    Level_4_background()
})
game.onUpdate(function () {
    Level2()
    Level2background()
})
game.onUpdate(function () {
    Level_3()
    Level_3_background()
})
// on game update by every 1550 seconds it makes more
// pillars
game.onUpdateInterval(1550, function () {
    info.changeScoreBy(1)
    Objects()
})
