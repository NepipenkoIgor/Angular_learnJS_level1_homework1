type Env = {
  production: boolean
};
type Recreation = {
  img1: string,
  img2: string,
  address: string,
  phone: number,   // дополнительно задание pipe для форматирования
  main_decription: string,
  additional_decription: string,
  weather: {
    title: string,
    icon: string,
    water: number,
    temperature: number
  },
  social_info: {
    title: string,
    img: string,
    followers: number,
    following: number
  },
  type: string
};
