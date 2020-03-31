
// drink menu
import {beerMenu,ChuHaiMenu,CooktailMenu,HighBallMenu,RikyuruMenu,
    SakeMenu,ShoChuMenu,SoftMenu,UmeAwamoriMenu,WineMenu,KeepMenu} 
from './drinkMenuData';

// food menu
import {desertMenu,fryMenu,meatMenu,oneMenu,osuMenu,riceMenu,saladMenu,someMenu,sasimiMenu,} 
from './foodMenuData';

export const allMenusData = [
    {
        id: 1,
        title: 'デザート',
        items: [...desertMenu],
    },
    {
        id: 2,
        title: '揚げ物',
        items: [...fryMenu],
    },
    {
        id: 3,
        title: 'お肉料理',
        items: [...meatMenu],
    },
    {
        id: 4,
        title: '一品料理',
        items: [...oneMenu],
    },
    {
        id: 5,
        title: '酢の物',
        items: [...osuMenu],
    },
    {
        id: 6,
        title: '釜飯',
        items: [...riceMenu],
    },
    {
        id: 7,
        title: 'サラダ',
        items: [...saladMenu],
    },
    {
        id: 8,
        title: '刺身',
        items: [...sasimiMenu],
    },
    {
        id: 9,
        title: '焼物＆朴葉＆グラタン＆煮物',
        items: [...someMenu],
    },
    {
        id: 10,
        title: 'ビール',
        items: [...beerMenu],
    },
    {
        id: 12,
        title: '酎ハイ',
        items: [...ChuHaiMenu],
    },
    {
        id: 13,
        title: 'カクテル',
        items: [...CooktailMenu],
    },
    {
        id: 14,
        title: 'ウイスキー',
        items: [...HighBallMenu],
    },
    {
        id: 15,
        title: 'キープボトル',
        items: [...KeepMenu],
    },
    {
        id: 16,
        title: 'リキュール',
        items: [...RikyuruMenu],
    },
    {
        id: 17,
        title: '日本酒',
        items: [...SakeMenu],
    },
    {
        id: 18,
        title: '焼酎',
        items: [...ShoChuMenu],
    },
    {
        id: 19,
        title: 'ソフトドリンク',
        items: [...SoftMenu],
    },
    {
        id: 20,
        title: '梅＆泡盛',
        items: [...UmeAwamoriMenu],
    },
    {
        id: 21,
        title: 'ワイン',
        items: [...WineMenu],
    },
]
