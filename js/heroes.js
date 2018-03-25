var HERO_UPGRADES = [
    {'name': 'Tsuchi', 'reqlevel': 0, 'dps': 426.4},
    {'name': 'Skogur', 'reqlevel': 0, 'dps': 847.4},
    {'name': 'Moeru', 'reqlevel': 0, 'dps': 1680},
    {'name': 'Zilar', 'reqlevel': 0, 'dps': 3334.9},
    {'name': 'Madzi', 'reqlevel': 0, 'dps': 6632.4},
    
    {'name': 'Xavira0', 'reqlevel': 0, 'dps': 11681},
    {'name': 'Xavira1', 'reqlevel': 150000, 'dps': 12304},
    {'name': 'Xavira2', 'reqlevel': 185000, 'dps': 12952},
    {'name': 'Xavira3', 'reqlevel': 255000, 'dps': 13625},
    {'name': 'Xavira4', 'reqlevel': 290000, 'dps': 14473},
    {'name': 'Xavira5', 'reqlevel': 336000, 'dps': 15346},
    {'name': 'Cadu0', 'reqlevel': 0, 'dps': 26444},
    {'name': 'Ceus1', 'reqlevel': 58000, 'dps': 27442},
    {'name': 'Cadu1', 'reqlevel': 116000, 'dps': 28542},
    {'name': 'Ceus2', 'reqlevel': 180000, 'dps': 29740},
    {'name': 'Cadu2', 'reqlevel': 250000, 'dps': 31040},
    {'name': 'Ceus3', 'reqlevel': 326000, 'dps': 32438},
    {'name': 'Cadu3', 'reqlevel': 407500, 'dps': 33938},
    {'name': 'Ceus4', 'reqlevel': 495000, 'dps': 35536},
    {'name': 'Cadu4', 'reqlevel': 588000, 'dps': 37236},
    {'name': 'Maw0', 'reqlevel': 0, 'dps': 61730},
    {'name': 'Maw1', 'reqlevel': 111000, 'dps': 63728},
    {'name': 'Maw2', 'reqlevel': 227500, 'dps': 65826},
    {'name': 'Maw3', 'reqlevel': 350000, 'dps': 68024},
    {'name': 'Maw4', 'reqlevel': 478000, 'dps': 70322},
    {'name': 'Maw5', 'reqlevel': 612500, 'dps': 72720},
    {'name': 'Maw6', 'reqlevel': 752500, 'dps': 75218},
    {'name': 'Yachiyl1', 'reqlevel': 157500, 'dps': 101490},
    {'name': 'Yachiyl2', 'reqlevel': 321000, 'dps': 104388},
    {'name': 'Yachiyl3', 'reqlevel': 490000, 'dps': 107386},
    {'name': 'Yachiyl4', 'reqlevel': 665000, 'dps': 110484},
    {'name': 'Yachiyl5', 'reqlevel': 846000, 'dps': 113682},
    {'name': 'Yachiyl6', 'reqlevel': 1032500, 'dps': 116980},
    
    {'name': 'Rose0', 'reqlevel': 9700, 'dps': 148593.0},
    {'name': 'Sophia0', 'reqlevel': 0, 'dps': 158831.75},
    {'name': 'Blanche0', 'reqlevel': 0, 'dps': 178104.5},
    {'name': 'Dorothy0', 'reqlevel': 0, 'dps': 199738.5},
    {'name': 'Rose1', 'reqlevel': 602000, 'dps': 154391.0},
    {'name': 'Sophia1', 'reqlevel': 677250, 'dps': 164629.75},
    {'name': 'Blanche1', 'reqlevel': 752500, 'dps': 183902.5},
//    {'name': 'Dorothy1', 'reqlevel': 827750, 'dps': 205536.5},
    {'name': 'Rose2', 'reqlevel': 1204000, 'dps': 160189.0},
    {'name': 'Sophia2', 'reqlevel': 1279250, 'dps': 170427.75},
    {'name': 'Blanche2', 'reqlevel': 1354500, 'dps': 189700.5},
//    {'name': 'Dorothy2', 'reqlevel': 1429750, 'dps': 211334.5},
    {'name': 'Rose3', 'reqlevel': 1806000, 'dps': 165987.0},
    {'name': 'Sophia3', 'reqlevel': 1881250, 'dps': 176225.75},
    {'name': 'Blanche3', 'reqlevel': 1956500, 'dps': 195498.5},
    {'name': 'Dorothy3', 'reqlevel': 1956500, 'dps': 217132.5},
    {'name': 'Rose4', 'reqlevel': 2408000, 'dps': 171785.0},
    {'name': 'Sophia4', 'reqlevel': 2483250, 'dps': 182023.75},
    {'name': 'Blanche4', 'reqlevel': 2558500, 'dps': 201296.5},
//    {'name': 'Dorothy4', 'reqlevel': 2633750, 'dps': 222930.5},
    {'name': 'Rose5', 'reqlevel': 3010000, 'dps': 177583.0},
    {'name': 'Sophia5', 'reqlevel': 3085250, 'dps': 187821.75},
    {'name': 'Blanche5', 'reqlevel': 3160500, 'dps': 207094.5},
    {'name': 'Dorothy5', 'reqlevel': 3235750, 'dps': 228728.5}
];

var HEROES = {
    'Tsuchi': {'lv1cost': 490, 'costScale': 1.07, 'damageScale': 4},
    'Skogur': {'lv1cost': 990, 'costScale': 1.07, 'damageScale': 4},
    'Moeru': {'lv1cost': 1990, 'costScale': 1.07, 'damageScale': 4},
    'Zilar': {'lv1cost': 3990, 'costScale': 1.07, 'damageScale': 4},
    'Madzi': {'lv1cost': 7990, 'costScale': 1.07, 'damageScale': 4},
    
    'Xavira': {'lv1cost': 13990, 'costScale': 1.07, 'damageScale': 4.5},
    'Cadu': {'lv1cost': 25490, 'costScale': 1.07, 'damageScale': 4.5},
    'Ceus': {'lv1cost': 25490, 'costScale': 1.07, 'damageScale': 4.5},
    'Maw': {'lv1cost': 45490, 'costScale': 1.07, 'damageScale': 4.5},
    'Yachiyl': {'lv1cost': 71990, 'costScale': 1.07, 'damageScale': 4.5},
    
    'Rose': {'lv1cost': 107990, 'costScale': 1.22, 'damageScale': 1000},
    'Sophia': {'lv1cost': 114490, 'costScale': 1.22, 'damageScale': 1000},
    'Blanche': {'lv1cost': 127490, 'costScale': 1.22, 'damageScale': 1000},
    'Dorothy': {'lv1cost': 142190, 'costScale': 1.22, 'damageScale': 1000}
};

function getHeroAttr(huid, attr) {
    var hu = HERO_UPGRADES[huid]["name"];
    if(hu in HEROES) {
        return HEROES[hu][attr];
    }
    var hero = hu.slice(0, hu.length - 1);
    return HEROES[hero][attr];
}
