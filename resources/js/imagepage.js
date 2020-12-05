Particles.
    init
    ({

        // normal options
        selector:
            '.background'
        ,
        maxParticles:
            120,
        color: '#DBCD0E',
        connectParticles: true,


        // options for breakpoints
        responsive: [
            {
                breakpoint:
                    768
                ,
                options: {
                    maxParticles:
                        200
                    ,
                    color:
                        '#DBCD0E',

                    connectParticles:
                        true
                }
            }, {
                breakpoint:
                    425
                ,
                options: {
                    maxParticles:
                        100
                    ,
                    connectParticles:
                        true
                }
            }, {
                breakpoint:
                    320
                ,
                options: {
                    maxParticles:
                        0

                    // disables particles.js
                }
            }
        ]
    });
