import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

const data: Recreation[] = [{
  img1: '../assets/images/1.jpg',
  img2: '../assets/images/clo.png',
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
    img: '../assets/images/1.jpg',
    followers: 12,
    following: 56
  },
  type: 'hotel'
},
  {
    img1: '../assets/images/r1.jpg',
    img2: '../assets/images/res.jpg',
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
      img: 'sr4c',
      followers: 142,
      following: 564
    },
    type: 'fishing'
  }
];

export const recreation$: Observable<Recreation[]> = Observable.of(data)
  .delay(1000);
