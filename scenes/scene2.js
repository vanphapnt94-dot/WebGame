/* ========================================
   SCENE 2 - MẪU
   ======================================== */

window.scenes = window.scenes || {};

window.scenes.scene2 = {
    id: 'scene2',
    name: 'Hành Lang',
    background: 'images/background2.png',
    enterMessage: 'Bạn bước vào phòng khác...',
    
    lights: [],
    
    items: {},
    
    hotspots: [],
    
    transitions: [
        {
            id: 'back-to-scene1',
            image: 'images/muitenxanh.png',
            bottom: '13%',
            left: '18%',
            width: '9%',
            height: '30%',
            targetScene: 'scene1'
        }
    ]
};
