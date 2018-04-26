import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

const data: Recreation[] = [{
  img1: '../assets/images/sea1-1.jpg',
  img2: '../assets/images/sea1-2.jpg',
  address: 'asdfasdf',
  main_decription: 'string',
  additional_decription: 'string',
  phone: 23423,   // дополнительно задание pipe для форматирования
  weather: {
    title: 'title',
    icon: 'icon',
    water: 14,
    temperature: 34
  },
  social_info: {
    title: 'vk',
    img: '../assets/images/sea1-2.jpg',
    followers: 12,
    following: 56
  },
  type: ['hotel', 'tours', 'fishing', 'health']
},
  {
    img1: '../assets/images/bulgaria2-1.jpg',
    img2: '../assets/images/bulgaria2-2.jpg',
    address: 'asdfasd4f',
    main_decription: 'string2',
    additional_decription: 'string2',
    phone: 234243,   // дополнительно задание pipe для форматирования
    weather: {
      title: 'title',
      icon: 'icon',
      water: 12,
      temperature: 32
    },
    social_info: {
      title: 'v4k',
      img: '../assets/images/bulgaria2-2.jpg',
      followers: 142,
      following: 564
    },
    type: ['hotel', 'health', 'tours']
  },
  {
    img1: '../assets/images/igipt3-1.jpg',
    img2: '../assets/images/igipt3-2.jpg',
    address: 'asdfasd4f',
    main_decription: 'string2',
    additional_decription: 'string2',
    phone: 234243,   // дополнительно задание pipe для форматирования
    weather: {
      title: 'title',
      icon: 'icon',
      water: 12,
      temperature: 32
    },
    social_info: {
      title: 'v4k',
      img: '../assets/images/igipt3-2.jpg',
      followers: 142,
      following: 564
    },
    type: ['hotel', 'tours', 'health']
  },
  {
    img1: '../assets/images/igipt4-1.jpg',
    img2: '../assets/images/igipt4-2.jpg',
    address: 'asdfasd4f',
    main_decription: 'string2',
    additional_decription: 'string2',
    phone: 234243,   // дополнительно задание pipe для форматирования
    weather: {
      title: 'title',
      icon: 'icon',
      water: 12,
      temperature: 32
    },
    social_info: {
      title: 'v4k',
      img: '../assets/images/igipt4-2.jpg',
      followers: 142,
      following: 564
    },
    type: ['hotel', 'tours']
  },
  {
    img1: '../assets/images/Gudauri5-1.jpg',
    img2: '../assets/images/Gudauri5-2.jpg',
    address: 'asdfasd4f',
    main_decription: 'string2',
    additional_decription: 'string2',
    phone: 234243,   // дополнительно задание pipe для форматирования
    weather: {
      title: 'title',
      icon: 'icon',
      water: 12,
      temperature: 32
    },
    social_info: {
      title: 'v4k',
      img: '../assets/images/Gudauri5-2.jpg',
      followers: 142,
      following: 564
    },
    type: ['hotel']
  },
  {
    img1: '../assets/images/koltushi_6-1.jpg',
    img2: '../assets/images/koltushi_6-2.jpg',
    address: 'asdfasd4f',
    main_decription: 'string2',
    additional_decription: 'string2',
    phone: 234243,   // дополнительно задание pipe для форматирования
    weather: {
      title: 'title',
      icon: 'icon',
      water: 12,
      temperature: 32
    },
    social_info: {
      title: 'v4k',
      img: '../assets/images/koltushi_6-2.jpg',
      followers: 142,
      following: 564
    },
    type: ['hotel', 'fishing']
  }
];

export const recreation$: Observable<Recreation[]> = Observable.of(data)
  .delay(3000);
